import { forwardRef } from 'react';

import clsx from 'clsx';

// 인터페이스 정의
interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  text?: string;
  className?: string;
  fontSize?: number;
}

// Text 컴포넌트
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ text, className, fontSize, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx(className)}
        style={{
          ...(fontSize && { fontSize: `${fontSize}px`, lineHeight: '100%' }),
        }}
        {...props}
      >
        {children}
        {text}
      </p>
    );
  }
);

Text.displayName = 'Text';
