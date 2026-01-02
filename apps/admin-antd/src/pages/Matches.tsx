import { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";
import api from "../api";

export default function Matches() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get("/admin/matches").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: "ID", dataIndex: "id", render: (id) => <Link to={`/matches/${id}`}>{id}</Link> },
          { title: "Score", dataIndex: "matchScore" },
          { title: "Price Score", dataIndex: "priceScore" },
          { title: "Status", dataIndex: "status", render: (status) => <Tag>{status}</Tag> }
        ]}
      />
    </div>
  );
}
