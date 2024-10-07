import type { Course } from '@/entities/course';
import { ImageType } from '@/shared/ui/image/image';
import { type ListData } from '@/shared/ui/list';

export type DataMap = {
  courses: Course[];
  coursesPath: CoursesPath[];
  javascript: JSPath[];
  javascriptRu: JSPath[];
  angular: AngularAwsPath[];
  awsDev: AngularAwsPath[];
};

export interface JSPath {
  id: number;
  title: string;
  description: string;
  imageSrc: ImageType;
  topics?: string[];
  list?: ListData;
  marked?: boolean;
}

export type AngularAwsPath = Pick<JSPath, 'id' | 'title' | 'list'>;

export interface CoursesPath {
  id: number;
  title: string;
  description: string;
  logoIcon: ImageType;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
  list?: ListData;
}
