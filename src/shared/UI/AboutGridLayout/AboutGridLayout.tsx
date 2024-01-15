import './AboutGridLayout.scss';

interface AboutGridLayoutProps {
  items: { id: number; title: string; info: string; icon: string }[];
  hasTitle?: boolean;
}
//removed hasTitle props temp
export const AboutGridLayout = ({ items }: AboutGridLayoutProps) => {
  return (
    <div className="about-grid">
      {items.map(({ id, title, info, icon }) => (
        <div key={id} className="item">
          <div className="item-title">
            <img src={icon} alt={title} />
            <h2>{title}</h2>
          </div>
          {info}
        </div>
      ))}
    </div>
  );
};
