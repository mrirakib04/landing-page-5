const Newsletter = () => {
  return (
    <div className="w-full px-2 sm:py-14 py-10">
      <div className="w-full bg-green-200 p-4 rounded-xl flex flex-col items-center">
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          Subscribe Newsletter
        </h3>
        <p className="max-w-xl text-center mt-3">
          Bangladesh 2.0 aims to redefine the nation&apos;s trajectory by
          embracing cutting-edge technology, promoting inclusive growth.
        </p>
        <div className="max-w-2xl w-full h-12 flex items-center mt-5">
          <input
            className="bg-white h-full px-3 w-full text-lg font-medium rounded-l-xl"
            type="text"
            placeholder="Your Email"
          />
          <button className="text-lg font-semibold text-white bg-green-800 h-full sm:px-4 px-2 rounded-e-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
