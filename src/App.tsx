import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, MainPage, SignupPage } from "./pages";
import { AuthGuard, CardLayout } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { MainLayout } from "./components/layouts/MainLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route element={<CardLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="/main" element={<MainPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
