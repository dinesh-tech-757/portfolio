import bg from '../assets/img17-bg.png'

const Highlight = () => {
  return (
    <div className="px-5 md:px-[80px] py-[80px] relative space-y-10">
      <div className=" md:w-[40%] text-xl tracking-wider text-gray-400">
        <p>
          An accomplished Executive Officer, Writer, Motivational Speaker, and
          Educator dedicated to inspiring individuals and driving positive
          change.
        </p>
      </div>

      <div className="text-center">
      <h1 className="text-5xl md:text-8xl font-bold tracking-wide py-10 bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text text-transparent">
    Executive Officer
</h1>
      </div>
      <img src={bg} alt="bg" className='absolute md:-bottom-40 -bottom-35 md:h-auto h-60' />

      <div className="flex justify-end md:pb-0 pb-10">
        <p className=" md:w-[40%] text-xl tracking-wider text-gray-400">
          With a strong background in leadership, business strategy, and
          personal development, he empowers others through his insightful
          writing, engaging speeches, and transformative educational
          initiatives. My mission is to motivate, educate, and lead people
          toward success in both their personal and professional lives.
        </p>
      </div>
    </div>
  );
};

export default Highlight;
