import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/slice';
import { modalSelector } from '../../store/modal/selector';
import { Svg } from '../../components/Icons/Icons';
import css from './Modal.module.css';

const Modal = ({ children }) => {
  const showModal = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handlerClick = useCallback(
    e => {
      if (e.code === 'Escape') dispatch(closeModal());
      if (e.currentTarget === e.target) dispatch(closeModal());
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener('keydown', handlerClick);

    return () => {
      document.removeEventListener('keydown', handlerClick);
    };
  }, [handlerClick]);

  return (
    <div
      className={
        showModal ? css.backdrop + ' ' + css.backdropActive : css.backdrop
      }
      onClick={handlerClick}
    >
      <div
        className={
          showModal
            ? css.modalContent + ' ' + css.modalContentActive
            : css.modalContent
        }
      >
        <button className={css.button} onClick={() => dispatch(closeModal())}>
          <Svg id={'#icon-close'} width={32} height={32} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
