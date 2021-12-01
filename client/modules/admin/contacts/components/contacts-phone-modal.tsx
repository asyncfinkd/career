import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
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

export default function ContactsPhoneModal({
  open,
  handleClose,
  contactsItem,
}: {
  open: boolean;
  handleClose: () => void;
  contactsItem: TAdminContactsInterface;
}) {
  const [phone, setPhone] = React.useState(contactsItem?.phone);

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
              მობილურის ნომრის შეცვლა
            </Typography>
            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <TextField
                id="outlined-basic"
                sx={{ marginTop: '20px', width: '100%' }}
                label={'მობილურის ნომერი'}
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
              />
            </FormControl>
            <Button
              onClick={() => {
                if (phone == contactsItem.phone) handleClose();
                else {
                  axios
                    .post(
                      `${process.env.SERVER_API_URL}/api/edit/contacts/by/phone`,
                      { _id: contactsItem._id, phone: phone },
                    )
                    .then((result) => {
                      if (result.status <= 400) {
                        contactsItem.phone = phone;
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
