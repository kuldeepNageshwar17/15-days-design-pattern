import { useEffect, useState } from "react";

import AdminPage from "./users/AdminPage";
import ProfilePage from "./users/profilePage";
import ReportersPage from "./users/ReportersPage";
import WithUserDataAndPermission from "./hoc/WithUserDataAndPermission";

const AdminPageWithDataAndPermission = WithUserDataAndPermission(AdminPage);
const UserPageWithDataAndPermission = WithUserDataAndPermission(ProfilePage);
const ReportersPageWithDataAndPermission =
  WithUserDataAndPermission(ReportersPage);

function App() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("selectedUser") || "Alex Johnson";
  });

  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "/profile";
  });

  useEffect(() => {
    const onHash = () =>
      setRoute(window.location.hash.replace("#", "") || "/profile");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedUser", user);
  }, [user]);

  const renderRoute = () => {
    switch (route) {
      case "/admin":
        return (
          <AdminPageWithDataAndPermission
            user={user}
            AuthorisedRole={"admin"}
          />
        );
      case "/reporters":
        return (
          <ReportersPageWithDataAndPermission
            user={user}
            AuthorisedRole={"reporter"}
          />
        );
      case "/profile":
      default:
        return (
          <UserPageWithDataAndPermission user={user} AuthorisedRole={"user"} />
        );
    }
  };

  const users = [
    "Alex Johnson",
    "Patricia Gomez",
    "Sam Lee",
    "Morgan Brown",
    "New user",
  ];

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-100 font-black text-black">
        <nav className="space-x-4">
          <a href="#/profile">Profile</a>
          <a href="#/admin">Admin</a>
          <a href="#/reporters">Reporters</a>
        </nav>

        <div className="flex items-center gap-4">
          <label htmlFor="user-select">User:</label>
          <select
            id="user-select"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border rounded p-1"
          >
            {users.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main className="p-6">{renderRoute()}</main>
    </div>
  );
}

export default App;
