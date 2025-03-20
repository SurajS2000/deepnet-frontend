

const Hero = () => {
  return (
    <div className="bg-[url('/background.jfif')] w-full h-[615px] bg-cover flex justify-center items-center mt-20 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8 flex flex-col w-1/2 text-center gap-10">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-6xl font-bold transform relative">
            MENU
            <span className="absolute top-0 left-0 text-red-500 -z-10 translate-x-0.5 translate-y-0.5">
              MENU
            </span>
          </h1>
        </div>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
};

export default Hero;
