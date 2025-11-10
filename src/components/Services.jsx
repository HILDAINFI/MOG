import React from "react";

const Services = () => (
  <section id="services" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="fw-bold text-center mb-4">Our Services</h2>
      <p className="text-center mb-5">
        Providing professional recruiting and staffing solutions across multiple industries since 2011.
      </p>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="service-card p-4 border rounded-4">
            <h5>Construction & Manufacturing</h5>
            <p>Recruiting leaders and skilled staff in the construction and PCM sectors.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card p-4 border rounded-4">
            <h5>Healthcare & Hospitality</h5>
            <p>Providing qualified healthcare professionals and hospitality staff globally.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="service-card p-4 border rounded-4">
            <h5>Marine & Oil & Gas</h5>
            <p>Supplying experienced technicians, engineers, and operations personnel.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
