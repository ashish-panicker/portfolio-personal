'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { FaPhoneAlt, FaEnvelope, FaMapMarker, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: 'Your name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  startDate: z.date().optional(),
})
const info = [
  { icon: <FaEnvelope />, title: 'Email', text: 'ashish.s.panicker@proton.me' },
  {
    icon: <FaMapMarker />,
    title: 'Address',
    text: 'Thiruvanthapuram, Kerala, India',
  },
]

export default function Services() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: '', email: '', phone: '' },
  })

  function onSubmit(values) {
    console.log(values)
  }
  return (
    <motion.section
      className="xl:py-6 py-2"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[54%] xl:w-[640px] order-2">
            <div className="flex flex-col gap-6 md:p-6 py-2 px-2 bg-card/20 rounded-2xl">
              <h3 className="md:text-3xl text-primary/90">
                Let&apos;s work together
              </h3>
              <p className="hidden md:block">
                Share your details and requirements and I will get back to you.
              </p>
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 md:mb-8">
                      <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel className="">Username</FormLabel> */}
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                className="border-2 border-primary/70 focus:border-none hover:dark:bg-card/80"
                              />
                            </FormControl>
                            <FormMessage className="dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Email</FormLabel> */}
                            <FormControl>
                              <Input
                                className="border-2 border-primary/70 focus:border-none hover:dark:bg-card/80"
                                placeholder="Your email address"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage className="dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Phone</FormLabel> */}
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
                                {...field}
                                className="border-2 border-primary/70 focus:border-none hover:dark:bg-card/80"
                              />
                            </FormControl>

                            <FormMessage className="dark:text-red-400" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="requirements"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Requirements</FormLabel> */}
                            <FormControl>
                              <Textarea
                                className="border-2 border-primary/70 focus:border-none hover:dark:bg-card/80"
                                placeholder="Training requirements"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="font-semibold mt-3 md:mt-0"
                    >
                      Let us connect
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none md:mb-8 xl:mb-0">
            <ul className="flex flex-col md:gap-10 gap-1">
              {info.map((i, index) => {
                return (
                  <li key={index} className="flex items-center gap-3">
                    <div className="p-1 w-[36px] xl:w-[48px] h-[36px] xl:h-[48px] flex items-center justify-center md:text-2xl rounded-lg bg-primary/30">
                      {i.icon} <span></span>
                    </div>
                    <div>
                      {/* <p>{i.title}</p> */}
                      <h3 className="md:text-xl">{i.text}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
