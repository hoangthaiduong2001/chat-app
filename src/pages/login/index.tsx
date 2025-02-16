import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { CommonTextField } from '../../components/CommonTextField';
import { LoginSchema, LoginSchemaType } from './schema';

const Login = () => {
  const { control, trigger, handleSubmit, getValues, setValue, clearErrors, setError } =
    useForm<LoginSchemaType>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        username: '',
      },
    });
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form>
              <Controller
                name="username"
                control={control}
                render={({ field: { value = '', onChange }, fieldState: { error } }) => (
                  <CommonTextField
                    value={value}
                    onChange={onChange}
                    placeholder="username"
                    startAdornmentChildren={<FaUser />}
                    errorMessage={error?.message}
                    autoFocus
                  />
                )}
              />
            </form>
            <Button color="info" className="h-10">
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
