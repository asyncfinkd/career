export const UsersForm = [
  {
    text: 'სახელი გვარი',
    name: 'fullName',
    type: 'text',
    required: {
      message: 'გთხოვთ შეიყვანოთ სახელი გვარი',
    },
  },
  {
    text: 'ელ.ფოსტა',
    name: 'email',
    type: 'text',
    required: {
      message: 'გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა',
    },
  },
  {
    text: 'პაროლი',
    name: 'password',
    type: 'password',
    required: {
      message: 'გთხოვთ შეიყვანოთ პაროლი',
    },
  },
];
