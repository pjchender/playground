// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className="bg-slate-200 w-full">
      <h1 className="text-white text-2xl">Hi</h1>
      <NxWelcome title="react-template" />
    </div>
  );
}

export default App;
