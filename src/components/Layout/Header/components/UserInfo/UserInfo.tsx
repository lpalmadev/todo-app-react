import { Avatar } from "../../../../commons/Avatar";

interface UserInfoProps {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const UserInfo = ({ displayName, email, photoURL }: UserInfoProps) => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col text-white">
        <span>{displayName}</span>
        <span className="text-[#ababc9]">{email}</span>
      </div>
      {<Avatar url={photoURL ?? "#"} alt={`${displayName} profile photo`} />}
    </div>
  );
};

export default UserInfo;
