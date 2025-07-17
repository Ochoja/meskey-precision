export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-5xl font-bold mb-8'>404 - Page Not Found</h1>
      <p className='text-lg mb-4'>
        Oops! The page you are looking for does not exist.
      </p>
      <p className='text-md text-gray-600'>
        Please check the URL or return to the homepage.
      </p>
    </main>
  );
}
