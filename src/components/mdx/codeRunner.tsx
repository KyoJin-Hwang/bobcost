'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';
import { ObjectInspector } from 'react-inspector';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type LogEntry = unknown[];

interface CodeRunnerProps {
  code: string;
  showLineNumbers?: boolean;
  title?: string;
}

export default function CodeRunner({
  code,
  showLineNumbers = false,
  title = '',
}: CodeRunnerProps) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState<LogEntry[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  const runCode = () => {
    const logs: LogEntry[] = [];
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logs.push(args);
      originalLog(...args);
    };
    try {
      new Function(code)();
    } catch (err: unknown) {
      if (err instanceof Error) {
        logs.push(['Error: ' + err.message]);
        console.error('Error: ', err);
      } else {
        logs.push(['Unknown error occurred']);
        console.error('Unknown error: ', err);
      }
    } finally {
      console.log = originalLog;
      setOutput(logs);
      setShowOutput(true);
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

  return (
    <div className='relative my-4 rounded border bg-white p-4 text-white dark:border-[#374151] dark:bg-[#22272e]'>
      {title && (
        <div className='mb-1 inline-block rounded-md border border-background bg-foreground px-2 py-1 font-semibold text-background'>
          {title}
        </div>
      )}
      <div className='group runner relative'>
        <SyntaxHighlighter
          language='javascript'
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            marginBottom: '0.5rem',
            borderRadius: '0.375rem',
            padding: '0.75rem 1rem',
            lineHeight: '1.5rem',
            fontSize: '0.875rem',
            maxHeight: '40rem',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
          }}
        >
          {code}
        </SyntaxHighlighter>

        <button
          onClick={copyCode}
          aria-label='코드 복사'
          className={cn(
            'absolute right-2 top-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100',
            copied && 'max-h-6 opacity-100'
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
              className='h-5 w-5 text-gray-600 hover:text-white'
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
      {output.length > 0 && (
        <div className='mt-2'>
          <button
            onClick={() => setShowOutput(!showOutput)}
            className='mb-1 rounded bg-gray-700 px-3 py-2 text-xs font-semibold hover:bg-gray-600'
          >
            {showOutput ? '출력 닫기' : '출력 보기'}
          </button>
          {showOutput && (
            <div className='scrollbar-hide max-h-60 overflow-y-auto overscroll-contain text-sm text-white'>
              {output.map((entry, idx) => (
                <div key={idx} className='mb-2'>
                  {entry.map((arg, i) => (
                    <div key={i}>
                      <ObjectInspector data={arg} expandLevel={1} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
