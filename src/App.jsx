import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes/AppRouter";

const router = createAppRouter();

export default function App() {
  return <RouterProvider router={router} />;
}