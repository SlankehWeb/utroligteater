import { Route, Routes } from "react-router-dom";
import Frontpage from "../pages/frontpage/frontpage";
import Showsandevents from "../pages/playsandevents/playsandevents";
import Login from "../pages/login/login";
import Actors from "../pages/actors/actors";
import EventReadMore from "../pages/eventreadmore/eventreadmmore";
import ActorsDetails from "../pages/actorsdetails/actorsdetails";
import ErrorPage from "../pageNotFound/error404";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path=":id" element={<EventReadMore />} />
      <Route path="/forestillinger&events" element={<Showsandevents />} />
      <Route path="/forestillinger&events/:id" element={<EventReadMore />} />
      <Route path="/skuespillere" element={<Actors />} />
      <Route path="/skuespillere/:id" element={<ActorsDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};

export default AppRouter;
