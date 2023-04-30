import BannerImage from "../assets/images/hero-image.png";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="row items-center">
          <div className="lg:col-6 lg:order-0 order-1 col-12 text-center lg:text-left">
            <h1 className="lg:text-[80px] md:text-[60px] text-5xl font-extrabold lg:leading-[100px] md:left-[80px] leading-[60px] mb-16">
              One Step Closer To Your Dream Job
            </h1>
            <p className="mb-8 text-light">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <a
              href="#"
              className="primary-gradeint inline-block capitalize text-xl text-white font-semibold rounded-md  px-7 py-5"
            >
              get started
            </a>
          </div>
          <div className="lg:col-6 col-12 lg:order-1 order-0">
            <img src={BannerImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
