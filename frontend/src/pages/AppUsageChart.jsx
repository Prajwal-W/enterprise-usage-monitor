import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AppUsageChart({
  data = [],
  horizontal = false
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={data}
        layout={horizontal ? "vertical" : "horizontal"}
        margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
      >
        {horizontal ? (
          <>
            <XAxis
              type="number"
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={90}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
            />
          </>
        )}

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
          dataKey="usage"
          fill="#4f46e5"
          radius={[8, 8, 8, 8]}
          isAnimationActive={true}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
