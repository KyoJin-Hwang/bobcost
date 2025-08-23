import CodeRunnerClient from './codeRunner';

interface Props {
  code?: string;
  showLineNumbers?: boolean;
  title?: string;
  codeFn?: () => void;
}

function extractFunctionBody(fn: () => void): string {
  const source = fn.toString();
  const arrowMatch = source.match(/^\s*\(?\s*\)?\s*=>\s*\{([\s\S]*)\}\s*$/);
  if (arrowMatch && arrowMatch[1]) return arrowMatch[1].trim();
  const classicMatch = source.match(/^\s*function[\s\S]*?\{([\s\S]*)\}\s*$/);
  if (classicMatch && classicMatch[1]) return classicMatch[1].trim();
  return source;
}

export default function CodeRunnerWrapper({
  code,
  showLineNumbers,
  title,
  codeFn,
}: Props) {
  const resolvedCode = codeFn ? extractFunctionBody(codeFn) : code || '';
  // Preserve author's raw formatting for display while executing normalized code
  const rawDisplay = codeFn ? extractFunctionBody(codeFn) : code || '';
  return (
    <CodeRunnerClient
      code={resolvedCode}
      rawDisplay={rawDisplay}
      showLineNumbers={showLineNumbers}
      title={title}
    />
  );
}


