import { Link } from '@remix-run/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { GridContainer } from '../ui/GridContainer';
import Heading from '../ui/Heading';

const Services = () => {
  return (
    <section className='flex w-full flex-col'>
      <Heading
        classNames={{
          h1: 'text-center text-2xl mx-auto font-bold',
        }}
      >
        Our Services
      </Heading>

      <GridContainer className='mt-16 md:gap-8 md:gap-x-10'>
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Card
              key={idx}
              className='flex min-h-[22rem] flex-col items-center text-center transition-colors hover:bg-muted'
            >
              <CardHeader className='my-auto'>
                <CardTitle>Card 1</CardTitle>
              </CardHeader>
              <CardContent className='my-auto leading-loose'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium id alias
                  sunt odio iure minima ullam tenetur quidem maiores nam voluptates qui debitis
                  eligendi repudiandae eveniet, a neque ducimus reiciendis!
                </p>
              </CardContent>
              <CardFooter className='my-auto'>
                <Button asChild>
                  <Link className='no-underline' to='#'>
                    Go Link {'->'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </GridContainer>
    </section>
  );
};

export default Services;
