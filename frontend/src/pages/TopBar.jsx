export default function Topbar() {
  return (
    <div className="topbar">
      <h1>Usage Overview</h1>

      <div className="search-box">
        <input placeholder="Search users, apps..." />
        <select>
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
        </select>
        <span className="bell">🔔</span>
      </div>
    </div>
  );
}
