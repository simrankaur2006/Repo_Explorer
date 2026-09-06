import './RepoCard.css';

export default function RepoCard({ repo }) {
  return (
    <a
      className="repo-card"
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="repo-top">
        <span className="repo-name">{repo.name}</span>
        <span className="repo-stats">
          <span className="repo-star">★ {repo.stargazers_count.toLocaleString()}</span>
          <span>⑂ {repo.forks_count.toLocaleString()}</span>
        </span>
      </div>

      {repo.description && <div className="repo-desc">{repo.description}</div>}

      {repo.language && (
        <div className="repo-lang">
          <span className="dot" />
          {repo.language}
        </div>
      )}
    </a>
  );
}
