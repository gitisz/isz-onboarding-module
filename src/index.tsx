import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'isz-app';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { AppRegistration, Dns, MonitorHeart, Key } from '@mui/icons-material';


const Onboarding = React.lazy(() => import('./Onboarding'));

export function setup(app: PiletApi) {
  app.registerPage('/onboarding', Onboarding);

  app.showNotification('Hello from Onboarding!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <ListItemButton
      component={Link}
      to="/onboarding"
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
        onClick={(event) => {
          <Onboarding />
        }}
      >
        <AppRegistration />
      </ListItemIcon>
      <ListItemText primary="Onboarding" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
  app.registerTile(() => <div>Lets do some onboarding!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
