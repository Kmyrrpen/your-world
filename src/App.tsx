import { useSnapshot } from 'valtio';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/theme';
import Dashboard from './dashboard/Dashboard';
import Edit from './edit/Edit';

const App: React.FC = () => {
  const { currentTheme } = useSnapshot(theme);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/new" element={<Edit isNew />} />
          <Route path="/dashboard/:id" element={<Edit />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
