import clsx from 'clsx';

// 인터페이스 정의
interface TextProps {
  text?: string;
  className?: string;
  fontSize?: number;
  children?: React.ReactNode;
}

// Text 컴포넌트
export const Text = ({ text, className, fontSize, children }: TextProps) => {
  return (
    <p
      className={clsx(className)}
      style={{
        ...(fontSize && { fontSize: `${fontSize}px`, lineHeight: '100%' }),
      }}
    >
      {text}
      {children}
    </p>
  );
};
