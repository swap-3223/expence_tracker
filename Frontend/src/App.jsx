import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashbord from "./components/Dashbord";
import ReportsPage from "./components/ReportPage";
import History from "./components/History";
import AddExpense from "./components/AddExpense";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashbordHome from "./components/DashbordHome";
import Contact from "./components/Contact";
import About from "./components/About";
import PvtComponent from "./components/ProtedtedComp";
import { Toaster } from "react-hot-toast";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        }, // default page
        {
          path: "dashbord",
          element: (
            <PvtComponent>
              <Dashbord />
            </PvtComponent>
          ),
          children: [
            {
              index: true,
              element: <DashbordHome />,
            },
            {
              path: "history",
              element: <History />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "dashbordHome",
              element: <DashbordHome />,
            },
            {
              path: "reports",
              element: <ReportsPage />,
            },
            {
              path: "addexpense",
              element: <AddExpense />,
            },
          ],
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/profile",
          element: (
            <PvtComponent>
              <Profile />
            </PvtComponent>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ */}
    </>
  );
}

export default App;
