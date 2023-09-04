import { Route, Routes } from "react-router-dom";
import Frontpage from "../pages/frontpage/frontpage";
import Showsandevents from "../pages/playsandevents/playsandevents";
import Login from "../pages/login/login";
import Actors from "../pages/actors/actors";

const AppRouter = () => {
    return (
        <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/forestillinger&events" element={<Showsandevents/>}/>
        <Route path="/skuespillere" element={<Actors/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        );
    };
    
    export default AppRouter;
    