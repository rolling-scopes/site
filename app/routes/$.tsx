import { LoaderFunction } from '@remix-run/node';
import { NotFound } from '@/pages/not-found';

export default function NotFoundRout() {
  return <NotFound />;
}

export const loader: LoaderFunction = async () => {
  return {};
};
