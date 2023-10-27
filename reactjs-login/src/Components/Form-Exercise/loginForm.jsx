import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputGroup2 from './inputGroup2';

import './form2.css'

const LoginForm = () => {

    const validation = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .min(2, 'Minimum 2 characters')
                .max(12, 'Maximum 12 characters'),
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Minimum 6 characters')
                .max(12, 'Minimum 12 characters')
                .required('Password is required!'),
        }),
        onSubmit: (values) => {
            console.log('««««« values »»»»»', values);
        },
    });
    const onLogin = (e) => {
        e.preventDefault();
        const data = {
            userName: '',
            password: '',
        };

        const url = '/admin/employees/login';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((json) => {
                // Xử lý kết quả JSON ở đây
                console.log(json);
            })
            .catch((error) => {
                // Nếu có lỗi
                console.error(error);
            });
    };

    const inputs = [
        {
            id: 1,
            name: 'userName',
            type: 'text',
            label: 'User name',
            icon: <i className="fa-solid fa-address-card"></i>,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            label: 'Email',
            icon: <i className="fa-solid fa-envelope-open-text"></i>,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            label: 'Password',
            icon: <i className="fa-solid fa-eye"></i>,
        }
    ]

    // const handleShowPassword = () =>{
    //     {user.isShow
    //         ? setIcon(<i class="fa-solid fa-eye-slash"></i>)
    //         : setIcon(<i className="fa-solid fa-eye"></i>)
    //     }
    // }

    // const onchangeFirstName = (e) =>{
    //     setFirstName(e.target.value)
    // };

    // const onchangeLastName = (e) =>{
    //     setLastName(e.target.value)
    // };

    // const onchangeEmail = (e) =>{
    //     setemail(e.target.value)
    // };

    // const onchangePass = (e) =>{
    //     setPassword(e.target.value)
    // };

    return (
        <div className='form-background'>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="logo-wrap">
                            <i className="fa-solid fa-circle" />
                            <a className="navbar-brand" href="#">
                                Anywhere app
                            </a>
                        </div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Join
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div className="form-container">
                    <div className="title">
                        <h4>WELCOME TO</h4>

                        <h1 className='greeting-title'>The app</h1>
                    </div>

                    <div className="form-wrap">
                        <form onSubmit={onLogin}>
                            {inputs.map(input => (
                                <>
                                    {/* <div className="user-name">
                                    <InputGroup 
                                    key={input[0].id} {...input}
                                    value={inputs[input.name]}
                                    onchange={onchangeInput}
                                    />

                                    <InputGroup 
                                    key={input[1].id} {...input}
                                    value={inputs[input.name]}
                                    onchange={onchangeInput}
                                    />
                                </div> */}

                                    <InputGroup2
                                        key={input.id}
                                        {...input}
                                        value={inputs[input.name]}
                                        icon={input.icon}
                                        formix={onchange}
                                        validation={validation}
                                    />
                                </>
                            ))}
                            {/* <div className="user-name">
                                <InputGroup 
                                    label = 'First Name'
                                    name = 'firstName'
                                    value = {firstName}
                                    onchange = {onchangeFirstName}
                                />

                                <InputGroup 
                                    label = 'Last Name'
                                    name = 'lastName'
                                    value = {lastName}
                                    onchange = {onchangeLastName}
                                />
                            </div>

                            <InputGroup 
                                    label = 'Email'
                                    name = 'email'
                                    value = {email}
                                    onchange = {onchangeEmail}
                            />

                            <InputGroup 
                                    label = 'Password'
                                    name = 'Password'
                                    type = 'password'
                                    value = {password}
                                    onchange = {onchangePass}
                            /> */}
                        </form>
                        {/* <button onClick={validation.handleSubmit} className='loginBtn'>Login</button> */}
                        <button type="submit" className="btn btn-primary loginBtn">
                            Submit
                        </button>
                        <h4>
                            You are new here?
                            <span className='login-title'> <a href="">Create new account</a></span>
                        </h4>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginForm;