# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# File Structure Frontend

frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/                # Static files
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo.png
│   │
│   ├── components/            # Reusable UI pieces
│   │   │
│   │   ├── ui/                # Small generic UI elements
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── layout/            # Layout-related components
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ProductCard.jsx    # E-commerce reusable card
│   │
│   ├── pages/                 # Route-level screens
│   │   ├── Home.jsx
│   │   ├── Store.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/                # Routing configuration
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx   # later for auth
│   │
│   ├── services/              # API communication layer
│   │   ├── axiosInstance.js
│   │   ├── authService.js
│   │   ├── productService.js
│   │   └── orderService.js
│   │
│   ├── context/               # Global state (React Context)
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
└── vite.config.js
