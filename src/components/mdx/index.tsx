import { Callout } from './Callout';
import { MdxImage } from './Image';
import { ExternalLink } from './Link';
import CodeRunner from './codeRunner';
import LiveCode from './liveCode';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink,
  img: MdxImage,
  blockquote: Callout,
  Callout,
  LiveCode,
  CodeRunner,
};
