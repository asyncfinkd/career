import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Head from 'next/head';
import Button from '@mui/material/Button';
import { useForm, get } from 'react-hook-form';
import { AdminSchema } from 'schema/pages/admin';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AdminFixtures } from 'fixtures/modules/admin';
import axios from "axios";

export default {
  Box,
  TextField,
  useForm,
  AdminSchema,
  yupResolver,
  Head,
  AdminFixtures,
  Button,
  get,
  axios
};
