import React from "react";
import { FiWifi, FiCoffee, FiAirplay, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import {
  FaConciergeBell,
  FaCarSide,
  FaUtensils,
  FaHotel,
} from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { MdLocalAirport, MdTrain, MdDirectionsCar } from "react-icons/md";

const amenities = [
  { icon: <FiWifi size={40} />, label: "Wi-fi" },
  { icon: <MdLocalAirport size={40} />, label: "Airport transfers" },
  { icon: <FaUtensils size={40} />, label: "In room dining" },
  { icon: <FiCoffee size={40} />, label: "Tea and coffee maker" },
  { icon: <FaConciergeBell size={40} />, label: "24 hours reception" },
  { icon: <FaCarSide size={40} />, label: "Car parking" },
  {
    icon: <MdOutlineAirlineSeatReclineNormal size={40} />,
    label: "Air conditioner",
  },
  { icon: <MdOutlineLocalLaundryService size={40} />, label: "Laundry" },
];

const Amenities = () => {
  return (
    <section className="text-center py-12 bg-gradient-to-b from-red-200 to-white">
      <h2 className="text-4xl font-bold mb-10 font-serif">
        <span className="text-red-700 font-extrabold">A</span>menities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 justify-items-center">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 hover:text-red-800 transition"
          >
            <div className="mb-2 text-5xl">{item.icon}</div>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
          <MdLocalAirport className="text-lg" />
          <span className="font-semibold">8 km</span>
        </div>
        <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
          <MdTrain className="text-lg" />
          <span className="font-semibold">8 km</span>
        </div>
        <div className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-full">
          <MdDirectionsCar className="text-lg" />
          <span className="font-semibold">7 km</span>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
