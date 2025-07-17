import EmblaCarousel from './EmblaCarousel';


const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;

export default function Spaces({space, slideImgs}){
    return (
        <section className="spaces my-8">
            <h2 className='text-4xl font-bold'>{space}</h2>
            <EmblaCarousel slides={slideImgs}/>
        </section>
    )
}