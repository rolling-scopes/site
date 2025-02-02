import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { createPortal } from 'react-dom';

import closeIcon from '@/shared/assets/svg/close.svg';

import styles from './modal.module.scss';

const cx = classNames.bind(styles);

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
};

export const Modal = ({ isOpen, onClose, children, title, className }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleClose = useCallback(() => {
    dialogRef.current?.classList.add(cx('fade-out'));
    dialogRef.current?.addEventListener('animationend', () => {
      dialogRef.current?.classList.remove(cx('fade-out'));
      dialogRef.current?.close();
      onClose();
    }, { once: true });
  }, [onClose]);

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (event.target !== dialogRef.current) {
        return;
      }

      const rect = (event.target as HTMLElement).getBoundingClientRect();

      const clickedInDialog =
        rect.top <= event.clientY
        && event.clientY <= rect.top + rect.height
        && rect.left <= event.clientX
        && event.clientX <= rect.left + rect.width;

      if (!clickedInDialog) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && dialog) {
      dialog.showModal();
      dialog.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <dialog
      className={cx('modal', className)}
      ref={dialogRef}
      onClose={handleClose}
      data-testid="modal"
    >
      <div className={cx('modal-header', { 'no-title': !title })} data-testid="modal-header">
        {title && (
          <h2 className={cx('modal-title')} data-testid="modal-title">
            {title}
          </h2>
        )}
        <button
          className={cx('modal-close-button')}
          onClick={handleClose}
          data-testid="modal-close-button"
        >
          <Image src={closeIcon} alt="Close" />
        </button>
      </div>
      <div className={cx('modal-body')} data-testid="modal-body">
        {children}
      </div>
    </dialog>,
    document.body,
  );
};
