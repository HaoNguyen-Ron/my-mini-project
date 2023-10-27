import Loading from 'Components/Loading';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkMissionAction, deleteMissionAction, deleteMissionSuccessAction, updateMissionAction, updateMissionSuccessAction } from 'store/todo/action';

const List = () => {
  const missions = useSelector((state) => state.todoReducer.missions);

  const selected = useSelector((state) => state.todoReducer.selected);

  return missions.length > 0 ? (
    missions.map((m) => <ListItem
      key={m.id}
      content={m.name}
      id={m.id}
      isChecked={selected.includes(m.id)}
    />)) : (
    <ListItem
      classes="text-danger"
      content="Không có nhiệm vụ"
      isHiddenButton
    />
  );
}

export default List;

function ListItem({ id, content, classes, isHiddenButton = false, isChecked }) {
  const dispatch = useDispatch();

  const loadingDelete = useSelector((state) => state.todoReducer.loadingDelete);
  const loadingUpdate = useSelector((state) => state.todoReducer.loadingUpdate);
  const missions = useSelector((state) => state.todoReducer.missions);
  console.log(missions);


  const onDeleteMission = () => {
    dispatch(deleteMissionAction(id));

    setTimeout(() => {
      dispatch(deleteMissionSuccessAction(id));
    }, 1000);
  };

  const [editMission, setEditMission] = useState('');

  const onChangeMission = (e) => {
    setEditMission(e.target.value)
  };

  const onUpdateMission = () => {
    dispatch(updateMissionAction(id));

    setTimeout(() => {
      dispatch(updateMissionSuccessAction({ id, editMission }));
    }, 1000);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && editMission) {
      onUpdateMission();
    }
  };

  const onSelectMission = useCallback(() => {
    dispatch(checkMissionAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    setEditMission(content);
  }, [content]);

  return (
    <div className='d-flex align-items-center justify-content-center my-2'>
      {/* CHECKBOX */}

      {
        missions.length === 0 ? '' :
          <input
            className="form-check-input me-2"
            type="checkbox"
            onChange={onSelectMission}
            checked={isChecked}
          />
      }

      <div className="input-group">
        <input
          type="text"
          className={`form-control ${classes}`}
          placeholder='Mission 1'
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={editMission}
          onChange={onChangeMission}
          onKeyDown={onKeyDown}
        />
        {!isHiddenButton &&
          <div className="input-group-append">

            {/* BUTTON DELETE */}
            <button className="btn btn-outline-danger" type="button" id="button-addon2" disabled={loadingDelete.includes(id)} onClick={onDeleteMission}>
              {
                loadingDelete.includes(id) ? <Loading /> :
                  <i className="fa-solid fa-trash-can"></i>
              }
            </button>

            {/* BUTTON UPDATE */}
            <button className="btn btn-outline-info" type="button" id="button-addon2" disabled={loadingUpdate.includes(id)} onClick={onUpdateMission}>
              {
                loadingUpdate.includes(id) ? <Loading /> :
                  <i className="fas fa-edit"></i>
              }
            </button>
          </div>
        }
      </div>
    </div>

  );
}