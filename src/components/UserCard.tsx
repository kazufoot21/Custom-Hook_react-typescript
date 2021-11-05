import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (porps) => {
  const style = {
    border: "solid 1px #ccc",
    borderRadious: "8px",
    padding: "0 16px",
    margin: "8px"
  };

  const { user } = porps;
  return (
    <div style={style}>
      <dl>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>address</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
