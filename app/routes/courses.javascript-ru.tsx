import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { JavaScriptRu } from '@/pages/javascript-ru';
import { courses } from 'data';

export const handle = { static: true };

export default function JsRuRout() {
  return (
    <BaseLayout>
      <JavaScriptRu courses={courses} />
    </BaseLayout>
  );
}
