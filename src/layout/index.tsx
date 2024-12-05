import Menu from "@/layout/Menu";
import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;

const App = () => {
  const [collapsed] = useState(false);
  return (
    <Layout className="size-full">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-white"
      >
        <Menu />
      </Sider>
      <Layout>
        <Content className="relative size-full flex p-4 rounded">
          <div className="flex-1 bg-white">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
