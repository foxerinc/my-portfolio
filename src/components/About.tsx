import Image from 'next/image';
import { Accomplishment } from '../types';
import AccomplishmentCard from './AccomplishmentCard';

const accomplishments: Accomplishment[] = [
  { title: '#1 Informatics Graduate ', description: 'Graduated as the top-ranked student in the Informatics Program with the highest GPA of 3.92' },
  {
  "title": "Certified Android Developer (DCA)",
  "description": "Earned the Developer Certification for Android (DCA) from Dicoding, validating Android development skills."
},
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-heading mb-8 text-start font-bold">About Me</h1>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading mb-6 text-tertiary font-semibold">Who Am I</h2>
          <p className="text-secondaryText text-lg mb-8">
            I&#39;m Dedi Yanto, a software developer with a passion for creating intuitive and impactful applications. Holding a B.Sc. in Computer Science, I have 2.5 years of experience in mobile development. I thrive on tackling complex challenges and staying ahead of tech trends. In my free time, I enjoy reading books and exploring the stock market through active trading.
          </p>
        </div>
        <div className="about-accomplishments">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-content-center">
            {accomplishments.map((item, index) => (
              <AccomplishmentCard key={index} accomplishment={item} />
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 my-8 justify-content-center">
            <div className="col-span-full">
              <Image
                src="/DSC00186.jpg"
                alt="Photo of Dedi Yanto"
                width={1200} 
                height={800} 
                className="w-full h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;