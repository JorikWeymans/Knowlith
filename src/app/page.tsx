export default function Home() {
  return (
      <div className={"dashboard"}>
          <div className={"dashboard-item lsb bg-green-400"}>Sidebar</div>
          <div className={"dashboard-item nav bg-blue-500"}>Nav</div>
          <div className={"dashboard-item con bg-yellow-500"}>Content</div>
          <div className={"dashboard-item rsb bg-red-300"}>Content sidebar</div>
      </div>

  );
}
