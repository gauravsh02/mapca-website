export const Footer = () => {
  return (
    <>
      <footer className='rounded-lg mb-20 my-4 md:mb-10 lg:my-4'>
        <div className='w-full p-4 md:p-6 lg:p-12 mx-auto md:flex md:items-center md:justify-between'>
          <span className='text-sm cursor-pointer max-sm:text-center max-sm:block text-grey-300 sm:text-center hover:text-grey-400 dark:hover:text-grey-300 dark:text-grey-400'>© {new Date(). getFullYear()} <a href='https://mapca.in' className=''>MAP CA</a> All Rights Reserved</span>
          <ul className='flex flex-wrap mt-3 text-sm smitems-center sm:mt-0 max-sm:justify-center'>
            <li><a className='mr-4 text-grey-300 hover:text-grey-400 dark:hover:text-grey-300 dark:text-grey-400 md:mr-6' href='/privacy'>Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}