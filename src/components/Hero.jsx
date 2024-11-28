import bgHero from "../assets/bgHero.jpg";
const Hero = () => {
    return (
      <section
        className="relative w-full h-96 bg-cover bg-center"
        style={{
            backgroundImage: `url(${bgHero})`, 
        }}
        
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Discover Great Deals</h1>
          <p className="text-xl mb-8">Shop the best products at unbeatable prices</p>
          {/* <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
            
            <a href="#category">Shop Now</a>
          </button> */}
        </div>
      </section>
    );
  };
  
  export default Hero;
  