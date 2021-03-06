import React from "react";
import { Accordion } from "../../components";
import resumeData from "../../utils/resumeData";
import "./styles/services.css";

export default function Services() {
  return (
    <section className="section services-section sec-padding">
      <div className="container">
        <div className="row services-first">
          <h4>Want to know about my Services?</h4>
          <h2>
            Reliable solutions for <span>every Individual.</span>
          </h2>
          <p>Services I render include but not limited to the following;</p>
        </div>

        <div className="row services-second">
          {resumeData.services.map((service) => (
            <div className="card">
              <div className="card-body">
                <div className="title">
                  {service.icon}
                  <h4>
                    {service.title1}
                    <br />
                    {service.title2}
                  </h4>
                </div>
                <div className="py-3">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row services-third">
          <div className="row faqs-title align-items-center">
            <h3>
              <span>Why you</span> need a website
            </h3>
          </div>

          <div className="row faqs-accordion-container align-items-center">
            <div className="acc-inner">
              {resumeData.faqs.map(({ header, body, id }) => (
                <Accordion header={header} body={body} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
