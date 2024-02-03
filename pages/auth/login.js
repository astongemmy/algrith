'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Head from 'next/head';

import Layout from '../../components/Layout';

const Login = () => {
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  const [login, setLogin] = useState({
    password: '',
    username: '',
  });

  const callbackUrl = '/';
  const router = useRouter();
  
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);

      await signIn('credentials', {
        username: login.username,
        password: login.password,
        redirect: false
      });

      setLogin({ username: '', password: '' });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      // setError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const inputStyle =
    'form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';

  return (
    <Layout>
      <Head>
        <meta
          content="width=device-width, minimum-scale=1, initial-scale=1"
          name="viewport"
        />
        <title> Sign In | Algrith </title>
      </Head>

      <main>
        <form onSubmit={handleSubmit}>
          {/* {error && (
            <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
          )} */}
          
          {/* <input type="hidden" name="csrfToken" value="268918e174e6350e8205f57c570461d4244ace146b79be8fe4485fd9551ce81b" /> */}

          <div className="mb-6">
            <input
              onChange={handleChange}
              className={inputStyle}
              placeholder="Username"
              value={login.username}
              name="username"
              type="text"
              required
            />
          </div>

          <div className="mb-6">
            <input
              onChange={handleChange}
              value={login.password}
              placeholder="Password"
              className={inputStyle}
              type="password"
              name="password"
              required
            />
          </div>

          <button
            className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            style={{ backgroundColor: `${loading ? '#ccc' : '#3446eb'}` }}
            disabled={loading}
            type="submit"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>

          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          {!session ? (
            <a
              className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: '#ffffff', color: 'gray' }}
              onClick={() => signIn('google')}
              role="button"
            >
              <img
                src="/images/others/google-g-icon.png"
                style={{ height: '2rem' }}
                alt="google_signin_icon"
                className="pr-2"
              />
              Continue with Google
            </a>
          ) : (
            <a
              className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: '#ffffff', color: 'gray' }}
              onClick={() => signOut()}
              role="button"
            >
              Sign Out { session.user.name }
            </a>
          )}
        </form>
      </main>
    </Layout>
  );
};

export default Login;