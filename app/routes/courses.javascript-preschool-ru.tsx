import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { JavaScriptPreSchoolRu } from '@/pages/javascript-preschool-ru';

export const handle = { static: true };

export default function JsPreRout() {
  return (
    <BaseLayout>
      <JavaScriptPreSchoolRu />
    </BaseLayout>
  );
}
