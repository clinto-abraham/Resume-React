export default function ServiceFeatures() {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Design the world
            </h3>
            <p className="feature-box__text">
              Use responsive and reactive web designs for modern world
              requirements. React.js, Vue.js, solid.js, angular.js in many list
              of incremental popular technology stacks!
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet Architecture Principles
            </h3>
            <p className="feature-box__text">
              Make scalable applications which integrates re-useable design
              principles and MVC.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way into AI
            </h3>
            <p className="feature-box__text">
              Integrate machine learning capabilities from any source such as
              salesforce, aws or any database service.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            {/* <i className="feature-box__icon icon-basic-heart"></i> */}
            <h3 className="heading-tertiary u-margin-bottom-small">
              Leave everything into automation
            </h3>
            <p className="feature-box__text">
              Implement modern and advanced automation techniques such as
              CircleCI for deployment, testing and other handful operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
