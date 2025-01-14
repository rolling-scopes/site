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
  customHeader?: ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  className,
  customHeader,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    dialogRef.current?.close();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && dialog) {
      prevFocusRef.current = document.activeElement as HTMLElement;

      dialog.showModal();
      dialog.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      // body.style.overflow = 'hidden';
    }

    return () => {
      body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return createPortal(
    <dialog
      className={cx('modal', className)}
      ref={dialogRef}
      onClose={handleClose}
      data-testid="modal-overlay"
    >
      <div className={cx('modal-content')} data-testid="modal-content">
        <div className={cx('modal-header')} data-testid="modal-header">
          <div className={cx('modal-close-wrapper')}>
            <button
              className={cx('modal-close-button')}
              onClick={handleClose}
              data-testid="modal-close-button"
            >
              <Image src={closeIcon} alt="Close" />
            </button>
          </div>
          {customHeader
            ? customHeader
            : title && (
              <h2 className={cx('modal-title')} data-testid="modal-title">
                {title}
              </h2>
            )}
        </div>
        <div className={cx('modal-body')} data-testid="modal-body">
          {children}
        </div>
      </div>
    </dialog>,
    document.body,
  );
};
