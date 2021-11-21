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
      <form
        onSubmit={handleSubmit((data: AdminLoginProps) => {
          console.log(data);
        })}
      >
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
            const { type, label, name } = item;

            return (
              <>
                <Actions.TextField
                  type={type}
                  id={
                    Actions.get(formState.errors, name)
                      ? 'filled-error-helper-text'
                      : 'filled-basic'
                  }
                  sx={{ width: '100%' }}
                  label={label}
                  variant="filled"
                  error={Actions.get(formState.errors, name)}
                  helperText={
                    Actions.get(formState.errors, name) && item.required.message
                  }
                  {...register(name)}
                />
              </>
            );
          })}
          <Actions.Button
            variant="contained"
            sx={{ width: '100%', height: 40 }}
            type="submit"
          >
            შესვლა
          </Actions.Button>
        </Actions.Box>
      </form>
    </>
  );
}
