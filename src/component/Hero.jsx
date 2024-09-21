const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Best Fit for your Feet</h1>
        <p>
          Best Fit for your Feet, We provide the best comfort and fit to your
          fit.
        </p>

        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Avalibale on </p>
          <div className="brand-icon">
            <img src="\images\amazon.png" alt="" />
            <img src="\images\flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
      <img src="\images\hero-image.png" alt=""/>
      </div>
    </main>
  );
};

export default Hero;
