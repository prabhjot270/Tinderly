import { BrowserRouter ,Route, Routes} from "react-router-dom"
import Header from "./Header"
import Body from "./Body"
import LoginPage from "./Login"
import Profile from "./Profile"
import FeedPage from "./FeedPage"
function App() {
   return (
    <>

     <BrowserRouter basename="/">
     <Routes>

        <Route path="/" element={<Body/>}>
         <Route path="feed" element={<FeedPage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
       
     </Routes>
     </BrowserRouter>

 
    </>
  )
}

export default App
