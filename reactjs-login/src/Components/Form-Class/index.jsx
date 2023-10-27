import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputGroup from './inputGroup';


const Form = () => {
  const validation = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      phoneNumber: '',
      age: 18,
    },

    validationSchema: Yup.object({
      // username: Yup.string()
      //   .min(6, 'Mininum 6 characters')
      //   .max(12, 'Maximum 12 characters')
      //   .required('Eh điền đi mày'),

      email: Yup.string().email('Email không hợp lệ').required('Vui lòng điền email'),

      phoneNumber: Yup
        .string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại sai rồi')
        // .test("phoneErr", "Số điện thoại sai rồi", (value) => {
        //   const regex = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
        //   return regex.test(value);
        // })
        .required('Required!'),

      age: Yup.number().min(0).required('điền tuổi!'),

      firstName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required tên!'),

      lastName: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required họ!'),

      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .max(12, 'Minimum 12 characters')
        .required('Required!'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('Required nhập lại MK'),
    }),

    onSubmit: (values) => {
      console.log('««««« values »»»»»', values);
    },
  });

  const onChangeAge = useCallback((e) => {
    validation.setFieldValue('age', +e.target.value);
  }, [validation]);

  const onBlurAge = useCallback(() => {
    validation.setFieldTouched('age', true);
  }, [validation])

  return (
    <div>
      <h1>Form group</h1>
      <div className="d-flex flex-column" >
        <InputGroup
          label="Email"
          name="email"
          validation={validation}
        />


        <InputGroup
          label="Phone"
          name="phoneNumber"
          validation={validation}
          classes="valid"
        />

        <InputGroup
          label="First name"
          name="firstName"
          validation={validation}
        />

        <InputGroup
          label="Last name"
          name="lastName"
          validation={validation}
        />

        <InputGroup
          label="password"
          type="password"
          name="password"
          validation={validation}
        />

        <InputGroup
          label="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          validation={validation}
        />

        <input
          type="text"
          name="age"
          // validation={validation}
          value={validation.values.age}
          onChange={onChangeAge}
          onBlur={onBlurAge}
        />
        <button onClick={validation.handleSubmit}>Click to submit</button>
      </div>
    </div>
  );
};

export default Form;