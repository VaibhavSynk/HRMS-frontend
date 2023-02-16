import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";
import { RouteElementsList } from "./route-elements";
import { CommonRouteProps } from "./route-interface.props";
import { RoutePath } from "./route-path";


export default function RouteList() {
  
  const { isLogin } = useSelector((state: any) => state.login);
  
  const CommonRoute = (routeInfo: CommonRouteProps) => {
      return <Route 
      index={routeInfo.index}
      path={routeInfo.path}
      element={protectedRoutes(routeInfo)}
      key={routeInfo.path}
      />
    }

    const protectedRoutes = (routeInfo: CommonRouteProps) => {
      if(routeInfo.isAuth === false){
        if(isLogin){
          return <Navigate to={RoutePath.dashboard} replace />
        }
        return routeInfo.element;
      }else if(routeInfo.isAuth === true){
        if(isLogin){
          return routeInfo.element;
        }else{
          return <Navigate to={RoutePath.login}  replace/>
        }
      }
    }
 

return RouteElementsList.map((item: CommonRouteProps) => {
  return CommonRoute(item);
})

}