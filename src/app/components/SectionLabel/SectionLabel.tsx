import './SectionLabel.scss';

type SectionLabelProps = {
  label: string;
};

export const SectionLabel = ({ label }: SectionLabelProps) => (
  <div className="section-label">{label}</div>
);
