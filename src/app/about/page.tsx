import {
  AboutHeading,
  AboutMy,
  AboutSkill,
  FadeInOutSection,
} from '@/components/about/About';
import CopyLinkButton from '@/components/common/tocbutton/CopyLinkButton';
import { Resume as resume } from '@/data/resume';
import { currentDate } from '@/lib/utils';
import { Earth, Gem, MailIcon } from 'lucide-react';

const About = () => {
  return (
    <div className='mx-auto flex flex-col gap-10 overflow-hidden px-5 pc:max-w-[1100px]'>
      {/* 개발자 소개 */}
      <FadeInOutSection>
        <section className='mt-14 flex flex-col items-center gap-4 pc:items-start'>
          <AboutHeading title='About Me'>
            <Gem
              size={40}
              className='rounded-full fill-[#00bbff] stroke-black'
            />
          </AboutHeading>
          <p className='text-lg'>
            제가 만든 코드가
            <span className='px-1 text-2xl font-bold'>누군가의 삶을</span> 조금
            더 나아지게 만든다고 믿습니다. 이를 위해{' '}
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

              <li className='flex items-center gap-5'>
                <a
                  href={resume.github.url}
                  target='_blank'
                  className='group relative flex flex-col items-center rounded-3xl transition-all hover:translate-y-[-4px] hover:bg-warning'
                >
                  <resume.github.icon />
                  <p className='absolute bottom-[-30px] hidden group-hover:block'>
                    Github
                  </p>
                </a>
                <div className='group relative flex cursor-pointer flex-col items-center rounded-xl transition-all hover:translate-y-[-4px] hover:bg-warning'>
                  <CopyLinkButton
                    variant='default'
                    url={resume.contact.email}
                    className='absolute opacity-0'
                  />
                  <MailIcon size={36} />
                  <p className='absolute bottom-[-30px] hidden group-hover:block'>
                    Email
                  </p>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </FadeInOutSection>
      {/* 인터뷰 */}
      <FadeInOutSection>
        <section></section>
      </FadeInOutSection>
      {/* 스킬 */}
      <FadeInOutSection>
        <section className='r flex flex-col items-start gap-4'>
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
          <AboutSkill title='Tool' category='tool' />
        </section>
      </FadeInOutSection>
    </div>
  );
};

export default About;
