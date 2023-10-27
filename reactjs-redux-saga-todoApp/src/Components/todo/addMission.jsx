import Loading from "Components/Loading";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMissionAction, addMissionSuccessAction } from "store/todo/action";

const Add = () => {
    const [mission, setMission] = useState('');
    const dispatch = useDispatch();
    const isLoadingAdd = useSelector((state) => state.todoReducer.isLoadingAdd);

    const onChange = (e) => {
        setMission(e.target.value)
    };

    const onAddMission = () => {
        dispatch(addMissionAction());
        setTimeout(() => {
            dispatch(addMissionSuccessAction(mission));
            setMission('')
        }, 500)

    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13 && mission && !isLoadingAdd) {
            onAddMission()
        }
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Add your routine here"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={mission}
                onChange={onChange}
                onKeyDown={onKeyDown}
                disabled={isLoadingAdd}
            />
            <button 
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                type="button"
                onClick={onAddMission}
                disabled={!mission || isLoadingAdd}>
                {
                    isLoadingAdd ? <Loading /> : <i className="fa-solid fa-plus" />
                }
            </button>
        </div>
    );
}

export default Add;
