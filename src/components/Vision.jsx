import lightImg from "./../assets/img/card-icon.png";
import qouteImg from "./../assets/img/quote-bg.png";

const Vision = () => {
  return (
    <div className="w-full sm:mt-14 mt-8">
      <h2 className="md:text-3xl text-2xl mb-4 font-semibold">
        The Vision of Future
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        eligendi cupiditate repudiandae dolorum laborum. Recusandae repellat
        quidem odit nostrum iure modi necessitatibus pariatur repudiandae amet!
      </p>
      <div className="mt-5 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center">
        <div className="flex flex-col justify-between items-start p-3 rounded-xl bg-blue-100 w-full text-black h-full max-w-sm mx-auto">
          <div>
            <img src={lightImg} className="sm:w-14 w-12 mb-2" alt="icon" />
            <h4 className="text-xl font-semibold mt-4">
              Digital Transformation
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              commodi ullam dignissimos distinctio nemo et laudantium deleniti
              ipsa, veniam expedita!
            </p>
          </div>
          <button className="py-1 px-4 rounded-md font-semibold bg-blue-600 text-white transition hover:bg-blue-700 mt-5 cursor-pointer">
            Learn More
          </button>
        </div>
        <div className="flex flex-col justify-between items-start p-3 rounded-xl bg-green-100 w-full text-black h-full max-w-sm mx-auto">
          <div>
            <img src={lightImg} className="sm:w-14 w-12 mb-2" alt="icon" />
            <h4 className="text-xl font-semibold mt-4">
              Digital Transformation
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              eius ipsa quo eum quod temporibus?
            </p>
          </div>
          <button className="py-1 px-4 rounded-md font-semibold bg-green-600 text-white transition hover:bg-green-700 mt-5 cursor-pointer">
            Learn More
          </button>
        </div>
        <div className="flex flex-col justify-between items-start p-3 rounded-xl bg-orange-100 w-full text-black h-full max-w-sm mx-auto">
          <div>
            <img src={lightImg} className="sm:w-14 w-12 mb-2" alt="icon" />
            <h4 className="text-xl font-semibold mt-4">
              Digital Transformation
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              temporibus corrupti vero, quo cumque aut, reiciendis nesciunt
              dignissimos voluptatem et facere eius.
            </p>
          </div>
          <button className="py-1 px-4 rounded-md font-semibold bg-orange-600 text-white transition hover:bg-orange-700 mt-5 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full bg-white p-3 mt-4 rounded-xl">
        <div
          className="w-full p-3 bg-white"
          style={{
            background: `url(${qouteImg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, ullam
            temporibus. Laudantium necessitatibus numquam dolore vel neque
            corporis atque alias deleniti obcaecati facere, ipsam corrupti dicta
            eveniet repellendus commodi nisi quod. Similique voluptas obcaecati
            reprehenderit commodi, dolorum consectetur ipsam veniam.
          </p>
          <h3 className="text-lg font-medium mt-4">Dr. Muhammad Yunus</h3>
          <p className="text-gray-600">
            Chief Adviser of the People&apos;s Republic of Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
