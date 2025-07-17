import ContactCard from "./ContactCard";
import emailIcon from "../assets/email-icon.png";
import locationIcon from "../assets/location-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import hotelTopView from "../assets/topViewHotel.png"

export default function Contact() {
  return (
    <section className="my-5">
      <h3 className="text-2xl">We're here to help</h3>
      <p>
        Ready to book? Whether you're planning an event, retreat, or extended
        stay, we're here to help. Call or WhatsApp us today to reserve your
        space—rooms, halls, and services are available, and early booking is
        highly recommended due to high demand.
      </p>

      <div className="flex">
        <div className="w-128 border-amber-200 border-solid border-4">
            <ContactCard
              image={emailIcon}
              title="Email"
              info="info@bakhitapastoralcentre.com"
            />
            <ContactCard
              image={phoneIcon}
              title="Phone"
              info="+234 817 006 1600"
            />
            <ContactCard
              image={locationIcon}
              title="Address"
              info="456 Bakhita way, Sokoto, Nigeria"
            />
        </div>
        <div className="w-1/2">
            <img src={hotelTopView} alt="bakhita hotel" />
        </div>
      </div>
    </section>
  );
}
