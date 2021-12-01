export interface AdminContactsInterface {
  email: string;
  phone: string;
}

export type TAdminContactsInterface = {
  _id: string;
} & AdminContactsInterface;
