import { Icon } from "./ui/Icon";
import home_ic from "@/assets/icon/home_lavander.svg";
import chat_ic from "@/assets/icon/chat_white.svg";
import icon_ic from "@/assets/icon/icon.svg";
import settings_ic from "@/assets/icon/Settings.svg";
import user_ic from "@/assets/icon/User.svg";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-fit bg-white flex flex-col items-center rounded-r-xl rounded-br-xl shadow-sm p-6 gap-10"
    >
      <Link to={"/"} className="mt-0 mb-auto">
        <Icon src={icon_ic} width={26} height={26} />
      </Link>
      <Link to={"/"}>
        <Icon src={home_ic} width={36} height={36} />
      </Link>
      <Link to={"/perfil/0"}>
        <Icon src={user_ic} width={36} height={36} />
      </Link>
      <Link to={"/chat"}>
        <Icon src={chat_ic} width={36} height={36} />
      </Link>
      <Link to={"/"} className="mt-auto mb-0">
        <Icon src={settings_ic} width={26} height={26} />
      </Link>
    </div>
  );
};