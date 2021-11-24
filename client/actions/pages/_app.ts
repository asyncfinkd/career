import Head from 'next/head';
import Modal from 'ui/modal';
import Router from 'next/router';
import NProgress from 'nprogress';
import { readCookie } from 'shared/read-cookie';
import { isServer } from 'shared/is-server';
import { client } from 'shared/query-client';

export default {
  Head,
  readCookie,
  Modal,
  Router,
  NProgress,
  isServer,
  client,
};
