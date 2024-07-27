'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    id: '01',
    title: 'Frontend Application Development',
    description:
      'Learn to develop modern front end applciations using tools, technologies and frameworks like React, Next.js, Angular, Typescript etc. ',
  },
  {
    id: '02',
    title: 'Backend Application Development',
    description:
      'Learn to develop server side applications and api using tools, technologies and frameworks like Node.js, Express.js, Spring Boot, etc.',
  },
  {
    id: '03',
    title: 'Distributed Application Development',
    description:
      'Learn to develop distributed microservice applications using tools, technologies and frameworks like Spring Boot, Apache Kafka, RabbitMQ, etc.',
  },
  {
    id: '04',
    title: 'CI/CD Pipelines',
    description:
      'Learn to setup Continuous Integration and Deployment pipelines using tools like Jenkins, Gitlab CI, Github Actions. Practice with Docker, Kubernetes, Terraform, etc.',
  },
  {
    id: '05',
    title: 'AWS Cloud Practitioner',
    description:
      'Learn about AWS services like EC2, S3, RDS, Lambda, API Gateway, etc.',
  },
  {
    id: '06',
    title: 'Devops',
    description:
      'Learn about Devops tools and technologies like Docker, Kubernetes, Terraform, etc.',
  },
]

export default function Services() {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-0 min-h-[80vh]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[30px]">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  className="flex-1 flex flex-col justify-center gap-6 rounded-lg  mb-4 md:mb-0"
                >
                  <div className="flex flex-row justify-between items-center w-full group">
                    <div className="text-5xl font-extrabold text-outline text-primary transition-all duration-500 hover:text-primary/50 dark:text-slate-200 dark:hover:text-slate-400">
                      {service.id}
                    </div>
                    <Link
                      href={service.id}
                      className="w-[72px] h-[72px] flex items-center justify-center rounded-full transition-all duration-500 hover:-rotate-45 bg-primary/10 dark:bg-slate-700"
                    >
                      <BsArrowDownRight className="text-primary text-3xl " />
                    </Link>
                  </div>
                  <h2 className="text-4xl leading-none group-hover:text-primary transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="">{service.description}</p>
                  <div className="border-b dark:border-primary/80 border-slate-600"></div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
