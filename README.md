# 🎯 State Management in Next.js

A comprehensive exploration and comparison of different state management solutions in modern Next.js applications.

## 📖 About

This project demonstrates various state management patterns in Next.js, from simple built-in React hooks to advanced third-party libraries. Each approach is implemented with real-world examples to showcase patterns, trade-offs, and best practices.

### State Management Solutions

- ✅ **Native useState** - Simple local component state
- ✅ **Native useReducer** - Complex state logic with predictable updates
- ✅ **Context API** - React's built-in global state sharing
- ✅ **nuqs** - Type-safe URL search params as state (eliminates prop drilling)
- ✅ **Zustand** - Lightweight and flexible state management
- ✅ **Redux Toolkit** - Predictable state container with powerful DevTools

## 🚀 Getting Started

This project was bootstrapped with:

```sh
bun create next-app
```

### Installation

```sh
# Clone the repository
git clone https://github.com/AshirbadGudu/using-different-state-in-next-js.git

# Navigate to project directory
cd using-different-state-in-next-js

# Install dependencies
bun install
```

### Development

```sh
# Start development server with Turbopack
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Available Scripts

```sh
bun dev      # Start development server with Turbopack
bun build    # Build production bundle with Turbopack
bun start    # Start production server
bun lint     # Run Biome linter
bun format   # Format code with Biome
```

## 📁 Project Structure

Each state management solution has its own route with practical examples:

```
app/
├── use-state/          # useState examples with prop drilling demos
├── use-reducer/        # useReducer for complex state logic
├── context-api/        # Context API for global state
├── nuqs/              # URL state management with nuqs
├── zustand/           # Zustand store implementation
└── redux-toolkit/     # Redux Toolkit setup and usage
```

## 🛠️ Tech Stack

<div align="center">

|                                                                      Technology                                                                       |  Version   | Purpose         |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :-------------- |
|        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="50" height="50" alt="Next.js"/>         | **15.5.4** | Framework       |
|          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" height="50" alt="React"/>           | **19.1.0** | UI Library      |
|   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="50" height="50" alt="TypeScript"/>   |  **5.x**   | Language        |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="50" height="50" alt="Tailwind CSS"/> |  **4.0**   | Styling         |
|             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" width="50" height="50" alt="Bun"/>              | **Latest** | Package Manager |

</div>

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [nuqs Documentation](https://nuqs.47ng.com/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## 👥 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/AshirbadGudu">
        <img src="https://github.com/AshirbadGudu.png" width="100px;" alt="AshirbadGudu"/>
        <br />
        <sub><b>Ashirbad Panigrahi</b></sub>
      </a>
      <br />
      <sub>Project Owner</sub>
    </td>
    <td align="center">
      <a href="https://github.com/subhashree-ipsita-mishra">
        <img src="https://github.com/subhashree-ipsita-mishra.png" width="100px;" alt="subhashree-ipsita-mishra"/>
        <br />
        <sub><b>Subhashree Ipsita Mishra</b></sub>
      </a>
      <br />
      <sub>Contributor</sub>
    </td>
  </tr>
</table>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
