import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsPlusSquare } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/modal/modalSlice';

const NewChannelButton = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      {t('chat.header')}
      <button
        type="button"
        className="p-0 text-primary btn btn-group-vertical"
        onClick={handleGenNewChannel}
      >
        <BsPlusSquare size="1.4rem" />
        <span className="visually-hidden">+</span>
      </button>
    </div>
  );
};

export default NewChannelButton;
