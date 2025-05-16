import { ComponentType } from 'react';

import {
  transformTrainingProgramSection,
} from '@/entities/course/helpers/transform-training-program-section';
import {
  CoursePageSectionProps,
  CoursePageTransformFunction,
  SectionId,
} from '@/entities/course/types';
import { TrainingProgramSection } from '@/widgets/training-program/ui/training-program-section';
import { COURSE_TITLES, CourseTitle } from 'data';

export const COURSE_DATE_FORMAT = 'MMM DD, YYYY';
export const MENTORING_DATE_FORMAT = 'MMM, YYYY';

export const API_COURSES_IDS_DICTIONARY: Record<CourseTitle, string> = {
  [COURSE_TITLES.NODE]: '75SiyJCiH4OrIQUKDg0Pci',
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: 'L504RMpq3gsKyY0C9EQYI',
  [COURSE_TITLES.AWS_DEVOPS]: '2Za7cDAZ7Bg4o2fRTTsl91',
  [COURSE_TITLES.AWS_FUNDAMENTALS]: '3p8uX8zmCKIVP2FeRzxm5w',
  [COURSE_TITLES.ANGULAR]: '5s34NDFPlgZsDJ259A4dme',
  [COURSE_TITLES.JS_PRESCHOOL_RU]: 'nP9AhZZOnUclChkM0wIsM',
  [COURSE_TITLES.JS_RU]: '45GfCeWyEljTfHzUgnQPod',
  [COURSE_TITLES.REACT]: '22u5y3ir02LMShH6AyNOsE',
  [COURSE_TITLES.JS_EN]: 'EiDyAqKQQpcauf4z8htAb',
};

export const COURSE_PAGE_SECTIONS_TRANSFORM_MAP = new Map<SectionId, CoursePageTransformFunction>([
  ['trainingProgram', transformTrainingProgramSection],
]);

export const COURSE_PAGE_CONTENT_MAP = new Map<SectionId, ComponentType<CoursePageSectionProps>>([
  ['trainingProgram', TrainingProgramSection],
]);
