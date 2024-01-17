import { Title, Paragraph } from '@/shared/components';

import { useWindowSize } from '@/shared/hooks';

import epam from '@/assets/alumni/epam.png';
import toptal from '@/assets/alumni/toptal.png';
import oxagile from '@/assets/alumni/oxagile.png';
import dott from '@/assets/alumni/dott.png';
import andersen from '@/assets/alumni/andersen.png';
import godel from '@/assets/alumni/godel.png';

import satellite from '@/assets/alumni/satellite.png';
import itechart from '@/assets/alumni/itechart.png';
import pandadoc from '@/assets/alumni/pandadoc.png';
import dataart from '@/assets/alumni/dataart.png';
import coherent from '@/assets/alumni/coherent.png';
import elinext from '@/assets/alumni/elinext.png';

import miro from '@/assets/alumni/miro.png';
import qulix from '@/assets/alumni/qulix.png';
import visualfabriq from '@/assets/alumni/visualfabriq.png';
import sberbank from '@/assets/alumni/sberbank.png';
import nanosoft from '@/assets/alumni/nanosoft.png';
import aesoft from '@/assets/alumni/aesoft.png';

import './Alumni.scss';

interface AlumniProps {
  id: string;
  image: string;
}

const alumni: AlumniProps[] = [
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
  { id: 'aesoft', image: aesoft }
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
    <div className="alumni container">
      <div className="alumni content">
        <Title text="Our alumni" hasAsterisk />
        <Paragraph>
          We are immensely proud of RS School alumni who build their successful careers in ambitious
          IT companies
        </Paragraph>
        <div className="alumni">
          {alumniArr.map(({ id, image }) => (
            <div key={id} className="alumni-logo-container">
              <img className="alumni-logo" src={image} alt={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
