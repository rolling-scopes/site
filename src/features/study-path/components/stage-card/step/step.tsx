import './step.scss';

interface StepProps {
  id: string | number;
}

export const Step = ({ id }: StepProps) => {
  return (
    <div className="stage-step">
      <span className="stage-number">{id}</span>
      <div className="stage-line" />
    </div>
  );
};
