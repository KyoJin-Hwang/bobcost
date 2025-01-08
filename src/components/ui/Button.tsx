import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `
  flex justify-center items-center rounded-md
  font-bold transition-all 
  px-3 py-2 text-sm pc:text-[1rem]
  `,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: '',
        md: ' w-[6rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    //Button의 속성을 타입지정을 통해 손쉽게 사용
    VariantProps<typeof ButtonVariants> {
  //라벨은 string을 넣을때 사용
  label?: string;
  //icon component 같은 리엑트 컴포넌트에 사용
  children?: React.ReactElement;
  //추가 className
  additionalClass?: string;
}

/**
 * @variant 백그라운드 색상 지정 및 hover
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘같은걸 넣어준다
 * @label String을 넣어 버튼 라벨을 지정해준다
 * @additionalClass 추가할 클래스 속성을 넣어준다
 * @props 추가할 버튼 속성을 넣어준다
 */
const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  label,
  additionalClass,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), additionalClass)}
      {...props}
    >
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
