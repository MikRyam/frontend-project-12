import React from 'react';
import {useSelector} from "react-redux";
import {useGetChannelsDataQuery} from "../../features/channels/channelsApiSlice";

const ChannelHeader = () => {
  const {isLoading} = useGetChannelsDataQuery();
  const channels = useSelector((state) => state.channels.channels);
  const currentChannelId = useSelector((state) => state.currentChannel.currentChannelId);
  const currentChannel = channels.find(({id}) => id === currentChannelId);

  const messages = useSelector((state) => state.messages.messages);

  if (messages) {
    console.log('messages: ', messages);
  }

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small text-start">
      {
        isLoading
          ?
          <div className="col-2 d-flex flex-column gap-1 small">
            <div className="bg-dark bg-opacity-10 py-2 rounded"></div>
            <div className="bg-dark bg-opacity-10 py-2 rounded"></div>
          </div>
          :
          <>
            <p className="m-0">
              <b># {currentChannel?.name}</b>
            </p>
            <span className="text-muted">
              {`${messages?.length ?? "Нет"} сообщений`}
            </span>
          </>
      }
    </div>
  );
};

export default ChannelHeader;
