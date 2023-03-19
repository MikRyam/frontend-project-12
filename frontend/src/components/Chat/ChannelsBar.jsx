import React from 'react';
import { useGetChannelsDataQuery } from '../../features/channels/channelsApiSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import ChannelItem from './ChannelItem';
import Loading from '../Loading';

const ChannelsBar = () => {
  const { t } = useTranslation();
  const { error, isLoading } = useGetChannelsDataQuery();
  const channels = useSelector((state) => state.channels.channels);

  if (channels) {
    console.log('channels: ', channels);
  }

  if (isLoading) {
    toast.info(t('toastify.channels.channelsLoading'));
    return <Loading />;
  }

  if (error) {
    toast.error(t('toastify.channels.channelsNetworkError'));
    return <h4>{t('errors.network')}</h4>;
  }

  return (
    <ul className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {channels &&
        channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
    </ul>
  );
};

export default ChannelsBar;
