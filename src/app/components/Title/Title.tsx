import './title.scss';

export enum TitleType {
  Regular = 'regular',
  Big = 'big',
  Bigger = 'bigger',
  ExtraBig = 'extra-big'
}
interface TitleProps {
  text?: string;
  type?: TitleType;
  hasAsterisk?: boolean;
  hasLines?: boolean;
  children?: any;
}

export const Title = ({ text, type, hasAsterisk, hasLines, children }: TitleProps) => {
  const titleType = type ?? TitleType.Regular;

  return (
    <div className={`title ${titleType}`}>
      {hasLines && <span className="before">‖</span>}
      {hasAsterisk && <span className="before">*</span>}
      <div>
        {text}
        {children}
      </div>
    </div>
  );
};
