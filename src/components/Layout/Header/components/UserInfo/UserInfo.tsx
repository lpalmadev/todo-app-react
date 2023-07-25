import { Avatar } from "../../../../commons/Avatar";

interface UserInfoProps {
  displayName: string;
  email: string;
  photoURL: string;
}

const UserInfo = ({ displayName, email, photoURL }: UserInfoProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <span>{displayName}</span>
        <span>{email}</span>
      </div>
      {<Avatar url={photoURL} alt={`${displayName} profile photo`} />}
    </div>
  );
};

export default UserInfo;
