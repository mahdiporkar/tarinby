import { Layout, Menu } from "antd";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Needs from "./pages/Needs";
import Listings from "./pages/Listings";
import Matches from "./pages/Matches";
import MatchDetail from "./pages/MatchDetail";
import Users from "./pages/Users";

const { Header, Sider, Content } = Layout;

export default function App() {
  const location = useLocation();

  if (location.pathname === "/login") {
    return <Login />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light">
        <div className="logo">Tarinby Admin</div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            { key: "/needs", label: <Link to="/needs">Needs</Link> },
            { key: "/listings", label: <Link to="/listings">Listings</Link> },
            { key: "/matches", label: <Link to="/matches">Matches</Link> },
            { key: "/users", label: <Link to="/users">Users</Link> }
          ]}
        />
      </Sider>
      <Layout>
        <Header className="header">Admin Dashboard</Header>
        <Content style={{ padding: 24 }}>
          <Routes>
            <Route path="/needs" element={<Needs />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/matches/:id" element={<MatchDetail />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Needs />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}
