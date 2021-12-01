import React from 'react';
import Actions from 'actions/modules/admin/users';
import UsersHero from './components/users-hero';
import BasicBreadcrumbs from 'ui/breadcrumbs';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function AdminUsersModules(
  { item, setItem }: any,
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
      <Actions.Head>
        <title>მომხმარებლები - სამუშაოები JSC Bank of Georgia</title>
      </Actions.Head>
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
              მომხმარებლები
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
          <BasicBreadcrumbs first="Admin" second="Users" />
          <br />
          <UsersHero item={item} setItem={setItem} />
        </Actions.Box>
      </Actions.Box>
    </>
  );
}
