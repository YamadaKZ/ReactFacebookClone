import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home-screen/Home";
import { isAuthenticated } from "./helpers";
import Protected from "./protected";
import Chat from "../pages/chat-screen/Chat";
import { PATH_URL } from "../utils/constant";
import Login from "../pages/login-screen/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">

      <Route element={<Protected />}>
        {/* All other routes that you want to protect will go inside here */}
        <Route index element={<Home />} />
        <Route path={PATH_URL.chatPage} element={<Chat/>} />
      </Route>

      <Route
        path={PATH_URL.signIn}
        element={<Login/>}
        loader={async () => await isAuthenticated()}
      />
      
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
