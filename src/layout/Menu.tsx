import routes from "@/router/index";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const formatMenu = (menu: RenderRoutes[] | undefined): MenuProps["items"] => {
    if (menu !== undefined) {
      return menu.map((iMenu) => {
        const { path, children, meat } = iMenu;
        return {
          label: meat.title,
          key: path,
          icon: meat.Icon,
          children: formatMenu(children),
        };
      });
    }
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick: MenuProps["onClick"] = ({ key }: { key: string }) => {
    navigate(key);
  };
  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={[pathname]}
      items={formatMenu(routes[0].children)}
      theme="light"
      mode="inline"
    />
  );
};

export default Index;
