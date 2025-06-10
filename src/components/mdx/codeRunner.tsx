'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

interface CodeRunnerProps {
  code: string;
  showLineNumbers?: boolean;
}

export default function CodeRunner({
  code,
  showLineNumbers = false,
}: CodeRunnerProps) {
  const [copied, setCopied] = useState(false);

  const runCode = () => {
    try {
      new Function(code)();
    } catch (err: any) {
      alert('Error: ' + err.message);
      console.error('Error: ', err);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const codeLines = code.split('\n');
  const editorLines = codeLines.slice(1, codeLines.length - 1);

  const formattedCode = showLineNumbers
    ? editorLines
        .map((line, i) => {
          const lineNumber = i + 1;
          return `<span class="block"><span class="inline-block w-4 mr-4 text-sm text-gray-500 select-none">${lineNumber}</span><span class="text-base">${line}</span></span>`;
        })
        .join('\n')
    : editorLines.join('\n');

  return (
    <div className='my-4 rounded border bg-zinc-900 p-4 text-white'>
      <div className='group relative'>
        <pre
          className='mb-2 overflow-x-auto whitespace-pre-wrap rounded bg-black p-4 text-sm'
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        />
        <button
          onClick={copyCode}
          aria-label='코드 복사'
          className={cn(
            'absolute right-2 top-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100',
            copied && 'opacity-100'
          )}
        >
          {copied ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-green-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 13l4 4L19 7'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-300 hover:text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <rect
                x={9}
                y={9}
                width={13}
                height={13}
                rx={2}
                ry={2}
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
              />
            </svg>
          )}
        </button>
      </div>
      <button
        onClick={runCode}
        className='mb-2 rounded bg-blue-600 px-4 py-1 hover:bg-blue-500'
      >
        ▶ 실행
      </button>
    </div>
  );
}
