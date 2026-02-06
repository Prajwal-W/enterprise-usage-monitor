import "./styles.css";
import Sidebar from "./pages/Sidebar";
import Topbar from "./pages/TopBar";
import StatCard from "./pages/StatCard";

import UsageLineChart from "./pages/UsageLineChart";
import TopAppsBarChart from "./pages/TopAppsBarChart";
import DepartmentDonut from "./pages/DepartmentDonut";
import ActivityTable from "./pages/ActivityTable";


import useDashboardData from "./hooks/useDashboardData";

export default function App() {
  const data = useDashboardData();

  if (!data) return <div className="loading">Loading dashboard...</div>;

  const { kpis } = data;

  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        <Topbar />

        <div className="stats-grid">
          <StatCard title="Total Users" value={kpis.totalUsers} change="+12% from last month" />
          <StatCard title="Active Users Today" value={kpis.activeUsersToday} subtitle="80% of total active base" />
          <StatCard title="Total Applications" value={kpis.totalApplications} subtitle="No change" />
          <StatCard title="Total Usage Hours" value={kpis.totalUsageHours} change="+5% vs last 30 days" />
        </div>

        <div className="charts-grid">
          <div className="card">
            <h3>Daily Usage Trends</h3>
            <UsageLineChart data={data.daily} />
          </div>

          <div className="card wide">
            <h3>Top Applications</h3>
            <TopAppsBarChart data={data.topApps} />
          </div>

          <div className="card">
            <h3>Usage by Department</h3>
            <DepartmentDonut data={data.dept} />
          </div>
        </div>

        <div className="card">
          <h3>Recent Activity Log</h3>
          <ActivityTable data={data.recent} />
        </div>
      </main>
    </div>
  );
}
