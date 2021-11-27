import React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UsersTable from './users-table';

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
        >
          დამატება
        </Button>
      </Box>
      <UsersTable rows={rows} />
    </>
  );
}
