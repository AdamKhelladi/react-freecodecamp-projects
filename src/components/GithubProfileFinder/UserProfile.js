export default function UserProfile({ user }) {
  const { avatar_url, followers, following, public_repos, url } = user;

  return (
    <div className="user-profile">
      <img />
      <div className="details"></div>
    </div>
  );
}
