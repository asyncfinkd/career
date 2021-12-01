import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';
import { FormControl, TextField } from '@mui/material';
import Button from 'components/button';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import axios from 'axios';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContactsEmailModal({
  open,
  handleClose,
  contactsItem,
}: {
  open: boolean;
  handleClose: () => void;
  contactsItem: TAdminContactsInterface;
}) {
  const [email, setEmail] = React.useState(contactsItem.email);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Typography
              sx={{ fontFamily: 'MarkGEO' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              ელ.ფოსტის შეცვლა
            </Typography>
            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <TextField
                id="outlined-basic"
                sx={{ marginTop: '20px', width: '100%' }}
                label={'ელ.ფოსტა'}
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
            </FormControl>
            <Button
              onClick={() => {
                if (email == contactsItem.email) handleClose();
                else {
                  axios
                    .post(
                      `${process.env.SERVER_API_URL}/api/edit/contacts/by/email`,
                      { _id: contactsItem._id, email: email },
                    )
                    .then((result) => {
                      if (result.status <= 400) {
                        contactsItem.email = email;
                        toast.success('გილოცავთ, წარმატებით შეიცვალა ელ.ფოსტა');

                        handleClose();
                      }
                    });
                }
              }}
            >
              რედაქტირება
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
