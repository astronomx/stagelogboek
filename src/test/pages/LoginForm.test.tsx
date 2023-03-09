import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSignIn } from '@nhost/nextjs-auth';
import { Alert, Button, Form, Input, Label } from '../components';

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yup.resolver(schema),
  });
  const { signIn } = useSignIn();
  const router = useRouter();

  const onSubmit = async ({ email, password }: FormValues) => {
    try {
      await signIn(email, password);
      router.push('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {errorMessage && (
          <Alert type="error" message={errorMessage} className="mb-4" />
        )}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              {...register('email')}
              placeholder="Enter your email"
              className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full h-10 rounded-md"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              {...register('password')}
              placeholder="Enter your password"
              className="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full h-10 rounded-md"
            />
          </div>
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md disabled:bg-gray-300 disabled:text-gray-500"
          >
            {formState.isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;