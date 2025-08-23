'use client';

import * as React from 'react';

import {
  SandpackCodeEditor,
  // SandpackConsole,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import clsx from 'clsx';

interface TsxPlaygroundProps {
  title?: string;
  code?: string;
  className?: string;
  children?: string;
  // Preview styling made simple
  css?: string;
  previewPadding?: number; // px
  previewBg?: string; // any CSS color
  previewCenter?: boolean; // center content
  previewRootClassName?: string; // class used on wrapper div inside preview
}

/**
 * TSX Playground for MDX
 * - Users can paste pure TSX (with types) that exports default component
 * - We render it with Sandpack (react-ts template)
 * - Recommended usage in MDX:
 *   <TsxPlayground title="...">
 *   {`
 *   export default function App(){
 *     return <button>Click</button>
 *   }
 *   `}
 *   </TsxPlayground>
 */
export default function TsxPlayground({
  title = 'TSX 예제',
  code,
  className,
  children,
  css,
  previewPadding = 0,
  previewBg = 'transparent',
  previewCenter = false,
  previewRootClassName = 'example-root',
}: TsxPlaygroundProps) {
  const source = React.useMemo(
    () => (code ?? children ?? '').trim(),
    [code, children]
  );
  const finalSource = React.useMemo(() => {
    if (!source) return source;

    const hasReactImport =
      /from\s+['"]react['"]/.test(source) ||
      /require\(['"]react['"]\)/.test(source);
    if (hasReactImport) return source;

    const usesReactIdentifier = /\bReact\./.test(source);
    if (usesReactIdentifier) {
      return `import * as React from 'react';\n${source}`;
    }

    // Detect common React hooks usage without import
    const hookNames = [
      'useState',
      'useEffect',
      'useMemo',
      'useCallback',
      'useRef',
      'useContext',
      'useReducer',
      'useLayoutEffect',
      'useImperativeHandle',
      'useId',
      'useDeferredValue',
      'useTransition',
      'useSyncExternalStore',
      'useInsertionEffect',
    ];
    const usedHooks = new Set<string>();
    for (const name of hookNames) {
      const re = new RegExp(`(^|\\W)${name}\\s*\\(`);
      if (re.test(source)) usedHooks.add(name);
    }
    if (usedHooks.size > 0) {
      const named = Array.from(usedHooks).sort().join(', ');
      return `import React, { ${named} } from 'react';\n${source}`;
    }

    return source;
  }, [source]);

  // Format code (prettier v3, dynamic import to reduce bundle)
  const [formattedSource, setFormattedSource] = React.useState<string | null>(
    null
  );
  React.useEffect(() => {
    let cancelled = false;
    async function format() {
      try {
        if (!finalSource) {
          setFormattedSource(null);
          return;
        }
        const prettier = (await import('prettier/standalone')).default;
        const tsPlugin = (await import('prettier/plugins/typescript')).default;
        const estreePlugin = (await import('prettier/plugins/estree')).default;
        const result = await prettier.format(finalSource, {
          parser: 'typescript',
          plugins: [tsPlugin, estreePlugin],
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          printWidth: 90,
          tabWidth: 2,
        });
        if (!cancelled) setFormattedSource(result.trim());
      } catch (e) {
        console.log(e);
        if (!cancelled) setFormattedSource(null);
      }
    }
    format();
    return () => {
      cancelled = true;
    };
  }, [finalSource]);

  const effectiveSource = formattedSource ?? finalSource;

  const wrapperCss = React.useMemo(() => {
    const base =
      `.${previewRootClassName} {\n  padding: ${previewPadding}px;\n  background: ${previewBg};\n}\n` +
      (previewCenter
        ? `.${previewRootClassName} {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 260px;\n}\n`
        : '');
    return [base, css?.trim()].filter(Boolean).join('\n');
  }, [previewPadding, previewBg, previewCenter, previewRootClassName, css]);

  const appWrapperSource = React.useMemo(() => {
    return `import * as React from 'react';\nimport './index.css';\nimport UserApp from './UserApp';\n\nexport default function App(){\n  return (\n    <div className='${previewRootClassName}'>\n      <UserApp />\n    </div>\n  );\n}\n`;
  }, [previewRootClassName]);

  const [copied, setCopied] = React.useState(false);
  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(effectiveSource || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.log(e);
    }
  }, [effectiveSource]);

  return (
    <div
      className={clsx(
        'relative my-4 rounded border bg-white p-4 text-white dark:border-[#374151] dark:bg-[#22272e]',
        className
      )}
    >
      <div className='mb-2 flex items-center justify-between'>
        <span className='inline-block rounded-md border border-background bg-foreground px-2 py-1 font-bold text-background'>
          {title}
        </span>
        <button
          type='button'
          onClick={handleCopy}
          aria-label='코드 복사'
          className={clsx(
            'rounded border border-transparent px-2 py-1 text-xs text-gray-200 hover:border-gray-500 hover:bg-gray-700',
            copied && 'text-green-400'
          )}
        >
          {copied ? '복사됨' : '복사'}
        </button>
      </div>

      <SandpackProvider
        template='react-ts'
        files={{
          '/UserApp.tsx': {
            code: effectiveSource || DEFAULT_APP,
            active: true,
          },
          '/App.tsx': { code: appWrapperSource, hidden: true },
          '/index.css': { code: wrapperCss, hidden: true },
        }}
        options={{
          externalResources: [],
          recompileMode: 'delayed',
          recompileDelay: 400,
        }}
      >
        <div className='flex flex-col gap-4'>
          <div className='overflow-hidden rounded-md border border-[#374151]'>
            <div className='flex items-center justify-between bg-[#1f2937] px-3 py-2 text-sm'>
              <span className='font-semibold text-white'>코드</span>
            </div>
            <SandpackCodeEditor
              showTabs={false}
              showLineNumbers
              wrapContent
              className='min-h-[300px]'
            />
          </div>

          <div className='overflow-hidden rounded-md border border-[#374151]'>
            <div className='flex items-center justify-between bg-[#1f2937] px-3 py-2 text-sm'>
              <span className='font-semibold text-white'>미리보기</span>
            </div>
            <SandpackPreview
              showOpenInCodeSandbox
              className='min-h-[320px] bg-secondary'
            />
          </div>

          {/* <div className='overflow-hidden rounded-md border border-[#374151]'>
            <div className='flex items-center justify-between bg-[#1f2937] px-3 py-2 text-sm'>
              <span className='font-semibold text-white'>콘솔</span>
            </div>
            <SandpackConsole className='min-h-[160px] bg-black' />
          </div> */}
        </div>
      </SandpackProvider>
    </div>
  );
}

const DEFAULT_APP = `export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h3>TSX Playground</h3>
      <p>오른쪽 상단 복사 버튼으로 이 코드를 그대로 가져가 사용할 수 있어요.</p>
    </div>
  );
}`;
