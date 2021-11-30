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

export default function UsersDeleteModal({ open, handleClose, item }: any) {
  const [user, setUser] = React.useState('');
  const [data, setData] = React.useState(item);

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
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
          </form>
        </Box>
      </Modal>
    </>
  );
}
