import { useEffect, useState } from "react";
import { Input, Table } from "antd";
import api from "../api";

export default function Needs() {
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api.get("/admin/needs").then((res) => setData(res.data));
  }, []);

  const filtered = data.filter((item) => item.city?.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Needs</h2>
      <Input
        placeholder="Filter by city"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 240 }}
      />
      <Table
        rowKey="id"
        dataSource={filtered}
        columns={[
          { title: "Category", dataIndex: "category" },
          { title: "City", dataIndex: "city" },
          { title: "District", dataIndex: "district" },
          { title: "Budget Min", dataIndex: "budgetMin" },
          { title: "Budget Max", dataIndex: "budgetMax" },
          { title: "Status", dataIndex: "status" }
        ]}
      />
    </div>
  );
}
