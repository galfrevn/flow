export interface UserType {
  id: string;
  name: string;
  image: string;
  email: string;
  emailverified: boolean;
}

export interface PostType {
  _id: string;
  user: UserType;
  image?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
