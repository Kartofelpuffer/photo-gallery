import Gallery from "@/components/Gallery";
import photos from "@/data/photos.json";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="/">EDUARDO IS A BITCH</a>
        <span className="header-note">A personal memory lane <3</span>
      </header>

      <section className="intro">
        <p className="eyebrow">MY FAVORITES</p>
        <h1>Places, excursions<br />and everything between.</h1>
        <p className="intro-copy">
          A growing collection of photographs. Select an image to see its story.
        </p>
      </section>

      <Gallery photos={photos} />

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} · Personal Archive</span>
        <span>{photos.length} photographs</span>
      </footer>
    </main>
  );
}
