import React from "react";

const Contact = () => {
  return (
    <>
          <div className="title-container mx-auto px-4 text-base md:text-lg lg:text-xl xl:text-2xl">
            Contact
          </div>;
          <div className="mx-auto px-56 pb-20 text-base md:text-lg lg:text-lg xl:text-lg">
              <p><span className="field-header">Address:</span></p><p>Roger Larin faslrs FDC Ameublement<br/>
              802 Saint-Robert, Saint Lazare, QC J7T 2M4</p>
              <p><span className="field-header">Phone:</span></p><p>✆ 514-606-1705</p>
              <p><span className="field-header">Email:</span></p><p>✉ info@fdcfurnishings.com</p>
          </div>
    </>
  );
};

export default Contact;