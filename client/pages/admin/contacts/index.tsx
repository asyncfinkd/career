import AdminContactsModules from 'modules/admin/contacts';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

function AdminContactsPages() {
  return (
    <>
      <AdminContactsModules />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;

  const request = await fetch(
    `${process.env.SERVER_API_URL}/api/check/logged`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookies.cookie}`,
      },
    },
  );

  const response = await request.json();

  if (response.statusCode == 401) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return { props: { data: response.user } };
}

export default AdminContactsPages;
