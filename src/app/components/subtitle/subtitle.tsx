import './subtitle.scss';

interface SubtitleProps {
  text: string;
  type?: string;
}

export const Subtitle = ({ text, type = '' }: SubtitleProps) => (
  <div className={`subtitle ${type}`}>{text}</div>
);
