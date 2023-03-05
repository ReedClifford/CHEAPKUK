import bg from "../assets/bg.jpeg";
const MainPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-neutral-700 to-black text-neutral-300">
      <img
        src={bg}
        alt="bgimage"
        className="absolute inset-0 object-cover object-center h-full w-full mix-blend-overlay z-0 select-none"
      />
      <div className="z-20 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl md:text-4xl mb-3 text-neutral-400">
          Experience the Taste of Quality
        </h2>
        <h1 className="text-6xl max-w-sm my-4 md:max-w-5xl  md:text-8xl font-bold text-neutral-300">
          EAT CHEAP & TASTY
        </h1>
        <p className="max-w-sm text-base text-center md:max-w-lg mt-3 md:text-lg md:leading-7 text-neutral-400">
          Our products are sourced from top suppliers and manufacturers in the
          country, and we carefully curate our selection to bring the best in
          taste, convenience and nutrition .
        </p>
      </div>
    </div>
  );
};
export default MainPage;
