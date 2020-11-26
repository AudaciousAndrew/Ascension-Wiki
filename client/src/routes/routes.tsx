import { RouteConfig } from "react-router-config";
import { PATH } from "./paths";
import { ArticlesPage } from "components/Pages/ArticlesPage/ArticlesPage";
import { BasePage } from "components/Pages/BasePage/BasePage";
import { FaqPage } from "components/Pages/FaqPage/FaqPage";
import { HomePage } from "components/Pages/HomePage/HomePage";
import { SignInPage } from "components/Pages/SignInPage/SignInPage";

export const routes: RouteConfig[] = [
  {
    path: PATH.ROOT,
    component: BasePage,
    routes: [
      {
        path: PATH.ROOT,
        component: HomePage,
        exact: true
      },
      {
        path: PATH.ARTICLES,
        component: ArticlesPage,
        exact: true
      },
      {
        path: PATH.FAQ,
        component: FaqPage,
        exact: true
      },
      {
        path: PATH.SIGN_IN,
        component: SignInPage,
        exact: true
      }
    ]
  }
];
