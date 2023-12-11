const Hero = () => {
  return (
    <div className="w-full h-[100vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1920px] m-auto">
        <div className="absolute px-56 top-[50%] w-full md:[50%] h-full flex flex-col text-white">
          <h1 className="font-bold text-5xl">Find Your Special Trip</h1>
          <h2 className="text-5xl py-4 italic">With Weekaway</h2>
          <p className="max-w-sm text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Natus, exercitationem maiores asperiores nesciunt dignissimos
            tempora nostrum fuga iste ipsa quod at suscipit quidem optio,
            velit hic libero sunt quisquam ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
