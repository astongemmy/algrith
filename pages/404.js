import { usePathname } from 'next/navigation';

const NotfoundError = () => {
  const pathname = usePathname() && `"${usePathname()}" `;

  return <h1>404 - Page { pathname }Not Found</h1>
};

export default NotfoundError;