export default function Home() {
  return (
    <main className="container">
      <article className="card">
        
        {/* Visual Warning Indicator */}
        <div className="meter-icon" aria-hidden="true">
          <div className="beacon"></div>
          <svg className="meter-svg" viewBox="0 0 100 100">
            <circle className="meter-bg" cx="50" cy="50" r="40" />
            <circle className="meter-fill" cx="50" cy="50" r="40" />
          </svg>
          <div className="warning-indicator">
            {/* Exclamation icon SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 9v4M12 17h.01" />
            </svg>
          </div>
        </div>

        {/* Core Message */}
        <h1 className="title">
          <span className="highlight">whichbandwhichtown</span> has hit its API limit with <a href="https://data.jambase.com/pricing" className="inline-link" target="_blank" rel="noopener noreferrer">Jambase</a>
        </h1>

        <p className="description">
          We have temporarily exceeded our monthly rate limit. Services will automatically resume when our API quota resets.
        </p>

        {/* Subtle status */}
        <footer className="footer-text">
          Error Code: HTTP 429 Too Many Requests
        </footer>
      </article>
    </main>
  );
}
