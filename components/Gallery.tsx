"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = {
  id: string;
  src: string;
  title: string;
  description: string;
};

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <section className="gallery" aria-label="Photo gallery">
        {photos.length === 0 ? (
          <p className="empty-state">Your gallery is ready. Add photographs to <code>public/photos</code> and entries to <code>data/photos.json</code>.</p>
        ) : photos.map((photo, index) => (
          <button
            className="photo-card"
            key={photo.id}
            onClick={() => setSelected(photo)}
            aria-label={`View ${photo.title}`}
          >
            <div className="photo-frame">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                priority={index < 3}
                className="photo-image"
              />
            </div>
            <span className="photo-title">{photo.title}</span>
          </button>
        ))}
      </section>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button className="close-button" onClick={() => setSelected(null)} aria-label="Close image">×</button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox-image">
              <Image src={selected.src} alt={selected.title} fill sizes="90vw" className="photo-image" />
            </div>
            <div className="lightbox-caption">
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
