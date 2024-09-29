import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { JavaScriptEn } from '@/pages/javascript-en';
import { courses } from 'data';

export const handle = { static: true };

export default function JsEnRout() {
  return (
    <BaseLayout>
      <JavaScriptEn courses={courses} />
    </BaseLayout>
  );
}
