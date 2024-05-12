import './subtitle.scss';

interface SubtitleProps {
  text: string;
}

//if component name or page type Pre-school is changed - you should update file training-program.tsx to correspond with rendering logic at const "filteredContent".
export const Subtitle = ({ text }: SubtitleProps) => <div className="subtitle">{text}</div>;
