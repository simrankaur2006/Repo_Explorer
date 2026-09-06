const BASE_URL = 'https://api.github.com';

/**
 * Custom error class so components can branch on `error.status`
 * instead of parsing message strings.
 */
export class GithubApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'GithubApiError';
    this.status = status;
  }
}

/**
 * Fetch up to 100 public repos for a given GitHub username,
 * sorted by most recently updated first.
 */
export async function fetchUserRepos(username) {
  const url = `${BASE_URL}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
  const res = await fetch(url);

  if (res.status === 404) {
    throw new GithubApiError(`No GitHub user found called "${username}".`, 404);
  }
  if (res.status === 403) {
    throw new GithubApiError('GitHub API rate limit reached. Wait a minute and try again.', 403);
  }
  if (!res.ok) {
    throw new GithubApiError(`GitHub API request failed (status ${res.status}).`, res.status);
  }

  return res.json();
}

/**
 * Fetch basic profile info (avatar, bio, name) for a GitHub user.
 */
export async function fetchUserProfile(username) {
  const url = `${BASE_URL}/users/${encodeURIComponent(username)}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new GithubApiError(`Could not load profile for "${username}".`, res.status);
  }

  return res.json();
}
