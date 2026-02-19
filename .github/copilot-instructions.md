# Copilot Instructions for AYUSH Login Portal

## Project Overview
This is a React + Vite application for the Ministry of AYUSH Digital Portal - a secure login system with role-based access (Admin/User). The project uses client-side authentication with localStorage for session management.

## Architecture & Key Components

### Tech Stack
- **Framework**: React 19.2.0 (ESM modules)
- **Build Tool**: Vite 7.2.4 with React plugin (Fast Refresh enabled)
- **Routing**: React Router v7.13.0 (BrowserRouter pattern)
- **Styling**: CSS modules (Login.css, index.css)
- **Linting**: ESLint with React Hooks and React Refresh plugins

### Component Structure
```
src/
├── App.jsx (Router setup with 2 routes: / and /dashboard)
├── Login.jsx (Authentication form - email/password/role selector)
├── dashboard.jsx (Protected page showing user details from localStorage)
├── main.jsx (Entry point - React StrictMode wrapper)
├── Login.css & index.css (Styling)
```

### Data Flow
1. **Login Page** → User selects role, enters credentials
2. **Authentication** → Client-side validation against hardcoded users array
3. **Storage** → On success, user object stored in localStorage as JSON
4. **Navigation** → Programmatic redirect to `/dashboard` via useNavigate
5. **Dashboard** → Retrieves and displays user data from localStorage

## Key Patterns & Conventions

### Authentication Pattern
- **Hardcoded Users**: [src/Login.jsx](src/Login.jsx) lines 12-15 define test credentials
  - Admin: `admin@ayush.gov.in` / `1234`
  - User: `user@ayush.gov.in` / `1234`
- **Trim & Case-Insensitive Email**: Email comparison uses `.toLowerCase().trim()` for robustness
- **LocalStorage Persistence**: User object stored as `JSON.stringify()` and retrieved with `JSON.parse()`
- **Role-Based Routing**: Role selection integrated into login form (no separate redirect)

### React/Vite Conventions
- **Functional Components Only**: All components are functional with hooks (useState, useNavigate)
- **Form Handling**: Form uses preventDefault and manual state management (no libraries)
- **CSS Scoping**: Each component has dedicated CSS file (e.g., Login.jsx → Login.css)
- **Fast Refresh**: JSX syntax expected; file-based routing not used (explicit Route components)

### ESLint Rules
- No unused variables allowed (rule: `no-unused-vars: error`), except uppercase/underscore-prefixed
- React Hooks rules enforced (deps arrays, hook order)
- React Refresh plugin configured for HMR safety

## Development Workflow

### Commands
- `npm run dev` - Start Vite dev server (HMR on localhost:5173)
- `npm run build` - Production build to `dist/`
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Serve production build locally

### Common Tasks
- **Add Route**: Update [src/App.jsx](src/App.jsx) with new `<Route>` component
- **Add Form Input**: Extend [src/Login.jsx](src/Login.jsx) state and input fields
- **Add User**: Modify `users` array in [src/Login.jsx](src/Login.jsx) lines 12-15
- **Styling**: Import CSS file in component top-level (see [src/Login.jsx](src/Login.jsx#L3))

## Integration Points & Dependencies

### External
- **React Router**: Used only for client-side routing (no code-splitting yet)
- **LocalStorage**: Single source of truth for session (no backend/API)
- **Vite HMR**: Socket-based hot reload (default config)

### Cross-Component Communication
- No context API or state management library (props/localStorage only)
- Dashboard depends on Login setting localStorage key `"user"`
- No shared utilities or hooks yet (minimal code reuse)

## Developer Notes
- **No TypeScript**: Project uses JSX with runtime validation only
- **No Backend**: Demo app with hardcoded credentials for testing
- **No Protected Routes**: Dashboard accessible directly without auth check (localStorage can be cleared)
- **Future Improvements**: Consider adding context API for auth state, actual API integration, route guards
