import { MdxComponents } from '../mdx';
import { Post } from '@/config/types';
import Link from 'next/link';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkCodeTitle from 'remark-code-title';
import remarkGfm from 'remark-gfm';

// MDX를 section으로 자동으로 묶는 플러그인
const rehypeHeadingSections = () => {
  return (tree: any) => {
    const sections: any[] = [];
    let currentSection: any = null;

    // 트리를 순회하면서 h2나 h3를 만날 때마다 section 생성
    const processNode = (node: any) => {
      if (node.type === 'element') {
        if (node.tagName === 'h2' || node.tagName === 'h3') {
          // 이전 section이 있다면 닫기
          if (currentSection) {
            sections.push(currentSection);
          }
          
          // 새로운 section 시작 (ID가 있으면 사용, 없으면 생성)
          const id = node.properties?.id || `${node.tagName}-${Date.now()}-${Math.random()}`;
          currentSection = {
            type: 'element',
            tagName: 'section',
            properties: {
              id: `section-${id}`,
              'data-heading-section': 'true',
              className: 'heading-section'
            },
            children: []
          };
          
          // 현재 h2나 h3를 section에 추가
          currentSection.children.push(node);
        } else {
          // 현재 section에 노드 추가 (h2, h3가 아닌 모든 노드)
          if (currentSection) {
            currentSection.children.push(node);
          } else {
            // section 밖의 노드는 그대로 유지
            sections.push(node);
          }
        }
      } else {
        // 텍스트 노드 등은 현재 section에 추가
        if (currentSection) {
          currentSection.children.push(node);
        } else {
          sections.push(node);
        }
      }
    };

    // 트리 전체 처리
    if (tree.children) {
      tree.children.forEach(processNode);
    }
    
    // 마지막 section 닫기
    if (currentSection) {
      sections.push(currentSection);
    }

    // 원본 트리를 section들로 교체
    tree.children = sections;
  };
};

interface Props {
  post: Post;
}

export const PostBody = ({ post }: Props) => {
  return (
    <>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // 코드파일 제목
              remarkCodeTitle,
              // 깃허브 Flavored 마크다운 지원 추가
              remarkGfm,
              // 이모티콘 접근성 향상
              remarkA11yEmoji,
              // mdx 1줄 개행 지원
              remarkBreaks,
            ],
            rehypePlugins: [
              // pretty code block
              [
                rehypePrettyCode,
                {
                  theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                },
              ],
              // toc id를 추가하고 제목을 연결 (h태그 id 추가)
              rehypeSlug,
              // heading을 section으로 자동으로 감싸기
              rehypeHeadingSections,
            ],
          },
        }}
        components={MdxComponents}
      />
      {/* Prev / Next navigation will be rendered in page */}
    </>
  );
};
