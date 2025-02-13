const About = () => {
  return (
    <div id="about" className="px-[30px] md:px-[60px]">
      <section>
        <div className="md:flex justify-between items-center space-y-3 py-[50px]">
          <h1 className="text-4xl md:text-7xl font-medium">
            <span className="text-gray-400">About Me</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-400 md:w-[50%] hover:text-white">
            I am R.J. Santhosh Kumar, a dedicated Educator, Writer, and
            Motivational Speaker committed to inspiring and empowering
            individuals through education, storytelling, and motivational
            engagement. With a strong foundation in personal development,
            leadership, and education, I have spent years fostering personal and
            professional growth for individuals and organizations.
          </p>
        </div>
        <div className="md:flex justify-between items-center space-y-3 py-[50px]">
          <h1 className="text-4xl md:text-7xl font-medium text-gray-400">Expertise</h1>
          <p className="text-lg text-gray-400 hover:text-white md:w-[50%]">
            <li>
              <strong>Education & Training :</strong> Extensive experience in
              curriculum development, coaching, and educational leadership.
            </li>
            <li>
              <strong>Writing : </strong>
              Published author of thought-provoking books, articles, and blogs
              that inspire positive change.
            </li>
            <li>
              <strong>Motivational Speaking : </strong>
              Dynamic speaker at conferences, seminars, workshops, and corporate
              events.
            </li>
            <li>
              <strong>Executive Coaching & Leadership : </strong>
              Guiding professionals and organizations toward excellence.
            </li>
            <li>
              <strong>Curriculum Development : </strong>
              Designing innovative and impactful educational programs.
            </li>
          </p>
        </div>

        <div className="md:flex justify-between items-center py-[50px]">
          <h1 className="text-4xl md:text-7xl font-medium text-gray-400">
            Key Achievements
          </h1>
          <p className="text-lg text-gray-400 hover:text-white md:w-[50%]">
            <li>
              <strong>Recognized Speaker & Educator </strong>
              with a strong track record of inspiring audiences.
            </li>
            <li>
              <strong>Successful speaking engagements </strong>
              that have impacted thousands of individuals worldwide.
            </li>
            <li>
              <strong>Published works </strong>
              that have resonated with a broad audience, providing actionable
              insights.
            </li>
            <li>
              <strong>
                Collaborations with prestigious educational institutions and
                corporate organizations.
              </strong>
            </li>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
