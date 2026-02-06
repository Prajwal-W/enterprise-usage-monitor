import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#4f46e5", "#06b6d4", "#22c55e", "#f59e0b", "#ef4444"];

export default function DepartmentDonut({ data = [] }) {
  console.log(data)
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={4}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          contentStyle={{
            background: "#718ac1ff",
            borderRadius: "8px",
            border: "none",
            color: "#f6ededff",
            fontSize: "13px"
          }}
          formatter={(value, name) =>{console.log(value, name); return `${value},${name}`}}
          labelFormatter={(label) => label}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
