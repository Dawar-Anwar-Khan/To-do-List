import Header from "./assets/layouts/Header";
import { Outlet } from "react-router";
import "./index.css"

export default function App() {
return(
  <>
  <Header />
  <Outlet />
  </>
)
}
