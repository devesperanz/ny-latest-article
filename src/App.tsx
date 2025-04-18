import { Routes, Route } from "react-router-dom";
import { ArticleProvider } from "./context/ArticleProvider";
import HomePage from "./pages/HomePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import Layout from "./components/layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <ArticleProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ArticleProvider>
  );
}

export default App;
