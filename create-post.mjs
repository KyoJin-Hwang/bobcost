import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function getCurrentDateTime() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const postsDir = path.join(__dirname, 'src', 'posts');

  // posts 하위 폴더 목록 불러오기
  const subDirs = fs.readdirSync(postsDir).filter((f) => {
    const fullPath = path.join(postsDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  console.log('\n카테고리 폴더를 선택해주세요:');
  subDirs.forEach((dir, index) => {
    console.log(`${index + 1}. ${dir}`);
  });
  console.log(`${subDirs.length + 1}. 카테고리 만들기`);
  // 카테고리 만들기
  console.log(``);
  const selected = await ask('\x1b[33m번호 입력: \x1b[0m');
  let parentFolder;

  if (parseInt(selected) === subDirs.length + 1) {
    parentFolder = await ask('\x1b[33m새로운 카테고리명: \x1b[0m');
    fs.mkdirSync(path.join(postsDir, parentFolder), { recursive: true });
  } else {
    parentFolder = subDirs[parseInt(selected) - 1];
  }

  // 생성할 폴더 이름 생성
  console.log('');
  const newFolder = await ask('\x1b[33m생성할 Post 폴더 이름: \x1b[0m');
  const fullPath = path.join(postsDir, parentFolder, newFolder);
  fs.mkdirSync(fullPath, { recursive: true });

  // MDX파일 POST 상단 내용
  const title = await ask('\x1b[33mTitle: \x1b[0m');
  const desc = await ask('\x1b[33mDescription: \x1b[0m');
  console.log('');
  console.log('썸네일 폴더 설정해주세요.');
  console.log('1. frontend', '2. backend');
  const bfSelected = await ask('\x1b[33m번호 입력: \x1b[0m');
  let bfFolder;
  if (bfSelected === '1') {
    bfFolder = 'frontend';
  } else if (bfSelected === '2') {
    bfFolder = 'backend';
  } else {
    console.log('default값인. frontend로 설정합니다.');
    bfFolder = 'frontend';
  }
  const thumbnailName = await ask(
    '\x1b[33m썸내일 파일명 (without .png): \x1b[0m'
  );

  console.log('');
  const groups = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Docker',
    'Next',
    'TS',
    'Zustand',
  ];
  console.log('선택할 머리말 그룹명:');
  console.log(
    groups.map((group, index) => `${index + 1}. ${group}`).join('   ')
  );
  const groupIndexInput = await ask(
    '\x1b[33m그룹번호를 선택하여 엔터를 눌러주세요 (또는 입력하지않고 엔터 누를시 직접입력): \x1b[0m'
  );
  const groupIndex = parseInt(groupIndexInput);

  let group;
  if (groupIndexInput.trim() === '') {
    group = await ask('\x1b[33m입력하실 그룹 이름: \x1b[0m');
    if (!group.trim()) group = 'null';
  } else if (groupIndex > 0 && groupIndex <= groups.length) {
    group = groups[groupIndex - 1];
  } else {
    group = 'null';
  }

  const createdAt = getCurrentDateTime();
  const thumbnail = `/posts/${bfFolder}/${thumbnailName}.png`;

  const content = `---
title: '${title}'
desc: ${desc}
createdAt: ${createdAt}
thumbnail: ${thumbnail}
group: ${group}
---

`;

  fs.writeFileSync(path.join(fullPath, 'context.mdx'), content);
  console.log(`✅ ${fullPath}/context.mdx 생성 완료`);

  rl.close();
}

main();
