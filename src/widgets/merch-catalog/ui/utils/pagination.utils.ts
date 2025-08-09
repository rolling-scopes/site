export const getPaginationItems = (currentPage: number, totalPages: number) => {
  const visiblePagesInLeftSection = 3;
  const visiblePagesInRightSection = 2;
  const pages: (number | 'dots')[] = [];

  // Calculate left group (sliding window of 3 pages)
  let leftEnd = Math.min(visiblePagesInLeftSection, totalPages);
  let leftStart = Math.max(1, Math.min(currentPage - 1, totalPages - visiblePagesInRightSection
    - visiblePagesInLeftSection + 1));

  leftEnd = Math.min(leftStart + visiblePagesInLeftSection - 1, totalPages - visiblePagesInRightSection);
  leftStart = Math.max(1, leftEnd - visiblePagesInLeftSection + 1);

  for (let i = leftStart; i <= leftEnd; i++) {
    pages.push(i);
  }

  // Always include dots element to keep a consistent 8-elements layout in the component
  pages.push('dots');

  // Add right group (last 2 pages)
  for (let i = Math.max(totalPages - visiblePagesInRightSection + 1, leftEnd + 1); i <= totalPages; i++) {
    pages.push(i);
  }

  return pages;
};
