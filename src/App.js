import { useRoutes } from "hookrouter";
import routes from "./routes";

function App() {
  const routeResult = useRoutes(routes);
  return routeResult;
}

export default App;
