import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Link } from '@remix-run/react';
import Heading from '../ui/Heading';
import { AspectRatio } from '../ui/aspect-ratio';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const Article = () => {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      playOnInit: true,
      stopOnInteraction: true,
    })
  );

  return (
    <section className='flex w-full flex-col'>
      <Heading
        classNames={{
          h1: 'text-center text-2xl mx-auto font-bold',
        }}
      >
        Our Services
      </Heading>

      <Carousel
        opts={{ loop: true }}
        // @ts-expect-error shadcn carousel deps version issue.
        plugins={[plugin.current]}
        className='mt-16 w-full'
      >
        <CarouselContent>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <CarouselItem
                key={index}
                className='mx-auto flex items-center justify-center sm:basis-1/2 md:basis-1/3 xl:basis-1/4'
              >
                <Card className='max-h-max max-w-[300px]'>
                  <CardHeader>
                    <AspectRatio ratio={16 / 9} className='overflow-hidden'>
                      <img
                        src='/assets/dum-article.jpg'
                        alt='Article 1'
                        className='h-full w-full rounded-sm object-cover'
                      />
                    </AspectRatio>
                  </CardHeader>
                  <CardContent>
                    <span className='inline-block cursor-pointer rounded-lg bg-blue-500 bg-opacity-15 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600'>
                      <Link to='#'>Technology</Link>
                    </span>
                    <h3 className='my-5 line-clamp-3 text-lg font-bold leading-relaxed'>
                      <Link
                        to='#'
                        className='transition-colors duration-200 hover:text-black/70 dark:hover:text-white/80'
                      >
                        The Impact of Technology on the Workspace: How Technology is Changing
                      </Link>
                    </h3>
                  </CardContent>
                  <CardFooter className='flex items-center justify-between text-sm'>
                    <span className='font-medium'>Tracey Wilson</span>
                    <span>August 20, 22</span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='hidden lg:inline-flex' />
        <CarouselNext className='hidden lg:inline-flex' />
      </Carousel>
    </section>
  );
};

export default Article;
