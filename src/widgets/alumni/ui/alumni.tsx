import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './alumni.scss';

export interface AlumniProps {
  id: string;
  image: string;
}

export const Alumni = () => {
  return (
    <article className="alumni container">
      <section className="alumni content">
        <WidgetTitle mods="asterisk">Our alumni</WidgetTitle>
        <Paragraph className="alumni-paragraph">
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companiesWe are immensely proud of RS School alumni who build their successful careers
          in ambitious IT companiesWe are immensely proud of RS School alumni who build their
          successful careers in ambitious IT companies
        </Paragraph>
        <section className="alumni">

        </section>
      </section>
    </article>
  );
};
