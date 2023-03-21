import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropDownChannelMenu from './DropDownChannelMenu';
import { setCurrentChannel } from '../../features/channels/channelsSlice';

const ChannelItem = ({ channel }) => {
  const { id, name, removable } = channel;
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentChannel(id));
  };

  return (
    <li className="nav-item w-100">
      <div role="group" className="d-flex dropdown btn-group">
        <button
          type="button"
          className={`w-100 rounded-0 text-start text-truncate btn ${
            currentChannelId === id ? 'btn-secondary' : ''
          }`}
          onClick={handleClick}
        >
          <span className="me-1">#</span>
          {name}
        </button>
        {removable && <DropDownChannelMenu channel={channel} />}
      </div>
    </li>
  );
};

export default ChannelItem;
