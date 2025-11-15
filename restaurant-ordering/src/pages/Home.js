import React from "react";
import "../pages/style.css";

const Home = () => {
  return (
    <div>
 

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our Restaurant</h1>
          <p>Experience exquisite dining with our premium menu and ambiance.</p>
          <button className="btn">Book Now</button>
        </div>
      </section>

      {/* ================= 3 FEATURE SECTIONS ================= */}
      <section className="features">
        <div className="feature-card">
          <h3>Delicious Cuisine</h3>
          <p>
            Taste our chef-special dishes prepared with the finest ingredients
            to satisfy every craving.
          </p>
        </div>

        <div className="feature-card">
          <h3>Cozy Ambiance</h3>
          <p>
            Enjoy your meal in a stylish and relaxing atmosphere perfect for
            family and friends.
          </p>
        </div>

        <div className="feature-card">
          <h3>Fast Delivery</h3>
          <p>
            Order online and receive your favorite dishes quickly and
            conveniently at your doorstep.
          </p>
        </div>
      </section>


    </div>
  );
};

export default Home;
