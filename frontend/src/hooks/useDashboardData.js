import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/usage";

export default function useDashboardData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/kpis`).then(r => r.json()),
      fetch(`${API}/daily`).then(r => r.json()),
      fetch(`${API}/top-apps`).then(r => r.json()),
      fetch(`${API}/by-department`).then(r => r.json()),
      fetch(`${API}/recent`).then(r => r.json())
    ]).then(([kpis, daily, topApps, dept, recent]) => {
      setData({ kpis, daily, topApps, dept, recent });
    });
  }, []);

  return data;
}
