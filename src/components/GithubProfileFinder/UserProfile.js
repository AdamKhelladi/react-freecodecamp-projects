export default function UserProfile({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
    id,
    location,
    type
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={avatar_url} alt="UserAvatar" />
      </div>
      <div className="details">
        <h1 className="username">{name ? name : login}</h1>
        <div className="left-details">
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repos: {public_repos}</p>
        </div>
        <div className="right-details">
          <p>Type: {type}</p>
          <p>Location: {location}</p>
          <p>User ID: {id}</p>
        </div>
        <span>
          URL:{" "}
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`https://github.com/${login}`}
          </a>
        </span>
      </div>
    </div>
  );
}
