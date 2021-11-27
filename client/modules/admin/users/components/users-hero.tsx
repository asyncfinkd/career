import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import UsersTable from './users-table';
import UsersModal from './users-modal';
import TextField from '@mui/material/TextField';

function createData(
  _id: string,
  fullName: string,
  email: string,
  status: string,
) {
  return { _id, fullName, email, status };
}

export default function UsersHero({ item, setItem }: any) {
  const [result, setResult] = useState(item);
  const [input, setInput] = useState<string>('');
  function identificationSearch(): void {
    if (input.length == 0) {
      setItem(result);
    } else {
      setItem(
        result.filter((val: any) => {
          if (input == '') {
            return val;
          } else if (
            val.fullName.toLowerCase().includes(input.toLowerCase()) ||
            val.email.toLowerCase().includes(input.toLowerCase()) ||
            val._id.toLowerCase().includes(input.toLowerCase())
          ) {
            return val;
          }
        }),
      );
    }
  }

  React.useEffect(() => {
    identificationSearch();
  }, [input]);
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
          justifyContent: 'space-between',
        }}
      >
        <TextField
          label="ძებნა..."
          id="outlined-basic"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          InputLabelProps={{ style: { fontFamily: 'MarkGEO' } }}
          inputProps={{ style: { fontFamily: 'MarkGEO' } }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
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
