import Heading from '../ui/Heading';
import { faqs } from '~/config/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  return (
    <section className='w-full'>
      <Heading
        classNames={{
          h1: 'text-2xl mx-auto text-center font-bold',
        }}
      >
        FAQ?
      </Heading>

      <Accordion type='single' collapsible className='mt-16 w-full space-y-4'>
        {faqs.map((faq) => (
          <AccordionItem value={faq.id} key={faq.id}>
            <AccordionTrigger className=' text-xl font-bold'>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
