import './subtitle.scss';

interface SubtitleProps {
  text: string;
  type?: string;
}

//if component name or page type Pre-school is changed - you should update file training-program.tsx to correspond with rendering logic at const "filteredContent".
export const Subtitle = ({ text, type = '' }: SubtitleProps) => (
  <div className={`subtitle ${type}`}>{text}</div>
);
