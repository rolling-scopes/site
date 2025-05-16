import { StaticImageData } from 'next/image';

import { CoursesResponse } from '../../src/entities/course/types';
import { api } from '../../src/shared/api/api';
import { findAssetImageById } from '../../src/shared/helpers/find-asset-image-by-id';

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function getCoursesLogo(): Promise<
  {
    normalizeName: string;
    name: string;
    url: string;
    logo: StaticImageData;
  }[]
> {
  try {
    const response = await api.course.queryCourses();
    const courses = response.result as CoursesResponse;
    const assets = courses.includes?.Asset;

    if (!assets || !courses.items) {
      return [];
    }

    return courses.items
      .map((course) => {
        const iconId = course.fields.icon?.sys?.id;
        const logo = iconId
          ? findAssetImageById(assets, iconId)
          : {
              src: '',
              width: 0,
              height: 0,
            };

        return {
          normalizeName: normalizeName(course.fields.name),
          name: course.fields.name,
          url: course.fields.url,
          logo,
        };
      })
      .filter((course) => course.logo.src !== '');
  } catch (error) {
    console.error('Error fetching courses schedule:', error);
    return [];
  }
}
