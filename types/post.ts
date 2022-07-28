export interface PostType {
  _id: string;
  user: string;
  image?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
