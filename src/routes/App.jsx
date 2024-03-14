import { setTheme } from '../services/theme';

export default function App() {
  setTheme('dark');
  return (
    <div className="container mx-auto p-2 bg-gray-500 dark:bg-slate-800">
      <h1 className="text-slate-200">TEST</h1>
    </div>
  );
}
