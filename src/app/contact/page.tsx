import React from "react";

const Contact = () => {
  return (
    <>
          <div className="title-container mx-auto px-4 text-base md:text-lg lg:text-xl xl:text-2xl">
            Contact
          </div>
          <div className="mx-auto px-32 pb-20 text-base md:text-lg lg:text-lg xl:text-lg">
              <p><span className="field-header">Address:</span></p>
              <p>
              <a className="hover:bg-sky-100" href="https://maps.app.goo.gl/zCFcqMGm2FzUWfs78" target='_blank'>
                Roger Larin faslrs FDC Ameublement<br/>802 Saint-Robert, Saint Lazare, QC J7T 2M4</a>
              </p>
              <p><span className="field-header">Phone:</span></p><p><a className="hover:bg-sky-100" href="tel:+15146061705">
                        <span className="text-lg">✆ </span>514-606-1705</a></p>
              <p><span className="field-header">Email:</span></p><p><a className="hover:bg-sky-100" href="mailto:info@fdcfurnishings.com">
                        <span className="text-lg">✉ </span>info@fdcfurnishings.com</a></p>
          </div>
    </>
  );
};

export default Contact;