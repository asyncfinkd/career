import Head from 'next/head';
import Modal from 'ui/modal';
import Router from 'next/router';
import NProgress from 'nprogress';
import { readCookie } from 'shared/read-cookie';
import { isServer } from 'shared/is-server';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { client } from 'shared/query-client';

export default {
  Head,
  readCookie,
  Modal,
  Router,
  NProgress,
  isServer,
  QueryClientProvider,
  ReactQueryDevtools,
  client,
};
