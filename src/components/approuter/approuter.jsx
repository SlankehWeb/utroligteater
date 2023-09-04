import { Route, Routes } from "react-router-dom";
import Frontpage from "../pages/frontpage/frontpage";
import Showsandevents from "../pages/playsandevents/playsandevents";
import Login from "../pages/login/login";
import Actors from "../pages/actors/actors";
import EventReadMore from "../pages/eventreadmore/eventreadmmore";

const AppRouter = () => {
    return (
        <Routes>
        <Route path="/">
            <Route index element={<Frontpage/>}/>
            <Route path=":id" element={<EventReadMore/>}/>
        </Route>
        <Route path="/forestillinger&events" element={<Showsandevents/>}/>
        <Route path="/skuespillere" element={<Actors/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        );
    };
    
    export default AppRouter;
    