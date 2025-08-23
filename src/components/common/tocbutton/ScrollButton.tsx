'use client';

import Button from '@/components/ui/Button';
import { ArrowUpToLine, MessageSquareText } from 'lucide-react';

interface ButtonProps {
  size?: number;
  className?: string;
  tooltip?: string;
}

export const ScrollTop = ({ size = 16, className, tooltip }: ButtonProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={scrollTop}
      className={className}
      tooltip={tooltip}
    >
      <ArrowUpToLine size={size} />
    </Button>
  );
};

export const ScrollToComment = ({ size = 16, className, tooltip }: ButtonProps) => {
  const scrollToGiscus = () =>
    document.querySelector('.giscus')?.scrollIntoView();
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={scrollToGiscus}
      className={className}
      tooltip={tooltip}
    >
      <MessageSquareText size={size} />
    </Button>
  );
};
