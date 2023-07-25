import { Avatar } from "../../../../commons/Avatar";

interface UserInfoProps {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const UserInfo = ({ displayName, email, photoURL }: UserInfoProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <span>{displayName}</span>
        <span>{email}</span>
      </div>
      {<Avatar url={photoURL ?? "#"} alt={`${displayName} profile photo`} />}
    </div>
  );
};

export default UserInfo;
