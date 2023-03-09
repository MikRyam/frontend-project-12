import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChannel } from '../../features/channels/currentChanelSlice';

const BasicChannel = ({id, name}) => {
  const currentChannelId = useSelector((state) => state.currentChannel.currentChannelId);
  const dispatch = useDispatch();

  return (
    <li className="nav-item w-100">
      <button
        id={id}
        type="button"
        className={`w-100 rounded-0 text-start btn ${currentChannelId === id ? "btn-secondary" : ""}`}
        onClick={() => dispatch(toggleChannel(id))}
      >
        <span className="me-1">#</span>
        {name}
      </button>
    </li>
  );
};

export default BasicChannel;
