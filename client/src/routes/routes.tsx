import { ArticlesPage } from "components/Pages/ArticlesPage/ArticlesPage";
import { BasePage } from "components/Pages/BasePage/BasePage";
import { HomePage } from "components/Pages/HomePage/HomePage";
import { RouteConfig } from "react-router-config";
import { PATH } from "./paths";

export const routes: RouteConfig[] = [
  {
    path: PATH.ROOT,
    component: BasePage,
    exact: true
  },
  {
    path: PATH.ARTICLES,
    component: ArticlesPage
  },
  {
    path: PATH.HOME,
    component: HomePage
  }
];
