import { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterInput from './components/FilterInput';
import ProfileHeader from './components/ProfileHeader';
import RepoList from './components/RepoList';
import { useGithubRepos } from './hooks/useGithubRepos';
import './App.css';

export default function App() {
  const { repos, profile, username, status, error, search } = useGithubRepos();
  const [filter, setFilter] = useState('');

  const filteredRepos = useMemo(() => {
    if (!filter.trim()) return repos;
    const q = filter.toLowerCase();
    return repos.filter((r) => r.name.toLowerCase().includes(q));
  }, [repos, filter]);

  const totalStars = useMemo(
    () => repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    [repos]
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          repo<span className="accent">_</span>explorer
        </h1>
        <p>Look up any GitHub user and browse their public repositories.</p>
      </header>

      <SearchBar onSearch={search} isLoading={status === 'loading'} />

      {status === 'loading' && (
        <div className="status">Fetching repositories for {username || '...'}</div>
      )}

      {status === 'error' && <div className="status error">{error}</div>}

      {status === 'success' && (
        <>
          <ProfileHeader profile={profile} repoCount={repos.length} totalStars={totalStars} />
          {repos.length > 0 && <FilterInput value={filter} onChange={setFilter} />}
          <RepoList repos={filteredRepos} />
        </>
      )}

      <footer className="app-footer">
        Data from the public GitHub REST API. No sign-in required.
      </footer>
    </div>
  );
}
