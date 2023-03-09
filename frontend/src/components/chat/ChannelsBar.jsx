import React from 'react';
import {useGetChannelsDataQuery} from "../../features/channels/channelsApiSlice";
import {useSelector} from 'react-redux';
import Channel from "./Channel";
import BasicChannel from "./BasicChannel";
import Loading from "../Loading";

const ChannelsBar = () => {
  const {data, error, isLoading} = useGetChannelsDataQuery();
  const channels = useSelector((state) => state.channels.channels);

  if (channels) {
    console.log('channels: ', channels);
  }

  if (isLoading) return <Loading />;

  if (error) return <h4>Oh no, there was an error</h4>;

  return (
    <ul className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
      {
        data &&
        data.channels.map(({id, name, removable}) => (
          removable
            ?
            <Channel key={id} id={id} name={name} />
            :
            <BasicChannel key={id} id={id} name={name} />
        ))
      }
    </ul>
  );
};

export default ChannelsBar;
