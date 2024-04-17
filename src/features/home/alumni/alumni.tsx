import { Paragraph, Title } from '@/app/components';

import { useWindowSize } from '@/app/hooks';

import aesoft from '@/assets/alumni/aesoft.webp';
import andersen from '@/assets/alumni/andersen.webp';
import coherent from '@/assets/alumni/coherent.webp';
import dataart from '@/assets/alumni/dataart.webp';
import dott from '@/assets/alumni/dott.webp';
import elinext from '@/assets/alumni/elinext.webp';
import epam from '@/assets/alumni/epam.webp';
import godel from '@/assets/alumni/godel.webp';

import itechart from '@/assets/alumni/itechart.webp';

import miro from '@/assets/alumni/miro.webp';
import nanosoft from '@/assets/alumni/nanosoft.webp';
import oxagile from '@/assets/alumni/oxagile.webp';
import pandadoc from '@/assets/alumni/pandadoc.webp';
import qulix from '@/assets/alumni/qulix.webp';
import satellite from '@/assets/alumni/satellite.webp';
import sberbank from '@/assets/alumni/sberbank.webp';
import toptal from '@/assets/alumni/toptal.webp';
import visualfabriq from '@/assets/alumni/visualfabriq.webp';

import './alumni.scss';

export interface AlumniProps {
  id: string;
  image: string;
}

export const alumni: AlumniProps[] = [
  { id: 'epam', image: epam },
  { id: 'toptal', image: toptal },
  { id: 'oxagile', image: oxagile },
  { id: 'dott', image: dott },
  { id: 'andersen', image: andersen },
  { id: 'godel', image: godel },
  { id: 'satellite', image: satellite },
  { id: 'itechart', image: itechart },
  { id: 'pandadoc', image: pandadoc },
  { id: 'dataart', image: dataart },
  { id: 'coherent', image: coherent },
  { id: 'elinext', image: elinext },
  { id: 'miro', image: miro },
  { id: 'qulix', image: qulix },
  { id: 'visualfabriq', image: visualfabriq },
  { id: 'sberbank', image: sberbank },
  { id: 'nanosoft', image: nanosoft },
  { id: 'aesoft', image: aesoft },
];

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
        <Title text="Our alumni" hasAsterisk />
        <Paragraph>
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companies
        </Paragraph>
        <section className="alumni">
          {alumniArr.map(({ id, image }) => (
            <figure key={id} className="alumni-logo-container">
              <img className="alumni-logo" src={image} alt={id} />
            </figure>
          ))}
        </section>
      </section>
    </article>
  );
};
