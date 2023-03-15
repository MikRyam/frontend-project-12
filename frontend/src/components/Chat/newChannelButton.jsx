import React from 'react';
import { BsPlusSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';

const NewChannelButton = () => {
  const dispatch = useDispatch();

  // () => dispatch(openModal(id))

  const handleGenNewChannel = () => {
    dispatch(
      openModal({
        type: 'genNewChannel',
        item: null,
      }),
    );
  };

  return (
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4 ">
      Каналы
      <button
        type="button"
        className="p-0 text-primary btn btn-group-vertical"
        onClick={handleGenNewChannel}
      >
        <BsPlusSquare size="1.4rem" />
      </button>
    </div>
  );
};

export default NewChannelButton;
