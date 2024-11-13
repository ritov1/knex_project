import '.style.css'
import '.styleguide.css'

function App() {

  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-navigation">
          <div className="logomaior-2"></div>
          <div className="menu-items">
            <div className="menu-item"><div className="menu-item-2">Features</div></div>
            <div className="menu-item"><div className="menu-item-2">Resources</div></div>
            <div className="menu-item"><div className="menu-item-2">Products</div></div>
            <div className="menu-item"><div className="menu-item-2">Services</div></div>
            <div className="menu-item-wrapper"><div className="menu-item-3">Reach out to us</div></div>
          </div>
        </div>
      </header>

      <div className="div">
        <footer className="footer">
          <div className="footer-conteiner">
            <div className="row">
              <img className="logomaior" src="img/logomaior-2.png" alt="Logo" />
              <p className="text-wrapper">© 2022 - 2024 KNEX | All Rights Reserved</p>
              <div className="social-media-links">
                <img className="social-media-icon" src="img/social-media-icon.svg" alt="Social Media Icon" />
                <div className="social-media-icon"><img className="subtract" src="img/subtract.svg" alt="Icon" /></div>
                <img className="social-media-icon" src="img/image.svg" alt="Icon" />
              </div>
            </div>
            <img className="vector" src="img/vector-1.svg" alt="Vector" />
            <div className="row-2">
              <div className="colum">
                <div className="text-wrapper-2">Home</div>
                <div className="text-wrapper-3">Contact Us</div>
              </div>
              <div className="colum">
                <div className="text-wrapper-2">Team</div>
                <div className="text-wrapper-3">Privacy Policy</div>
              </div>
              <div className="colum-2">
                <div className="text-wrapper-2">Services</div>
                <div className="text-wrapper-3">Terms & Conditions</div>
              </div>
              <div className="colum">
                <div className="text-wrapper-2">About</div>
                <div className="text-wrapper-3">Career</div>
              </div>
            </div>
          </div>
        </footer>

        <div className="heading">
          <div className="title-area-conteiner">
            <div className="title-area-content">
              <div className="frame">
                <div className="text-wrapper-4">Software Development</div>
                <p className="p">
                  This is a company that develops apps, websites, and software. We provide features and services for our users.
                </p>
              </div>
              <button className="button-wrapper">
                <span className="button-text">Learn more</span>
              </button>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="features-section"><div className="text-wrapper-5">Our Services</div></div>
          <div className="features-conteiner-wrapper">
            <div className="features-conteiner">
              <div className="feature-card">
                <div className="text-wrapper-6">First Feature</div>
                <p className="text-wrapper-7">
                  This is a description of the first feature of our site. We are briefly outlining what this feature does.
                </p>
                <button className="button-text-wrapper"><span className="button-text-2">Learn more</span></button>
                <div className="icon"></div>
              </div>
              {/* Additional feature cards */}
            </div>
          </div>
          <button className="div-wrapper"><div className="button-text-3">More about our features</div></button>
        </div>

        <div className="price">
          <div className="title-area-conteiner-2">
            <div className="title-area-content-2">
              <div className="frame-2">
                <p className="div-2">
                  <span className="span">Payment</span>
                  <span className="text-wrapper-8">&nbsp;</span>
                  <span className="span">Methods</span>
                </p>
                <div className="text-wrapper-9">We keep it simple.</div>
              </div>
            </div>
            <img className="rectangle" src="img/rectangle-1.png" alt="Rectangle" />
          </div>
        </div>

        <div className="tecnologies">
          <div className="frame-7">
            <div className="element-wrapper"><img className="element" src="img/5673721-1.png" alt="Technology Icon" /></div>
          </div>
        </div>

        <div className="process">
          <div className="feature-card-2">
            <div className="frame-12"></div>
            <div className="frame-13">
              <div className="frame-14"><div className="text-wrapper-12">Data Gathering</div></div>
              <p className="we-need-a-thorough">
                We need a thorough understanding of your business goals and needs.
              </p>
            </div>
            <div className="icon-6"></div>
          </div>
          {/* Additional process cards */}
          <div className="frame-15">
            <p className="div-2">
              <span className="span">Our</span>
              <span className="text-wrapper-8">&nbsp;</span>
              <span className="span">Workflow</span>
            </p>
            <p className="text-wrapper-9">Simple version of our workflow.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
