import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChannel } from '../../features/channels/currentChanelSlice';
import DropDownChannelMenu from "./DropDownChannelMenu";

const ChannelItem = ({id, name, removable}) => {
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
        {removable && <DropDownChannelMenu id={id} />}
      </div>
    </li>
  );
};

export default ChannelItem;
