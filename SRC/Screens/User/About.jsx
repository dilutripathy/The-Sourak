import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-red-100/50">
      <div className="md:py-10 py-5">
        <h1 className="font-extrabold text-5xl font-serif text-center text-red-700">
          <span className="text-black">Hotel</span> Information
        </h1>
      </div>
      <div>
        <p className="text-center text-xl px-2 md:px-10">
          Make the smart choice with our exclusive extended stay offer. When you
          stay for three nights or more, you’ll enjoy special savings on your
          accommodation and food & soft beverages. It’s a thoughtful way to
          enhance your experience while enjoying the comfort and care we’re
          known for.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:mx-10 md:px-10 mx-2 px-2 md:gap-10 border-2 rounded-lg border-red-700 md:py-10 md:my-10 my-2 py-2">
        <div className="space-y-2">
          <div>
            <p className="text-red-700 text-2xl font-bold">Contact</p>
          </div>
          <div className="flex items-center">
            <IoLocation size={50} />
            <p className="font-semibold">
              Opp. Nalco Headquarter, Jayadev Vihar, Nayapalli, Bhubaneswar,
              Orissa 751013
            </p>
          </div>
          <div className="flex items-center">
            <IoMdCall size={30} />
            <p className="font-semibold">+91 67466 63333</p>
          </div>
          <div className="flex items-center">
            <MdEmail size={30} />
            <p className="font-semibold">reservations@gingerhotels.com</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-red-700 text-2xl font-bold">
              Check-in & Check out time
            </p>
          </div>
          <div>
            <p className="font-bold">Check-in from 2:00 PM</p>
          </div>
          <div>
            <p className="font-bold">Check-out until noon</p>
          </div>
          <div>
            <p>
              Guests are required to show a photo identification and credit card
              upon check-in
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-red-700 text-2xl font-bold">No. of Rooms</p>
          </div>
          <div>
            <p className="font-bold">
              147 rooms in Luxe and Standard categories
            </p>
          </div>
          <div>
            <p className="text-red-700 text-2xl font-bold">Dining</p>
          </div>
          <div>
            <p className="font-bold">Available</p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-red-700 text-2xl font-bold">Hotel Essentials</p>
          </div>
          <div>
            <p className="font-bold">GST: 21AACCR6389J1Z4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
