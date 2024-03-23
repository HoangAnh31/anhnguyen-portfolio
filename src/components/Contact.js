import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 pt-32 pb-16 relative" id="contact">
      <div className="text-center max-w-[85%] mx-auto text-white">
        <h2 className="text-6xl font-bold mb-5 text-secondary pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span>{" "}
          <a href="mailto:anhnph.us@gmail.com">anhnph.us@gmail.com</a>
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span>{" "}
          <a href="tel:0493 341 674">(+61)0493 341 674</a>
        </p>
      </div>
      <div className="line-styling bottom-0 top-10">
        <div className="style-circle w-3 h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-circle w-3 h-3 rounded-full bg-[#f14949]"></div>
        <div className="style-line rounded-xl h-1 w-[95%] bg-[#f14949]"></div>
      </div>
    </section>
  );
};

export default Contact;
