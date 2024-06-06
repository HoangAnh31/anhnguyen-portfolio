import AboutImg from "../assets/about-img.svg";

const About = () => {
  return (
    <section
      className="bg-primary text-white px-2 py-8 md:px-7 md:py-16 box-border "
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-center md:justify-between gap-3 lg:max-w-[85%]">
        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="max-w-[80%]"
          />
        </div>
        <div className="about-info md:col-span-2">
          <h2 className="text-5xl text-center md:text-left md:text-6xl font-bold mt-5 md:mt-0 mb-8 text-secondary">
            Who I am
          </h2>
          <p className="pb-5">
            Hi, My Name is Pham Hoang Anh Nguyen everyone calls me Anh. A
            seasoned frontend developer with a spotlight on creating responsive,
            user-friendly e-commerce solutions.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like HTML/CSS, JavaScript,
            ReactJS, Typescript, Tailwind and many more.
          </p>

          <p className="pb-5">In backend I know Node.js, and MySQL.</p>

          <p className="pb-5">
            My approach balances technical skill with aesthetic sense, having
            upgraded numerous web pages and systems to enhance functionality,
            user engagement, and visual appeal. My work includes developing
            intuitive admin dashboards and redesigning web infrastructures for
            better performance. In my spare time, I search for new technicals
            and learn courses related to my major in Udacity.
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
