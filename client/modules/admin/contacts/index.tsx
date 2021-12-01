import React from 'react';
import Actions from 'actions/modules/admin/contacts';
import Head from 'next/head';
import BasicBreadcrumbs from 'ui/breadcrumbs';
import { TAdminContactsInterface } from 'types/pages/admin/contacts';
import ContactsHero from './components/contacts-hero';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AdminContactsModules(
  {
    contactsItem,
    setContactsItem,
  }: { contactsItem: TAdminContactsInterface; setContactsItem: any },
  props: Props,
) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Head>
        <title>კონტაქტები - სამუშაოები JSC Bank of Georgia</title>
      </Head>
      <Actions.Box sx={{ display: 'flex' }}>
        <Actions.CssBaseline />
        <Actions.AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Actions.Toolbar>
            <Actions.IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Actions.MenuIcon />
            </Actions.IconButton>
            <Actions.Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontFamily: 'MarkGEO' }}
            >
              კონტაქტები
            </Actions.Typography>
          </Actions.Toolbar>
        </Actions.AppBar>
        <Actions.Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Actions.Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <Actions.AdminSidebar />
          </Actions.Drawer>
          <Actions.Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
          >
            <Actions.AdminSidebar />
          </Actions.Drawer>
        </Actions.Box>
        <Actions.Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Actions.Toolbar />
          <BasicBreadcrumbs first="Admin" second="Contacts" />
          <br />
          <ContactsHero contactsItem={contactsItem} />
        </Actions.Box>
      </Actions.Box>
    </>
  );
}
