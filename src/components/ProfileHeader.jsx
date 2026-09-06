import './ProfileHeader.css';

export default function ProfileHeader({ profile, repoCount, totalStars }) {
  if (!profile) return null;

  return (
    <div className="profile-header">
      <img className="profile-avatar" src={profile.avatar_url} alt={`${profile.login} avatar`} />
      <div className="profile-info">
        <div className="profile-name">{profile.name || profile.login}</div>
        {profile.bio && <div className="profile-bio">{profile.bio}</div>}
        <div className="profile-stats">
          <span>{repoCount} repos</span>
          <span>{totalStars.toLocaleString()} total stars</span>
          <span>{profile.followers.toLocaleString()} followers</span>
        </div>
      </div>
    </div>
  );
}
