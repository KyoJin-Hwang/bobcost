import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear(); // 현재 년도
  const month = currentDate.getMonth() + 1; // 현재 월 (0부터 시작하므로 +1 해줍니다)

  return `${year}년 ${month}월 목표`;
}
