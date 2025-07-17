import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrolltoTop';
import HeroImage from '../assets/topViewHotel.png';
import ContactImage from '../assets/contactImg.jpg';
import { Icon } from '@iconify/react';
import rooms from '../assets/data/rooms.json';
import emailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';
import addressIcon from '../assets/icons/address.svg';
import facilities from '../assets/data/facilities.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  // Separate refs for Rooms
  const roomPrevRef = useRef(null);
  const roomNextRef = useRef(null);
  const roomSwiperRef = useRef(null);

  // Separate refs for Facilities
  const facilityPrevRef = useRef(null);
  const facilityNextRef = useRef(null);
  const facilitySwiperRef = useRef(null);

  // Attach navigation for Rooms
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = roomSwiperRef.current;
      if (
        swiper &&
        roomPrevRef.current &&
        roomNextRef.current &&
        swiper.params?.navigation
      ) {
        swiper.params.navigation.prevEl = roomPrevRef.current;
        swiper.params.navigation.nextEl = roomNextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Attach navigation for Facilities
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = facilitySwiperRef.current;
      if (
        swiper &&
        facilityPrevRef.current &&
        facilityNextRef.current &&
        swiper.params?.navigation
      ) {
        swiper.params.navigation.prevEl = facilityPrevRef.current;
        swiper.params.navigation.nextEl = facilityNextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <ScrollToTop />
      <NavBar />

      {/* Hero Section */}
      <section>
        <div className='layout-pad mt-[5%] mb-16 text-center lg:max-w-[70%] xl:max-w-[65%] mx-auto'>
          <h1 className='font-bold text-4xl md:text-6xl mb-4'>
            Meskey Precision Engineering
          </h1>
          <p>
            We provide pipeline welding, Xmas tree installation, and leak
            testing for onshore and offshore oil and gas operations. Our
            services also include tank cleaning, industrial automation, and
            sales and procurement support.
          </p>
          <button className='bg-[#0e0e0e] text-white px-8 py-2 rounded-full mt-4'>
            Get In Touch
          </button>
        </div>

        <div className='w-full'>
          <img src={HeroImage} alt='Hero Image' className='w-full h-auto' />
        </div>
      </section>

      {/* Rooms Section */}
      <section id='services' className='mt-16'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Rooms</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={roomPrevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={roomNextRef}
            />
          </div>
        </div>

        <div className='mt-6 pl-[5%] xl:pl-[8%] flex'>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2.5}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={false}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            onSwiper={(swiper) => (roomSwiperRef.current = swiper)}>
            {rooms.map((room, index) => (
              <SwiperSlide key={index}>
                <Link to={`/room/${room.id}`}>
                  <img
                    src={room.images[0]}
                    alt=''
                    className='w-full h-96 rounded-xl mb-3 object-cover'
                  />
                  <div className='text-lg font-semibold mb-1'>{room.name}</div>
                  <p className='text-sm text-gray-600'>{room.price}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Facilities Section */}
      <section className='mt-32'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Facilities</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={facilityPrevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={facilityNextRef}
            />
          </div>
        </div>

        <div className='mt-6 pl-[5%] xl:pl-[8%]'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2.5}
            loop={false}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            onSwiper={(swiper) => (facilitySwiperRef.current = swiper)}>
            {facilities.map((facility, index) => (
              <SwiperSlide key={index}>
                <Link to={`/facility/${facility.id}`}>
                  <img
                    src={facility.images[0]}
                    alt={facility.name}
                    className='w-full h-96 rounded-xl mb-3 object-cover'
                  />
                  <div className='text-lg font-semibold mb-1'>
                    {facility.name}
                  </div>
                  <p className='text-sm text-gray-600'>{facility.headline}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='layout-pad mt-32'>
        <h2 className='font-bold text-4xl text-center'>
          Proven Track of Satisfied Clients
        </h2>
        <p className='text-center mt-2'>See what our clients are saying</p>

        <div className='flex flex-wrap gap-8 items-stretch mt-8'>
          <div className='bg-white border-primary/30 rounded-2xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[320px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Perfect Spot for Events and Stay
              </div>
              <div className='font-light'>
                Our wedding reception was held at Bakhita and everything was
                perfect. Thank you for making our day magical!
              </div>
            </div>

            <div>
              <div className='font-medium'>- Grace and Musa</div>
              <div className='font-light text-sm'>Couple</div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-2xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[320px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Felt Safe and Comfortable
              </div>
              <div className='font-light'>
                The peace I felt staying here was unmatched. From the
                cleanliness to the friendly staff — I’ll definitely return.
              </div>
            </div>

            <div>
              <div className='font-medium'>- Dr Sani M</div>
              <div className='font-light text-sm'>Business Man</div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-2xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[320px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Perfect Spot for Events and Stay
              </div>
              <div className='font-light'>
                We hosted a birthday party at the event hall and booked a few
                rooms for our guests — everyone had a great time. Reliable
                amenities and responsive staff made a big difference. It’s rare
                to find a place that handles both events and lodging this well.
              </div>
            </div>

            <div>
              <div className='font-medium'>- Paulina</div>
              <div className='font-light text-sm'>Event Planner</div>
            </div>
          </div>
        </div>
      </section>

      <section className='layout-pad mt-32'>
        <h2 className='font-bold text-4xl text-center'>
          Designed For Your Comfort
        </h2>
        <p className='text-center mt-2'>
          Every detail is thoughtfully arranged to make your stay smooth,
          secure, and stress-free.
        </p>

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-[90%] mx-auto'>
          {/* Electricity */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='healthicons:electricity-outline'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>
              24 Hour Electricity
            </h3>
            <p className='text-sm font-light'>
              Reliable power supply around the clock for your comfort.
            </p>
          </div>

          {/* Parking */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='hugeicons:car-parking-01'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>Private Parking</h3>
            <p className='text-sm font-light'>
              Enjoy hassle-free parking at no extra cost.
            </p>
          </div>

          {/* Internet */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon icon='uiw:wifi' className='text-primary text-5xl' />
            <h3 className='text-xl md:text-2xl font-bold'>
              High Speed Internet
            </h3>
            <p className='text-sm font-light'>
              Stay connected seamlessly across our spaces.
            </p>
          </div>

          {/* Security */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='hugeicons:security-lock'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>
              Top-notch Security
            </h3>
            <p className='text-sm font-light'>
              Your safety is guaranteed with our 24/7 security systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='layout-pad mt-32 mb-20'>
        <div className='text-center mb-8 lg:text-left lg:max-w-[55%]'>
          <h2 className='font-bold text-4xl'>We're here to help</h2>
          <p className='text-sm mt-4'>
            Ready to book? Whether you're planning an event, retreat, or
            extended stay, we're here to help. Call or WhatsApp us today to
            reserve your space—rooms, halls, and services are available, and
            early booking is highly recommended due to high demand.
          </p>
        </div>

        <div className='lg:flex lg:justify-between items-center lg:gap-16 xl:gap-28'>
          <div className='md:w-[60%] mx-auto lg:w-full xl:max-w-[40%]'>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-4'>
              <img src={emailIcon} alt='Email Icon' />
              <div>
                <div className='font-medium mb-2'>Email</div>
                <div className='text-sm'>info@bakhitapastoralcentre.com</div>
              </div>
            </div>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-4'>
              <img src={phoneIcon} alt='Phone Icon' />
              <div>
                <div className='font-medium mb-2'>Phone</div>
                <div className='text-sm'>+234 817 006 1600</div>
              </div>
            </div>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-2'>
              <img src={addressIcon} alt='Address Icon' />
              <div>
                <div className='font-medium mb-2'>Address</div>
                <div className='text-sm'>456 Bakhita way, Sokoto, Nigeria</div>
              </div>
            </div>
          </div>

          <div className='hidden lg:block'>
            <img
              src={ContactImage}
              alt='Location'
              className='h-full w-auto rounded-2xl'
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
