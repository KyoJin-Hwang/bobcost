export interface PostMatter {
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  group: string;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}

export interface ResumeProject {
  type: number;
  title: string;
  start: string;
  end: string;
  team: string;
  url: string;
  summary: {
    title: string;
    point: string;
    devlop: string[];
  };
  back: string;
  trouble: {
    title: string;
    desc: string;
  }[];
  skill: string[];
  img?: string[];
  review: string;
}
