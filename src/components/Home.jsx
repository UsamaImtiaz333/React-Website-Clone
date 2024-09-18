import React from "react";
import logo from "./../assets/images/logo.png";
import men from "./../assets/images/men.png";
import mechanic from "./../assets/images/mechanic.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { PiMapPin } from "react-icons/pi";
import one from "./../assets/images/one.png";
import two from "./../assets/images/two.jpg";
import poster from "./../assets/images/poster.png";
import { NavLink } from "react-router-dom";
import FaceBookIcon from "./Icons/FaceBookIcon";
import Twitter from "./Icons/Twitter";
import WhatsApp from "./Icons/WhatsApp";
import Message from "./Icons/Message";
import Chat from "./Icons/Chat";
import Reviews from "./Reviews";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("src/assets/images/commercial.jpg")',
        }}
        className="bg-no-repeat bg-cover h-[98svh]"
      >
        <div className="pt-10">
          <nav className="bg-white w-full fixed top-0 left-0 right-0 h-[110px] z-10">
            <div className="flex items-center justify-between mx-auto lg:mx-80 h-full gap-8 lg:gap-[123px]">
              <div className="flex items-center h-full">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[150px] lg:w-[189.86px]"
                />
              </div>
              <div className="hidden lg:flex items-center">
                <ul className="flex gap-5 lg:gap-10 items-center justify-center font-bold text-[16px] lg:text-[18px]">
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="relative group">
                    <NavLink to="/services">Services</NavLink>
                    <div className="hidden group-hover:block absolute bg-white shadow-lg mt-2">
                      <ul className="block p-2">
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">Air Conditioning Services</NavLink>
                        </li>
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">Heating Services</NavLink>
                        </li>
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">Electrical Services</NavLink>
                        </li>
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">Plumbing Services</NavLink>
                        </li>
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">Water Heater Services</NavLink>
                        </li>
                        <li className="w-[200px] hover:bg-gray-100 p-2">
                          <NavLink to="/">
                            Window Installation & Replacement
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/reviews">Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-primary px-4 py-2 rounded-md text-white text-base"
                    >
                      Request a free Estimate
                    </button>
                    <button
                      type="button"
                      className="bg-primary px-4 py-2 rounded-md text-white text-base"
                    >
                      Apply For Financing
                    </button>
                  </div>
                </ul>
              </div>
              <div className="lg:hidden">
                <button
                  id="menu-button"
                  className="text-black focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div
            id="menu"
            className="lg:hidden hidden bg-white border-t border-red-500"
          >
            <ul className="flex flex-col gap-4 items-center py-4 font-bold text-[18px]">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="bg-primary px-4 py-2 rounded-md text-white text-base"
                >
                  Request a free Estimate
                </button>
                <button
                  type="button"
                  className="bg-primary px-4 py-2 rounded-md text-white text-base"
                >
                  Apply For Financing
                </button>
              </div>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center text-white px-4 mt-28">
          <div className="container sm:w-5/12 w-full leading-[50px]">
            <h1 className="text-[32px] sm:text-[42px] font-bold text-center sm:text-left">
              Welcome to ashaac.com, your local heating and cooling service
              company.
            </h1>
            <span className="text-[20px] sm:text-[24px] font-bold block text-center sm:text-left">
              All Solutions Heating and Air Conditioning
            </span>
            <h1 className="text-[18px] sm:text-[20px] text-center sm:text-left">
              “Affordable, efficient, reliable. Your satisfaction is our
              business.”
            </h1>
            <div className="text-center sm:text-left">
              <button
                type="button"
                className="bg-primary px-9 py-[15px] mt-4 sm:mt-0 rounded-md text-white text-base"
              >
                Schedule A Free Estimate
              </button>
              <h1 className="text-[18px] sm:text-[20px] sm:mt-4">
                For immediate service, text or call 801-755-3040
              </h1>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end mt-8 sm:mt-0 w-full sm:w-auto">
            <img
              src={men}
              alt="Service men"
              className="w-[200px] h-auto sm:w-[397.91px] sm:h-[512.8px] md:mt-[279px]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 bg-white flex flex-col lg:flex-row lg:items-center lg:p-20">
        <div className="flex justify-center lg:w-1/2">
          <img
            src={mechanic}
            alt="mechanic image"
            className="w-full max-w-lg lg:max-w-full"
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-1/2">
          <h2 className="text-lg lg:text-2xl font-bold">
            We specialize in installations and replacements.
          </h2>
          <p className="text-sm lg:text-base mt-4">
            We specialize in installing and replacing your Heating and AC units.
            Whether you need the traditional Furnace and AC unit or want to go
            the route of mini split systems, heat pumps, through-the-window or
            wall units, or any other cooling or heating equipment, we have it
            all and we install it all.
          </p>
          <p className="text-sm lg:text-base mt-4">
            Schedule an appointment for one of our technicians to come and
            preview your existing space and system. You’ll soon receive an
            estimate. Once you give us the green light, you are welcome to apply
            for our 1-year no-interest, no-payments offer or you may choose to
            provide your own. Then we schedule your installation, acquire your
            new system, and come to install it at your earliest convenience.
          </p>
          <p className="text-sm lg:text-base mt-4">
            We focus on providing you with a high-efficiency Heating and Air
            Conditioning system so you can save on energy costs.
          </p>
          <p className="text-lg lg:text-xl font-bold mt-4">
            Receive up to a 30% tax credit on qualified energy efficiency
            improvements to your home!
            <span className="text-red-600"> See If You Qualify</span>
            <a
              href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit"
              className="text-red-600 hover:text-red-900 inline-flex items-center ml-2"
            >
              <IoIosArrowDroprightCircle />
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url("src/assets/images/bg.jpg")',
        }}
        className="bg-no-repeat bg-cover"
      >
        <div className="p-6 lg:p-16">
          <div className="mt-6 lg:mt-12 text-center">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Installing cooling and heating units in Salt Lake County and
              <br className="hidden lg:block" />
              surrounding areas
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center my-8">
            <div className="hover:shadow-lg hover:rounded-xl hover:bg-white hover:shadow-gray-900 transition duration-500 cursor-pointer p-6 lg:p-14">
              <img
                src={one}
                alt="one"
                className="w-full max-w-xs lg:max-w-full"
              />
              <p className="font-bold text-lg lg:text-2xl text-gray-500 mt-4 text-center">
                Furnace Installation and Replacement
              </p>
            </div>
            <div className="my-8 lg:my-0 lg:mx-10"></div>
            <div className="hover:shadow-lg hover:rounded-xl hover:bg-white hover:shadow-gray-900 transition duration-500 cursor-pointer p-6 lg:p-14">
              <img
                src={two}
                alt="two"
                className="w-full max-w-xs lg:max-w-full"
              />
              <p className="font-bold text-lg lg:text-2xl text-gray-500 mt-4 text-center">
                Air Conditioning (AC) Units and
                <br className="hidden lg:block" />
                Heat Pumps
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-12">
            <button
              type="button"
              className="bg-primary hover:bg-secondary px-6 py-2 rounded-md text-white text-sm lg:text-base"
            >
              View All Services
            </button>
          </div>
        </div>
      </div>

      <div>
        <Reviews />
      </div>

      <div>
        <Contact />
      </div>

      <div className="relative w-full h-0" style={{ paddingTop: "28.125%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48467.36485205958!2d-112.03798799120274!3d40.60318344758271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528f43dceda5af%3A0xddd78d8d4bce11c6!2sAll%20Solutions%20Heating%20And%20Air%20Conditioning!5e0!3m2!1sen!2s!4v1722243271094!5m2!1sen!2s"
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-col sm:flex-row justify-center items-center bg-forth w-full h-auto sm:h-32 gap-4 p-4">
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center sm:text-left">
            Low monthly payments starting next month! Minimum FICO of 550
          </p>
          <button className="bg-fiv text-white p-2 sm:p-3 rounded-md px-4 hover:bg-si">
            GET STARTED
          </button>
        </div>
        <footer>
          <div className="container mx-auto p-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center sm:text-left">
                <img src={logo} alt="logo" className="w-32 sm:w-44 h-auto" />
                <div className="text-sm sm:text-base font-bold mt-2">
                  AFFORDABLE, EFFICIENT, RELIABLE. YOUR SATISFACTION IS OUR
                  BUSINESS
                </div>
                <p className="text-sm sm:text-base font-bold mt-2">
                  Share this website with your <br /> friends
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold">QUICK LINKS</h4>
                <ul className="mt-2">
                  <li className="text-sm sm:text-base">
                    <a href="/">About Us</a>
                  </li>
                  <li className="text-sm sm:text-base">
                    <a href="/">Services</a>
                  </li>
                  <li className="text-sm sm:text-base">
                    <a href="/">Review</a>
                  </li>
                  <li className="text-sm sm:text-base">
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold">USEFUL LINKS</h4>
                <ul className="mt-2">
                  <li className="text-sm sm:text-base">Privacy Policy</li>
                  <li className="text-sm sm:text-base">Terms and Conditions</li>
                  <li className="text-sm sm:text-base">FAQ's</li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold">Contact Us</h4>
                <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
                  <FaPhone className="text-xl sm:text-2xl" />
                  <div>
                    <a href="/" className="text-sm sm:text-base">
                      801-512-7103
                    </a>
                    <br />
                    <a href="/" className="text-sm sm:text-base">
                      801-755-3040
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <TbMailFilled className="text-xl sm:text-2xl" />
                  <div className="ml-2 text-sm sm:text-base">
                    ashaacutah@gmail.com
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <PiMapPin className="text-xl sm:text-2xl" />
                  <div className="text-sm sm:text-base">
                    <a href="/">
                      4434 W 8790 S West Jordan, <br /> Utah
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
              <div className="text-[40px]">
                <a href="/">
                  <FaceBookIcon />
                </a>
              </div>
              <div className="text-[25px] bg-black rounded-full p-2">
                <a href="/">
                  <Twitter />
                </a>
              </div>
              <div className="text-[40px]">
                <a href="/">
                  <WhatsApp />
                </a>
              </div>
              <div className="text-[25px] bg-blue-900 p-1 rounded-md">
                <a href="/">
                  <Message />
                </a>
              </div>
              <div className="text-[40px]">
                <a href="/">
                  <Chat />
                </a>
              </div>
              <div className="w-full flex justify-center mt-4">
                <img src={poster} alt="poster" className="w-3/4 sm:w-auto" />
              </div>
            </div>
          </div>

          <div className="bg-foter h-20 sm:h-12 flex justify-center items-center mt-4">
            <p className="text-white text-lg sm:text-sm">
              © Copyright 2023 ASHAAC.COM. All Right Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
