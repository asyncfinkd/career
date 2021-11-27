import React from 'react';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { UsersForm } from 'fixtures/modules/admin/users';

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

export default function UsersModal({ handleClose, open }: any) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ fontFamily: 'MarkGEO' }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            ადმინისტრატორის დამატება
          </Typography>
          <FormControl sx={{ marginTop: '10px', width: '100%' }}>
            {UsersForm.map((item: any) => {
              return (
                <TextField
                  id="outlined-basic"
                  label={item.text}
                  variant="outlined"
                  sx={{ marginTop: '20px' }}
                  InputLabelProps={{
                    style: { fontFamily: 'MarkGEO' },
                  }}
                  InputProps={{ style: { fontFamily: 'MarkGEO' } }}
                />
              );
            })}
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
