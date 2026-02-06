import StatCard from "../components/StatCard";
import AppUsageChart from "../pages/AppUsageChart";
import DepartmentChart from "../pages/DepartmentDonut";
import DailyUsageChart from "../pages/DailyUsageChart";

export default function Dashboard() {
  return (
    <>
      <div className="stats-grid">
        <StatCard title="Total Users" value="5" sub="+12% from last month" />
        <StatCard title="Active Users Today" value="0" sub="80% of total base" />
        <StatCard title="Total Applications" value="5" sub="No change" />
        <StatCard title="Total Usage Hours" value="0" sub="+5% vs last 30 days" />
      </div>

      <div className="charts-grid">
        <div className="card">
          <h3>Daily Usage Trends</h3>
          <DailyUsageChart />
        </div>

        <div className="card">
          <h3>Top Applications</h3>
          <AppUsageChart />
        </div>

        <div className="card">
          <h3>Usage by Department</h3>
          <DepartmentChart />
        </div>
      </div>
    </>
  );
}
