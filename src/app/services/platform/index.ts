export function buildUrl(path: string) {
  if (path.includes('courses')) {
    return `${process.env.RS_SCHOOL_HOST}${path}`;
  }
  if (process.env.RS_SCHOOL) {
    return `${process.env.RS_HOST}${path}`;
  }
  return path;
}
