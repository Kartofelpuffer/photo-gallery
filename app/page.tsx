import Gallery from "@/components/Gallery";
import photos from "@/data/photos.json";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="/">PHOTOGRAPHS</a>
        <span className="header-note">A personal image archive</span>
      </header>

      <section className="intro">
        <p className="eyebrow">SELECTED WORK</p>
        <h1>Moments, places<br />and everything between.</h1>
        <p className="intro-copy">
          A growing collection of photographs. Select an image to see its story.
        </p>
      </section>

      <Gallery photos={photos} />

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} · Personal archive</span>
        <span>{photos.length} photographs</span>
      </footer>
    </main>
  );
}
