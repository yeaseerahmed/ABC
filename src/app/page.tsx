import { getUsers } from "@/lib/data";

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      {users.map((user: any, index: number) => (
        <p key={index}>{user.name}</p>
      ))}
    </div>
  );
}