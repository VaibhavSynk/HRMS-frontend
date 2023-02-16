import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteElements from "./root-routes";
function RootRoute() {
    return <>
       <React.Suspense fallback='....Loading'>
        <BrowserRouter>
           <RouteElements />
         </BrowserRouter>
        </React.Suspense>        
     </>

}
export default RootRoute;