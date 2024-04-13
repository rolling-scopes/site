import './paragraph.scss';

type ParagraphProps = {
  children?: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className="paragraph" data-testid="my-paragraph">
    {children}
  </p>
);
