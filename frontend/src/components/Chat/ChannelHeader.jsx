import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useGetChannelsDataQuery } from '../../features/channels/channelsApiSlice';

const ChannelHeader = () => {
  const { t } = useTranslation();
  const { isLoading } = useGetChannelsDataQuery();
  const channels = useSelector((state) => state.channels.channels);
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );
  const currentChannel = channels.find(({ id }) => id === currentChannelId);
  const messages = useSelector((state) => state.messages.messages);
  const channelMessages = messages.filter(
    ({ channelId }) => channelId === currentChannelId,
  );

  if (messages) {
    console.log('messages: ', messages);
  }

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small text-start">
      {isLoading ? (
        <div className="col-2 d-flex flex-column gap-1 small">
          <div className="bg-dark bg-opacity-10 py-2 rounded"></div>
          <div className="bg-dark bg-opacity-10 py-2 rounded"></div>
        </div>
      ) : (
        <>
          <p className="m-0">
            <b># {currentChannel?.name}</b>
          </p>
          <span className="text-muted">
            {t('chat.messages.counter.count', {
              count: channelMessages?.length ?? 0,
            })}
          </span>
        </>
      )}
    </div>
  );
};

export default ChannelHeader;
