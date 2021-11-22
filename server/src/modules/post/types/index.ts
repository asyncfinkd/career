import { PostInterface } from '../model/post.model';

export interface TPostInterface {
  success: boolean;
  item?: PostInterface[];
  msg?: string;
}

export interface OPostInterface {
  success: boolean;
  result?: PostInterface;
  msg?: string;
}
