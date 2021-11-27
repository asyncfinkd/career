import { PostInterface } from '../model/post.model';

/**
 * Tpost interface
 */
export interface TPostInterface {
  success: boolean;
  item?: PostInterface[];
  msg?: string;
}

/**
 * Opost interface
 */
export interface OPostInterface {
  success: boolean;
  result?: PostInterface;
  msg?: string;
}
