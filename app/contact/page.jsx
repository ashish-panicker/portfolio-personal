'use client'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: 'Your name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  startDate: z.date().optional(),
  requirementType: z.string(),
  requirements: z.string().optional(),
})
const info = [
  { icon: <FaPhoneAlt />, title: 'Phone', text: '(+91) 8921 494 608' },
  { icon: <FaWhatsapp />, title: 'WhatsApp', text: '(+91) 8921 494 608' },
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
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:h-[54%] order-2 xl:order-1 w-[640px]">
            <div className="flex flex-col gap-6 md:p-6 py-2 px-2 bg-card/20 rounded-2xl">
              <h3 className="text-3xl text-primary/90">
                Let&apos;s work together
              </h3>
              <p className="hidden md:block">
                Share your details and requirements and I will get back to you.
              </p>
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-4 mb-8">
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
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel className="block mt-3 mb-2">
                              Tentative Start Date
                            </FormLabel> */}
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    className={cn(
                                      'flex w-full rounded-md bg-background text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-primary/70 focus:border-none',
                                      !field.value && 'text-muted-foreground'
                                    )}
                                    variant={'outline'}
                                  >
                                    {field.value ? (
                                      format(field.value, 'PPP')
                                    ) : (
                                      <span className="py-1 px-0">
                                        Pick a date
                                      </span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  className="border-2 border-primary/70 focus:border-none"
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date('1900-01-01')
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="requirementType"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select the type of requirement" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="FSD">
                                  Fullstack Development
                                </SelectItem>
                                <SelectItem value="Frontend">
                                  Frontend Development
                                </SelectItem>
                                <SelectItem value="cloud">
                                  Cloud Technologies
                                </SelectItem>
                                <SelectItem value="devops">DevOps</SelectItem>
                                <SelectItem value="other">Others</SelectItem>
                              </SelectContent>
                            </Select>
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
                    <Button type="submit" className="font-semibold">
                      Let us connect
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((i, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[54px] xl:w-[72px] h-[54px] xl:h-[72px] flex items-center justify-center text-2xl rounded-lg bg-primary/30">
                      {i.icon}
                    </div>
                    <div>
                      {/* <p>{i.title}</p> */}
                      <h3 className="text-xl">{i.text}</h3>
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
