const Banner = () => {
  return (
    <div className="hero   w-[1200px] ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://i.ibb.co/3T7dks7/P3-OLGJ1-copy-1.jpg"
          className="max-w-lg rounded-lg "
        />
        <div>
          <h1 className="text-6xl font-bold space-y-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[white] ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
