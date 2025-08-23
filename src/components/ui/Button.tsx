import { ButtonHTMLAttributes, forwardRef, useState } from 'react';

import { cn } from '@lib/utils';
// classNames 유틸리티
import { VariantProps, cva } from 'class-variance-authority';

// class-variance-authority 사용

// Button 스타일링을 위한 cva 정의
export const ButtonVariants = cva(
  `
  flex justify-center items-center rounded-md font-bold transition-all px-3 py-2 text-sm pc:text-[1rem]
  `,
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        outline:
          'outline outline-input outline-1 outline-accent bg-background hover:bg-accent hover:text-accent-foreground',
        hover:
          'transform transition-transform duration-300 hover:-translate-y-1',
      },
      size: {
        default: '',
        icon: 'aspect-square p-2',
        project: 'w-20',
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
    VariantProps<typeof ButtonVariants> {
  // 라벨은 string을 넣을때 사용
  label?: string;
  // icon component 같은 리엑트 컴포넌트에 사용
  children?: React.ReactElement | React.ReactNode;
  // 추가 className
  className?: string;
  // 툴팁 텍스트
  tooltip?: string;
}

/**
 * @variant 버튼 테마
 * @size 사이즈 지정 default, icon, project
 * @children ReactElement 아이콘같은걸 넣어준다
 * @label String을 넣어 버튼 라벨을 지정해준다
 * @className 추가할 클래스 속성을 넣어준다
 * @tooltip 툴팁에 표시할 텍스트
 * @props 추가할 버튼 속성을 넣어준다
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'default',
      children,
      label,
      className,
      tooltip,
      ...props
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);
    
    // className과 additionalClass를 병합하여 최종 클래스 이름을 생성
    const mergedClassName = cn(
      ButtonVariants({ variant, size }), // cva로 정의한 스타일 적용
      className // className props를 병합
    );

    return (
      <div className="relative">
        <button
          aria-label='button'
          className={mergedClassName}
          ref={ref}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          {...props}
        >
          {children} {/* 아이콘이나 컴포넌트 */}
          {label} {/* 라벨이 있을 경우 표시 */}
        </button>
        
        {/* 커스텀 툴팁 */}
        {tooltip && showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg whitespace-nowrap z-50">
            {tooltip}
            {/* 툴팁 화살표 */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>
    );
  }
);

Button.displayName = 'Button'; // 디버깅 시 컴포넌트 이름을 잘 볼 수 있도록 설정

export default Button;
