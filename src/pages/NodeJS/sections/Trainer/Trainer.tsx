import { Title } from '../../../../components';
import './Trainer.scss';
import nodejsTrainer from '../../../../assets/NodejsTrainer.png';

export const Trainer = () => {
  return (
    <section className="nodejs-trainer container">
      <div className="nodejs-trainer content wrapper">
        <Title text="Our trainer" hasLines />
        <div className="trainer-card">
          <div className="picture">
            <img src={nodejsTrainer} alt="nodejsTrainer" />
          </div>
          <div className="right">
            <h2 className="card-title">Maksim Shylau</h2>
            <h3 className="card-subtitle">Senior Software Engineer at Epam</h3>
            <p className="card-content">
              Maksim Shylau is a professional with around 6 years of programming experience.
              Initially a hobby, programming evolved into Maxim's current profession as a full-stack
              developer (proficient in JavaScript, TypeScript, React, Node.js, and AWS) at EPAM
              Systems, where he holds the position of Senior Software Engineer. Maksim actively
              contributes to RS School in his leisure time by leading a Node.js course, delivering
              lectures, creating educational tasks, and participating in various events. He is
              committed to continuous learning, constantly exploring new technologies, and extends
              his passion to helping students master web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
