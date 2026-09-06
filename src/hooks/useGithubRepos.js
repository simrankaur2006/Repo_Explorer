import { useState, useCallback } from 'react';
import { fetchUserRepos, fetchUserProfile, GithubApiError } from '../api/github';

/**
 * Encapsulates all state + logic for searching a GitHub user's repos.
 * Keeping this out of the component makes App.jsx a thin "view" layer.
 */
export function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);

  const search = useCallback(async (rawUsername) => {
    const name = rawUsername.trim();
    if (!name) return;

    setStatus('loading');
    setError(null);

    try {
      const [repoData, profileData] = await Promise.all([
        fetchUserRepos(name),
        fetchUserProfile(name),
      ]);

      const sorted = [...repoData].sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      setRepos(sorted);
      setProfile(profileData);
      setUsername(name);
      setStatus('success');
    } catch (err) {
      const message = err instanceof GithubApiError ? err.message : 'Something went wrong.';
      setError(message);
      setRepos([]);
      setProfile(null);
      setStatus('error');
    }
  }, []);

  return { repos, profile, username, status, error, search };
}
