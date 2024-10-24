import { StaticImageData } from 'next/image';

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
}
