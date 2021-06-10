/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-16">
      <div className="md:container mx-auto h-full sm:max-w-500px md:grid md:grid-cols-2  lg:grid lg:grid-cols-4 ">

        <div className="px-6 mb-8">
          <h6 className=" md:text-3xl sm:text-2xl text-xl font-black mb-8">Homie</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <div className=" md:text-3xl sm:text-2xl text-xl font-black mb-8">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-pinterest"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        <div className="px-6 mb-8">
          <h6 className=" md:text-3xl sm:text-2xl text-xl font-normal mb-8 ">Contact Us</h6>
          <div className="contact-widget">

            <p className="mb-4"><i className="fa fa-map-marker"></i>3711-2880 Nulla St, Mankato, Mississippi </p>
            <p className="mb-4"><i className="fa fa-phone"></i>(+88) 666 121 4321</p>
            <p className="mb-4"><i className="fa fa-envelope"></i>info.homie@gmail.com</p>
            <p className="mb-4"><i className="fa fa-clock-o"></i>Mon - Sat, 08 AM - 06 PM</p>
          </div>
        </div>

        <div className="px-6 mb-8">
          <h5 className=" md:text-3xl sm:text-2xl text-xl font-normal mb-8 ">Popular Places</h5>
          <div className="">
            <ul>
              <li className="mb-4"><a href="">Quezon City</a></li>
              <li className="mb-4"><a href="">Makati City</a></li>
              <li className="mb-4"><a href="">Mandaluyong City</a></li>
              <li className="mb-4"><a href="">San Juan City</a></li>
              <li className="mb-4"><a href="">Taguig City</a></li>
            </ul>
            <ul>
              <li className="mb-4"><a href="">Pasig City</a></li>
              <li className="mb-4"><a href="">Marikina City</a></li>
              <li className="mb-4"><a href="">Paranaque City</a></li>
              <li className="mb-4"><a href="">Pasay City</a></li>
              <li className="mb-4"><a href="">Manila City</a></li>
            </ul>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="newslatter-widget">
          <h5 className=" md:text-3xl sm:text-2xl text-xl font-normal mb-8 ">Newsletter</h5>
          <p className="mb-4">Subscribe your email to get the latest news and new offer also discount</p>
            <form>
              <input className="w-full p-1" type="text" placeholder="Email address"/>
              <button><i className="fa fa-send"></i></button>
            </form>
          </div>
        </div>

      </div>

      <div className="md:container mx-auto mt-8 h-full sm:max-w-500px">
        <div className="px-6 mb-4 pt-8 border-t-2 border-gray-100">
          <ul className="max-w-500px mx-auto  flex justify-between">
            <li><a href="">Home</a></li>
            <li><a href="">Featured Listing</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="w-max px-6 mx-auto mb-4">
          <p>
          Copyright ©<script> document.write(new Date().getFullYear());</script>2021 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
