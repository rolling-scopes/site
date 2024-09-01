import { alumni } from '../constants';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './alumni.scss';

export interface AlumniProps {
  id: string;
  image: string;
}

export const Alumni = () => {
  const size = useWindowSize();

  let alumniArr = [];

  if (size.width <= 1440 && size.width > 810) {
    alumniArr = alumni.slice(0, 12);
  } else if (size.width <= 810) {
    alumniArr = alumni.slice(0, 6);
  } else {
    alumniArr = [...alumni];
  }

  return (
    <article className="alumni container">
      <section className="alumni content">
        <WidgetTitle mods="asterisk">Our alumni</WidgetTitle>
        <Paragraph size="small" className="paragraph">
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companies
        </Paragraph>
        <section className="alumni">
          {alumniArr.map(({ id, image }) => (
            <figure key={id} className="alumni-logo-container">
              <Image className="alumni-logo" src={image} alt={id} />
            </figure>
          ))}
        </section>
      </section>
    </article>
  );
};
