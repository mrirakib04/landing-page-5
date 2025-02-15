import lightImg from "./../assets/img/card-icon.png";

const Pillars = () => {
  return (
    <div className="w-full sm:mt-14 mt-8">
      <h3 className="md:text-3xl text-2xl mb-4 font-semibold">
        Pillars of &apos;Bangladesh 2.0&apos;
      </h3>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="p-3 rounded-xl bg-white text-black h-full max-w-sm mx-auto">
          <img src={lightImg} className="w-12 mb-2" alt="icon" />
          <h4 className="text-lg font-medium mb-1 mt-4">Innovation</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi a
            enim aliquid.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white text-black h-full max-w-sm mx-auto">
          <img src={lightImg} className="w-12 mb-2" alt="icon" />
          <h4 className="text-lg font-medium mb-1 mt-4">Sustainability</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            cupiditate iure facilis officia ratione.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white text-black h-full max-w-sm mx-auto">
          <img src={lightImg} className="w-12 mb-2" alt="icon" />
          <h4 className="text-lg font-medium mb-1 mt-4">Infrastructure</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            quia necessitatibus nihil! Sequi quam quaerat modi at.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white text-black h-full max-w-sm mx-auto">
          <img src={lightImg} className="w-12 mb-2" alt="icon" />
          <h4 className="text-lg font-medium mb-1 mt-4">Empowerment</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            cupiditate iure facilis officia ratione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
