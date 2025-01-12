'use client';

import { useState } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { MentorFeedback } from '../../types';
import { Modal } from '@/shared/ui/modal';

import styles from './mentor-feedback-card.module.scss';

const cx = classNames.bind(styles);

type MentorFeedbackCardProps = MentorFeedback;

export const MentorFeedbackCard = ({ name, course, review, photo }: MentorFeedbackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isLongReview = review.length > 500;

  const renderCardHeader = () => {
    return (
      <div className={cx('card-info')}>
        <div className={cx('card-picture')}>
          <Image src={photo} alt={`${name} ${course}`} />
        </div>
        <header className={cx('card-header')}>
          <h3 className={cx('card-title')}>{name}</h3>
          <h4 className={cx('card-subtitle')}>
            <b>Course: </b>
            {course}
          </h4>
        </header>
      </div>
    );
  };

  return (
    <article className={cx('mentor-feedback-card')} data-testid="mentor-feedback-card">
      {renderCardHeader()}
      <div className={cx('card-content-wrapper')}>
        <p className={cx('card-content')}>{review}</p>
        {isLongReview && (
          <button className={cx('see-more-button')} onClick={handleOpenModal}>
            See more
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} customHeader={renderCardHeader()}>
        <p style={{ whiteSpace: 'pre-line' }}>{review}</p>
      </Modal>
    </article>
  );
};
