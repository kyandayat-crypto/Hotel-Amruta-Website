
import "./App.css";

const phone = "919096820758";

const whatsapp = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const services = [
  {
  title: "Birthday Party",
  image: "/images/hotel photo 6.jpeg",
  description: "Celebrate your special birthday with family and friends.",
  message: "Hello Hotel Amruta, I want to book a Birthday Party.",
},
  {
    title: "Anniversary Party",
    image: "/images/anniversary.jpg",
    description: "Make your anniversary celebration unforgettable.",
    message: "Hello Hotel Amruta, I want to enquire about Anniversary Party.",
  },
  {
  title: "Garden Hall",
  image: "/images/WhatsApp Image 2026-08-11 at 4.06.55 PM (1).jpeg",
  description: "Beautiful garden space for your memorable occasions.",
  message: "Hello Hotel Amruta, I want to enquire about Garden Hall.",
},
  {
    title: "Banquet Hall",
    image: "/images/banquet.jpg",
    description: "Perfect venue for parties, functions and celebrations.",
    message: "Hello Hotel Amruta, I want to book Banquet Hall.",
  },
  {
    title: "Hotel Rooms",
    image: "/images/room.jpg",
    description: "Comfortable rooms for a relaxing stay.",
    message: "Hello Hotel Amruta, I want to enquire about room availability.",
  },
  {
    title: "Restaurant",
    image: "/images/restaurant.jpg",
    description: "Enjoy delicious and hygienic pure vegetarian food.",
    message: "Hello Hotel Amruta, I want restaurant information.",
  },
];

