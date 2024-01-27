import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperButtons from '../../../components/SwiperButtons';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

const Watches = () => {
  const [beginning, setBeginning] = useState<boolean>(true);
  const [ending, setEnding] = useState<boolean>(false);

  const handleSwiper = () => {
    if (beginning) {
      setBeginning(false);
    }
    if (ending) {
      setEnding(false);
    }
  };

  const sliderPics: string[] = [
    'black-watch.png',
    'black-watch.png',
    'black-watch.png',
    'black-watch.png',
    'black-watch.png',
    'black-watch.png',
  ];

  return (
    <section className="pt-16">
      <div className="container">
        <div className="text-center md:text-left">
          <h1>Watches</h1>
          <p className="mt-7">
            Volumenzeit gives you a total of 48 style combinations with 4{' '}
            <br className="md:hidden" />
            dial types, 4 dial colors, 3 case colors,
            <br />
            multiple stylish strap combinations, and customized engraving
            options.
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onReachBeginning={() => setBeginning(true)}
        onReachEnd={() => setEnding(true)}
        onSlideChange={handleSwiper}
        slidesPerView={'auto'}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {sliderPics.map((pic) => {
          return (
            <SwiperSlide className="text-center">
              <div className="">
                <img src={'./img/' + pic} alt={pic} />
              </div>
              <p>{pic}</p>
              <b>10$</b>
            </SwiperSlide>
          );
        })}
        <div className="container mt-4 flex flex-col items-center gap-7 md:mt-24 md:flex-row md:justify-between">
          <SwiperButtons beg={beginning} end={ending} />
          <button className="btn-primary bg-blue">Design your watch</button>
        </div>
      </Swiper>
    </section>
  );
};

export default Watches;
