import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const clients = [
  'Natwest Group',
  'Cognizant',
  'UST Global',
  'Tata Consultancy Services',
  'Wipro',
  'Deloitte',
  'Infosys',
  'DXC Technology',
  'CGI',
  'Natwest Group',
  'Catholic Syrian Bank',
  'Barclays',
]

const Clients = () => {
  return (
    <section className="container mx-auto pt-4 pb-12 md:mt-12 md:pt-2 md:pb-0 ">
      {/* <h2 className="py-3 my-3 text-3xl md:text-5xl text-slate-700 dark:text-secondary-foreground/80">
        Clients I have worked with
      </h2> */}
      <Carousel className="md:px-4 md:mt-8">
        <CarouselContent>
          {clients.map((client, i) => (
            <CarouselItem
              key={i}
              className="py-2 md:basis-1/2 lg:basis-1/3 text-4xl flex flex-row me-1 items-center justify-center"
            >
              <span className="text-center leading-snug text-[24px] text-slate-700 dark:text-secondary-foreground/80 xl:text-4xl font-extrabold pe-0 rounded-lg">
                {client}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Clients
