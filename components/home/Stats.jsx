import CountUp from 'react-countup'

const stats = [
  { num: 12, text: 'Years of Experience' },
  { num: 10000, text: 'Students Trained' },
  { num: 100, text: 'Batches Completed' },
  { num: 25, text: 'Happy Clients' },
]

const Stats = () => {
  return (
    <section className="container mx-auto pt-4 pb-12 xl:pt-2 xl:pb-0">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-between grid grid-cols-1 gap-2">
        {stats.map((stat, i) => {
          return (
            <div
              key={i}
              className="flex flex-row gap-3 justify-between items-center"
            >
              <CountUp
                end={stat.num}
                duration={2}
                delay={1}
                className="text-4xl text-slate-700 dark:text-secondary-foreground/80 xl:text-6xl font-extrabold "
              />
              <span className="text-[18px] font-semibold">{stat.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
