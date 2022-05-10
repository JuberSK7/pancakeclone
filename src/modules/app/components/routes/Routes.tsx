import React,{ useState } from "react";
import { /* RouteComponentProps */ Redirect, Switch } from "react-router";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { Paths } from "./types";
import { NotFound } from "./NotFound";
import { StyledRoutesContainer } from "./style";
import Footer from "../footer";
import Navbar from "../navbar";
import Home from "../../../home";
import Swap from "../../../swapage/Swap";
import { Sidebar } from "../../../home/componant/Sidebar/Index";
//import { MainContainer } from "../../../../shared/styles/styled";



const notFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: Home,
    protected: false,
    redirect: Paths.home,
    title: "Home",
    pathType: 0,
  },
  {
    path: Paths.home,
    component: Home,
    protected: false,
    redirect: Paths.home,
    title: "Home",
    pathType: 0,
  },
  {
    path: Paths.swap,
    component: Swap,
    protected: false,
    redirect: Paths.swap,
    title: "swap",
    pathType: 0,
  },
].concat(notFoundRoute as any); // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string;
  protected?: boolean;
  redirect?: string;
  component?: any;
  routes?: RouteDefinition[];
  title?: string;
  pathType?: number;
}

interface Props {
  // userLoaded: boolean
}
interface RoutesProps {}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />;
}

const Routes: React.FC<Props & RoutesProps> = () => {
  
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
      setIsOpen(!isOpen);
      //console.log(mytoggle)
    };
  
console.log(isOpen);


  return (
    <Router history={history}>
      <StyledRoutesContainer>
        <Sidebar isOpen={isOpen} mytoggle={toggle}/>
        <Navbar mytoggle={toggle} />
        
          <Switch>
            <Redirect exact from="/" to={Paths.home} />
            {routes.map((route, i) => {
              const render = getRouteRenderWithAuth(route, i);
              const rest = { render };
              return <Route key={i} path={route.path} exact {...rest} />;
            })}
          </Switch>
        
      </StyledRoutesContainer>

    <Footer/>
    </Router>
  );
};

export default Routes;

