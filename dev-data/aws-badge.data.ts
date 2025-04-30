import { COURSE_TITLES } from './course-titles.data';
import cloudBadge from '@/shared/assets/aws-cloud-pract-badge.webp';
import aiBadge from '@/shared/assets/aws-ai-practitioner-badge.webp';

export const awsBadgeMap = {
  [COURSE_TITLES.AWS_AI]: {
    label: 'AWS Сертификация',
    title: 'AWS Certified AI Practitioner',
    description:
      'После завершения курса и успешной сдачи экзамена AWS Certified AI Practitioner, вы получите цифровой бейдж AWS. Этот бейдж подтверждает ваши достижения и демонстрирует потенциальным работодателям или клиентам ваши знания в области искусственного интеллекта и машинного обучения на платформе AWS. К концу курса вы получите прочную основу в области AI/ML сервисов AWS и будете готовы к сдаче сертификационного экзамена AWS Certified AI Practitioner.',
    image: aiBadge,
  },
  [COURSE_TITLES.AWS_FUNDAMENTALS]: {
    label: 'AWS Certification',
    title: 'AWS Cloud Practitioner',
    description:
      'Upon completing the course and passing the AWS Cloud Quest: Cloud Practitioner, you will obtain an AWS digital badge. This badge will recognize your achievement and demonstrate your knowledge of AWS fundamentals to potential employers or clients. By the end of the course, you will have gained a solid foundation in AWS fundamentals and be prepared to pass the AWS Cloud Practitioner certification.',
    image: cloudBadge,
  },
};
