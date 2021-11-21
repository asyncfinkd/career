import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { AdminSchema } from 'schema/pages/admin';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Head from 'next/head';
import { AdminFixtures } from 'fixtures/modules/admin';

export default {
  Box,
  TextField,
  useForm,
  AdminSchema,
  yupResolver,
  Head,
  AdminFixtures,
};
