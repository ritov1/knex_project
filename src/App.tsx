import "./style.css";
import "./styleguide.css";

function App() {
  return (
    <div className="conteiner">
      <div className="landing-page">
        <div className="heading">
          <div className="title-area-conteiner">
            <div className="title-area-content">
              <div className="frame">
                <div className="text-wrapper-4">Software development</div>
                <p className="p">
                  This is a company that develops apps, websites, and software.
                  We provide features and services for its users.
                </p>
              </div>
              <button className="button-wrapper">
                <button className="button">
                  <button className="button-text">Learn more</button>
                </button>
              </button>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="features-section">
            <div className="text-wrapper-5">Our services</div>
          </div>
          <div className="features-conteiner-wrapper">
            <div className="features-conteiner">
              <div className="feature-card">
                <div className="text-wrapper-6">First Features</div>
                <p className="text-wrapper-7">
                  This is a description of the first feature of our site. We are
                  going to briefly outline what this feature does.
                </p>
                <button className="button-text-wrapper">
                  <button className="button-text-2">Learn more</button>
                </button>
                <div className="icon"></div>
              </div>
              <div className="feature-card">
                <div className="text-wrapper-6">Second Features</div>
                <p className="text-wrapper-7">
                  This is a description of the second feature of our site. We
                  are going to briefly outline what this feature does.
                </p>
                <button className="button-text-wrapper">
                  <button className="button-text-2">Learn more</button>
                </button>
                <div className="icon-2"></div>
              </div>
              <div className="feature-card">
                <div className="text-wrapper-6">Third Features</div>
                <p className="text-wrapper-7">
                  This is a description of the third feature of our site. We are
                  going to briefly outline what this feature does.
                </p>
                <button className="button-text-wrapper">
                  <button className="button-text-2">Learn more</button>
                </button>
                <div className="icon-3"></div>
              </div>
              <div className="feature-card">
                <div className="text-wrapper-6">Fourth Features</div>
                <p className="text-wrapper-7">
                  This is a description of the fourth feature of our site. We
                  are going to briefly outline what this feature does.
                </p>
                <button className="button-text-wrapper">
                  <button className="button-text-2">Learn more</button>
                </button>
                <div className="icon-4"></div>
              </div>
            </div>
          </div>
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
              <div className="frame-3">
                <div className="frame-4">
                  <img className="icon-check-circle" src="../accept.png" />
                  <div className="text-wrapper-10">Simple and secure.</div>
                </div>
                <div className="frame-5">
                  <img className="icon-check-circle" src="../accept.png" />
                  <div className="text-wrapper-10">
                    Supports cash, cards, or online options.
                  </div>
                </div>
                <div className="frame-5">
                  <img className="icon-check-circle" src="../accept.png" />
                  <div className="text-wrapper-10">
                    Enables fast transactions.
                  </div>
                </div>
                <div className="frame-6">
                  <img className="icon-check-circle" src="../accept.png" />
                  <div className="text-wrapper-10">
                    {" "}
                    Enhances user convenience.
                  </div>
                </div>
              </div>
            </div>
            <img className="rectangle" src="../digital-payments.png" />
          </div>
        </div>
        <div className="technologies">
          <div className="process">
            <div className="feature-card-2">
              <div className="frame-12"></div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-12">Requirement Analysis</div>
                </div>
                <div className="we-need-a-thorough-wrapper">
                  <p className="we-need-a-thorough">
                    We gather and analyze client needs to define software
                    objectives clearly.
                  </p>
                </div>
              </div>
              <div className="icon-6"></div>
            </div>
            <div className="feature-card-2">
              <div className="frame-12"></div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-12">System Design</div>
                </div>
                <div className="we-need-a-thorough-wrapper">
                  <p className="we-need-a-thorough">
                    We create blueprints and architecture tailored to user needs
                    and technical feasibility.
                  </p>
                </div>
              </div>
              <div className="icon-6"></div>
            </div>
            <div className="feature-card-2">
              <div className="frame-12"></div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-12">Development</div>
                </div>
                <div className="we-need-a-thorough-wrapper">
                  <p className="we-need-a-thorough">
                    We write clean, efficient code to build scalable, functional
                    solutions.
                  </p>
                </div>
              </div>
              <div className="icon-6"></div>
            </div>
            <div className="feature-card-2">
              <div className="frame-12"></div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-12">
                    Testing and Quality Assurance
                  </div>
                </div>
                <div className="we-need-a-thorough-wrapper">
                  <p className="we-need-a-thorough">
                    We rigorously test for bugs, ensuring reliability and
                    optimal performance.
                  </p>
                </div>
              </div>
              <div className="icon-6"></div>
            </div>
            <div className="feature-card-2">
              <div className="frame-12"></div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-12">
                    Deployment and Maintenance
                  </div>
                </div>
                <div className="we-need-a-thorough-wrapper">
                  <p className="we-need-a-thorough">
                    We launch the software and provide ongoing updates and
                    support to adapt to evolving needs.
                  </p>
                </div>
              </div>
              <div className="icon-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
