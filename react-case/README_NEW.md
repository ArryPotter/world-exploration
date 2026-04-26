# React Case Exploration

A basic React exploration project demonstrating fundamental concepts using **Tailwind CSS**, **React Router**, and **TypeScript**. This project showcases practical use cases translated into modern React code.

## 🚀 Features

### Home Page
- **Product Management**: Add products with name and quantity
- **Sorting Capabilities**: Sort products by name (alphabetically) or by quantity (descending)
- Clean, user-friendly interface built with Tailwind CSS

### Sorting Page
- **Fruit List Management**: Add fruits with their quantities
- **Dynamic Sorting**: Sort the fruit list by name in alphabetical order
- Real-time list updates with immediate visual feedback

### Type and Show Page
- **Real-time Input Display**: See your text appear instantly as you type
- Demonstrates React state management and controlled components
- Perfect example of immediate user feedback

### About Page
- Project information and additional details

### Error Page
- Custom error handling for navigation and routing issues

## 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **React Router DOM** 7.10.1 - Client-side routing
- **TypeScript** 5.9.3 - Type-safe development
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **Vite** 7.2.4 - Fast build tool and dev server
- **ESLint** 9.39.1 - Code quality and consistency

## 📁 Project Structure

```
├── src/
│   ├── App.tsx              # Main app component with router setup
│   ├── Root.tsx             # Root layout component with navigation
│   ├── Navigation.tsx       # Navigation bar component
│   ├── main.tsx             # Entry point
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── pages/
│       ├── Home.tsx         # Product management page
│       ├── Sorting.tsx      # Fruit sorting page
│       ├── TypeShow.tsx     # Real-time text display page
│       ├── About.tsx        # About page
│       └── Error.tsx        # Error page
├── public/                  # Static assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

## 🎯 Learning Concepts Covered

- **React State Management**: `useState` hook for managing component state
- **Component Composition**: Building reusable, modular components
- **React Router**: Multi-page navigation with nested routes
- **Form Handling**: Controlled components and form state management
- **Array Manipulation**: Sorting and managing lists in React
- **Styling**: Utility-first CSS with Tailwind
- **TypeScript**: Type safety in React components
- **Responsive Design**: Mobile-friendly layouts

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd react-case
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🔨 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm build

# Run ESLint for code quality checks
npm run lint

# Preview production build
npm run preview
```

## 📝 Example Use Cases

### Adding a Product (Home Page)
1. Enter product name and quantity
2. Click "Add" to add to the list
3. Use "Sort by Name" or "Sort by Quantity" to organize the list

### Managing Fruits (Sorting Page)
1. Fill in fruit name and quantity
2. Click add button to append to list
3. Click sort button to arrange alphabetically by name

### Live Text Display (TypeShow Page)
1. Type in the description field
2. Watch the text appear instantly in the result box above
3. Demonstrates controlled components and real-time state updates

## 🎨 Styling

The project uses **Tailwind CSS** for styling. Custom styles can be added to:
- `src/index.css` - Global styles
- `src/App.css` - App-specific styles
- Component classNames - Tailwind utility classes directly in components

## 🚀 Future Enhancements

- Add data persistence (localStorage or backend)
- Implement delete functionality for items
- Add filtering capabilities
- Enhance UI with animations
- Add more complex sorting options
- Implement dark mode

## 📄 License

This project is part of the World Exploration collection.

---

**Happy Exploring!** 🎉
