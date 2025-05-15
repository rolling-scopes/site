import { Trainer, TrainersResponse } from '@/entities/trainer/types';
import { findAssetImageById } from '@/shared/helpers/find-asset-image-by-id';

export function transformTrainers(trainersResponse: TrainersResponse): Trainer[] {
  const trainersItems = trainersResponse.items;

  return trainersItems.map((trainer) => {
    const name = trainer.fields.name ?? '';
    const role = trainer.fields.jobTitle ?? '';
    const bio = trainer.fields.description ?? '';

    const trainerAssets = trainersResponse.includes?.Asset;

    const photoId = trainer.fields.avatar?.sys.id;
    const photo = findAssetImageById(trainerAssets, photoId);

    return {
      name,
      role,
      bio,
      photo,
    };
  });
}
