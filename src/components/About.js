import AboutImg from "../assets/about-img.svg";

const About = () => {
  return (
    <section
      className="bg-primary text-white px-7 py-16 box-border "
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-center md:justify-between gap-3 max-w-[85%]">
        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="max-w-[80%]"
          />
        </div>
        <div className="about-info md:col-span-2">
          <h2 className="text-6xl font-bold mb-8 text-secondary">Who I am</h2>
          <p className="pb-5">
            Hi, My Name is Pham Hoang Anh Nguyen everyone calls me Anh. I am a
            Frontend Developer. I have over 5 years in e-commerce websites,
            build landing pages and responsive pages.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like HTML5, CSS3, JavaScript,
            ReactJS, Tailwinds and many more.
          </p>

          <p className="pb-5">
            In backend I know Node.js, Express.js and MySQL.
          </p>

          <p className="pb-5">
            In my spare time, I search for new technicals and learn courses
            related to my major in Udacity.
          </p>

          <p>
            <strong>Education: </strong>Bachelor of Information Technology
            Engineer - Ho Chi Minh City University of Science – HCMUS
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
