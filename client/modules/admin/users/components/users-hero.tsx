import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UsersTable from './users-table';
import UsersModal from './users-modal';

function createData(
  _id: string,
  fullName: string,
  email: string,
  status: string,
) {
  return { _id, fullName, email, status };
}

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
      <UsersModal handleClose={handleClose} open={open} rows={item} />
      <UsersTable rows={rows} />
    </>
  );
}
