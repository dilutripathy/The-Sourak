import React from "react";
import { GrLocationPin } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const ContactPic =
    "https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg";
  return (
    <div className="bg-red-50/50">
      <div className="space-y-5 py-10">
        <h1 className="text-center font-bold text-2xl md:text-4xl font-serif">
          Get in Touch <span className="text-red-700">with Us</span>
        </h1>
        <p className="text-center text-gray-700 md:px-40 lg:px-80 text-xl px-5">
          We're here to help and answer any question you might have. We look
          forward to hearing from you! Reach out to us through any of the
          following contact details or fill out the form below, and we'll get
          back to you as soon as possible.
        </p>
      </div>
      <div className="md:flex justify-center md:gap-20 lg:gap-56 space-y-3 md:space-y-0">
        <div>
          <div className="flex justify-center items-center gap-2">
            <GrLocationPin size={20} />
            <h1 className="font-bold text-xl text-center">Address</h1>
          </div>
          <p className="text-center">123 Street Name, City, State, 12345</p>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <IoCall />
            <h1 className="font-bold text-xl text-center">Phone</h1>
          </div>
          <p className="text-center">+1 234 567 890</p>
        </div>
        <div>
          <div className="flex justify-center items-center gap-2">
            <MdOutlineEmail />
            <h1 className="font-bold text-xl text-center">Email</h1>
          </div>
          <p className="text-center">contact@thesourak.com</p>
        </div>
      </div>
      <div className="lg:flex px-10 gap-5 py-10">
        <div className="w-[100%] h-[80%]">
          <img src={ContactPic} alt="" className="rounded-lg " />
        </div>
        <div className="w-full space-y-5">
          <div className="flex justify-center pt-5 lg:pt-0">
            <h1 className="text-center font-extrabold text-red-600 text-2xl xl:text-4xl tracking-wider font-serif">
              <span className="text-black">CONTACT</span> FORM
            </h1>
          </div>
          <div className="md:flex gap-10">
            <div className="w-full">
              Your Name <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="shadow-sm border rounded-lg p-2 w-full"
              />
            </div>
            <div className="w-full">
              Your Email <br />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="shadow-sm border rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            Subject <br />
            <input
              type="text"
              placeholder="Enter Subject"
              className="shadow-sm border rounded-lg p-2 w-full"
            />
          </div>
          <div className="w-full">
            Your Message <br />
            <textarea
              name="Your Message"
              id=""
              placeholder="Your Message"
              className="border rounded-lg p-2 w-full h-32 shadow-sm"
            ></textarea>
          </div>
          <div className="w-full">
            <button className="bg-red-600 text-white w-full rounded py-2">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
