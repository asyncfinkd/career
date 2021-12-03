import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AdminSidebarInterface } from 'types/pages/admin/sidebar';
import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <>
      <div>
        <Toolbar />
        <Divider />
        <List>
          {[
            {
              text: 'მთავარი',
              route: '/admin/dashboard',
              key: 0,
            },
            {
              text: 'CV დამატება',
              route: '/admin/add/cv',
              key: 1,
            },
            {
              text: 'მომხმარებლები',
              route: '/admin/users',
              key: 2,
            },
            {
              text: 'კონტაქტები',
              route: '/admin/contacts',
              key: 3,
            },
          ].map((item: AdminSidebarInterface) => {
            return (
              <Link href={item.route}>
                <ListItem button key={item.text}>
                  <ListItemIcon>
                    {item.key % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    disableTypography={true}
                    sx={{ fontFamily: 'MarkGEO', fontSize: 16 }}
                    primary={item.text}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </>
  );
}
