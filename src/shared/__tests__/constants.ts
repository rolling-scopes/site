import type { Trainer } from '@/entities/trainer';
import nodejsImg1 from '@/shared/assets/mentors/m-shylau.webp';

export const MOCKED_IMAGE_PATH = 'mocked-image-path.webp';
export const MOCKED_TRAINER = {
  name: 'Max Power',
  role: 'Executive Pastry Chef at The Cloud Cafe',
  bio: 'Max Power is a pastry master with a passion for crafting sweet treats. With over 7 years of experience whipping up delicious pastries and desserts, Max has honed their skills as the Head Pastry Chef on the prestigious Cloud Cafe. When not busy creating new recipes, Max enjoys leading baking classes and participating in friendly cooking competitions.',
  photo: nodejsImg1,
};

export const MOCKED_ONE_TRAINER: Trainer[] = [MOCKED_TRAINER];
export const MOCKED_MULTIPLE_TRAINERS: Trainer[] = Array.from({ length: 2 }, () => MOCKED_TRAINER);
export const MOCKED_SEVERAL_TRAINERS: Trainer[] = Array.from({ length: 8 }, () => MOCKED_TRAINER);
