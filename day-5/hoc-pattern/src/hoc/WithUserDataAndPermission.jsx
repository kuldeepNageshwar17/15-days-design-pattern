/* eslint-disable react/prop-types */
const userDataAndPermission = [
  {
    id: `user_${Math.random().toString(36).slice(2, 9)}`,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "user",
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: false,
      canPublish: false,
      isAdmin: false,
    },
    createdAt: new Date().toISOString(),
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: `admin_${Math.random().toString(36).slice(2, 9)}`,
    name: "Patricia Gomez",
    email: "patricia.gomez@example.com",
    role: "admin",
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: true,
      canPublish: true,
      isAdmin: true,
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(), // 30 days ago
    lastLogin: new Date().toISOString(),
  },
  {
    id: `reporter_${Math.random().toString(36).slice(2, 9)}`,
    name: "Sam Lee",
    email: "sam.lee@example.com",
    role: "reporter",
    permissions: {
      canRead: true,
      canWrite: true,
      canDelete: false,
      canPublish: false,
      isAdmin: false,
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: `reporter_${Math.random().toString(36).slice(2, 9)}`,
    name: "Morgan Brown",
    email: "morgan.brown@example.com",
    role: "reporter",
    permissions: {
      canRead: true,
      canWrite: false,
      canDelete: false,
      canPublish: false,
      isAdmin: false,
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(), // 10 days ago
    lastLogin: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(), // 10 hours ago
  },
];

export default function WithUserDataAndPermission(WrappedComponent) {
  return function WithUserDataAndPermissionComp(props) {
    let loggedInUser = userDataAndPermission.find((m) => m.name === props.user);
    console.log("Logged in user details:", loggedInUser);
    if (
      !loggedInUser ||
      props.AuthorisedRole != loggedInUser.role
      // props.AuthorisedRole != "user"
    )
      return <div>User does not have permission to access this page !!</div>;
    else return <WrappedComponent {...props} />;
  };
}
