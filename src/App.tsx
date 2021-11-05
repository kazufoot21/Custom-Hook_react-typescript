import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();
  const onCickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onCickFetchUser}>get data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>we can't get data</p>
      ) : loading ? (
        <p>loading....</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
