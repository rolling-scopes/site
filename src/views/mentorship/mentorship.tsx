import { Section } from '@/shared/types/types';
import { SectionResolver } from '@/widgets/section-resolver';

type MentorshipProps = {
  sections: Section[];
};

export const Mentorship = async ({ sections }: MentorshipProps) => {
  return (
    <>
      {sections.map((section) => (
        <SectionResolver key={section.id} section={section} />
      ))}

      {/* <MediaTextBlock */}
      {/*  title="After Completing the Registration" */}
      {/*  titleMod="asterisk" */}
      {/*  contentLeft={( */}
      {/*    <MediaGrid fitContent numberOfColumns={1} rowGapPx={24}> */}
      {/*      <MediaGrid fitContent numberOfColumns={1} rowGapPx={12}> */}
      {/*        <Subtitle size="small" weight="bold"> */}
      {/*          1. An email with instructions */}
      {/*        </Subtitle> */}
      {/*        <Paragraph>will be sent to you before mentoring begins</Paragraph> */}
      {/*      </MediaGrid> */}
      {/*      <MediaGrid fitContent numberOfColumns={1} rowGapPx={16}> */}
      {/*        <Subtitle size="small" weight="bold"> */}
      {/*          2. Confirm your participation */}
      {/*        </Subtitle> */}
      {/*        <Paragraph>in the mentoring program by clicking on the link in the email</Paragraph> */}
      {/*      </MediaGrid> */}
      {/*      <MediaGrid fitContent numberOfColumns={1} rowGapPx={16}> */}
      {/*        <Subtitle size="small" weight="bold"> */}
      {/*          3. Follow the links */}
      {/*        </Subtitle> */}
      {/*        <Paragraph> */}
      {/*          from the email to join the selected course community on Telegram and Discord */}
      {/*        </Paragraph> */}
      {/*      </MediaGrid> */}
      {/*    </MediaGrid> */}
      {/*  )} */}
      {/* /> */}
    </>
  );

  // const courses = await courseStore.loadCourses();

  // return (
  //   <>
  //     <MentorshipHero
  //       heading="Mentorship"
  //       topHeading={['By teaching others, you learn yourself']}
  //       image={MentorshipHeroBanner}
  //       subHeading={
  //         <Link variant="primary" label="Registration" disabledLabel="Registration" link="qwe" />
  //       }
  //     />
  //
  //     <MediaTextBlock
  //       title="Mentorship Details"
  //       titleMod="asterisk"
  //       backgroundColor="linear-gradient(90deg,hsl(198,100%,80%),hsl(198,95%,62%))"
  //       contentLeft={(
  //         <InfoGrid borderColor="black">
  //           {mentorshipCoursesDefault.details.map((item) => (
  //             <InfoCell
  //               key={item.id}
  //               title={item.info}
  //               description={item.title}
  //               size="large"
  //               gap="withGap"
  //             />
  //           ))}
  //         </InfoGrid>
  //       )}
  //     />
  //
  //     <MediaTextBlock
  //       title="Mentor Activities"
  //       titleMod="asterisk"
  //       contentLeft={(
  //         <MediaGrid rowGapPx={32} colGapPx={32}>
  //           {mentorshipCoursesDefault.activities.map((item) => (
  //             <ActivityCard
  //               key={item.id}
  //               title={item.title}
  //               description={item.description}
  //               icon={item.icon}
  //             />
  //           ))}
  //         </MediaGrid>
  //       )}
  //     />
  //
  //     <MediaTextBlock
  //       title="Courses That Need Mentors"
  //       contentLeft={<MentorshipCourses courses={courses} />}
  //     />
  //
  //     <MediaTextBlock
  //       title="Mentors’ Feedback"
  //       titleMod="asterisk"
  //       contentLeft={(
  //         <Slider
  //           sliderProps={{
  //             spaceBetween: 32,
  //             breakpoints: {
  //               320: {
  //                 slidesPerView: 1,
  //                 slidesPerGroup: 1,
  //               },
  //               1024: {
  //                 slidesPerView: 2,
  //                 slidesPerGroup: 2,
  //               },
  //             },
  //           }}
  //           slides={mentorsFeedbackData.map(({ name, course, review, photo }, index) => (
  //             <MentorFeedbackCard
  //               key={index}
  //               name={name}
  //               course={course}
  //               review={review}
  //               photo={photo}
  //             />
  //           ))}
  //         />
  //       )}
  //     />
  //
  //     <MediaTextBlock
  //       title="Courses That Need Mentors"
  //       contentLeft={<MentorTalksVideoPlaylistWithPlayer />}
  //     />
  //
  //     <MediaTextBlock
  //       backgroundColor="linear-gradient(90deg,hsl(198,100%,80%),hsl(198,95%,62%))"
  //       contentRight={<Image src={MentorRegister} alt="" />}
  //       contentLeft={(
  //         <>
  //           <WidgetTitle>Register as a Mentor</WidgetTitle>
  //           <Paragraph>
  //             You need a Github account to complete registration and access the RS-App application
  //           </Paragraph>
  //           <Paragraph>
  //             If you still have questions about the mentoring process, please go through the Mentor
  //             documentation external link icon for the Course.
  //           </Paragraph>
  //           <Link
  //             variant="primary"
  //             label="Registration"
  //             disabledLabel="Registration"
  //             link="qweqwe"
  //           />
  //         </>
  //       )}
  //     />
  //
  //     <MediaTextBlock
  //       title="After Completing the Registration"
  //       titleMod="asterisk"
  //       contentLeft={(
  //         <>
  //           <WidgetTitle size="small">1. An email with instructions</WidgetTitle>
  //           <Paragraph>will be sent to you before mentoring begins</Paragraph>
  //           <WidgetTitle size="small">2. Confirm your participation</WidgetTitle>
  //           <Paragraph>in the mentoring program by clicking on the link in the email</Paragraph>
  //           <WidgetTitle size="small">3. Follow the links</WidgetTitle>
  //           <Paragraph>
  //             from the email to join the selected course community on Telegram and Discord
  //           </Paragraph>
  //         </>
  //       )}
  //     />
  //
  //     <MediaTextBlock
  //       width={768}
  //       title="Any other questions?"
  //       titleMod="asterisk"
  //       contentLeft={(
  //         <>
  //           <Paragraph>
  //             If you still have questions about the mentoring process, please go through the Mentor
  //             documentation external link icon for the JS / Front-end EN Course.
  //           </Paragraph>
  //
  //           <Paragraph>You can also ask questions</Paragraph>
  //
  //           <SocialMediaItem inline title="Telegram EN" icon={<TelegramIcon />} href="/" />
  //           <SocialMediaItem inline title="Telegram RU" icon={<TelegramIcon />} href="/" />
  //         </>
  //       )}
  //     />
  //   </>
  // );
};
