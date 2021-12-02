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
import { readCookie } from 'shared/read-cookie';
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

export default function UsersModal({ handleClose, open, rows }: any) {
  const { register, handleSubmit, setValue, formState } =
    useForm<AdminUsersProps>({
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
              const newData = {
                fullName: data.fullName,
                email: data.email,
                password: data.password,
                role: 'admin',
                image: 'none',
              };
              fetch(`${process.env.SERVER_API_URL}/api/add/user`, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                  Authorization: `Bearer ${readCookie('cookie')}`,
                },
                body: JSON.stringify(newData),
              })
                .then((res) => res.json())
                .then((result: any) => {
                  if (result.success) {
                    toast.success(
                      'გილოცავთ, ახალი მომხმარებელი წარმატებით დაემატა',
                    );
                    const updatedRow = { ...newData, _id: result.item };
                    rows.push(updatedRow);
                    handleClose();

                    setValue('fullName', '');
                    setValue('email', '');
                    setValue('password', '');
                  }
                });
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
