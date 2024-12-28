import clsx from 'clsx';

// clsx만 사용해보기

interface TextProps {
  text: string;
  className?: string;
  fontSize?: number;
  color?: string;
}

export const Text = ({ text, className, fontSize, color }: TextProps) => {
  return (
    <p
      className={clsx('text-sm pc:text-base', className)}
      style={{
        ...(fontSize && { fontSize: `${fontSize}px`, lineHeight: '100%' }),
        ...(color && { color }),
      }}
    >
      {text}
    </p>
  );
};

export const HoverText = (props: TextProps) => {
  return (
    <Text
      {...props}
      className={`transition-colors duration-200 hover:text-blue-400 dark:hover:text-red-400`}
    />
  );
};
