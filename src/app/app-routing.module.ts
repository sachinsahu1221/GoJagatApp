import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "product-list",
    loadChildren: () =>
      import("./product-list/product-list.module").then(
        (m) => m.ProductListPageModule
      ),
  },
  {
    path: "product-details",
    loadChildren: () =>
      import("./product-details/product-details.module").then(
        (m) => m.ProductDetailsPageModule
      ),
  },
  {
    path: "buy-later",
    loadChildren: () =>
      import("./buy-later/buy-later.module").then((m) => m.BuyLaterPageModule),
  },
  {
    path: "notification",
    loadChildren: "./notification/notification.module#NotificationPageModule",
  },
  {
    path: "order-details",
    loadChildren: "./order-details/order-details.module#OrderDetailsPageModule",
  },
  {
    path: "order-list",
    loadChildren: "./order-list/order-list.module#OrderListPageModule",
  },
  {
    path: "order-details",
    loadChildren: "./order-details/order-details.module#OrderDetailsPageModule",
  },
  {
    path: "buy-later",
    loadChildren: "./buy-later/buy-later.module#BuyLaterPageModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
