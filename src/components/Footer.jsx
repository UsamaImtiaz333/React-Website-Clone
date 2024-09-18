import React from "react";
import logo from "./../assets/images/logo.png";
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { PiMapPin } from "react-icons/pi";
import poster from "./../assets/images/poster.png";
import FaceBookIcon from "./Icons/FaceBookIcon";
import Twitter from "./Icons/Twitter";
import WhatsApp from "./Icons/WhatsApp";
import Message from "./Icons/Message";
import Chat from "./Icons/Chat";

function Footer() {
  return (
    <div>
      <div className="flex justify-center items-center bg-forth w-[1903px] h-[135px] gap-4">
        <p className="text-bold text-[29px] text-white">
          Low monthly payments starting next month! Minimum FICO of 550
        </p>
        <button className="bg-fiv text-white p-3 rounded-md px-4 hover:bg-si cursor-pointer">
          GET STARTED
        </button>
      </div>
      <footer>
        <div className=" container mx-auto">
          <div className="flex gap-4 justify-center h-[250px] p-8">
            <div className="">
              <div>
                <img src={logo} alt="" className="w-[180px] h-[94.8]" />
              </div>
              <div className="text-[13px] font-bold">
                AFFORDABLE, EFFICIENT, RELIABLE. YOUR SATISFACTION IS OUR
                BUSINESS
              </div>
              <div>
                <p className="text-[16px] font-bold">
                  Share this website with your <br /> friends
                </p>
              </div>
            </div>
            <div>
              <h4>QUICK LINK</h4>
              <ul className="">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Review</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <div>USEFUL LINKS</div>
              <div>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>FAQ's</li>
                </ul>
              </div>
            </div>
            <div>
              <h4>Contact Us</h4>
              <div className="flex items-center gap-2">
                <FaPhone />
                <div>
                  <div>
                    <a href="/">801-512-7103</a>
                  </div>
                  <div>
                    <a href="/">801-755-3040</a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <TbMailFilled />
                </div>
                <div className="ml-2">ashaacutah@gmail.com</div>
              </div>
              <div className="flex items-center">
                <div>
                  <PiMapPin />
                </div>
                <div>
                  <a href="/">
                    4434 W 8790 S West Jordan, <br /> Utah
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
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
            <div>
              <img src={poster} alt="" className="ml-[600px]" />
            </div>
          </div>
        </div>
        <div className="bg-foter h-[46px] flex justify-center items-center">
          <p className=" text-white">
            © Copyright 2023 ASHAAC.COM. All Right Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
