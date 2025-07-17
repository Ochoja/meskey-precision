import Card from "./Card";

export default function Review({ title, subtext }) {
  return (
    <section className="my-4">
      <div className="top">
        <h2 className="text-4xl text-center">{title}</h2>
        <p className="text-center">{subtext}</p>
      </div>
      <div className="flex justify-evenly gap-4">
        <Card
          heading="Perfect Spot for Events and Stay"
          text="Our wedding reception was held at Bakhita and everything was perfect. Thank you for
                making our day magical!"
          name="Grace and Musa"
          position="Couple"
        />

        <Card
          heading="Felt Safe and Comfortable"
          text="The peace I felt staying here was unmatched. From the cleanliness to the friendly staff — I’ll definitely return."
          name="Dr Sani M"
          position="Business Man"
        />

        <Card
          heading="Perfect Spot for Events and Stay"
          text="We hosted a birthday party at the event hall and booked a few rooms for our guests — everyone had a great time. Reliable amenities and responsive staff made a big difference. It’s rare to find a place that handles both events and lodging this well."
          name="Paulina"
          position="Event Planner"
        />
      </div>
    </section>
  );
}
