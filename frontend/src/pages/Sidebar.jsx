export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">UsageAdmin</h2>

      <nav>
        <a className="active">Dashboard</a>
        <a>Users</a>
        <a>Applications</a>
        <a>Usage Analytics</a>
        <a>Admin Settings</a>
      </nav>

      <div className="sidebar-user">
        <div className="avatar">AJ</div>
        <div>
          <strong>Alice Johnson</strong>
          <p>admin@acme.com</p>
        </div>
      </div>
    </aside>
  );
}
