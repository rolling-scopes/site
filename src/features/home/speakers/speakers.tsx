import { Title, Subtitle, TitleType } from '@/app/components';

import image from '@/assets/speakers-wanted.webp';

import './speakers.scss';

export const Speakers = () => (
  <article className="speakers container">
    <div className="speakers content">
      <div className="info">
        <Title text="Speakers wanted" type={TitleType.Big} hasAsterisk={false} hasLines={true} />
        <Subtitle text="If you want to give a talk or conduct a workshop, present your open source project or share a success story, the Rolling Scopes welcomes all kinds of talk proposals." />
        <Subtitle text="So don't hesitate to drop a short synopsis to RS Head " />

        <div className="name" data-testid="contact-name">
          Dzmitry Varabei
        </div>
        <div className="email">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 4.56836H20C21.1 4.56836 22 5.46836 22 6.56836V18.5684C22 19.6684 21.1 20.5684 20 20.5684H4C2.9 20.5684 2 19.6684 2 18.5684V6.56836C2 5.46836 2.9 4.56836 4 4.56836Z"
              stroke="#D44333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6.56836L12 13.5684L2 6.56836"
              stroke="#D44333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>rolling.scopes@gmail.com</span>
        </div>
      </div>
      <img className="right picture" src={image} alt="speakers-wanted" />
    </div>
  </article>
);
