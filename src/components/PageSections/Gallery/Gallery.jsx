import { useEffect, useMemo, useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Gallery({ item }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  /*
    Randomly rearrange gallery images
  */
  const galleryImages = useMemo(() => {
    const images = [...(item.gallery || [])];

    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [images[i], images[j]] = [images[j], images[i]];
    }

    return images;
  }, [item]);

  /*
    Get image URL
    Supports both:

    gallery: [gallery1, gallery2]

    and

    gallery: [
      { image: gallery1 },
      { image: gallery2 }
    ]
  */
  const getImageSrc = (image) => {
    return typeof image === "string"
      ? image
      : image?.image;
  };

  /*
    Close lightbox when pressing Escape
  */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0
            ? galleryImages.length - 1
            : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === galleryImages.length - 1
            ? 0
            : current + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex, galleryImages.length]);

  /*
    Prevent background scrolling while lightbox is open
  */
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  if (!galleryImages.length) {
    return null;
  }

  return (
    <>
      {/* =========================
          GALLERY
      ========================= */}

      <section className="gallery-section">
        <div className="container">

          <div className="section-header">
            <h2>Gallery</h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => {
              const imageSrc = getImageSrc(image);

              return (
                <button
                  type="button"
                  className="gallery-item"
                  key={`${imageSrc}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Open gallery image ${
                    index + 1
                  }`}
                >
                  <img
                    src={imageSrc}
                    alt={`${item.title} Gallery ${
                      index + 1
                    }`}
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================
          LIGHTBOX
      ========================= */}

      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedIndex(null)}
        >

          {/* Close Button */}

          <button
            type="button"
            className="gallery-close"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(null);
            }}
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          {/* Previous */}

          {galleryImages.length > 1 && (
            <button
              type="button"
              className="gallery-arrow gallery-prev"
              onClick={(event) => {
                event.stopPropagation();

                setSelectedIndex((current) =>
                  current === 0
                    ? galleryImages.length - 1
                    : current - 1
                );
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Large Image */}

          <div
            className="gallery-lightbox-image"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={getImageSrc(
                galleryImages[selectedIndex]
              )}
              alt={`${item.title} Gallery ${
                selectedIndex + 1
              }`}
            />
          </div>

          {/* Next */}

          {galleryImages.length > 1 && (
            <button
              type="button"
              className="gallery-arrow gallery-next"
              onClick={(event) => {
                event.stopPropagation();

                setSelectedIndex((current) =>
                  current === galleryImages.length - 1
                    ? 0
                    : current + 1
                );
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          )}

        </div>
      )}
    </>
  );
}