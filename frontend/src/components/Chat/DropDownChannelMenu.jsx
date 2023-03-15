import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';

const DropDownChannelMenu = ({ channel }) => {
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );

  const handleRemoveChannel = () => {
    dispatch(
      openModal({
        type: 'confirmDelete',
        item: channel,
      }),
    );
  };
  const handleRenameChannel = () => {
    console.log('channel-modal: ', channel);
    dispatch(
      openModal({
        type: 'renameChannel',
        item: channel,
      }),
    );
  };

  return (
    <>
      <button
        type="button"
        className={`flex-grow-0 dropdown-toggle dropdown-toggle-split rounded-0 btn ${
          currentChannelId === channel.id ? 'btn-secondary' : ''
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
          <button
            type="button"
            className="dropdown-item"
            onClick={handleRemoveChannel}
          >
            Удалить
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item"
            onClick={handleRenameChannel}
          >
            Переименовать
          </button>
        </li>
      </ul>
    </>
  );
};

export default DropDownChannelMenu;
