
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 text-center container mx-auto'>
      <h1 className='text-5xl font-bold text-red-500 mb-4'>404</h1>
      <p className='text-2xl mb-6'>Page not found</p>
      <Link
        to='/'
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
