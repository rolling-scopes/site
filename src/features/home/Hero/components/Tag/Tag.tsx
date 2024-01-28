import './Tag.scss';

type TagProps = {
  id?: string;
  label: string;
};

export const Tag = ({ id, label }: TagProps) => (
  <a className="tag" href={`#${id}`}>
    {label}
  </a>
);
