import React from 'react';

import './SectionLabel.scss';

type SectionLabelProps = {
  label: string;
};

export const SectionLabel: React.FC<SectionLabelProps> = ({ label }: SectionLabelProps) => (
  <div className="section-label">{label}</div>
);
