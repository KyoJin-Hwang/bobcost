import clsx from 'clsx';

// 인터페이스 정의
interface TextProps {
  text?: string;
  className?: string;
  fontSize?: number;
  color?: string;
  children?: React.ReactNode;
}

// Text 컴포넌트
export const Text = ({
  text,
  className,
  fontSize,
  color,
  children,
}: TextProps) => {
  return (
    <p
      className={clsx('text-sm pc:text-base', className)}
      style={{
        ...(fontSize && { fontSize: `${fontSize}px`, lineHeight: '100%' }),
        ...(color && { color }),
      }}
    >
      {text}
      {children}
    </p>
  );
};
