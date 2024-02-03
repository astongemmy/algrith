import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session } = useSession();

  if (!session) {
    // Redirect to login page if not authenticated
    return <p>Access Denied. Please log in.</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
};

export default ProtectedPage;