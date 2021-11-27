import { AppsInterface } from '../model/apps.model';

/**
 * Tapps promise interface
 */
export interface TAppsPromiseInterface {
  success: boolean;
  item?: AppsInterface[];
  msg?: string;
}
