import { Badge } from '../../../../dev-data/badge.data';
import imageAws from '@/shared/assets/aws-cloud-pract-badge.webp';

import styles from './aws-badge.module.scss';

export const AwsBadge = () => {
  return (
    <Badge
      title="AWS DIGITAL BADGE"
      paragraphs={[
        `Upon completing the course and passing the AWS Cloud Quest: Cloud Practitioner, you will
        obtain an AWS digital badge. This badge will recognize your achievement and demonstrate your
        knowledge of AWS fundamentals to potential employers or clients. By the end of the course,
        you will have gained a solid foundation in AWS fundamentals and be prepared to pass the AWS
        Cloud Practitioner certification.`,
      ]}
      image={imageAws}
      alt="AWS Digital Badge"
      className="aws-badge"
      styles={styles}
    />
  );
};
