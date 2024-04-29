# Semantic Markup and Accessibility

When we talk about good websites, we often overlook where they start from: the code. To make things digestible, let's kick things off with a real-life example:

```jsx
<div className="courses container">
  <div className="courses content">
    <div className="title">Upcoming courses</div>
    <div className="column-2">
      <div className="courses">
        {courses.map(({ title, language, startDate, href, icon }) => (
          <div key={title} className="course-card">
            <div className="icon-container">{icon}</div>
            <div className="course-info">
              <div className="name">{title}</div>
              <div className="date">{`${startDate} • ${language}`}</div>
            </div>
            <div className="details-container">
              <a className="details" href={href} target="_blank" rel="noreferrer">
                {buttonText && <span className="label">{buttonText}</span>}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
        <Button label="Go to RS School " href="https://rs.school/" />
      </div>
      <div className="image">
        <RsBanner />
      </div>
    </div>
  </div>
</div>
```

This markup could do with some refining. For instance, this block of code appears to contain at least two headings. Why not highlight them with `<div className="title">Upcoming courses</div>`? If there's a header and there's content, could we make use of `article`?

Let's make some corrections:

- The `<div>` containing the courses was changed to `<section>`. This is a relevant section for users and search engines.
- The `<div>` containing the course details was swapped out for an `<article>`. Each course is an individual piece of content.
- The `<div>` that served as the title has been changed to a `<header>`.
- The `<div>` with the list of courses is now a `<main>` element as it's the unique content on the page.
- Each `<div>` housing a course card is now an `<article>`, as each course is an independent piece of content that could be embedded elsewhere on the site using an iframe.
- The sections with the course information and details link have been labelled as `<section>` for more semantic value.
- The `<div>` for the date has been replaced with the `<time>` tag for semantic value.
- The `<div>` containing the link to the details has also become a more semantically valuable `<section>`.
- The `<div>` for the image has turned into a `<figure>` with the same thoughtful approach.

Additionally, in each course card, we're using the `<h2>` heading.

```jsx
<section className="courses container">
  <article className="courses content">
    <header className="title">Upcoming courses</header>
    <main className="column-2">
      <section className="courses">
        {courses.map(({ title, language, startDate, href, icon }) => (
          <article key={title} className="course-card">
            <div className="icon-container">{icon}</div>
            <section className="course-info">
              <h2 className="name">{title}</h2>
              <time className="date">{`${startDate} • ${language}`}</time>
            </section>
            <section className="details-container">
              <a className="details" href={href} target="_blank" rel="noreferrer">
                {buttonText && <span className="label">{buttonText}</span>}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </section>
          </article>
        ))}
        <Button label="Go to RS School " href="https://rs.school/" />
      </section>
      <figure className="image">
        <RsBanner />
      </figure>
    </main>
  </article>
</section>
```

**A** tag could be replaced by **Link**. But this is just an example of how one could do it. We are only talking about layout here.

Please at least use semantic markup and remember, we have countless opportunities to express our thoughts.

Use elements such as header, nav, main, section, article, p, aside, footer and ect to accurately reflect the meaning and purpose of the content they contain.
