  const tabs = [
    {
      label: "Home",
      content: (
        <div
          style={{
            padding: "20px",
            fontSize: "18px",
            color: "#fff",
            backgroundColor: "#00424b",
            borderRadius: "16px",
          }}
        >
          🏠 Welcome to the Home tab!
        </div>
      ),
    },
    {
      label: "Profile",
      content: (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#00424b",
            borderRadius: "16px",
            color: "#eee",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#00d4aa" }}>
            👤 User Profile
          </h3>
          <p style={{ margin: "5px 0" }}>
            Name:{" "}
            <span style={{ fontWeight: "bold", color: "#fff" }}>Adem</span>
          </p>
          <p style={{ margin: "5px 0" }}>
            Role:{" "}
            <span style={{ fontWeight: "bold", color: "#fff" }}>Developer</span>
          </p>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#00424b",
            borderRadius: "16px",
            color: "#ccc",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#00d4aa" }}>
            ⚙️ Settings
          </h3>
          <button
            style={{
              marginRight: "10px",
              padding: "8px 12px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#005964",
              color: "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Change Password
          </button>
          <button
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#b91c1c",
              color: "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Logout
          </button>
        </div>
      ),
    },
    {
      label: "About",
      content: (
        <div
          style={{
            padding: "20px",
            fontStyle: "italic",
            color: "#ccc",
            backgroundColor: "#00424b",
            borderRadius: "16px",
          }}
        >
          ℹ️ This is a simple tab component styled with a dark theme.
        </div>
      ),
    },
  ];


export default tabs;