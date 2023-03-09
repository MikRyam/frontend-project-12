import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChannel } from '../../features/channels/currentChanelSlice';

const Channel = ({id, name}) => {
  const currentChannelId = useSelector((state) => state.currentChannel.currentChannelId)
  const dispatch = useDispatch()

  return (
    <li className="nav-item w-100">
      <div role="group" className="d-flex dropdown btn-group">
        <button
          id={id}
          type="button"
          className={`w-100 rounded-0 text-start text-truncate btn ${currentChannelId === id ? "btn-secondary" : ""}`}
          onClick={() => dispatch(toggleChannel(id))}
        >
          <span className="me-1">#</span>
          {name}
        </button>
        {/*<button type="button" className="  btn btn-secondary dropdown-toggle dropdown-toggle-split"*/}
        <button
          type="button"
          className={`flex-grow-0 dropdown-toggle dropdown-toggle-split rounded-0 btn ${currentChannelId === id ? "btn-secondary" : ""}`}
          id="dropdownMenuReference"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-reference="parent"
        >
          <span className="visually-hidden">Управление каналом</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end rounded-0" aria-labelledby="dropdownMenuReference">
          <li><a role="button" className="dropdown-item" href="/">Удалить</a></li>
          <li><a role="button" className="dropdown-item" href="/">Переименовать</a></li>
        </ul>
      </div>
    </li>
  );
};

export default Channel;
