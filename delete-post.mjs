import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// posts 디렉토리 경로
const postsDir = path.join(__dirname, 'src', 'posts');

// readline 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

function getAllSubfolders(postsDir) {
  const result = [];

  const groups = fs
    .readdirSync(postsDir)
    .filter((file) => fs.statSync(path.join(postsDir, file)).isDirectory());

  for (const group of groups) {
    const groupPath = path.join(postsDir, group);
    const children = fs
      .readdirSync(groupPath)
      .filter((child) =>
        fs.statSync(path.join(groupPath, child)).isDirectory()
      );

    for (const child of children) {
      result.push(`${group}/${child}`);
    }
  }

  return result;
}

async function main() {
  if (!fs.existsSync(postsDir)) {
    console.log('❌ posts 폴더가 존재하지 않습니다.');
    process.exit(1);
  }

  const folders = getAllSubfolders(postsDir);

  if (folders.length === 0) {
    console.log('❌ posts 내에 삭제할 수 있는 하위 폴더가 없습니다.');
    process.exit(1);
  }

  console.log('\n🗂 삭제 가능한 폴더 목록:');
  folders.forEach((folder, index) => {
    console.log(`${index + 1}. ${folder}`);
  });

  const input = await ask('\n삭제할 폴더 번호 입력: ');
  const selected = folders[Number(input) - 1];

  if (!selected) {
    console.log('❌ 잘못된 입력입니다.');
    rl.close();
    return;
  }

  console.log(`\n⚠️ 선택한 폴더: ${selected}`);
  const confirm = await ask('정말 삭제하시겠습니까? (1 = 예, 2 = 아니오): ');

  if (confirm === '1') {
    const targetPath = path.join(postsDir, selected);
    fs.rmSync(targetPath, { recursive: true, force: true });
    console.log(`✅ ${selected} 삭제 완료`);
  } else {
    console.log('🚫 삭제 취소됨');
  }

  rl.close();
}

main();
