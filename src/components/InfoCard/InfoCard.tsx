import { ReactNode } from 'react';
import './InfoCard.scss';

type InfoCardProps = {
  icon: string;
  title: string;
  text: string;
  classNames: string;
};

export const InfoCard = ({ icon, title, text, classNames }: InfoCardProps) => {
  return (
    <article className={`infoCard ${classNames}`}>
      <title className="infoCardTitle">
        {icon && (
          <span className="icon">
            <img src={icon} alt={title} />
          </span>
        )}
        <span>{title}</span>
      </title>
      <div>{text}</div>
    </article>
  );
};
