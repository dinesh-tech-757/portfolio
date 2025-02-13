import ParticlesComponent from './animation/particles';

const Title = () => {
  return (
    <main className="z-10 h-screen">
      <ParticlesComponent />
      <div className="text-white flex justify-center items-center md:py-[200px] py-[150px]">
        <div className="text-center">
          <h1 className="md:text-8xl lg:text-8xl text-5xl font-bold mb-4">RJ Santhosh Kumar</h1>
          <h3 className="md:text-5xl lg:text-5xl text-3xl font-light">Educator / Writer / Motivational Speaker / Executive Officer</h3>
        </div>
      </div>
    </main>
  );
};

export default Title;