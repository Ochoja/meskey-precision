import electricImg from "./assets/electricity.png";
import securityImg from "./assets/security.png";
import wifiImg from "./assets/wifi.png";
import vehicleImg from "./assets/vehicle.png";

export default function Utilities({ title, subtext }) {
  return (
    <section className="my-4">
      <h2 className="text-4xl text-center">{title}</h2>
      <p className="text-2xl text-center">{subtext}</p>
      <div className="flex justify-evenly gap-4">
        <div>
          <img src={electricImg} alt="electricity" />
          <p>Reliable power supply around the clock for your comfort</p>
        </div>
        <div>
          <img src={securityImg} alt="security" />
          <p>Your safety is our top priority, 24/7</p>
        </div>
        <div>
          <img src={wifiImg} alt="wifi" />
          <p>Stay connected seamlessly across our spaces</p>
        </div>

        <div>
          <img src={vehicleImg} alt="vehicle" />
          <p>Enjoy hassle-free parking at no extra cost</p>
        </div>
      </div>
    </section>
  );
}
