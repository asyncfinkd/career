import AdminModules from 'modules/admin';
import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

function AdminPages() {
  return (
    <>
      <AdminModules />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { req } = context;
  const { cookies } = req;

  if (cookies.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return { props: { success: true } };
};

export default AdminPages;
