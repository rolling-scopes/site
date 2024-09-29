import { CourseModule } from '../../types';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';

type CourseModuleElementProps = {
  courseModule: CourseModule;
};

export function CourseModuleElement({ courseModule }: CourseModuleElementProps) {
  const { title, description } = courseModule;

  return (
    <article>
      <Subtitle fontSize="extra-small">{title}</Subtitle>
      <List data={description} />
    </article>
  );
}
