import { BrowserRouter ,Route, Routes} from "react-router-dom"
import Body from "./Body"
import LoginPage from "./Login"
import Profile from "./Profile"
import FeedPage from "./FeedPage"
import ProtectedRoute from "./ProtectedRoute"
function App() {
   return (
    <>

     <BrowserRouter basename="/">
     <Routes>

        <Route path="/" element={<Body/>}>
         <Route path="login" element={<LoginPage/>} />
         <Route element={<ProtectedRoute/>}>
         <Route path="feed" element={<FeedPage/>} />
         <Route path="profile" element={<Profile/>} />
         </Route>
        </Route>
       
     </Routes>
     </BrowserRouter>

 
    </>
  )
}

export default App
