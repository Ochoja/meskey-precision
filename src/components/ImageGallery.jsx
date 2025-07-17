import EmblaCarousel from './EmblaCarousel';
import hall1Img from './assets/hall1.jpg';
import hall2Img from './assets/hall2.jpg';
import hall3Img from './assets/hall3.jpg';
import hall4Img from './assets/hall4.jpg';
import room1Img from './assets/room1.jpg';
import room2Img from './assets/room2.jpg';
import room3Img from './assets/room3.jpg';
import room4Img from './assets/room4.jpg';

const OPTIONS = { loop: true };
const GALLERYIMG = [
  room1Img,
  room2Img,
  room3Img,
  room4Img,
  hall1Img,
  hall2Img,
  hall3Img,
  hall4Img,
];
const SLIDE_COUNT = 8;

export default function ImageGallery() {
  return (
    <section>
      <h2 className='text-4xl text-center font-bold'>Image Gallery</h2>
      <EmblaCarousel slides={GALLERYIMG} />
    </section>
  );
}
