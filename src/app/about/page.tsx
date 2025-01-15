import { Text } from '@/components/ui/Text';
import { Resume } from '@/data/resume';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className='overflow-hidden px-5'>
      {/* 어떤 개발자 소개 */}
      <section>
        <div>
          <p className='text-lg font-semibold pc:text-xl'>
            내가 만든 코드가 <span>누군가의 삶을</span> 조금 더 나아지게
            만든다고 믿습니다. 이를 위해 <span>끊임없이 노력</span>하는
            프론트엔드 개발자입니다.
          </p>
        </div>
      </section>
      <section>
        <div className='flex flex-col flex-wrap items-start gap-3 pc:flex-row pc:items-end pc:gap-6'>
          <Text text={'Language'} className='text-xl pc:text-3xl' />
          <ul className='flex flex-wrap gap-2'>
            {Resume.skills
              .filter((el) => el.category === 'lang')
              .map((el) => (
                <li key={el.name}>
                  <Text
                    className={cn(
                      'rounded border-2 border-slate-400 px-2 py-1',
                      el.color
                    )}
                    text={el.name}
                    fontSize={16}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
