import {
  AboutHeading,
  AboutInterview,
  AboutMy,
  AboutSkill,
} from '@/components/about/About';
import AboutLink from '@/components/about/AboutLink';
import AboutProvider from '@/components/about/AboutProvider';
import FadeInOutSection from '@/components/common/FadeInOutSection';
import { Resume as resume } from '@/data/resume';
import { currentDate } from '@/lib/utils';
import { Earth, Gem, MicVocal } from 'lucide-react';

const About = () => {
  return (
    <div className='px-5'>
      <AboutProvider>
        {/* 개발자 소개 */}
        <FadeInOutSection>
          <section className='flex flex-col gap-4'>
            <AboutHeading title='About Me'>
              <Gem
                size={40}
                className='rounded-full fill-[#00bbff] stroke-black'
              />
            </AboutHeading>
            <p className='text-lg'>
              제가 만든 코드가
              <span className='px-1 text-2xl font-bold'>
                누군가의 삶을
              </span>{' '}
              조금 더 나아지게 만든다고 믿습니다. 이를 위해{' '}
              <span className='px-1 text-2xl font-bold'>끊임없이 노력</span>
              하는 프론트엔드 개발자입니다.
            </p>
            <article className='flex flex-col items-center gap-4 pc:flex-row pc:items-start'>
              <img
                src={resume.avatarUrl}
                alt='프로필이미지'
                className='w-52 rounded-lg'
              />
              <ul className='flex flex-col items-center gap-5 text-lg font-bold pc:items-start'>
                <AboutMy title={'이름'} desc={resume.name} />
                <AboutMy title={'생년월일'} desc={resume.birthday} />
                <AboutMy title={'전화번호'} desc={resume.contact.phone} />
                <AboutMy title={'소속회사'} desc={resume.company} />
                <AboutMy title={currentDate()} desc={resume.interest} />
                <AboutLink />
              </ul>
            </article>
          </section>
        </FadeInOutSection>
        {/* 인터뷰 */}
        <FadeInOutSection>
          <section className='flex flex-col gap-4'>
            <AboutHeading title='Interview'>
              <MicVocal
                size={40}
                className='rounded-full fill-[#f7f429] stroke-black'
              />
            </AboutHeading>
            <div className='flex flex-col gap-4'>
              <AboutInterview
                question={resume.interview[0].qusetion}
                answer={resume.interview[0].answer}
              />
              <AboutInterview
                question={resume.interview[1].qusetion}
                answer={resume.interview[1].answer}
              />
            </div>
          </section>
        </FadeInOutSection>
        {/* 스킬 */}
        <FadeInOutSection>
          <section className='flex flex-col items-start gap-4'>
            <AboutHeading title='Skill'>
              <Earth
                size={40}
                className='rounded-full bg-[#3bff45] stroke-black'
              />
            </AboutHeading>
            <AboutSkill title='Language' category='lang' />
            <AboutSkill title='Frontend' category='front' />
            <AboutSkill title='Backend' category='back' />
            <AboutSkill title='DevOps' category='dev' />
            <AboutSkill title='Tools & ETC' category='tool' />
          </section>
        </FadeInOutSection>
        {/* 커리어 */}
      </AboutProvider>
    </div>
  );
};

export default About;
