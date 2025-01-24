import React from "react";
import { useTranslation } from "react-i18next";
import loogoo from "../assets/loogoo.jpg";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <img src={loogoo} alt="Fantasy Arena Logo" className="w-28 h-28 mb-4" />
          <h3 className="text-xl font-bold">{t("footer.connect")}</h3>
          <h2 className="mt-4 text-lg font-bold">{t("footer.email")}</h2>
          <p className="mt-1">{t("footer.support")}</p>
        </div>

        {/* Questions or Suggestions */}
        <div className="flex flex-col items-center">
          <button className="mt-6 flex items-center px-4 py-2 bg-white hover:bg-gray-200 hover:text-gray-800 border-2 border-b-4 border-black rounded-full text-gray-500 font-semibold text-sm shadow-md transition duration-300">
            {t("footer.questions")}
            <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
              ➙
            </span>
          </button>

          <h3 className="text-xl text-white font-bold mt-6">{t("footer.follow")}</h3>
          {/* Social Icons */}
          <ul className="flex space-x-4 mt-4 justify-center">
            <li>
              <a
                href="https://twitter.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
              >
                <img src={twitter} alt="Twitter" className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
              >
                <img src={facebook} alt="Facebook" className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-400 w-10 h-10 flex items-center justify-center rounded-full shadow-md"
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 mb-10 border-t-2 border-green-800 mx-auto w-3/4"></div>
    </div>
  );
};

export default Footer;
