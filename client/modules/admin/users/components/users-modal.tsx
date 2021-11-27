import React from 'react';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UsersForm } from 'fixtures/modules/admin/users';
import Button from 'components/button';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm, get } from 'react-hook-form';
import { AdminUserSchema } from 'schema/pages/admin/users';
import { AdminUsersProps } from 'types/pages/admin/users';

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
  const { register, handleSubmit, formState } = useForm<AdminUsersProps>({
    resolver: yupResolver(AdminUserSchema),
  });
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
          <form
            style={{ marginTop: '10px', width: '100%' }}
            onSubmit={handleSubmit((data: AdminUsersProps) => {
              console.log(data);
            })}
          >
            {UsersForm.map((item: any) => {
              const { type, text, name } = item;

              return (
                <TextField
                  id="outlined-basic"
                  label={text}
                  variant="outlined"
                  type={type}
                  sx={{ marginTop: '20px' }}
                  error={get(formState.errors, name)}
                  InputLabelProps={{
                    style: { fontFamily: 'MarkGEO' },
                  }}
                  helperText={
                    get(formState.errors, name) && item.required.message
                  }
                  {...register(name)}
                  style={{ width: '100%' }}
                  InputProps={{ style: { fontFamily: 'MarkGEO' } }}
                />
              );
            })}
            <Button>დამატება</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
