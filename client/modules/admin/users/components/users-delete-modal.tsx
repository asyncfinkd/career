import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Button from 'components/button';
import axios from 'axios';
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

export default function UsersDeleteModal({
  open,
  handleClose,
  item,
  setItem,
}: any) {
  const [user, setUser] = React.useState('');
  const [data, setData] = React.useState(item);

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  const deleteItem = (_id: string) => {
    const updateList = item.filter((item: any) => item._id !== _id);

    setItem(updateList);
    setData(updateList);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Typography
              sx={{ fontFamily: 'MarkGEO' }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              მომხმარებლის წაშლა
            </Typography>
            <FormControl fullWidth sx={{ marginTop: '20px' }}>
              <InputLabel id="demo-simple-select-label">
                მომხმარებელი
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="მომხმარებელი"
                onChange={handleChange}
              >
                {data.map((item: any) => {
                  return <MenuItem value={item._id}>{item.fullName}</MenuItem>;
                })}
              </Select>
            </FormControl>
            {user.length != 0 && (
              <button
                style={{ width: '100%' }}
                onClick={() => {
                  axios
                    .post(
                      `${process.env.SERVER_API_URL}/api/delete/users`,
                      { _id: user },
                      {
                        headers: {
                          Authorization: `Bearer ${readCookie('cookie')}`,
                        },
                      },
                    )
                    .then((result) => {
                      if (result.data.success) {
                        setUser('');
                        handleClose();
                        deleteItem(user);

                        toast.success(
                          'გილოცავთ, მომხმარებელი წარმატებით წაიშალა!',
                        );
                      }
                    });
                }}
              >
                <Button>წაშლა</Button>
              </button>
            )}
          </form>
        </Box>
      </Modal>
    </>
  );
}
