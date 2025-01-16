import {
  AboutHeading,
  AboutSkill,
  FadeInOutSection,
} from '@/components/about/About';
import { Text } from '@/components/ui/Text';
import { Resume } from '@/data/resume';
import { cn } from '@/lib/utils';
import { BookCheck, Gem } from 'lucide-react';

const About = () => {
  return (
    <div className='mx-auto flex flex-col gap-10 overflow-hidden px-5 pc:max-w-[1100px] pc:px-0'>
      {/* 개발자 소개 */}
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='About Me'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <p className='text-lg'>
            제가 만든 코드가
            <span className='px-1 text-2xl font-bold'>누군가의 삶을</span> 조금
            더 나아지게 만든다고 믿습니다. 이를 위해{' '}
            <span className='px-1 text-2xl font-bold'>끊임없이 노력</span>
            하는 프론트엔드 개발자입니다.
          </p>
        </section>
      </FadeInOutSection>
      {/* 인터뷰 */}
      <section></section>
      {/* 스킬 */}
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
      <FadeInOutSection>
        <section className='flex flex-col items-start gap-4'>
          <AboutHeading title='Skill'>
            <Gem size={40} fill='#00bbff' stroke='#121212' />
          </AboutHeading>
          <AboutSkill title='Language' category='lang' />
          <AboutSkill title='Frontend' category='front' />
          <AboutSkill title='Backend' category='back' />
          <AboutSkill title='DevOps' category='dev' />
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
    </div>
  );
};

export default About;
