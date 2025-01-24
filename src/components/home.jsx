
import arenalogo from "../assets/arenalogo.png";
import Card from "../assets/card.jpg"; // The background image for the "Our Mission" section
import feature from "../assets/feature.png";
import ball from "../assets/ball.png";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import Groupp from "../assets/Groupp.png";
import phone from "../assets/phone.png";
import trophy from "../assets/trophy.jpeg";
import OBJECT from "../assets/OBJECT.png";
import play from "../assets/play.jpg";
import React from "react";
import logoa from "../assets/logoa.png";
import { useTranslation } from 'react-i18next';


import Slider from 'react-slick';

function Home() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
 
 
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr'); // Adjust direction for Arabic
    };
  

 
  // JavaScript to handle the carousel swipe control
const carousel = document.getElementById('carousel');
const lines = document.querySelectorAll('.absolute .h-1'); // Get the control lines

// Function to move the carousel to a specific index (0 for Bronze, 1 for Gold, 2 for Silver)
function slideTo(index) {
  const slideWidth = carousel.children[0].offsetWidth + 12; // Width of each slide including the gap
  carousel.scrollLeft = slideWidth * index;
  
  // Highlight the active line
  lines.forEach((line, i) => {
    if (i === index) {
      line.style.backgroundColor = 'yellow'; // Change to active color
    } else {
      line.style.backgroundColor = 'white'; // Reset inactive lines
    }
  });
}

