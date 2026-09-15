import { Avatar } from "@/components/Avatar";
import { ScreenTitle } from "@/components/ScreenTitle";
import { user } from "@/constants/user";
import { formatHeaderDate } from "@/utils/date";

export const Header = () => {
  return (
    <ScreenTitle
      title="Daily Focus"
      subtitle={formatHeaderDate()}
      right={<Avatar uri={user.avatarUrl} name={user.name} size={40} />}
    />
  );
};
