import Image from "next/image";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";
interface UserAvatarProps {
  avataUrl: string | null | undefined;
  size: number;
  className?: string;
}

export default function UserAvatar({
  avataUrl,
  size,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src={avataUrl || avatarPlaceholder}
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-auto h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
}
