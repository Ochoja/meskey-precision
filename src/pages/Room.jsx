import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import rooms from '../assets/data/rooms.json';
import facilities from '../assets/data/facilities.json';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Icon } from '@iconify/react';

export default function Room() {
  const { type, id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (type === 'room') {
      try {
        const selectedRoom = rooms.find((item) => item.id === parseInt(id));
        if (!selectedRoom) {
          throw new Error('Room not found');
        }
        setRoom(selectedRoom);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    } else if (type === 'facility') {
      try {
        const selectedRoom = facilities.find(
          (item) => item.id === parseInt(id)
        );
        if (!selectedRoom) {
          throw new Error('Facility not found');
        }
        setRoom(selectedRoom);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  }, [id, type]);

  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = swiperRef.current;
      if (
        swiper &&
        prevRef.current &&
        nextRef.current &&
        swiper.params?.navigation
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <header
        className='relative bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${room.images[0]})` }}>
        <div className='absolute inset-0 bg-black/70'></div>
        <div className='relative'>
          <NavBar />
        </div>
        <div className='relative z-10 text-center py-[30vh]'>
          <h1 className='text-5xl font-bold mb-2'>{room.name}</h1>
          {room.price && <p>{room.price}</p>}
        </div>
      </header>

      <section className='layout-pad mt-8'>
        <h2 className='font-semibold text-2xl mb-2'>{room.headline}</h2>
        <p>{room.details}</p>

        {room.amenities && (
          <div className='mt-4 flex flex-wrap gap-6'>
            {room.amenities.map((item, index) => {
              const [label, icon] = Object.entries(item)[0];
              return (
                <div
                  key={index}
                  className='flex gap-4 items-center border-primary/40 border rounded-xl px-4 py-3'>
                  <Icon icon={icon} className='text-3xl text-primary' />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className='mb-40'>
        <div className='layout-pad flex justify-between items-center mt-20'>
          <h2 className='text-4xl font-bold'>Gallery</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={prevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={nextRef}
            />
          </div>
        </div>
        <div className='mt-6 pl-[5%] xl:pl-[8%] flex'>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={room.images.length < 3 ? room.images.length : 2.5}
            autoplay={
              room.images.length > 1
                ? { delay: 4000, disableOnInteraction: false }
                : false
            }
            loop={room.images.length > 2}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView:
                  room.images.length < 2 ? room.images.length : 1.5,
              },
              768: {
                slidesPerView: room.images.length < 2 ? room.images.length : 2,
              },
              1024: {
                slidesPerView:
                  room.images.length < 3 ? room.images.length : 2.5,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}>
            {room.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt='RoomImage'
                  className='w-full h-96 rounded-xl mb-3 object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </main>
  );
}
