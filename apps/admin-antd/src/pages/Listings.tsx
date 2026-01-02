import { useEffect, useState } from "react";
import { Input, Table } from "antd";
import api from "../api";

export default function Listings() {
  const [data, setData] = useState<any[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api.get("/admin/listings").then((res) => setData(res.data));
  }, []);

  const filtered = data.filter((item) => item.city?.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Listings</h2>
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
          { title: "Price", dataIndex: "price" },
          { title: "Status", dataIndex: "status" }
        ]}
      />
    </div>
  );
}
