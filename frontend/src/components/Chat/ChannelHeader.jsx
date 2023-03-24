import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ChannelHeader = () => {
  const { t } = useTranslation();
  const channels = useSelector((state) => state.channels.channels);
  const currentChannelId = useSelector(
    (state) => state.channels.currentChannelId,
  );
  const currentChannel = channels.find(({ id }) => id === currentChannelId);
  const messages = useSelector((state) => state.messages.messages);
  const channelMessages = messages.filter(
    ({ channelId }) => channelId === currentChannelId,
  );

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small text-start">
      <p className="m-0">
        <b>
          #&nbsp;
          {currentChannel?.name}
        </b>
      </p>
      <span className="text-muted">
        {t('chat.messages.counter.count', {
          count: channelMessages?.length ?? 0,
        })}
      </span>
    </div>
  );
};

export default ChannelHeader;
