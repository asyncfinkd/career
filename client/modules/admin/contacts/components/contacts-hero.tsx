import React from 'react';
import Chip from '@mui/material/Chip';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import { Box } from '@mui/system';

export default function ContactsHero({
  contactsItem,
}: {
  contactsItem: TAdminContactsInterface;
}) {
  const chipsFixture = [
    {
      label: contactsItem.email,
    },
    {
      label: contactsItem.phone,
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {chipsFixture.map((item: { label: string }) => {
          return (
            <Chip
              label={item.label}
              variant="outlined"
              sx={{ cursor: 'pointer' }}
            />
          );
        })}
      </Box>
    </>
  );
}
