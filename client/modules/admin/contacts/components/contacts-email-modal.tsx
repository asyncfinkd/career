import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from 'react';

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

export default function ContactsEmailModal({ open, handleClose }: any) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Typography
              sx={{ fontFamily: 'MarkGEO' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              ინფორმაციის შეცვლა
            </Typography>
          </form>
        </Box>
      </Modal>
    </>
  );
}
