import type { UserType } from "types/user";

export type CommentType = {
  _id: string;
  id: string;
  user: string;
  content: string;
  createdAt: Date;
};

export interface PostType {
  _id: string;
  user: UserType;
  image?: string;
  content: string;
  likes: string[];
  comments: CommentType[];
  createdAt: Date;
  updatedAt: Date;
  noButton?: boolean;
}
