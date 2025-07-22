'use client'

import { useGetUsersQuery } from '../graphql/generated/graphql';

export default function Page() {
  const { data, loading, error } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.users?.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}