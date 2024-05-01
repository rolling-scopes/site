import micIcon from '@/assets/icons/mic.svg';
import noteIcon from '@/assets/icons/note-icon.svg';
import Image from '@/features/image';

import './date-lang.scss';

interface DateLangProps {
  startDate: string;
  mode: string;
  language: string[];
}

export const DateLang = ({ startDate, language, mode }: DateLangProps) => {
  const splittedLanguage = language.slice().join('/');

  return (
    <div className="date-lang">
      <div className="date-info">
        <Image src={noteIcon} alt="note-icon" className="note-icon" lazy="false" />
        <div className="date">Start date {startDate ?? 'Not set'}</div>
      </div>
      <div className="lang-info">
        <Image src={micIcon} className="mic-icon" alt="microphone icon" lazy="false" />
        <div className="language">{splittedLanguage}</div>
        <div className="mode">• {mode}</div>
      </div>
    </div>
  );
};
