# Pulke Movies

Pulke Movies is a feature-rich movie discovery web application designed to help users find, explore, and personalize their movie-watching experience. Built with modern web technologies, it leverages the TMDb API for comprehensive movie data, Firebase for user authentication and data storage, and React for a responsive, interactive UI.

## Features
- **Advanced Search**: Search movies by title, genre, actor, director, or natural language queries.
- **Personalization**: User profiles, watchlists, and AI-driven recommendations.
- **Responsive Design**: Optimized for desktop, tablet, and mobile with PWA support.
- **Social Features**: Share recommendations and engage in community discussions.
- **Admin Tools**: CMS for managing content and user activity.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Firebase (Firestore, Authentication)
- **API**: TMDb API
- **Deployment**: Vercel
- **Tools**: ESLint, Prettier, Husky, Axios

## Getting Started
### Prerequisites
- Node.js (v18 or later)
- Firebase project and TMDb API key
- Git and GitHub account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/pulke-movies.git
   cd pulke-movies
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see [Environment Variables](#environment-variables)).
4. Start the development server:
   ```bash
   npm run dev
   ```

### Environment Variables
Create a `.env` file in the root directory with the following:
```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## Contributing
Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
