import { getPostList, getCategoryList } from './src/lib/post.ts';
import fs from 'fs';
import path from 'path';

async function generatePostData() {
  const posts = await getPostList();
  const dataPath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
  console.log('Generated posts.json');

  const categories = getCategoryList();
  const categoryDataPath = path.join(process.cwd(), 'src', 'data', 'categories.json');
  fs.writeFileSync(categoryDataPath, JSON.stringify(categories, null, 2));
  console.log('Generated categories.json');
}

generatePostData();
