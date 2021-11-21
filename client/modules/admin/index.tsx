import React from 'react';
import Actions from 'actions/pages/admin';
import { AdminMapProps, AdminLoginProps } from 'types/pages/admin';

export default function AdminModules() {
  const { register, handleSubmit, formState } =
    Actions.useForm<AdminLoginProps>({
      resolver: Actions.yupResolver(Actions.AdminSchema),
    });

  return (
    <>
      <Actions.Head>
        <title>ადმინისტრატორით შესვლა | სამუშაოები JSC Bank of Georgia</title>
      </Actions.Head>
      <Actions.Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: 300,
          margin: 'auto',
          maxWidth: '100%',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {Actions.AdminFixtures.map((item: AdminMapProps) => {
          return (
            <>
              <Actions.TextField
                type={item.type}
                id="filled-basic"
                sx={{ width: '100%' }}
                label={item.label}
                variant="filled"
                {...register(item.name)}
              />
            </>
          );
        })}
      </Actions.Box>
    </>
  );
}
