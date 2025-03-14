import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, MainPage, SignupPage } from "./pages";
import { AuthGuard, DefaultLayout } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
            <Route path="/main" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
