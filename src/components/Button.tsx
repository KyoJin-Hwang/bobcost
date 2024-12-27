import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  `
  flex justify-center items-center rounded-md
  text-base font-bold transition-all shadow-md
  px-3 py-2 dark:bg-white dark:text-black text-white bg-black
  text-sm pc:text-[1rem]
  `,
  {
    variants: {
      hover: {
        false: '',
        true: 'hover:bg-blue-400 dark:hover:bg-red-400',
      },
      backGround: {
        default: '',
        grey: ' bg-slate-400',
        blue: ' bg-blue-400',
        red: 'bg-red-400',
      },
      size: {
        default: '',
        md: ' w-[6rem]',
      },
    },
    defaultVariants: {
      hover: false,
      backGround: 'default',
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
 * @backGround 색상 지정 ex) gray, blue, red
 * @size 사이즈 지정 md, lg, wlg
 * @children ReactElement 아이콘같은걸 넣어준다
 * @label String을 넣어 버튼 라벨을 지정해준다
 * @additionalClass 추가할 클래스 속성을 넣어준다
 * @props 추가할 버튼 속성을 넣어준다
 */
const Button: FC<ButtonProps> = ({
  backGround,
  size,
  hover,
  children,
  label,
  additionalClass,
  ...props
}) => {
  return (
    <button className={cn(ButtonVariants({ backGround, size, hover }), additionalClass)} {...props}>
      {children && children}
      {label && label}
    </button>
  );
};

export default Button;
