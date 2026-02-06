export default function ActivityTable({ data }) {
  return (
    <table className="activity-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Application</th>
          <th>Department</th>
          <th>Duration</th>
          <th>Actions</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>
              <strong>{row.user}</strong>
              <div className="muted">{row.email}</div>
            </td>
            <td><span className="pill">{row.app}</span></td>
            <td>{row.department}</td>
            <td>{row.duration}</td>
            <td>{row.actions}</td>
            <td>{row.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