// Optional: Add scroll event to highlight the active line based on scroll position

  // Highlight the active line based on the carousel's scroll position
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  
  return (
    <div className="min-h-screen font-montserrat bg-[rgb(29,30,31)] flex-grow flex flex-col overflow-x-hidden sm:px-6 md:px-0 lg:px-0 text-white items-center px-0">
  {/* Hero Section */}
  
  <div className="fixed bottom-5 right-5 z-30">
  <button className="flex items-center justify-center bg-green-700 text-white py-1 px-2 rounded-xl text-sm font-semibold shadow-lg transition duration-300 hover:bg-green-700">
    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-l-lg transition-colors duration-300" onClick={() => changeLanguage('en')}
     > Eng
    </span>

    {/* Small line divider */}
    <span className="border-l-2 border-white h-6 mx-2"></span>

    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-r-lg transition-colors duration-300" onClick={() => changeLanguage('ar')}>
    العربية
    </span>
  </button>
</div>

  
<div className="absolute w-full h-full z-1 shadow-lg border-collapse clip-parallelogram-mirror"></div>

<div className="absolute w-full h-full z-1 shadow-lg  border-collapse clip-parallelogram-mirror"></div>

  <div className="flex flex-col lg:flex-row mt-12 px-6 lg:px-11 lg:pr-8 items-center justify-center w-full relative">
      {/* Left Side: Text and Button */}
<div
  className={`flex-1 max-w-lg mt-0 lg:mt-4 lg:mb-16 mb-11 ${
    i18n.language === "ar" ? "lg:text-start lg:pr-8 text-center" : "lg:text-left lg:pl-8 text-center"
  }`}
>
  {/* Main Heading */}
  <h1
    className={`text-3xl sm:text-4xl font-extrabold text-green-600 mb-4 ${
      i18n.language === "ar" ? "lg:text-start text-center" : "lg:text-left text-center"
    }`}
  >
    {t("home.beReady")} <span className="text-white">{t("home.experience")}</span>
  </h1>

  {/* Image/Icon after Heading (for Mobile) */}
  <div className="flex justify-center lg:hidden mt-8 mb-10">
    <img
      src={arenalogo}
      alt="Group Icons"
      className="w-64 sm:w-64 h-64 sm:h-64 object-contain"
    />
  </div>

  {/* Subheading */}
  <h3
    className={`text-xl sm:text-2xl text-gray-300 font-semibold mb-4 ${
      i18n.language === "ar" ? "lg:text-right text-center" : "lg:text-left text-center"
    }`}
  >
    {t("home.fromFantasyToVictory")}
  </h3>
  <p
    className={`text-gray-100 mb-6 mt-6 leading-relaxed ${
      i18n.language === "ar" ? "lg:text-right text-center" : "lg:text-left text-center"
    }`}
  >
    {t("home.description")}
  </p>

  {/* Button */}
  <button
    className={`mt-6 flex mx-auto lg:mx-0 items-center px-4 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300 ${
      i18n.language === "ar" ? "mr-auto sm:mx-auto" : "ml-auto sm:mx-auto"
    }`}
  >
    {t("home.signUpButton")}
    <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
      ➙
    </span>
  </button>
</div>


      {/* Right Side: Image (Visible for Desktop) */}
      <div className="hidden lg:flex flex-1 justify-center items-center relative mt-6 lg:mt-0 lg:mb-12">
        <img
          src={arenalogo}
          alt="Group"
          className="w-1/2 h-auto object-contain z-10"
        />
      </div>
    </div>






 {/* "Our Mission" Section with Background Image */}
 <div
      id="about"
      className="w-full flex justify-center my-7 px-4 z-10"
    >
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-4xl bg-cover bg-center rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${Card})` }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl py-6 md:py-9 mt-6 md:mt-11 font-bold">
              {t("about.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-md mt-0 px-4 sm:px-8 md:px-11 py-3 md:py-4 leading-6 sm:leading-7">
              {t("about.description")}
            </p>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-md py-3 md:py-4 px-4 sm:px-8 md:px-11 mb-6 md:mb-10 leading-6 sm:leading-7">
              {t("about.joinUs")}
            </p>
          </div>
        </div>
      </div>
    </div>


{/* FEATURES */}
<div id="feature" className="flex my-2 lg:mt-2 sm:mt-0 items-center w-full">
  <div className="relative w-full px-6 my-2 lg:mt-2 sm:mt-0 lg:mb-10 mb-12 lg:px-11">
    {/* Green Shape Background */}
    {/* Desktop View */}
    <div
      className="hidden lg:block absolute clip-parallelogram-mirror"
      style={{
        // For Arabic, set right position
        top: "0%",
        right: "0%",
        width: "60%",
        height: "120%",
      }}
    ></div>

    {/* Mobile View */}
    <div
      className="block lg:hidden absolute clip-parallelogram-mirror w-full"
      style={{
        top: "-2%",
        right: "0%",
        width: "150%",
        height: "120%",
        transform: "rotate(5deg)",
      }}
    ></div>

    {/* Feature Section */}
    <div className="relative flex flex-col lg:flex-row mt-2 items-center w-full z-10">
      <h1 className="text-4xl sm:text-4xl lg:hidden font-extrabold text-white mb-4 text-center">
        {t("features.title")}
      </h1>

      {/* Left: Images */}
      <div className="relative flex-1 flex items-center justify-center lg:justify-center lg:items-center lg:left-2 mt-8">
        {/* First Image */}
        <img
          src={phone}
          alt={i18n.language === "ar" ? "ميزة الهاتف" : "Phone Feature"}
          className="w-56 lg:w-72 h-auto object-contain relative z-10 transform lg:translate-x-[-40px] translate-x-0"
        />
        {/* Second Image */}
        <img
          src={feature}
          alt={i18n.language === "ar" ? "ميزة" : "Feature"}
          className="w-64 sm:w-84 lg:w-3/4 h-auto object-contain absolute z-20 transform lg:translate-x-[20px] translate-x-[40px]"
        />
      </div>

      {/* Right: Text */}
      <div
        className={`flex-1 max-w-lg text-center ${
          i18n.language === "ar" ? "lg:text-right" : "lg:text-left"
        } mt-6 lg:mt-0`}
      >
        <h1 className="text-3xl hidden lg:flex font-extrabold text-white mb-4">
          {t("features.title")}
        </h1>
        <h3 className="text-lg font-bold text-gray-200 mb-4">
          {t("features.subtitle")}
        </h3>

        {/* Features List */}
        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-md font-bold">• {t("features.feature1.title")}</h2>
            <p>{t("features.feature1.description")}</p>
          </div>
          <div>
            <h2 className="text-md font-bold">• {t("features.feature2.title")}</h2>
            <p>{t("features.feature2.description")}</p>
          </div>
          <div>
            <h2 className="text-md font-bold">• {t("features.feature3.title")}</h2>
            <p>{t("features.feature3.description")}</p>
          </div>
        </div>

       {/* Button */}
<button
  className={`mt-6 flex items-center px-4 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300 ${
    i18n.language === "ar" ? "lg:ml-auto" : "lg:mr-auto"
  } mx-auto lg:mx-0`}
>
  {t("features.button")}
  <span
    className={`${
      i18n.language === "ar" ? "mr-2" : "ml-2"
    } flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner`}
  >
    ➙
  </span>
</button>
      </div>
    </div>
  </div>
</div>
   



<div className="relative w-full mt-0 mb-6 px-6 lg:px-11 items-center">
  {/* Background parallelogram */}
  <div
     className="hidden lg:block absolute clip-parallelogram-mirror"
     style={{
       // For Arabic, set right position
       top: "10%",
       right:"50%",
    width: "55%",
    height: "90%",
    clipPath: "polygon(0% 0%, 75% 0%, 100% 85%, 0% 100%)",
  }}
></div>

  {/* Mobile View */}
  <div
    className="block lg:hidden absolute clip-parallelogram-mirror w-full"
    style={{
      top: "-5%",
      right: "0%",
      width: "130%",
      height: "120%",
    }}
  ></div>

  {/* Desktop and Tablet Layout */}
  <div className="relative hidden lg:flex items-center w-full z-10">
    {/* Left Side: Text */}
    <div
      className={`flex-1 max-w-lg ${
        i18n.language === "ar" ? "pr-11 text-right" : "pl-11 text-left"
      }`}
    >
      <h1 className="text-4xl font-bold text-white mb-4">{t("mobileApp.title")}</h1>
      <p className="text-gray-200 mb-6 mt-8 leading-relaxed">
        {t("mobileApp.description")}
      </p>
    </div>

    {/* Right Side: Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={Groupp}
        alt="Mobile App"
        className="w-80 h-full object-contain"
      />
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="lg:hidden flex flex-col items-center text-center w-full z-10 relative">
    <h1 className="text-3xl font-bold text-white mb-4">{t("mobileApp.title")}</h1>
    <img
      src={Groupp}
      alt="Mobile App"
      className="w-48 sm:w-60 mb-4 h-auto object-contain"
    />
    <p className="text-gray-400 leading-relaxed">
      {t("mobileApp.description")}
    </p>
  </div>
</div>



{/* ARENA SCORING SYSTEM */}


<div className="my-5 px-6 lg:px-11 flex justify-center items-center">
  {/* Outer Container for Centering */}
  <div className="max-w-4xl w-full">

    {/* Title Section */}
    <div className="flex flex-wrap px-4 items-center text-center justify-center text-2xl lg:text-4xl mt-5 font-bold">
      <span className="text-white whitespace-nowrap">{t("scoringSystem.title1")}</span>
      <span className="text-green-600 ml-2 lg:ml-2 whitespace-nowrap">{t("scoringSystem.title2")}</span>
    </div>

    {/* Description Section */}
    <p className="items-center flex justify-center mt-6 px-4 lg:px-10 text-md text-center lg:text-center">
      {t("scoringSystem.description")}
    </p>

   {/* Centered Button Container */}
<div className="flex justify-center items-center ">
  {/* Stay Updated Button */}
  <button className="mt-6 flex items-center mx-auto px-6 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
    {t("scoringSystem.stayUpdated")}
    <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
      ➙
    </span>
  </button>
</div>


    {/* Scoring System Section */}
    <div className="flex flex-col lg:flex-row mt-11 w-full max-w-4xl bg-transparent overflow-hidden shadow-lg space-y-4 lg:space-y-0 lg:space-x-4 mx-auto">
      
      {/* Right Side: Image with Overlay Text */}
      <div className="flex-1 relative order-1 lg:order-2">
        <div className="relative h-full">
          <img
            src={trophy}
            alt="Action Points Illustration"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", height: "100%" }}
          />
          {/* Button at Top Left */}
          <div className="absolute top-4 left-4">
            
          </div>
          {/* Date and League Info at Bottom Left */}
          <div className={`absolute bottom-36 ${i18n.language === "ar" ? "right-6 text-right" : "left-6 text-left"} text-white`}>
  <p className="text-2xl mb-10 font-extrabold text-italic">
    {t("scoringSystem.leagueInfo")}
  </p>
</div>

        </div>
      </div>

      {/* Left Side: Text */}
      <div className="flex-1 p-8 order-2 lg:order-1 bg-[rgb(7,7,7)]">
        {/* Flex for mobile and desktop */}
        <div className="flex flex-wrap gap-0 text-gray-300">
          
          {/* Left Column: Action */}
          <div className="lg:w-1/2 mt-2 w-4/5 mx-auto pr-0 pl-4">
            <ul className="space-y-2">
              <li className="text-white font-bold text-lg">{t("scoringSystem.actions")}</li>
              {["goal", "assist", "keyPass", "cleanSheetDefender", "cleanSheetGoalkeeper", "save", "yellowCard", "redCard", "penaltyMissed", "penaltySaved", "ownGoal"].map(action => (
                <li key={action} className="text-sm">{t(`scoringSystem.actionsList.${action}`)}</li>
              ))}
            </ul>
          </div>

          {/* Right Column: Points */}
          <div className="w-0 lg:w-1/2 mt-2 text-center pr-12  lg:pr-0">
            <ul className="space-y-2">
              <li className="text-white font-bold text-lg ">{t("scoringSystem.points")}</li>
              {["goalPoints", "assistPoints", "keyPassPoints", "cleanSheetDefenderPoints", "cleanSheetGoalkeeperPoints", "savePoints", "yellowCardPoints", "redCardPoints", "penaltyMissedPoints", "penaltySavedPoints", "ownGoalPoints"].map(point => (
                <li key={point} className={`text-white text-sm font-semibold ${point.includes("Points") && point.includes("red") ? "text-red-500" : ""}`}>
                  {t(`scoringSystem.pointsList.${point}`)}
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

    </div>
  </div>
</div>



{/* Subscription Benefits */}
<div id="subscription" className="flex flex-col items-center text-center w-full my-8">
  <section dir={i18n.language === "ar" ? "rtl" : "ltr"} className="flex flex-col items-center px-11 w-full">
    <h1 className="text-green-600 text-4xl font-bold mt-0 lg:mt-8 mb-8">
      {i18n.language === "ar" ? "فوائد" : "Subscription "}
      <span className="text-white">
        {i18n.language === "ar" ?  "الاشتراك" : "Benefits"}
      </span>
    </h1>

    {/* Desktop View: Regular Tier Cards */}
    <div className="hidden lg:flex gap-8 justify-center mb-0 w-full">
      {/* Bronze Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={bronze} alt="Bronze Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-orange-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى البرونزي" : "Bronze Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          {i18n.language === "ar"
            ? "كل الأدوات الأساسية لبدء رحلتك مع فانتازي أرينا. انضم إلى دوري واحد، احصل على إحصائيات اللاعبين، واستمتع بإثارة رياضات الفانتازي"
            : "Join up to 2 leagues per month. Basic player stats: access essential player details such as goals, assists, and match appearances...more."}
        </p>
      </div>

      {/* Gold Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-80 h-80 flex-shrink-0">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={ball} alt="Gold Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-yellow-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى الذهبي" : "Gold Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          {i18n.language === "ar"
            ? "الوصول الكامل لتجربة فانتازي أرينا. انضم إلى عدة دوريات، واستمتع بتفاصيل دقيقة عن اللاعبين، وتنافس على أعلى مستوى للفوز بجوائز كبيرة."
            : "Join 6 leagues per month. Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more."}
        </p>
      </div>

      {/* Silver Tier */}
      <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
          <img src={silver} alt="Silver Tier Icon" className="w-10 h-auto" />
        </div>
        <h2 className="text-gray-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى الفضي" : "Silver Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          {i18n.language === "ar"
            ? "وسع آفاقك في عالم كرة القدم الفانتازي مع الوصول إلى دوريات إضافية وتحديثات حصرية عن اللاعبين"
            : "Join up to 4 leagues per month. Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form."}
        </p>
      </div>
    </div>

    {/* Mobile View: Swipeable Carousel */}
    <div className="lg:hidden overflow-x-auto w-full px-0">
      <div className="flex gap-12" id="carousel">
        {/* Silver Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full mt-4 w-16 h-16 mb-4 mx-auto">
            <img src={silver} alt="Silver Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-gray-500 text-xl font-bold mb-2">
            {i18n.language === "ar" ? "المستوى الفضي" : "Silver Tier"}
          </h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            {i18n.language === "ar"
              ? "وسع آفاقك في عالم كرة القدم الفانتازي مع الوصول إلى دوريات إضافية وتحديثات حصرية عن اللاعبين"
              : "Join up to 4 leagues per month. Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form."}
          </p>
        </div>

        {/* Gold Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
            <img src={ball} alt="Gold Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-yellow-500 text-xl font-bold mb-2">
            {i18n.language === "ar" ? "المستوى الذهبي" : "Gold Tier"}
          </h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            {i18n.language === "ar"
              ? "الوصول الكامل لتجربة فانتازي أرينا. انضم إلى عدة دوريات، واستمتع بتفاصيل دقيقة عن اللاعبين، وتنافس على أعلى مستوى للفوز بجوائز كبيرة."
              : "Join 6 leagues per month. Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more."}
          </p>
        </div>

        {/* Bronze Tier */}
        <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-72 h-72 flex-shrink-0">
          <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mx-auto">
            <img src={bronze} alt="Bronze Tier Icon" className="w-10 h-auto" />
          </div>
          <h2 className="text-orange-500 text-xl font-bold mb-2">
            {i18n.language === "ar" ? "المستوى البرونزي" : "Bronze Tier"}
          </h2>
          <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
          <p className="text-sm text-white opacity-80">
            {i18n.language === "ar"
              ? "كل الأدوات الأساسية لبدء رحلتك مع فانتازي أرينا. انضم إلى دوري واحد، احصل على إحصائيات اللاعبين، واستمتع بإثارة رياضات الفانتازي"
              : "Join up to 2 leagues per month. Basic player stats: access essential player details such as goals, assists, and match appearances...more."}
          </p>
        </div>
      </div>
    </div>
  </section>
</div>






<div
  className={`flex px-16 items-center w-full mt-5 mb-5 ${
    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
  }`}
>
  {/* Left Side: Text and Button */}
  <div
    className={`flex-[2] mb-0 max-w-lg ${
      i18n.language === "ar" ? "text-right pr-11" : "text-left pl-11"
    } hidden lg:block`}
  >
    <h1 className="text-4xl font-bold text-green-600 mb-4">
      {i18n.language === "ar" ? "فوائد" : "Referral "}
      <span className="text-white">
        {i18n.language === "ar" ? "الإحالة" : "Benefits"}
      </span>
    </h1>
    <h3 className="text-lg font-extrabold text-gray-100 mb-4">
      {i18n.language === "ar"
        ? "احصل على ترقيات مجانية في المستويات ومكافآت مثيرة"
        : "Earn Free Tier Upgrades and Exciting Rewards."}
    </h3>
    <button className="mt-2 flex items-center px-3 py-1 bg-white hover:bg-green-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      {i18n.language === "ar" ? "نضم إلى النسخة التجريبية الآن" : "Sign up for our beta"}
      <span
        className={`${
          i18n.language === "ar" ? "mr-2" : "ml-2"
        } flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner`}
      >
        ➙
      </span>
    </button>

    <h1 className="text-green-600 font-extrabold text-md mt-8">
      {i18n.language === "ar"
        ? "ادعُ أصدقاءك لفتح ميزات حصرية"
        : "INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm font-medium">
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٣ أصدقاء: المستوى البرونزي لمدة شهر واحد"
          : "3 Friends: Bronze Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٥ أصدقاء: المستوى الفضي لمدة شهر واحد"
          : "5 Friends: Silver Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "١٠ أصدقاء: المستوى الذهبي لمدة شهر واحد"
          : "10 Friends: Gold Tier for 1 Month."}
      </li>
    </ul>

    <h1 className="text-green-600 font-extrabold text-md mt-4">
      {i18n.language === "ar" ? "بالإضافة إلى فرصة للفوز" : "PLUS, STAND A CHANCE TO WIN"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm font-medium">
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "قسيمة هدية (على سبيل المثال: متجر نايكي)" : "Gift Vouchers (e.g., Nike Store)."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "ائتمان محطة الجوع" : "HungerStation Credits."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "الإقامة في فندق فاخر" : "Luxury Hotel Staycations."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "خصومات حصرية على الميزات المستقبلية" : "Exclusive Discounts on Future Features."}
      </li>
    </ul>
  </div>

  {/* Right Side: Image */}
  <div className="flex-[1] px-1 hidden lg:flex justify-center items-center w-1/2">
    <img
      src={logoa}
      alt={i18n.language === "ar" ? "مجموعة" : "Group"}
      className="w-[80%] max-w-[800px] h-auto object-contain transition-transform duration-500 ease-in-out transform scale-100 hover:scale-110"
      style={{ maxHeight: "100%", objectFit: "contain", paddingTop: 0, paddingBottom: 0 }}
    />
  </div>
</div>


{/* Mobile View Adjustments */}
<div className="lg:hidden flex flex-col items-center mt-0 mb-12 px-6">
  {/* 1. Referral Benefits Heading */}
  <h1 className="text-green-700 text-4xl font-bold mb-8 text-center">
    {i18n.language === "ar" ? "فوائد" : "Referral "}
    <span className="text-white">{i18n.language === "ar" ? " الإحالة" : "Benefits"}</span>
  </h1>

  {/* 2. Earn Free Tier Upgrades Text */}
  <h3 className="text-lg font-extrabold text-gray-100 mb-4 text-center">
    {i18n.language === "ar" ? "احصل على ترقيات مجانية في المستويات ومكافآت مثيرة"
      : "Earn Free Tier Upgrades and Exciting Rewards."}
  </h3>
  {/* 5. Image (Appears after text on mobile view) */}
  <div className="flex justify-center mt-8">
    <img
      src={OBJECT}
      alt={i18n.language === "ar" ? "مجموعة" : "Group"}
      className="w-5/6 h-auto object-contain" // Adjusted image size for mobile
    />
  </div>

  {/* 3. Invite Friends Section */}
  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      {i18n.language === "ar"
        ? "ادعُ أصدقاءك لفتح ميزات حصرية"
        : "INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "3 أصدقاء: المستوى البرونزي لمدة شهر واحد."
          : "3 Friends: Bronze Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "5 أصدقاء: المستوى الفضي لمدة شهر واحد."
          : "5 Friends: Silver Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "10 أصدقاء: المستوى الذهبي لمدة شهر واحد."
          : "10 Friends: Gold Tier for 1 Month."}
      </li>
    </ul>
  </div>

  {/* 4. Plus, Stand a Chance to Win */}
  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      {i18n.language === "ar" ? "بالإضافة إلى فرصة للفوز": "PLUS, STAND A CHANCE TO WIN"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "قسيمة هدية (على سبيل المثال: متجر نايكي)" : "Gift Vouchers (e.g., Nike Store)."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "ائتمان محطة الجوع" : "HungerStation Credits."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "الإقامة في فندق فاخر" : "Luxury Hotel Staycations."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "خصومات حصرية على الميزات المستقبلية" : "Exclusive Discounts on Future Features."}
      </li>
    </ul>
  </div>

  {/* Button at the End */}
  <div className="flex justify-center mt-8">
    <button className="mt-4 flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      {i18n.language === "ar" ? "نضم إلى النسخة التجريبية الآن" : "Sign up for our beta"}
      <span className="ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner">
        ➙
      </span>
    </button>
  </div>
</div>

  


    
  {/*SIGN UP AND STAY UPDATED*/}
     
  <div className="bg-black max-w-full w-full text-center text-green-700 lg:text-4xl mt-1 sm:text-3xl font-extrabold py-6 ">
  {t("signup.title")} <span className="text-white font-extrabold">{t("signup.andStayUpdated")}</span>
</div>



{/* FORM*/}
<div className="w-full flex justify-center my-12 px-4 py-4">
  <div
    className="w-full max-w-4xl bg-cover bg-center bg-gradient-to-br from-gray-950 via-green-900 to-green-700 rounded-3xl overflow-hidden flex p-4 relative"
    style={{ height: "450px" }}
  >
    {/* Left Side for Form */}
    <div className="w-full md:w-2/5 flex flex-col bg-[rgb(125,125,126)] rounded-3xl items-center justify-center px-6 py-6 absolute top-3 lg:left-6 left-0 z-10">
      <form className="w-full max-w-sm">
        <div className="mb-6 mt-9">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="name"
            type="text"
            placeholder={t("form.namePlaceholder")}
            aria-label={t("form.nameLabel")}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="email"
            type="email"
            placeholder={t("form.emailPlaceholder")}
            aria-label={t("form.emailLabel")}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="birthday"
            type="text"
            placeholder={t("form.birthdayPlaceholder")}
            aria-label={t("form.birthdayLabel")}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
            id="gender"
            type="text"
            placeholder={t("form.genderPlaceholder")}
            aria-label={t("form.genderLabel")}
            required
          />
        </div>

        {/* Checklist Option */}
        <div className="mb-10 flex items-center">
          <input
            className="form-checkbox h-5 w-5 text-green-500 bg-[rgb(29,30,31)] border-gray-400 rounded focus:ring-2 focus:ring-green-500"
            id="receiveEmails"
            type="checkbox"
          />
          <label
            htmlFor="receiveEmails"
            className="ml-3 text-gray-100 text-sm leading-tight"
          >
            {t("form.receiveEmails")}
          </label>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-white hover:bg-green-700 text-black font-bold py-2 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            {t("form.submitButton")}
          </button>
        </div>
      </form>
    </div>

    {/* Right Side for Image */}
    <div className="hidden md:flex w-2/3 items-end ml-auto">
      <img
        src={play}
        alt="Description of the image"
        className="w-full h-full pl-6 object-cover rounded-3xl shadow-lg"
      />
    </div>
  </div>
</div>



       
   
   
   
    </div>




    
  );
}

export default Home;
