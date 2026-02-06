import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TopAppsBarChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
      >
        <XAxis
          type="number"
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />

        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          width={120}  
        />

        <Tooltip
          cursor={{ fill: "rgba(79,70,229,0.08)" }}
          contentStyle={{
            background: "#111827",
            borderRadius: "8px",
            border: "none",
            color: "#fff",
            fontSize: "13px"
          }}
          formatter={(value) => [`${value} min`, "Usage"]}
        />

        <Bar
          dataKey="minutes"
          fill="#4F46E5"
          radius={[6, 6, 6, 6]}
          isAnimationActive
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
