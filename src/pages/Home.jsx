import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrolltoTop';
import HeroImage from '../assets/mes1.jpeg';
import ContactImage from '../assets/meskey.jpeg';
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

        <div className='layout-pad'>
          <img
            src={HeroImage}
            alt='Hero Image'
            className='w-full rounded-3xl border border-accent'
          />
        </div>
      </section>

      {/* Rooms Section */}
      <section id='services' className='mt-16'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Services</h2>
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
                <div to={`/room/${room.id}`}>
                  <img
                    src={room.images[0]}
                    alt=''
                    className='w-full h-96 rounded-xl mb-3 object-cover'
                  />
                  <div className='text-lg font-semibold mb-1'>{room.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Facilities Section */}
      <section className='mt-32'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Field Operations</h2>
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
                <div to={`/facility/${facility.id}`}>
                  <img
                    src={facility.images[0]}
                    alt={facility.name}
                    className='w-full h-96 rounded-xl mb-3 object-cover'
                  />
                  <div className='text-lg font-semibold mb-1'>
                    {facility.name}
                  </div>
                </div>
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
                Trusted Partner for Complex Installations
              </div>
              <div className='font-light'>
                From Xmas tree installation to final calibration checks, Meskey
                handled everything with precision and expertise. A reliable
                partner for any high-stakes oil and gas project.
              </div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-2xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[320px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Reliable and Professional Team
              </div>
              <div className='font-light'>
                Meskey delivered exceptional welding and pressure testing
                services on our offshore pipeline project. Their attention to
                detail and safety protocols were top-notch — we’ll definitely
                work with them again.
              </div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-2xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[320px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Seamless Leak Detection Support
              </div>
              <div className='font-light'>
                We relied on Meskey for critical leak detection and pressure
                verification. Their advanced testing methods helped us identify
                issues early and avoid costly delays.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='layout-pad mt-32'>
        <h2 className='font-bold text-4xl text-center'>
          Trusted Partner for Complex Installations
        </h2>
        <p className='text-center mt-2'>
          From Xmas tree installation to final calibration checks, Meskey
          handled everything with precision and expertise. A reliable partner
          for any high-stakes oil and gas project.
        </p>

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-[90%] mx-auto'>
          {/* Electricity */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='material-symbols:precision-manufacturing-outline'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>Precision Welding</h3>
            <p className='text-sm font-light'>
              Expert orbit welding for flawless, high-integrity pipeline joints.
            </p>
          </div>

          {/* Parking */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='game-icons:fuel-tank'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>Leak Detection</h3>
            <p className='text-sm font-light'>
              Advanced testing methods to detect and prevent leaks before they
              become hazards.
            </p>
          </div>

          {/* Internet */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='game-icons:offshore-platform'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>
              Onshore and Offshore Support
            </h3>
            <p className='text-sm font-light'>
              Comprehensive services tailored for both land-based and offshore
              oil and gas operations.
            </p>
          </div>

          {/* Security */}
          <div className='flex flex-col items-center text-center gap-3'>
            <Icon
              icon='bitcoin-icons:graph-outline'
              className='text-primary text-5xl'
            />
            <h3 className='text-xl md:text-2xl font-bold'>
              Integrity & Pressure Testing
            </h3>
            <p className='text-sm font-light'>
              Thorough verification of pipeline durability, pressure tolerance,
              and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='layout-pad mt-32 mb-20'>
        <div className='text-center mb-8 lg:text-left lg:max-w-[55%]'>
          <h2 className='font-bold text-4xl'>We're here to help</h2>
          <p className='text-sm mt-4'>
            Whether you need pipeline welding, leak testing, or full-scale oil
            and gas support, Meskey is here to deliver. Call or WhatsApp us
            today to discuss your project—our team is ready, and early
            engagement is key to timely execution.
          </p>
        </div>

        <div className='lg:flex lg:justify-between items-center lg:gap-16 xl:gap-28'>
          <div className='md:w-[60%] mx-auto lg:w-full xl:max-w-[40%]'>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-4'>
              <img src={emailIcon} alt='Email Icon' />
              <div>
                <div className='font-medium mb-2'>Email</div>
                <div className='text-sm'>info@meskeyprecisioneng.org</div>
              </div>
            </div>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-4'>
              <img src={phoneIcon} alt='Phone Icon' />
              <div>
                <div className='font-medium mb-2'>Phone</div>
                <div className='text-sm'>+234 703 039 9465</div>
              </div>
            </div>
            <div className='bg-primary/15 flex items-center gap-6 py-3 px-6 rounded-full mb-2'>
              <img src={addressIcon} alt='Address Icon' />
              <div>
                <div className='font-medium mb-2'>Address</div>
                <div className='text-sm'>
                  Dawaki Abuja Behind Sunset energy Fueling Station Kubwa
                  Express.
                </div>
              </div>
            </div>
          </div>

          <div className='hidden lg:block'>
            <img
              src={ContactImage}
              alt='Location'
              className='h-full w-auto rounded-2xl border-2 border-accent'
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
