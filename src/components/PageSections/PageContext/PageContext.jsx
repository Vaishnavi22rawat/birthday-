function Content({ content, headingLevel = "h2" }) {
  const Heading = headingLevel;

  return (
    <>
      {content?.map((block, index) => (
        <div
          className={`content-block ${
            block.borderTop === false ? "no-border" : ""
          }`}
          key={index}
        >
          {block.heading && <Heading>{block.heading}</Heading>}

          {block.list === true ? (
            <ul className="content-list">
              {block.description?.map((item, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                />
              ))}
            </ul>
          ) : Array.isArray(block.description) ? (
            block.description.map((paragraph, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: paragraph,
                }}
              />
            ))
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html: block.description,
              }}
            />
          )}
        </div>
      ))}
    </>
  );
}

export default function PageContext({ item }) {
  let headingFound = false;

  return (
    <section className="page-context">
      <div className="container">
        {item.sections?.map((section, index) => {
          const hasHeading = section.content?.some(
            (block) => block.heading
          );

          const headingLevel =
            !headingFound && hasHeading ? "h1" : "h2";

          if (hasHeading) {
            headingFound = true;
          }

          if (section.layout === "image-text") {
            return (
              <div className="detail-row" key={index}>
                <div className="detail-image">
                  <img
                    src={section.image}
                    alt={
                      section.content?.[0]?.heading ||
                      item.title
                    }
                  />
                </div>

                <div className="detail-text">
                  <Content
                    content={section.content}
                    headingLevel={headingLevel}
                  />
                </div>
              </div>
            );
          }

          if (section.layout === "text-image") {
            return (
              <div className="detail-row" key={index}>
                <div className="detail-text">
                  <Content
                    content={section.content}
                    headingLevel={headingLevel}
                  />
                </div>

                <div className="detail-image">
                  <img
                    src={section.image}
                    alt={
                      section.content?.[0]?.heading ||
                      item.title
                    }
                  />
                </div>
              </div>
            );
          }

          if (section.layout === "full-text") {
            return (
              <div
                className="detail-full-text"
                key={index}
              >
                <Content
                  content={section.content}
                  headingLevel={headingLevel}
                />
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}