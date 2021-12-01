import React from 'react';
import Chip from '@mui/material/Chip';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import { Box } from '@mui/system';
import ContactsEmailModal from './contacts-email-modal';
import ContactsPhoneModal from './contacts-phone-modal';

export default function ContactsHero({
  contactsItem,
}: {
  contactsItem: TAdminContactsInterface;
}) {
  const [emailModal, setEmailModal] = React.useState(false);
  const handleEmailOpen = () => setEmailModal(true);
  const handleEmailClose = () => setEmailModal(false);

  const [phoneModal, setPhoneModal] = React.useState(false);
  const handlePhoneOpen = () => setPhoneModal(true);
  const handlePhoneClose = () => setPhoneModal(false);

  const chipsFixture = [
    {
      label: contactsItem.email,
      click: handleEmailOpen,
    },
    {
      label: contactsItem.phone,
      click: handlePhoneOpen,
    },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {chipsFixture.map((item: { label: string; click: () => void }) => {
          return (
            <Chip
              label={item.label}
              variant="outlined"
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                item.click();
              }}
            />
          );
        })}
      </Box>
      <ContactsEmailModal
        open={emailModal}
        handleClose={handleEmailClose}
        contactsItem={contactsItem}
      />
      <ContactsPhoneModal
        open={phoneModal}
        handleClose={handlePhoneClose}
        contactsItem={contactsItem}
      />
    </>
  );
}
