import React from "react";
import slogo from "./../assets/images/slogo.png";
import fp from "./../assets/images/fp.png";
import sp from "./../assets/images/sp.png";
import tp from "./../assets/images/tp.png";
import fth from "./../assets/images/fth.png";
import five from "./../assets/images/five.png";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";

function Reviews() {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container w-full mx-auto p-6 lg:p-12 relative">
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl font-bold">Testimonials</h2>
        <p className="text-sm lg:text-base mt-2">
          Don't just take our word for it. Read what our valued customers have
          to say about their experience with All Solutions Heating and Air
          Conditioning.
        </p>
      </div>
      <div className="mt-10 px-24 overflow-x-hidden" ref={scrollContainerRef}>
        <div className="flex space-x-6 lg:space-x-10">
          {[
            { img: slogo, name: "John M", src: fp, alt: "person" },
            { img: slogo, name: "Sarah T", src: sp, alt: "Second person" },
            { img: slogo, name: "Michael R", src: tp, alt: "Third person" },
            { img: slogo, name: "Emily K", src: fth, alt: "Fourth person" },
            { img: slogo, name: "Anna S", src: five, alt: "Fifth person" },
          ].map(({ img, name, src, alt }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 lg:w-96 bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={img}
                  alt="logo"
                  className="rounded-full bg-third p-3"
                />
              </div>
              <p className="text-center text-sm lg:text-base mb-2">
                "All Solutions Heating and Air Conditioning exceeded my
                expectations. From the initial consultation to the final
                installation, their team was professional, knowledgeable, and
                efficient. The new furnace they installed in my home has been
                working flawlessly, and I couldn't be happier with the level of
                comfort it provides. Highly recommended!"
              </p>
              <div className="text-center text-sm lg:text-base">{name}</div>
              <div className="flex justify-center items-center mt-2">
                <img src={src} alt={alt} className="w-24 lg:w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-red-800 p-5 rounded-full"
      >
        <ArrowLeft className="text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-red-800 p-5 rounded-full"
      >
        <ArrowRight className="text-white" />
      </button>
    </div>
  );
}

export default Reviews;
