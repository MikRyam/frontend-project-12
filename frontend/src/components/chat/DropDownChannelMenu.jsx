import React from 'react';
import { useSelector } from 'react-redux';

const DropDownChannelMenu = ({ id }) => {
  const currentChannelId = useSelector(
    (state) => state.currentChannel.currentChannelId,
  );

  return (
    <>
      <button
        type="button"
        className={`flex-grow-0 dropdown-toggle dropdown-toggle-split rounded-0 btn ${
          currentChannelId === id ? 'btn-secondary' : ''
        }`}
        id="dropdownMenuReference"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-reference="parent"
      >
        <span className="visually-hidden">Управление каналом</span>
      </button>
      <ul
        className="dropdown-menu dropdown-menu-end rounded-0"
        aria-labelledby="dropdownMenuReference"
      >
        <li>
          <a role="button" className="dropdown-item" href="/">
            Удалить
          </a>
        </li>
        <li>
          <a role="button" className="dropdown-item" href="/">
            Переименовать
          </a>
        </li>
      </ul>
    </>
  );
};

export default DropDownChannelMenu;
