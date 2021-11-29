import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { UsersForm } from 'fixtures/modules/admin/users';
import Button from 'components/button';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AdminUsersEditProps } from 'types/pages/admin/users/edit';
import { AdminUserEditSchema } from 'schema/pages/admin/users/edit';

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

export default function UsersEditModal({ open, handleClose, item }: any) {
  const [age, setAge] = React.useState('');
  const [data, setData] = React.useState(item);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const { register, handleSubmit, formState } = useForm<AdminUsersEditProps>({
    resolver: yupResolver(AdminUserEditSchema),
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
          <form
            onSubmit={handleSubmit((data: AdminUsersEditProps) => {
              console.log(data);
            })}
          >
            <Typography
              sx={{ fontFamily: 'MarkGEO' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              ინფორმაციის შეცვლა
            </Typography>
            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <InputLabel id="demo-simple-select-label">
                მომხმარებელი
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="მომხმარებელი"
                onChange={handleChange}
              >
                {data.map((item: any) => {
                  return <MenuItem value={item._id}>{item.fullName}</MenuItem>;
                })}
              </Select>
            </FormControl>
            {age != '' && (
              <>
                {UsersForm.map((secItem: any) => {
                  const { type, label, name, text } = secItem;

                  return (
                    <TextField
                      id="outlined-basic"
                      sx={{ marginTop: '20px', width: '100%' }}
                      label={text}
                      variant="outlined"
                      type={type}
                      error={get(formState.errors, name)}
                      helperText={
                        get(formState.errors, name) && secItem.required.message
                      }
                      {...register(name)}
                    />
                  );
                })}
                <Button>რედაქტირება</Button>
              </>
            )}
          </form>
        </Box>
      </Modal>
    </>
  );
}
