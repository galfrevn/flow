import type { UserType } from "types/user";

export interface PostType {
  _id: string;
  user: UserType;
  image?: string;
  content: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
}
