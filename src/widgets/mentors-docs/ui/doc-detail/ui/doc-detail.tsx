import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

type DocDetailProps = {
  courseTitle: string;
  textInfo: string;
  textLink: string;
  textAfterLink: string;
  textEnd: string;
  linkDocs: string;
};

export const DocDetail = (props: DocDetailProps) => {
  return (
    <Paragraph>
      {props.textInfo}
      {' '}
      <LinkCustom
        href={props.linkDocs}
        external
      >
        {props.textLink}
      </LinkCustom>
      {' '}
      {props.textAfterLink}
      {' '}
      {props.courseTitle}
      {' '}
      {props.textEnd}
    </Paragraph>
  );
};
