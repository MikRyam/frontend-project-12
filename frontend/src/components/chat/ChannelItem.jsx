import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropDownChannelMenu from './DropDownChannelMenu';
import { setCurrentChannel } from '../../features/channels/channelsSlice';

const ChannelItem = ({ id, name, removable }) => {
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );
  const dispatch = useDispatch();

  return (
    <li className="nav-item w-100">
      <div role="group" className="d-flex dropdown btn-group">
        <button
          id={id}
          type="button"
          className={`w-100 rounded-0 text-start text-truncate btn ${
            currentChannelId === id ? 'btn-secondary' : ''
          }`}
          onClick={() => dispatch(setCurrentChannel(id))}
        >
          <span className="me-1">#</span>
          {name}
        </button>
        {removable && <DropDownChannelMenu id={id} />}
      </div>
    </li>
  );
};

export default ChannelItem;
