export default function Gallery({ item }) {
  return (
    <section className="gallery-section">
      <div className="container">

        <div className="section-header">
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">
          {item.gallery?.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${image.size}`}
            >
              <img
                src={image.image}
                alt={`${item.title} Gallery ${index + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}