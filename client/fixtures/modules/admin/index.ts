export const AdminFixtures = [
  {
    label: 'ელექტრონული ფოსტა',
    name: 'email',
    type: 'text',
    required: {
      message: 'Valid email is required',
    },
  },
  {
    label: 'პაროლი',
    name: 'password',
    type: 'password',
    required: {
      message: 'Password is required',
    },
  },
];
