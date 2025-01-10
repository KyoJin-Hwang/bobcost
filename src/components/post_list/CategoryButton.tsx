import Link from 'next/link';

import Button from '../ui/button';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

const CategoryButton = ({ isCurrent, displayName, href, count }: Props) => {
  return (
    <li>
      <Button variant={isCurrent ? 'default' : 'ghost'}>
        <Link href={href}>
          {displayName} ({count})
        </Link>
      </Button>
    </li>
  );
};

export default CategoryButton;
