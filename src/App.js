import { RouterProvider } from "react-router-dom";

import "./style.scss";

import { router } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <div className="app_wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
