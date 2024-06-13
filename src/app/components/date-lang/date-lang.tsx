/* eslint-disable @stylistic/jsx-one-expression-per-line */
import micIcon from '@/assets/icons/mic.svg';
import noteIcon from '@/assets/icons/note-icon.svg';
import Image from '@/features/image';

import styles from './date-lang.module.scss';

interface DateLangProps {
  startDate: string;
  mode: string;
  language: string[];
  type?: string;
}

export const DateLang = ({ startDate, language, mode, type = '' }: DateLangProps) => {
  const splittedLanguage = language.slice().join('/');

  return (
    <div className={`${styles.info} ${styles[type]}`}>
      <p className={styles.date}>
        <Image className={styles.note} src={noteIcon} alt="note-icon" lazy="false" />
        <span>Start date {startDate ?? 'Not set'}</span>
      </p>
      <p className={styles.lang}>
        <Image className={styles.microphone} src={micIcon} alt="microphone icon" lazy="false" />
        <span className={styles.language}>{splittedLanguage}</span>
        <span className={styles.mode}> • {mode}</span>
      </p>
    </div>
  );
};
