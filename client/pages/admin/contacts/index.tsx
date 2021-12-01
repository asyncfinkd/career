import AdminContactsModules from 'modules/admin/contacts';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React, { useState } from 'react';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import SpeedDialTooltipOpen from 'ui/speed-dial';

function AdminContactsPages({
  data,
  contacts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [item, setItem] = useState(data);
  const [contactsItem, setContactsItem] = useState<TAdminContactsInterface>(
    contacts.item,
  );

  return (
    <>
      <AdminContactsModules
        contactsItem={contactsItem}
        setContactsItem={setContactsItem}
      />
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
    `${process.env.SERVER_API_URL}/api/get/contacts/admin`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    },
  );

  const secondResponse = await secondRequest.json();

  return { props: { data: response.user, contacts: secondResponse } };
}

export default AdminContactsPages;
