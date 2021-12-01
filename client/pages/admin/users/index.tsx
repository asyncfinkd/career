import AdminUsersModules from 'modules/admin/users';
import React, { useState } from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import SpeedDialTooltipOpen from 'ui/speed-dial';

function AdminUsersPages({
  data,
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [newItem, setNewItem] = useState<any>(item);

  return (
    <>
      <AdminUsersModules item={newItem} setItem={setNewItem} />
      <SpeedDialTooltipOpen />
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

  const secondRequest = await fetch(
    `${process.env.SERVER_API_URL}/api/get/users`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${cookies.cookie}`,
      },
    },
  );

  const secondResponse = await secondRequest.json();

  return { props: { data: response.user, item: secondResponse.item } };
}

export default AdminUsersPages;
