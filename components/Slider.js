import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Slider() {
  return (
    <section className="relative mx-auto mt-7 max-w-screen-2xl shadow-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="Slide Image 1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="Slide Image 2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="Slide Image 2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="Slide Image 3" />
        </div>
      </Carousel>
    </section>
  )
}

export default Slider
