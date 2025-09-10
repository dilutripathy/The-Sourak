import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const Logo =
    "https://cdn.pixabay.com/photo/2023/09/12/20/41/ai-generated-8249555_1280.png";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const getLinkClass = (path) => {
    console.log("path======>", path);
    return Location.pathname === path
      ? "font-bold text-red-800 cursor-pointer tracking-wide"
      : "font-bold hover:text-red-800 cursor-pointer tracking-wide";
  };
  return (
    <div>
      <div className="hidden md:block">
        <div className="hidden md:flex justify-between bg-red-800 py-3 px-10 text-gray-300 font-bold">
          <div className="flex gap-2">
            <LuPhoneCall size={20} />
            <h1>+91-7978272696, 9861484493, 8638123269</h1>
          </div>
          <div className="flex gap-5">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="flex justify-between px-10 items-center py-2 md:gap-2">
          <div className="flex gap-5 justify-center items-center">
            <img src={Logo} alt="logo" className="w-20 h-20" />
            <h1 className="font-bold font-serif text-2xl">
              The <span className="text-red-700">Sourak</span>
            </h1>
          </div>
          <div className="flex gap-10 text-gray-500">
            <h1 className={getLinkClass("/")} onClick={() => navigate("/")}>
              Home
            </h1>
            <h1
              className={getLinkClass("/About")}
              onClick={() => navigate("/About")}
            >
              About
            </h1>
            <h1
              className={getLinkClass("/Contact")}
              onClick={() => navigate("/Contact")}
            >
              Contact
            </h1>
            <h1
              className={getLinkClass("/Rooms")}
              onClick={() => navigate("/Rooms")}
            >
              Rooms
            </h1>
          </div>
          <div>
            <button
              className="lg:px-4 lg:py-2 md:px-1 md:py-0 bg-black text-white rounded font-semibold hover:scale-105 hover:bg-gradient-to-r from-red-700 to-black"
              onClick={() => setShowModal(true)}
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="py-2 px-2 flex justify-center items-center gap-2">
          <img src={Logo} alt="logo" className="md:hidden w-20 " />
          <h1 className="font-bold font-serif text-2xl md:hidden">
            The <span className="text-red-700">Sourak</span>
          </h1>
        </div>
        <div className="md:hidden flex justify-end">
          <button className="p-2 cursor-pointer animation" onClick={toggleMenu}>
            <MdOutlineMenu size={30} />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
            isMenuOpen ? "translate-x-100" : "translate-x-0"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`py-2 px-2 fixed top-0 right-0 w-64 h-full bg-white shadow-md `}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={Logo} alt="logo" className="md:hidden w-16 " />
            <button onClick={toggleMenu} className="absolute top-3 right-2">
              <IoMdCloseCircleOutline size={30} />
            </button>
          </div>
          <div className="py-2 absolute top-20 left-16 space-y-5 pl-4">
            <h1
              className="hover:text-[#814730] hover:text-semibold hover:translate-x-1 duration-300 ease-in-out"
              onClick={() => navigate("/About")}
            >
              About
            </h1>
            <h1
              className="hover:text-[#FB2E86] hover:text-semibold hover:translate-x-1 duration-300 ease-in-out"
              onClick={() => navigate("/Products")}
            >
              Products
            </h1>
            <h1
              className="hover:text-[#FB2E86] hover:text-semibold hover:translate-x-1 duration-300 ease-in-out"
              onClick={() => navigate("/Contact")}
            >
              Contact
            </h1>
            <button
              className="px-3 bg-black text-white hover:ring-4 rounded"
              onClick={() => setShowModal(true)}
            >
              Book Your Stay
            </button>
          </div>
        </div>
      ) : null}
      {showModal && (
        <div
          className="fixed bg-black/50 z-50 inset-0 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-[300px] h-[450px] bg-white p-5 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-3">
              <h1 className="font-bold">We Will Contact You</h1>
              <input
                type="text"
                placeholder="Name"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border rounded p-2 w-full"
              />
              <input
                type="text"
                placeholder="Email (Optional)"
                className="border rounded p-2 w-full"
              />
              <textarea
                name="Message"
                id=""
                placeholder="Message"
                className="w-full border rounded h-20 p-2"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button className="text-black border border-black px-2 py-1 rounded">
                  Cancel
                </button>
                <button
                  className="bg-black text-white px-2 py-1 border border-black rounded"
                  onClick={() => setShowModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
