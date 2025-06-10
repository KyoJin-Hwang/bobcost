'use client';

import * as React from 'react';

import clsx from 'clsx';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

interface Props {
  code: string;
  title: string;
}

export default function LiveCode({ code, title }: Props) {
  const transformedCode = React.useMemo(() => {
    const trimmed = code.trim();
    const isAlreadyWrapped = trimmed.includes('render(');
    const isFunction = trimmed.startsWith('function');
    const isJSX = trimmed.startsWith('<');

    if (!isAlreadyWrapped && (isFunction || isJSX)) {
      return `render(${trimmed})`;
    }
    return code;
  }, [code]);

  // Remove cssStyle definition for editor
  const editorCode = React.useMemo(() => {
    // Remove 'const cssStyle = { ... };' blocks (including possible whitespace and semicolon)
    return transformedCode.replace(
      /const\s+cssStyle\s*=\s*\{[\s\S]*?\};?\s*/g,
      ''
    );
  }, [transformedCode]);

  return (
    <LiveProvider code={transformedCode} noInline scope={{ React, clsx }}>
      <div className='flex flex-col gap-2'>
        <span className='self-start rounded-md bg-foreground px-2 py-1 font-bold text-background'>
          {title || '예시코드'}
        </span>
        <div className='mb-6 grid gap-4 lg:grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <LiveEditor
              code={editorCode}
              className='max-h-[500px] overscroll-contain rounded-md'
            />
          </div>
          <div className='max-h-[500px] overscroll-contain rounded-md border-2 border-foreground bg-secondary p-5 text-xl'>
            <LivePreview />
          </div>
        </div>
        <LiveError style={{ color: 'red' }} />
      </div>
    </LiveProvider>
  );
}
