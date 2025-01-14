'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { MentorFeedback } from '../../types';
import { Modal } from '@/shared/ui/modal';

import styles from './mentor-feedback-card.module.scss';

const cx = classNames.bind(styles);

type MentorFeedbackCardProps = MentorFeedback;

const FEEDBACK_MAX_CHARS = 500;

export const MentorFeedbackCard = ({ name, course, review, photo }: MentorFeedbackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isLongReview = review.length > FEEDBACK_MAX_CHARS;

  const cardHeader = (
    <div className={cx('card-info')} data-testid="card-info">
      <div className={cx('card-picture')}>
        <Image src={photo} alt={`${name} ${course}`} data-testid="mentor-photo" />
      </div>
      <header className={cx('card-header')}>
        <h3 className={cx('card-title')} data-testid="card-title">
          {name}
        </h3>
        <h4 className={cx('card-subtitle')} data-testid="card-subtitle">
          <b>Course: </b>
          {course}
        </h4>
      </header>
    </div>
  );

  return (
    <>
      <article className={cx('mentor-feedback-card')} data-testid="mentor-feedback-card">
        {cardHeader}
        <div className={cx('card-content-wrapper')} data-testid="card-content-wrapper">
          <p className={cx('card-content')} data-testid="card-content">
            {review}
          </p>
          {isLongReview && (
            <button
              className={cx('see-more-button')}
              data-testid="see-more-button"
              onClick={handleOpenModal}
            >
              See more
            </button>
          )}
        </div>
      </article>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} customHeader={cardHeader}>
        <p style={{ whiteSpace: 'pre-line' }} data-testid="modal-review-content">
          {review}
        </p>
      </Modal>
    </>
  );
};
