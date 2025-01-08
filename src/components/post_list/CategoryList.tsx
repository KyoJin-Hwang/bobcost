'use client';

import CategoryButton from './CategoryButton';
import { CategoryDetail } from '@/config/types';

interface CategoryListProps {
  categoryList: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}

const CategoryList = ({
  categoryList,
  allPostCount,
  currentCategory = 'all',
}: CategoryListProps) => {
  return (
    <>
      <section>
        <ul className='flex gap-3'>
          <CategoryButton
            href='/blog'
            isCurrent={currentCategory === 'all'}
            displayName='All'
            count={allPostCount}
          />
          {categoryList.map((cg) => (
            <CategoryButton
              key={cg.dirName}
              href={`/blog/${cg.dirName}`}
              displayName={cg.publicName}
              isCurrent={cg.dirName === currentCategory}
              count={cg.count}
            />
          ))}
        </ul>
      </section>

      <section>모바일</section>
    </>
  );
};

export default CategoryList;
