import micIcon from '@/assets/icons/mic.svg';
import noteIcon from '@/assets/icons/note-icon.svg';

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
        <img src={noteIcon} alt="note-icon" className="note-icon" />
        <div className="date">Start date {startDate ?? 'Not set'}</div>
      </div>
      <div className="lang-info">
        <img src={micIcon} className="mic-icon" />
        <div className="language">{splittedLanguage}</div>
        <div className="mode">• {mode}</div>
      </div>
    </div>
  );
};
