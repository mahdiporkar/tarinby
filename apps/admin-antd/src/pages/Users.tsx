import { useEffect, useState } from "react";
import { Table } from "antd";
import api from "../api";

export default function Users() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/admin/users").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: "Role", dataIndex: "role" },
          { title: "Phone", dataIndex: "phoneMasked" },
          { title: "Created", dataIndex: "createdAt" }
        ]}
      />
    </div>
  );
}
