import React from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-10 z-50 flex justify-between items-center">
            <button className='' onClick={() => swiper.slidePrev()}><GrCaretPrevious size={25} /></button>
            <button className='' onClick={() => swiper.slideNext()}><GrCaretNext size={25} /></button>
        </div>
    );
};