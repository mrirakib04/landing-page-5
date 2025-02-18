import fbImg from "./../assets/img/facebook.png";
import instaImg from "./../assets/img/instagram.png";
import xImg from "./../assets/img/x.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 mt-10 py-2 items-center">
      <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold">
        Bangladesh 2.0
      </h2>
      <div className="w-full border border-gray-300"></div>
      <div className="flex items-center gap-4">
        <button className="transition border-2 border-transparent p-2 rounded-full cursor-pointer hover:border-gray-400 ">
          <img className="w-6" src={fbImg} alt="" />
        </button>
        <button className="transition border-2 border-transparent p-2 rounded-full cursor-pointer hover:border-gray-400 ">
          <img className="w-6" src={instaImg} alt="" />
        </button>
        <button className="transition border-2 border-transparent p-2 rounded-full cursor-pointer hover:border-gray-400 ">
          <img className="w-6" src={xImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
