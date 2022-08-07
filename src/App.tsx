import { useSnapshot } from "valtio";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeStore } from "./app/theme/store";
import Dashboard from "./dashboard/Dashboard";
import Edit from "./edit/Edit";

const App: React.FC = () => {
  const { theme } = useSnapshot(themeStore);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Edit />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
