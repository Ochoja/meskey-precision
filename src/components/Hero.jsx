import hotelImg from "../assets/topViewHotel.png";

export default function Hero() {
  return (
    <section>
      <section className="hero px-80 text-center mt-20">
        <h1 className="text-7xl font-bold">
          Welcome to Bakhita Pastoral Center
        </h1>
        <p className="text-xl">
          At Bakhita Pastoral Centre, hospitality isn’t just a service — it’s
          our calling. Nestled in the heart of Sokoto, our serene and secure
          environment offers more than just accommodation.
        </p>
        <button className="px-4 py-2 bg-black text-amber-50 rounded-4xl">
          Book Now
        </button>
      </section>

      
        <img
          src={hotelImg}
          alt="Bakhita Pastoral Center top view"
          className="w-full pt-10"
        />
    </section>
  );
}
