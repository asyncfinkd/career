export type AdminLoginProps = {
  email: string;
  password: string;
};

export type AdminMapPropsRequired = {
  message: string;
};

export type AdminMapProps = {
  label: string;
  name: any;
  type: string;
  required: AdminMapPropsRequired;
};
