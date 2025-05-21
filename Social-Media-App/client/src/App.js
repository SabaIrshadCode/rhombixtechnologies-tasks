
import {Outlet,Navigate,Route,Routes,useLocation} from "react-router-dom"
import { Home, Login, Register, Profile, ResetPassword } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { SetTheme } from "./redux/theme";
import { useEffect } from "react";

function Layout(){
  const {user} = useSelector((state) => state.user);
  const location = useLocation()
   console.log(user);
   
  return user?.token?(
    <Outlet></Outlet>
):(
<Navigate to='/login' state={{from:location}} replace />
);
}

function App() {
  const dispatch = useDispatch();
  const {theme} = useSelector((state)=> state.theme);
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);
  console.log(theme);
  useEffect(() => {
    // Media query to detect if system prefers dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Function to update Redux state based on system preference
    const handleChange = (e) => {
      dispatch(SetTheme(e.matches ? "dark" : "light"));
    };

    // Initialize theme based on current system preference
    dispatch(SetTheme(mediaQuery.matches ? "dark" : "light"));

    // Listen for changes in system preference
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);
  
  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/profile/:id?' element={<Profile/>} />
        </Route>

        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
