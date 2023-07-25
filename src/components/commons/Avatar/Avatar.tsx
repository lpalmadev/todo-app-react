interface AvatarProps {
  url: string;
  alt: string;
}

const Avatar = ({ url, alt }: AvatarProps) => {
  return (
    <img
      className="w-9 h-9 rounded-full"
      src={url}
      alt={alt}
      referrerPolicy="no-referrer"
    />
  );
};

export default Avatar;
