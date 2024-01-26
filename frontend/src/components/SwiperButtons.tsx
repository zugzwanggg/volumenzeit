import { useSwiper } from "swiper/react";

type ISwiper = {
  beg: boolean,
  end: boolean
}

const SwiperButtons = ({beg,end}:ISwiper) => {
  const swiper = useSwiper();
  return <div className="flex items-center gap-14 md:gap-36">
    <button onClick={()=>swiper.slidePrev()}>
      <img className={beg ? 'opacity-45' : ''} src="./img/arrow.svg" alt="left" />
    </button>
    <button  onClick={()=>swiper.slideNext()}>
      <img className={`rotate-180 ${end ? 'opacity-45' : ''}`} src="./img/arrow.svg" alt="right" />
    </button>
  </div>;
};

export default SwiperButtons