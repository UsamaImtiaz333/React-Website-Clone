import React from "react";
import logo from "./../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
function HomeNavbar() {
  const path = useLocation();
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("src/assets/images/ab.webp")',
        }}
        className=" top-0 w-full bg-no-repeat bg-cover bg-center h-[46.7vh]"
      >
        <div className="flex justify-center">
          <nav className="w-fit px-14 flex justify-center items-center bg-white h-[110px] gap-[123px] mt-10">
            <div className="flex items-center h-full">
              <img src={logo} alt="Logo" className="w-[189.86px]" />
            </div>
            <div className="hidden lg:flex items-center">
              <ul className="flex gap-10 items-center justify-center font-bold text-[18px]">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="relative group">
                  <Link to="/services">Services</Link>
                  <div className="hidden group-hover:block absolute bg-white shadow-lg mt-2">
                    <ul className="block p-2">
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Air Conditioning Services</Link>
                      </li>
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Heating Services</Link>
                      </li>
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Electrical Services</Link>
                      </li>
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Plumbing Services</Link>
                      </li>
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Water Heater Services</Link>
                      </li>
                      <li className="w-[200px] hover:bg-gray-100 p-2">
                        <Link to="/">Window Installation & Replacement</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
          </nav>
        </div>
        <div
          id="menu"
          className="lg:hidden hidden bg-white border-t border-red-500"
        >
          <ul className="flex flex-col gap-4 items-center py-4 font-bold text-[18px]">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
        <div className="text-[40px] font-bold text-white text-center mt-[100px]">
          <p className="capitalize">{path?.pathname.replace("/", "")}</p>
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
