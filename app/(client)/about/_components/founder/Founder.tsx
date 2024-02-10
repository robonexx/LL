import IMG1 from '@/public/images/Skeet.png'
import BioCard from '../bio-card/BioCard'

const FounderData = [
  {
    title: 'O.G Skeeter Rabbit',
    desc: 'Known as James Higgins on the books but respected by many as “Skeeter Rabbit,” a pioneer in the Locking style. His street name, “Skeeter Rabbit,” also created way to a fundamental step in Locking which a dancer does a hop and shuffle step. You can see most lockers doing this today and as well in Locking routines! This website and as important as it is to have Internet/Technology, its important to remember to research the history of street dance styles and dancers! Skeeter who was involved from the start and today shares on what can be done today to strengthen the culture.',
    image: IMG1,
  }
]

const FounderSection = () => {
  return (
    <section className='pt-14 md:pt-10'>
      <h3 className='pb-12 font-heading text-2xl font-bold text-neutral-900 md:flex-row md:pb-16 md:text-4xl'>
        Founder of lockerlegends website
      </h3>
      <div className='flex flex-col gap-12 md:gap-20'>
        {FounderData.map((data) => (
          <BioCard key={data.title} {...data} />
        ))}
      </div>
    </section>
  )
}

export default FounderSection
