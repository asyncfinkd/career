import React from 'react';
import Chip from '@mui/material/Chip';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import { Box } from '@mui/system';

export default function ContactsHero({
  contactsItem,
}: {
  contactsItem: TAdminContactsInterface;
}) {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          label={contactsItem.email}
          variant="outlined"
          sx={{ cursor: 'pointer' }}
        />
        <Chip
          label={contactsItem.phone}
          variant="outlined"
          sx={{ cursor: 'pointer' }}
        />
      </Box>
    </>
  );
}
