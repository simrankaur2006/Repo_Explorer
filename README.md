# Repo Explorer

A small React app for browsing any GitHub user's public repositories — search a username and see their repos sorted by stars, complete with descriptions, languages, and fork counts.

Built with React and Vite, using GitHub's public REST API. No backend, no API key, no sign-in required.

## Features

- Search any GitHub username and view their public repos
- Repos sorted by star count, most-starred first
- Shows profile avatar, name, bio, and follower count
- Filter loaded repos by name without hitting the API again
- Clear error states for users not found or API rate limits

## Tech stack

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [GitHub REST API](https://docs.github.com/en/rest) (`/users/{username}/repos`, `/users/{username}`)

## Project structure

```
src/
├── api/            GitHub API calls
├── hooks/          useGithubRepos - search state and data fetching
├── components/     SearchBar, FilterInput, ProfileHeader, RepoList, RepoCard
├── App.jsx         top-level layout
└── main.jsx        entry point
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready to deploy to any static host.

## Possible improvements

- Pagination for users with 100+ repositories
- Sort controls (stars / forks / last updated)
- Dark/light theme toggle
- Search repos across all of GitHub, not just one user
