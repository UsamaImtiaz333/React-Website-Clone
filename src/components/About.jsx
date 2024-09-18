import ap from "./../assets/images/ap.webp";
import bp from "./../assets/images/bp.webp";
import mec from "./../assets/images/mechanic.png";
import post from "./../assets/images/poster.png";
import DoubleArrowIcon from "./Icons/DoubleArrowIcon";

function About() {
  return (
    <>
      <div className="w-[66%] mx-auto">
        <div className="flex items-center">
          <span>
            <a href="/home">Home</a>
          </span>
          <DoubleArrowIcon />
          <span>About Us</span>
        </div>
        <p className="flex justify-center mt-10 text-[16px]">
          Welcome to All Solutions Heating and Air Conditioning! We’re experts
          in HVAC, focusing on putting in new systems and swapping old ones.
          When it comes to keeping your place comfy in all seasons, we’re your
          go-to.
        </p>
        <h1 className="text-[24px] font-bold mt-4">
          Our Specialty, Installations and Replacements
        </h1>
        <p className="mt-2 text-[16px]">
          We’re the pros when it comes to installing and replacing HVAC systems.
          We understand how vital it is to have a reliable heating and cooling
          setup in your home or office. If you want the classic furnace and AC
          combo or something more flexible like mini-split systems, heat pumps,
          or window units, we’ve got your back. We have a wide range of products
          and a team of skilled technicians to handle all installations smoothly
          and professionally.
        </p>
        <h1 className="text-[24px] font-bold mt-4">Best Choices, Best Setup</h1>
        <p className="mt-2 text-[16px]">
          When you pick All Solutions Heating and Air Conditioning, you’re
          choosing from a wide range of top-quality heating and cooling gear. We
          pick our stuff from trusted makers, so you know it’s durable,
          energy-efficient, and works great. Our experienced technicians can set
          up various systems, making sure they fit well and work like a charm.
          Trust us to suggest the best gear for you, and we’ll install it with
          precision.
        </p>
        <h1 className="text-[24px] font-bold mt-4">Putting You First</h1>
        <p className="mt-2 text-[16px]">
          At our core, we’re all about serving you right. We know each customer
          is different, with their own needs and likes. That’s why we listen to
          what you need, check out your place, and make our solutions fit you.
          Our approach is all about giving you a personal experience and going
          beyond what you expect. From our first talk to the final setup, we
          want to make it smooth and easy for you, keeping you happy all the
          way.
        </p>
        <h1 className="text-[24px] font-bold mt-4">Why We’re Different</h1>
        <p className="mt-2 text-[16px]">
          With All Solutions Heating and Air Conditioning, you’re getting a team
          that’s professional, skilled, and trustworthy. We believe in being
          honest, offering fair prices, and giving you top-notch service.
          Quality HVAC help shouldn’t cost a fortune, so we keep our prices
          competitive and offer payment plans. We’re all about making sure you
          get great value with every project we do.
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 mt-20">
        <div>
          <img src={mec} alt="" className="w-[600px] h-[590px]" />
        </div>
        <div className="w-[634.94px] h-[854px]">
          <h2 className="text-[20px] font-bold text-gray-600">
            ABOUT OUR COMPANY
          </h2>
          <h1 className="text-[40px] font-bold">
            We Are The Most Popular Installation Company
          </h1>
          <p className="text-[16px]">
            We are most popular for installations and replacements, that’s our
            specialty. Whether you need the traditional Furnace
          </p>
          <p className="text-[16px]">
            and AC unit or want to go the route of mini split systems, heat
            pumps, through the window or wall units, or any other
          </p>
          <p className="text-[16px]">
            cooling or heating equipment, we have it all and we install it all.
          </p>
          <div className="bg-foter rounded-full max-w-fit p-6 mt-6">
            <img src={ap} alt="imglogo" />
          </div>
          <h1 className="text-[24px] font-bold mt-6">Professional Team</h1>
          <p className="text-[16px]">
            We work with the most skilled and professional individuals with
            combined decades of experience and dedication to give you the best,
            because we believe you deserve the best.
          </p>
          <div className="bg-foter rounded-full max-w-fit p-6 mt-6">
            <img src={bp} alt="" />
          </div>
          <h2 className="mt-6 font-bold text-[24px]">
            We schedule your installation at your earliest convenience.
          </h2>
          <p className="text-16px text-[16px]">
            Are you in need of a reliable and efficient heating and cooling
            system? Look no further! At All Solutions Heating and Air
            Conditioning, we specialize in the installation of brand-new HVAC
            equipment. Whether you require a replacement or a first time
            installation of central air systems, including furnaces, AC
            condensers, heat pumps, mini-split systems, or through-the-window or
            through-the-wall units, we’ve got you covered.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-[1244.5px] h-[291px] mx-auto mt-36">
        <div className="text-center">
          <h1 className="text-[16px] font-bold">
            WE ARE DEDICATED TO EXCELLENCE IN KEEPING
          </h1>
          <h1 className="text-[16px] font-bold">
            YOU COMFORTABLE AT HOME AND IN YOUR WORK PLACE.
          </h1>
          <div className="mt-6">
            <p className="text-[16px]">
              Whether be your own residence, rental or vacation home, office,
              restaurant, or business of any type, we do it all.
            </p>
            <p className="text-[16px]">
              You just relax and let us handle all your cooling and heating
              needs.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <img src={post} alt="" className="w-[293px] h-[61px]" />
          </div>
          <div className="text-[16px] mt-6">
            Trust and reputation is important to us, that’s why we are a Better
            Business Bureau Accredited Business
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
