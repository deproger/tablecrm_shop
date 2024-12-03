'use client';
import Image from 'next/image';

import useEmblaCarousel from 'embla-carousel-react';

import Autoplay from 'embla-carousel-autoplay';

const img_url = '/images/banner.png';

const Banner = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <div className="border-b border-slate-200">
      <div className="lg:container">
        <div className="relative mx-5 mt-10 flex h-screen w-auto flex-row justify-between bg-[#E3DDDF] sm:h-[80vh] md:aspect-[16/6] md:h-auto">
          <Image
            src={img_url}
            className="object-cover"
            fill
            quality={100}
            priority
            alt="Picture of the author"
          />

          <div className="z-10 ml-10 mt-5 flex max-w-[450px] flex-col gap-2 text-start">
            <h1 className="text-4xl font-bold text-[#1D1D1B] md:text-5xl">
              Собрали для вас все предложения в одном месте
            </h1>
            <span className="text-[#1D1D1B]">
              Новые акции каждую неделю, следите на сайте
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Banner };
