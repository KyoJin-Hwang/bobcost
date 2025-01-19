import CopyLinkButton from '../common/tocbutton/CopyLinkButton';
import { Resume as resume } from '@/data/resume';
import { MailIcon } from 'lucide-react';

const AboutLink = () => {
  return (
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
  );
};

export default AboutLink;