function App() {
  return (
    <>
      
{/* Premium Header */}
<header className="header">
  <a href="#home" className="logo">
    <span className="logo-icon">H</span>
    <div className="logo-text">
      <strong>HOTEL AMRUTA</strong>
      <small>✦ PURE VEGETARIAN ✦</small>
    </div>
  </a>

  <nav className="nav-menu">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
  </nav>

  <a className="header-btn" href="tel:+919096820758">
    <span>☎</span> Call Now
  </a>
</header>


      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="subtitle">
              WELCOME TO HOTEL AMRUTA
            </span>

            <h1>
              Celebrate Life's
              <br />
              <span>Beautiful Moments</span>
            </h1>

            <p>
              Delicious Pure Veg Food, Beautiful Party Spaces,
              Comfortable Rooms and Memorable Celebrations.
            </p>

            <div className="hero-buttons">
              <a
                href={whatsapp("Hello Hotel Amruta, I want to make a booking.")}
                className="primary-btn"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>

              <a href="#services" className="secondary-btn">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      

{/* PREMIUM COMPACT HIGHLIGHTS */}
<section className="highlights-3d" id="highlights">

  <div className="highlights-heading">
    <span>✦ HOTEL AMRUTA EXPERIENCE ✦</span>
    <h2>
      Everything You Need, <strong>All in One Place</strong>
    </h2>
    <p>
      Enjoy delicious food, beautiful celebrations and comfortable stays.
    </p>
  </div>

  <div className="highlights-3d-grid">

    <div className="highlight-3d-card">
      <div className="highlight-icon">🍽️</div>
      <span className="highlight-number">01</span>
      <h3>Pure Veg Food</h3>
      <p>Fresh, delicious and hygienic vegetarian food.</p>
      <a href="#services">Explore More ↗</a>
    </div>

    <div className="highlight-3d-card">
      <div className="highlight-icon">🎂</div>
      <span className="highlight-number">02</span>
      <h3>Birthday Parties</h3>
      <p>Celebrate your special moments with us.</p>
      <a href="#services">Explore More ↗</a>
    </div>

    <div className="highlight-3d-card">
      <div className="highlight-icon">🌳</div>
      <span className="highlight-number">03</span>
      <h3>Garden & Hall</h3>
      <p>Beautiful spaces for family functions and events.</p>
      <a href="#services">Explore More ↗</a>
    </div>

    <div className="highlight-3d-card">
      <div className="highlight-icon">🛏️</div>
      <span className="highlight-number">04</span>
      <h3>Comfort Rooms</h3>
      <p>Relax and enjoy a comfortable stay.</p>
      <a href="#services">Explore More ↗</a>
    </div>

  </div>
</section>


      {/* About */}
      
{/* PREMIUM ABOUT SECTION */}
<section className="about-premium" id="about">

  <div className="about-premium-image">
    <img
      src="/images/hotel photo 3.jpeg"
      alt="Hotel Amruta Pure Veg"
    />

    <div className="about-image-badge">
      <span>✦</span>
      <strong>HOTEL AMRUTA</strong>
      <small>PURE VEGETARIAN</small>
    </div>
  </div>

  <div className="about-premium-content">

    <span className="about-label">
      ✦ WELCOME TO HOTEL AMRUTA ✦
    </span>

    <h2>
      A Perfect Place for
      <span> Food, Family & Celebrations</span>
    </h2>

    <p>
      Welcome to Hotel Amruta Pure Veg, where delicious food,
      warm hospitality and beautiful moments come together.
      Enjoy a wonderful experience with your family and friends.
    </p>

    <p>
      From family dinners and birthday parties to anniversary
      celebrations, special events and comfortable stays,
      we make every occasion memorable.
    </p>

    <div className="about-features">
      <div className="about-feature">
        <span>🍽️</span>
        <strong>Pure Veg Food</strong>
      </div>

      <div className="about-feature">
        <span>🎉</span>
        <strong>Special Events</strong>
      </div>

      <div className="about-feature">
        <span>🛏️</span>
        <strong>Comfortable Stay</strong>
      </div>

      <div className="about-feature">
        <span>🌿</span>
        <strong>Family Friendly</strong>
      </div>
    </div>

    <a
      href={whatsapp("Hello, I want more information about Hotel Amruta.")}
      target="_blank"
      rel="noreferrer"
      className="about-premium-btn"
    >
      Know More About Us <span>↗</span>
    </a>

  </div>
</section>


      {/* Services */}
      <section className="services section" id="services">
        <div className="section-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Our Special Services</h2>
          <p>Everything you need for a memorable experience.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.title} />

              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href={whatsapp(service.message)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Food */}
      <section className="food-section">
        <div className="food-content">
          <span className="section-label">TASTE THE DIFFERENCE</span>
          <h2>Delicious Pure Veg Food</h2>
          <p>
            Enjoy a wonderful dining experience with family and friends.
            Visit us for lunch, dinner and special occasions.
          </p>

          <a
            href={whatsapp("Hello, I want to enquire about Lunch and Dinner at Hotel Amruta.")}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Enquire for Food
          </a>
        </div>

        <img src="/images/food.jpg" alt="Pure Vegetarian Food" />
      </section>

      {/* Booking */}
      <section className="booking section">
        <span className="section-label">MAKE YOUR MOMENT SPECIAL</span>
        <h2>Plan Your Celebration With Us!</h2>
        <p>
          Birthday, Anniversary, Family Function, Lunch,
          Dinner or Room Booking.
        </p>

        <div className="hero-buttons">
          <a
            href={whatsapp("Hello Hotel Amruta, I want to enquire about booking. Please share details.")}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            WhatsApp Booking
          </a>

          <a href="tel:+919096820758" className="secondary-dark-btn">
            Call: 9096820758
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <span className="section-label">OUR MEMORIES</span>
          <h2>Hotel Photo Gallery</h2>
        </div>

        <div className="gallery-grid">
          {[
            ["hotel photo 1.jpeg", "Hotel"],
            ["restaurant.jpg", "Restaurant"],
            ["garden.jpg", "Garden"],
            ["banquet.jpg", "Banquet Hall"],
            ["birthday.jpg", "Birthday Party"],
            ["room.jpg", "Hotel Rooms"],
          ].map(([image, name]) => (
            <div className="gallery-item" key={image}>
              <img src={`/images/${image}`} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Contact Hotel Amruta</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span>📍</span>
            <h3>Our Location</h3>
            <p>
              Plot 02, Dhule-Solapur Highway,
              Near Karodi Toll Plaza, Waluj MIDC,
              Aurangabad, Maharashtra 431136.
            </p>
          </div>

          <div className="contact-card">
            <span>📞</span>
            <h3>Call Us</h3>
            <a href="tel:+919096820758">+91 9096820758</a>
          </div>

          <div className="contact-card">
            <span>💬</span>
            <h3>WhatsApp</h3>
            <a
              href={whatsapp("Hello Hotel Amruta, I need information.")}
              target="_blank"
              rel="noreferrer"
            >
              Chat With Us
            </a>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Hotel Amruta Location"
            src="https://www.google.com/maps?q=Karodi%20Toll%20Plaza%20Waluj%20MIDC%20Aurangabad&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>HOTEL AMRUTA PURE VEG</h2>
        <p>Good Food • Great Celebrations • Comfortable Stay</p>
        <p>© 2026 Hotel Amruta. All Rights Reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        className="whatsapp-float"
        href={whatsapp("Hello Hotel Amruta, I want to make an enquiry.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        ☎
      </a>
    </>
  );
}

export default App;
