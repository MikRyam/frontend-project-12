import React from 'react';
import { useSelector } from 'react-redux';
import ChannelItem from './ChannelItem';

const ChannelsBar = () => {
  const channels = useSelector((state) => state.channels.channels);
  return (
    <ul className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {channels
        && channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
    </ul>
  );
};

export default ChannelsBar;
