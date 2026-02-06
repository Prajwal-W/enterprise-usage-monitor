import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function UsageLineChart({ data =[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="minutes"
          stroke="#4F46E5"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
