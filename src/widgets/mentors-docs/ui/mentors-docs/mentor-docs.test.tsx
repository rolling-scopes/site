import { render, screen } from '@testing-library/react';

import { MentorsDocs, MentorsDocsProps } from './mentors-docs';
import { SocialMediaProps } from '@/shared/ui/social-media-item';
import { CourseTitle, mentorDocsData } from 'data';

describe('MentorsDocs', () => {
  const mockOnboardLinks: SocialMediaProps[] = [
    {
      href: 'https://twitter.com/example',
      title: 'Twitter',
      icon: 'twitter',
    },
    {
      href: 'https://facebook.com/example',
      title: 'Facebook',
      icon: 'facebook',
    },
    {
      href: 'https://linkedin.com/example',
      title: 'LinkedIn',
      icon: 'linkedin',
    },
  ];

  const defaultProps: MentorsDocsProps = {
    mentorDocsLink: 'https://example.com/mentor-docs',
    courseTitle: 'Advanced React' as CourseTitle,
    lang: 'en',
    onboardLinks: mockOnboardLinks,
  };

  it('renders correct content for component', () => {
    render(<MentorsDocs {...defaultProps} />);
    const title = screen.getByTestId('widget-title');
    const links = screen.getAllByRole('link');

    expect(title).toBeVisible();
    expect(title.textContent).toBe(mentorDocsData[defaultProps.lang].header);
    expect(links).toHaveLength(1 + mockOnboardLinks.length);
  });

  it('does not render mentor documentation section when courseTitle is not provided', () => {
    const propsWithoutCourse = {
      ...defaultProps,
      courseTitle: undefined,
    };

    render(<MentorsDocs {...propsWithoutCourse} />);

    const docDetail = screen.queryByTestId('paragraph');

    expect(docDetail).not.toBeInTheDocument();
    expect(screen.queryByText(mentorDocsData.en.mentor.textLink)).not.toBeInTheDocument();
  });

  it('does not render onboard links section when onboardLinks is not provided', () => {
    const propsWithoutLinks = {
      ...defaultProps,
      onboardLinks: undefined,
    };

    render(<MentorsDocs {...propsWithoutLinks} />);

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('renders with Russian language', () => {
    render(<MentorsDocs {...defaultProps} lang="ru" />);

    expect(screen.getByRole('heading', { name: mentorDocsData.ru.header })).toBeInTheDocument();
    expect(screen.getByText(mentorDocsData.ru.mentor.textLink)).toBeInTheDocument();
  });
});
