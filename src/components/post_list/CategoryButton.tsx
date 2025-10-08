import Link from 'next/link';

import { ButtonVariants } from '../ui/Button';
import { cn } from '@/lib/utils';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

const CategoryButton = ({ isCurrent, displayName, href, count }: Props) => {
  return (
    <li>
      <Link
        href={href}
        prefetch
        aria-current={isCurrent ? 'page' : undefined}
        className={cn(
          ButtonVariants({ variant: isCurrent ? 'default' : 'ghost' })
        )}
      >
        {displayName} ({count})
      </Link>
    </li>
  );
};

export default CategoryButton;
