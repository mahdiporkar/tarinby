import { useEffect, useState } from "react";
import { Button, Card, Select } from "antd";
import { useParams } from "react-router-dom";
import api from "../api";

const statusOptions = ["NEW", "OFFER_SENT", "ACCEPTED", "REJECTED"];

export default function MatchDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState<any>(null);
  const [status, setStatus] = useState<string>("NEW");

  useEffect(() => {
    api.get("/admin/matches").then((res) => {
      const found = res.data.find((item: any) => item.id === id);
      setMatch(found);
      if (found) {
        setStatus(found.status);
      }
    });
  }, [id]);

  const updateStatus = async () => {
    await api.patch(`/admin/matches/${id}/status`, { status });
  };

  if (!match) {
    return <div>Loading...</div>;
  }

  return (
    <Card title={`Match ${match.id}`} style={{ maxWidth: 600 }}>
      <p>Score: {match.matchScore}</p>
      <p>Price Score: {match.priceScore}</p>
      <p>Status: {match.status}</p>
      <Select value={status} onChange={setStatus} style={{ width: 200, marginBottom: 16 }}>
        {statusOptions.map((value) => (
          <Select.Option value={value} key={value}>
            {value}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={updateStatus}>
        Update Status
      </Button>
    </Card>
  );
}
