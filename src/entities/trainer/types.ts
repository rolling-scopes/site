import { ImageType } from '@/shared/ui/image/image';

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  photo: ImageType;
}
