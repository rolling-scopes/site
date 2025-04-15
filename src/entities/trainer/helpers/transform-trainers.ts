import { Trainer, TrainersResponse } from '@/entities/trainer/types';
import { prepareHttpsUrl } from '@/shared/helpers/prepare-https-url';

export function transformTrainers(trainersResponse: TrainersResponse): Trainer[] {
  const trainersItems = trainersResponse.items;

  return trainersItems.map((trainer) => {
    const name = trainer.fields.name;
    const role = trainer.fields.jobTitle;
    const bio = trainer.fields.description;

    const photoId = trainer.fields.avatar.sys.id;
    const photoData = trainersResponse.includes.Asset.find((asset) => asset.sys.id === photoId)!;
    const photoUrl = prepareHttpsUrl(photoData.fields.file.url);
    const photoWidth = photoData.fields.file.details.image.width;
    const photoHeight = photoData.fields.file.details.image.height;

    return {
      name,
      role,
      bio,
      photo: {
        src: photoUrl,
        width: photoWidth,
        height: photoHeight,
      },
    };
  });
}
