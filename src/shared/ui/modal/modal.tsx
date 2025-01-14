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
  const modalRef = useRef<HTMLDivElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      prevFocusRef.current = document.activeElement as HTMLElement;

      if (modalRef.current) {
        modalRef.current.focus();
      }

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      if (prevFocusRef.current) {
        prevFocusRef.current.focus();
      }

      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [isOpen, handleKeyDown, handleMouseDown]);

  return (
    isOpen
    && createPortal(
      <div className={cx('modal-overlay')} data-testid="modal-overlay">
        <div
          className={cx('modal-content', className)}
          tabIndex={0}
          ref={modalRef}
          data-testid="modal-content"
        >
          <div className={cx('modal-header')} data-testid="modal-header">
            <div className={cx('modal-close-wrapper')}>
              <button
                className={cx('modal-close-button')}
                onClick={onClose}
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
      </div>,
      document.body,
    )
  );
};
