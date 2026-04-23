export interface IUserPostComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type IUserPostCommentsList = IUserPostComments[];
