import "./styles.css";
import Login from "./Login/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Register from "./Register/Register";
import useToken from "./hooks/useToken"
import Todo from "./Todo/Todo";
import { ToastContextProvider } from "./components/notification/notification";

function App() {
  const { token, setToken } = useToken();

  const routerAnonymous = createBrowserRouter([
    {
      path: "/",
      element: <Login setToken={setToken} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login setToken={setToken} />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  const routerLogged = createBrowserRouter([
    {
      path: "/",
      element: <Todo logout={() => setToken(null)} />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <ToastContextProvider>
      {!token ?
        <RouterProvider router={routerAnonymous} />
        :
        <RouterProvider router={routerLogged} />
      }
    </ToastContextProvider>
  )

}

export default App;
