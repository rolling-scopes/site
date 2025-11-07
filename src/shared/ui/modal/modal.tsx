import { KeyboardEvent, ReactNode, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { createPortal } from 'react-dom';

import { Subtitle } from '../subtitle';
import closeIcon from '@/shared/assets/svg/close.svg';
import { KEY_CODES } from '@/shared/constants';

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
  const scrollbarWidth = useRef(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const updateScrollbarWidth = (scrollbarWidth: number = 0) => {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  };

  const handleClose = useCallback(() => {
    dialogRef.current?.classList.add(cx('fade-out'));
    dialogRef.current?.addEventListener(
      'animationend',
      () => {
        dialogRef.current?.classList.remove(cx('fade-out'));
        dialogRef.current?.close();
        onClose();
        updateScrollbarWidth();
      },
      { once: true },
    );
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

  const handleCloseOnEscPress = (e: KeyboardEvent<HTMLDialogElement>) => {
    e.preventDefault();

    if (e.key === KEY_CODES.ESCAPE) {
      handleClose();
    }
  };

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
      updateScrollbarWidth(scrollbarWidth.current);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollbarWidth.current = window.innerWidth - document.documentElement.clientWidth;
  }, []);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <dialog
      className={cx('modal', className)}
      ref={dialogRef}
      onClose={handleClose}
      onKeyDown={handleCloseOnEscPress}
      data-testid="modal"
    >
      <div className={cx('modal-header', { 'no-title': !title })} data-testid="modal-header">
        {title && (
          <Subtitle size="small" weight="bold" data-testid="modal-title">
            {title}
          </Subtitle>
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
