const cards = () => {
  return (
    <div className="cards">
      <div className="features-section">
        <div className="text-wrapper-5">Our Services</div>
      </div>
      <div className="features-conteiner-wrapper">
        <div className="features-conteiner">
          <div className="feature-card">
            <div className="text-wrapper-6">First Feature</div>
            <p className="text-wrapper-7">
              This is a description of the first feature of our site. We are briefly outlining what this feature does.
            </p>
            <button className="button-text-wrapper">
              <span className="button-text-2">Learn more</span>
            </button>
            <div className="icon"></div>
          </div>
          {/* Additional feature cards */}
        </div>
      </div>
      <button className="div-wrapper">
        <div className="button-text-3">More about our features</div>
      </button>
    </div>
  );
};

export default cards;
