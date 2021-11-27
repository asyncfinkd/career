import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UsersTable from './users-table';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function createData(
  _id: string,
  fullName: string,
  email: string,
  status: string,
) {
  return { _id, fullName, email, status };
}

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

export default function UsersHero({ item }: any) {
  const rows = item.map((sec: any) =>
    createData(sec._id, sec.fullName, sec.email, sec.role),
  );

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{
            marginBottom: 2,
          }}
          onClick={handleOpen}
        >
          დამატება
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <UsersTable rows={rows} />
    </>
  );
}
