import two from "./../assets/images/two.jpg";
import one from "./../assets/images/one.png";
import acmen from "./../assets/images/acmen.png";
import imgsph from "./../assets/images/imgpsh.png";
import check from "./../assets/images/check.jpg";
import er from "./../assets/images/electrical-repair.jpeg";
import plumbing from "./../assets/images/plumbing.jpeg";
import heater from "./../assets/images/heater.jpeg";
import windo from "./../assets/images/window.jpeg";
import ResuableCard from "./ResuableCard";
import ReCard from "./ReCard";

function Services() {
  return (
    <>
      <div className="flex flex-col gap-8 mt-2">
        <div>
          <ResuableCard
            image={one}
            title={"Furnace Installation and replacement"}
            description={
              "We specialize in the installation and replacement of your furnace. Don’t have the cash for it? We offer financing options. Just call us or talk to us when we come to do your free estimate."
            }
          />
        </div>
        <div>
          <ReCard
            heading={"Air Conditioning (AC) Units and Heat Pumps"}
            peragraph={
              "We offer professional installation and replacement of air conditioning (AC) units and heat pump services. Our team will assess your cooling needs and recommend the most suitable AC unit or heat pump for your space. Ask for our flexible financing options with low monthly payments or inquire about our one year no interest no payments plan."
            }
            mg={two}
          />
        </div>
        <div>
          <ResuableCard
            image={acmen}
            title={"Mini-Split Systems"}
            description={
              "Mini-split systems are an excellent solution for spaces where traditional ductwork is not feasible or desirable. Our technicians have expertise in the installation and maintenance of mini-split systems. These systems provide efficient heating and cooling, allowing you to create customized comfort zones in different areas of your home or business. We’ll help you select the right mini-split system and ensure precise installation for maximum comfort. Ask for our flexible financing options."
            }
          />
        </div>
        <div>
          <ReCard
            heading={"Through-the-Window or Wall Units"}
            peragraph={
              "For spaces where a full central air system is not necessary, we offer the installation of through-the-window or wall units. These units are efficient and cost-effective options for cooling or heating specific areas. Our technicians will recommend the most suitable through-the-window or wall unit for your needs and ensure proper installation for optimal performance."
            }
            mg={imgsph}
          />
        </div>
        <div>
          <ResuableCard
            image={check}
            title={"Comprehensive HVAC Maintenance"}
            description={
              "Regular maintenance is essential to keep your heating and cooling systems running smoothly and efficiently. Our comprehensive HVAC maintenance services include thorough inspections, and tune-ups for furnaces, AC units, heat pumps, mini split systems, and through-the-window or wall units. With routine maintenance, we can identify and address potential issues before they become major problems, ensuring reliable and energy-efficient operation."
            }
          />
        </div>
        <div>
          <ReCard
            heading={"Electrical Services"}
            peragraph={
              "Need to add electrical outlets or switches to your home, business or any new additions? call us, we can do it for you. Need to add or replace breakers or your breaker box? we can do it. Need to add light fixtures or any other electrical fixture to your home and business? call or text 801-755-3040"
            }
            mg={er}
          />
        </div>
        <div>
          <ResuableCard
            image={plumbing}
            title={"Plumbing Services"}
            description={
              "Our certified professionals, backed by licenses, bonds, and insurance, stand ready 24/7 to address your plumbing concerns. From sewer line repairs to drain cleanings and precise leak detection, we have your plumbing needs covered. Our expertise extends to fixtures repair and equipment installations, providing comprehensive plumbing solutions."
            }
          />
        </div>
        <div>
          <ReCard
            heading={"Water Heater replacement and Installation"}
            peragraph={
              "We’re water heating experts. We’re great at installing and replacing water heaters. If you need a new water heater for your home or business, we can install it. If your current water heater needs to be replaced, call us. Bundle our services and apply for financing on all your remodeling projects!"
            }
            mg={heater}
          />
        </div>
        <div>
          <ResuableCard
            image={windo}
            title={"Window Installation & Replacement"}
            description={
              "We offer a great variety of windows and prices to fit your budget. All Solutions has the windows you need for your home or business, energy-efficient windows."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Services;
