import React from 'react';
import Chip from '@mui/material/Chip';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';

export default function ContactsHero({
  contactsItem,
}: {
  contactsItem: TAdminContactsInterface;
}) {
  return (
    <>
      <Chip
        label="Chip Outlined"
        variant="outlined"
        sx={{ cursor: 'pointer' }}
      />
    </>
  );
}
