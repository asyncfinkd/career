import React, { useState } from 'react';
import Actions from 'actions/pages/admin';
import { AdminMapProps, AdminLoginProps } from 'types/pages/admin';
import router from 'next/router';

export default function AdminModules() {
  const { register, handleSubmit, formState } =
    Actions.useForm<AdminLoginProps>({
      resolver: Actions.yupResolver(Actions.AdminSchema),
    });
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <>
      <Actions.Head>
        <title>ადმინისტრატორით შესვლა | სამუშაოები JSC Bank of Georgia</title>
      </Actions.Head>
      <form
        onSubmit={handleSubmit((data: AdminLoginProps) => {
          fetch(`${process.env.SERVER_API_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((result: any) => {
              if (result.statusCode == 401) {
                setErrorMessage(true);
              } else {
                setErrorMessage(false);
                document.cookie = `cookie=${result.access_token};path=/`;
                router.push('/admin/dashboard');
              }
            });
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
          {errorMessage && (
            <p style={{ fontFamily: 'MarkGEO', fontSize: 14, color: '#f00' }}>
              გთხოვთ შეიყვანოთ სწორი ინფორმაცია
            </p>
          )}
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
