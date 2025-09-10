import React from "react";
import { MdOutlineDining } from "react-icons/md";

const Rooms = () => {
  const roomInterfaceCard = [
    {
      img: "https://nexthotelmelbourne.com/wp-content/uploads/2024/03/Next-Level-King-Room-scaled.jpg",
      bedSize: "Single Bed Room",
      allowed: "Allowed Person 3",
      level: "Basic",
      price: "₹1999",
    },
    {
      img: "https://vwartclub.com/media/projects/3322/1.jpg",
      bedSize: "Single Bed Room",
      allowed: "Allowed Person 3",
      level: "Premium",
      price: "₹2999",
    },
    {
      img: "https://www.parkregiskriskin.ae/wp-content/uploads/2020/07/room-twin-bed-2520x1400.jpg",
      bedSize: "Twin Bed Room",
      allowed: "Allowed Person 4",
      level: "Basic",
      price: "₹3599",
    },
    {
      img: "https://www.italianbark.com/wp-content/uploads/2018/01/Muji-Hotel-Shenzhen-02-hotel-room-design-trends-italianbark-.jpg.webp",
      bedSize: "Twin Bed Room",
      allowed: "Allowed Person 4",
      level: "Premium",
      price: "₹4599",
    },
    {
      img: "https://mir-s3-cdn-cf.behance.net/projects/808/94dae2226454649.Y3JvcCwzMDAwLDIzNDYsMCw0MDA.jpg",
      bedSize: "Single Bed Room",
      allowed: "Allowed Person 3",
      level: "Luxury",
      price: "₹5999",
    },
    {
      img: "https://d1h6dnptlo7xad.cloudfront.net/app/uploads/2020/10/FR-Luxury-Double-Night_web.jpg",
      bedSize: "Twin Bed Room",
      allowed: "Allowed Person 4",
      level: "Luxury",
      price: "₹6599",
    },
  ];
  return (
    <div className="py-5 md:pb-10 px-2 md:px-0">
      <div>
        <h1 className="text-center font-bold text-3xl pt-5 pb-10 font-serif">
          <span className="text-red-700">R</span>ooms
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:px-10 px-2 lg:gap-10 gap-5">
        {roomInterfaceCard.map((roomData, index) => (
          <div className="hover:scale-105 border rounded-lg shadow-lg relative">
            <div>
              <img
                src={roomData.img}
                alt="Room"
                className="w-[450px] h-[300px] rounded-t-lg object-cover"
              />
            </div>
            <div className="md:flex md:justify-between py-3 border-b-2 px-5">
              <div className="space-y-2">
                <div>
                  <h1 className="text-black font-bold md:text-xl text-lg">
                    {roomData.bedSize}
                  </h1>
                </div>
                <div>
                  <h3 className="text-red-700 font-bold">{roomData.allowed}</h3>
                </div>
                <div className="absolute top-2 right-3">
                  <button className="px-3 py-1 font-semibold bg-red-800 text-white rounded-lg">
                    {roomData.level}
                  </button>
                </div>
                <div className="">
                  <p className="text-gray-400 flex items-center">
                    <MdOutlineDining /> 24-hour-dining-room
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="pt-2 md:pt-0">
                  <p>🛜 free wifi with 1GBPS</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Price</p>
                  <p className="text-lg font-bold">{roomData.price}</p>
                </div>
                <div>
                  <p className="text-gray-400">price for 24 hours</p>
                </div>
              </div>
            </div>
            <div className="text-right py-2 px-5">
              <u className="text-lg font-bold text-red-700 cursor-pointer">
                View Details →
              </u>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rooms;
