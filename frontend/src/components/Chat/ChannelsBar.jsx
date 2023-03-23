import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useGetChannelsDataQuery } from '../../features/channels/channelsApiSlice';
import ChannelItem from './ChannelItem';
import Loading from '../Loading';
// import useAuth from '../../hooks/useAuth';

const ChannelsBar = () => {
  const { t } = useTranslation();
  // const auth = useAuth();
  const { error, isLoading } = useGetChannelsDataQuery();
  const channels = useSelector((state) => state.channels.channels);

  if (isLoading) return <Loading />;

  if (error) {
    toast.error(t('signIn.signInFailed'));
    console.log(error.data);
    // if (error.data.statusCode === 401) {
    //   auth.logOut();
    // }
    return <h4>{t('errors.network')}</h4>;
  }

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
