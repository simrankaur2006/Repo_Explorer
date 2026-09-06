import RepoCard from './RepoCard';
import './RepoList.css';

export default function RepoList({ repos }) {
  if (repos.length === 0) {
    return <div className="status">No repos match that filter.</div>;
  }

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
