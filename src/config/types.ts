export interface PostMatter {
  title: string;
  createdAt: Date;
  updatedAt?: Date;
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