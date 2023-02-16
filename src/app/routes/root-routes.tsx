import { Routes } from "react-router";
import RouteList from "./route-list";


function RouteElements() {
    return <>
      <Routes>
        {RouteList()}
      </Routes>
    </>
}


export default RouteElements;