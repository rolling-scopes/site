import { Tag, TagDivider } from './components';
import './hero.scss';

interface TagProps {
  id: string;
  label: string;
}

const tags: TagProps[] = [
  { id: 'school', label: 'education' },
  { id: 'events', label: 'events & meetups' },
  { id: 'community', label: 'community building' }
];

export const Hero = () => {
  return (
    <main id="main" className="main container">
      <div className="main content">
        <div className="title-container">
          <h1 className="title-main">The Rolling Scopes</h1>

          <div className="subtitle-container">
            <h2 className="subtitle">an international community of developers</h2>
            <h2 className="subtitle">since 2013</h2>
          </div>
        </div>
        <h2 className="description-title">Connecting people, growing together, having fun</h2>
        <div className="tags-container">
          {tags.map(({ id, label }, index) => (
            <div className="tag-container" key={id}>
              <Tag id={id} label={label} />
              {index !== tags?.length - 1 && <TagDivider />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
