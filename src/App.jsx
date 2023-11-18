import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
//data
import TodoData from "./data/TodoData";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path="/" element={<Home />} />
        <Route path="/:id" element={<TodoData/>} />

          {/*  Page not found  */}
        // <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
