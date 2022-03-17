import { Suspense } from "react";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <MainPage />
      </div>
    </Suspense>
  );
}

export default App;
