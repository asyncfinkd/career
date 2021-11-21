import { AppsInterface } from '../model/apps.model';

export interface TAppsPromiseInterface {
  success: boolean;
  item?: AppsInterface[];
  msg?: string;
}
