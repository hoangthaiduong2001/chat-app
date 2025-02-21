import { CommonTextField } from '@/components/CommonTextField';
import { socket } from '@/config/socket';
import { setDataToSessionStorage } from '@/config/storage';
import { paths } from '@/routes/path';
import { UserOnline, UserOnlineError } from '@/types/user';
import { showToast } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { LoginSchema, LoginSchemaType } from './schema';

const LoginPage = () => {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit = handleSubmit(
    (value: LoginSchemaType) => {
      socket.emit('user:login', value.username);
      socket.once('usersOnline', (data: UserOnline) => {
        if (data.event !== 'error') {
          setDataToSessionStorage(data.data[data.data.length - 1]);
          navigate(paths.chat);
        }
      });
    },
    (error) => console.log(error)
  );

  useEffect(() => {
    socket.connect();
    socket.on('user:error', (error: UserOnlineError) => {
      if (error) {
        showToast(error.message, 'error');
      }
    });
    return () => {
      socket.off('user:error');
    };
  }, []);

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center ">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-50%"
              alt="Sample image"
            />
          </div>
          <div className="gap-5 w-full h-[30%] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center justify-center p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="md:w-8/12 lg:w-5/12 xl:w-full">
                <form onSubmit={onSubmit}>
                  <Controller
                    name="username"
                    control={control}
                    render={({
                      field: { value = '', onChange },
                      fieldState: { error },
                    }) => (
                      <CommonTextField
                        value={value}
                        onChange={onChange}
                        placeholder="Username"
                        startAdornmentChildren={<FaUser />}
                        errorMessage={error?.message}
                        clearable
                      />
                    )}
                  />
                  <Button
                    className="h-10 w-full text-xl"
                    sx={{ marginTop: 5 }}
                    type="submit"
                    onClick={onSubmit}
                  >
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
