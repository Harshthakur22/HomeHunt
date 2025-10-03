import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title font-extrabold tracking-tight text-[var(--text)]">Find Real Estate & Get Your Dream Place</h1>
          <p className="max-w-3xl text-center md:text-left text-[var(--muted)]">
            HomeHount makes property discovery simple, fast, and transparent. 
            Browse listings with detailed insights, connect directly with sellers, 
            and use smart filters to find the perfect match for your needs. 
            Whether buying or renting, your dream place is just a few clicks away.
          </p>

          <div className="search-bar-container mt-2">
            <SearchBar />
          </div>
             
          <div className="boxes mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="box text-center">
              <h1 className="font-extrabold">16+</h1>
              <h2 className="text-[var(--muted)]">Years of Experience</h2>
            </div>
            <div className="box text-center">
              <h1 className="font-extrabold">200</h1>
              <h2 className="text-[var(--muted)]">Award Gained</h2>
            </div>
            <div className="box text-center">
              <h1 className="font-extrabold">2000+</h1>
              <h2 className="text-[var(--muted)]">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>

      {/* Additional long content sections */}
      <div className="sections">
        <section className="features">
          <h2>Why Choose HomeHunt</h2>
          <div className="grid">
            <div className="card">
              <h3>Verified Listings</h3>
              <p>Every listing is reviewed for accuracy so you can trust what you see.</p>
            </div>
            <div className="card">
              <h3>Powerful Search</h3>
              <p>Use filters like price, location, bedrooms, and amenities to narrow results.</p>
            </div>
            <div className="card">
              <h3>Local Insights</h3>
              <p>Neighborhood info including schools, transit, and walkability scores.</p>
            </div>
            <div className="card">
              <h3>Secure Messaging</h3>
              <p>Chat with owners and agents safely without sharing your personal contact.</p>
            </div>
          </div>
        </section>

        <section className="how">
          <h2>How It Works</h2>
          <ol className="steps">
            <li>
              <span className="num">1</span>
              <div>
                <h4>Create Your Profile</h4>
                <p>Tell us your preferences to get a personalized feed.</p>
              </div>
            </li>
            <li>
              <span className="num">2</span>
              <div>
                <h4>Explore Listings</h4>
                <p>Save favorites, compare properties, and view high‑quality photos.</p>
              </div>
            </li>
            <li>
              <span className="num">3</span>
              <div>
                <h4>Connect & Close</h4>
                <p>Message sellers or agents and move forward with confidence.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="testimonials">
          <h2>What Users Say</h2>
          <div className="grid">
            <blockquote>
              “Found my apartment in two days. Filters were super helpful!”
              <footer>— Priya, Bangalore</footer>
            </blockquote>
            <blockquote>
              “Love the map view and neighborhood details. Made deciding easy.”
              <footer>— Arjun, Pune</footer>
            </blockquote>
            <blockquote>
              “Messaging inside the app kept things organized and safe.”
              <footer>— Neha, Delhi</footer>
            </blockquote>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to find your next home?</h2>
          <p>Join HomeHunt today and start exploring thousands of properties.</p>
          <div className="actions">
            <a className="primary" href="/register">Get Started</a>
            <a className="secondary" href="/list">Browse Listings</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
