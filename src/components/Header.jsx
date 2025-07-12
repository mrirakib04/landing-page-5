import bannerImg from "./../assets/img/hero.png";

const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-between lg:p-4 p-2">
        <h2 className="text-2xl font-bold">
          <a href="./../../index.html">Bangladesh 2.0</a>
        </h2>
        <button className="text-lg font-semibold px-6 py-1 rounded-xl border-2 text-green-800 border-green-800 hover:bg-green-800 hover:text-white transition cursor-pointer">
          Sign In
        </button>
      </div>
      <div className="flex items-center gap-5 md:flex-nowrap flex-wrap-reverse w-full p-5 bg-green-200 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-medium text-gray-600">Bangladesh 2.0</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Idea , innovation, vision and challenges in New Bangladesh.
          </h2>
          <div>
            <button className="text-lg font-medium py-2 px-4 rounded-xl bg-green-800 mt-4 text-white transition hover:bg-green-700">
              Explore New Bangladesh
            </button>
          </div>
        </div>
        <img
          className="lg:w-sm md:w-2xs mx-auto"
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </div>
  );
};

export default Header;
