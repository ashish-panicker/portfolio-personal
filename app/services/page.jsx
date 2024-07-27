'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'
import { ChevronsUpDown, Plus, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const services = [
  {
    id: '01',
    title: 'Frontend Development',
    summary: 'Build modern, dynamic, and responsive user interfaces.',
    description:
      'Gain hands-on experience in creating dynamic and responsive user interfaces using modern front-end technologies and frameworks. This includes mastering tools like React, Next.js, and Angular, as well as languages like JavaScript and TypeScript. Learn best practices for state management, component-based architecture, and integration with RESTful APIs.',
    technologies: [
      'React',
      'Next.js',
      'Angular',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Redux',
      'TailwindCSS',
      'Bootstrap',
      'Shadcn',
    ],
  },
  {
    id: '02',
    title: 'Backend Development',
    summary: 'Develop robust and scalable server-side applications and APIs.',
    description:
      'Develop robust server-side applications and APIs with a focus on scalable architecture and efficient data handling. Explore backend technologies such as Node.js and Express.js for JavaScript-based development, or delve into Java-based frameworks like Spring Boot. Learn about database integration, security practices, and the implementation of RESTful and GraphQL APIs.',
    technologies: [
      'Node.js',
      'Express.js',
      'Java Servlets',
      'JPA',
      'Spring Boot',
      'GraphQL',
      'REST APIs',
      'SQL',
      'NoSQL',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    id: '03',
    title: 'Distributed Systems',
    summary: 'Design and manage scalable microservices architectures.',
    description:
      'Specialize in building distributed systems and microservices architectures. Learn to design, implement, and manage microservices using frameworks like Spring Boot, and message brokers like Apache Kafka and RabbitMQ. Understand the principles of scalability, fault tolerance, and data consistency in distributed environments.',
    technologies: [
      'Spring Boot',
      'Microservices',
      'Apache Kafka',
      'RabbitMQ',
      'Docker',
      'Kubernetes',
      'Consul',
      'Zuul',
      'AWS Lambda',
      'Azure Functions',
    ],
  },
  {
    id: '04',
    title: 'CI/CD Automation',
    summary: 'Automate software delivery with CI/CD pipelines.',
    description:
      'Master the setup and automation of Continuous Integration and Continuous Deployment (CI/CD) pipelines to streamline software delivery. Gain expertise in tools such as Jenkins, GitLab CI, and GitHub Actions. Learn to automate testing, deployment, and monitoring, and explore containerization and orchestration with Docker and Kubernetes, as well as infrastructure as code with Terraform.',
    technologies: [
      'Jenkins',
      'GitLab CI',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
    ],
  },
  {
    id: '05',
    title: 'AWS Cloud',
    summary: 'Leverage AWS services for cloud-based solutions.',
    description:
      'Explore a wide range of AWS cloud services to build, deploy, and manage applications in the cloud. Gain hands-on experience with core services like EC2 (Elastic Compute Cloud) for scalable computing, S3 (Simple Storage Service) for object storage, RDS (Relational Database Service) for database management, and Lambda for serverless computing. Learn about networking, security, and cost management in the AWS ecosystem.',
    technologies: [
      'EC2',
      'S3',
      'RDS',
      'Lambda',
      'API Gateway',
      'CloudFront',
      'IAM',
      'VPC',
      'CloudFormation',
      'DynamoDB',
      'SQS',
    ],
  },
  {
    id: '06',
    title: 'DevOps Practices',
    summary: 'Implement DevOps for faster and reliable software releases.',
    description:
      'Learn the principles and practices of DevOps to enhance collaboration between development and operations teams. Explore key tools and technologies such as Docker for containerization, Kubernetes for container orchestration, and Terraform for infrastructure as code. Understand the concepts of continuous integration, continuous delivery, and continuous deployment, and how to implement them to achieve faster and more reliable software releases.',
    technologies: [
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Jenkins',
      'GitLab CI',
      'Prometheus',
      'Grafana',
    ],
  },
]

export default function Services() {
  const [isOpen, setIsOpen] = React.useState(true)
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
                <Collapsible
                  isOpen={isOpen}
                  onOpenChange={setIsOpen}
                  key={service.id}
                  className="CollapsibleContent flex-1 flex flex-col justify-center rounded-lg  mb-4 md:mb-0"
                >
                  <div className="flex flex-row justify-between items-center w-full group">
                    <div className="text-5xl font-bold text-outline text-primary transition-all duration-500 hover:text-primary/50 dark:text-slate-200 dark:hover:text-slate-400">
                      {service.id}
                    </div>

                    {/* <Link
                      href={service.id}
                      className="w-[56px] h-[56px] flex items-center justify-center rounded-full transition-all duration-500 hover:-rotate-45 bg-primary/10 dark:bg-slate-700"
                    >
                      <BsArrowDownRight className="text-primary text-[24px] font-bold " />
                    </Link> */}
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0">
                        <ChevronsUpDown className="w-[40px] h-[40px] p-2 flex items-center justify-center rounded-full  hover:-rotate-180 bg-primary/10 dark:bg-slate-700" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div className="py-2 mb-1">
                    <h2 className="text-3xl leading-none group-hover:text-primary transition-all duration-500">
                      {service.title}
                    </h2>
                    <p className="text-[20px] mt-2 mb-2 leading-snug border-b-2 border-text-primary/80">
                      {service.summary}
                    </p>
                    <CollapsibleContent className="space-y-2 mt-4 leading-8 transition-all duration-500">
                      <p className="text-[18px]">{service.description}</p>
                      <div className="">
                        {service.technologies.map((t, i) => {
                          return (
                            <span
                              key={i}
                              className="inline-block px-2 py-1 text-sm font-semibold text-white  bg-slate-700 rounded-md mr-2 mb-2 dark:bg-primary/10
                          dark:border-2 dark:border-primary/30 dark:text-secondary-foreground/80 dark:hover:bg-primary/20 dark:hover:border-primary/50 dark:hover:text-primary hover:bg-primary/40  hover:text-slate-900"
                            >
                              {t}
                            </span>
                          )
                        })}
                      </div>
                    </CollapsibleContent>
                  </div>
                  <div className="border-b dark:border-primary/80 border-slate-600"></div>
                </Collapsible>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
