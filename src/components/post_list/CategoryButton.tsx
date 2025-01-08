import Link from 'next/link';

import Button from '../ui/Button';

interface Props {
  isCurrent: boolean;
  displayName: string;
  href: string;
  count: number;
}

const CategoryButton = ({ isCurrent, displayName, href, count }: Props) => {
  return (
    <li>
      <Link href={href}>
        <Button label={displayName} variant={isCurrent ? 'default' : 'ghost'} />
      </Link>
    </li>
  );
};

export default CategoryButton;
