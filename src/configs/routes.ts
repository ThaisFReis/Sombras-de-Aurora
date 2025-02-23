export type RouteGroup = {
  label: string;
  routes: RouteItem[];
  type: "route-group";
  icon?: string;
  isOpen?: boolean;
};

export type RouteItem = {
  label: string;
  path: string;
  type: "route";
  icon?: string;
  isOnlyForPlaces?: boolean;
};

export type RouteConfig = RouteGroup | RouteItem;

export const routes: RouteConfig[] = [
  {
    label: "Início",
    type: "route",
    path: "/",
    icon: "teenyicons:pie-chart-outline",
  },
  // {
  //   type: "route-group",
  //   label: "Local",
  //   icon: "teenyicons:shop-outline",
  //   routes: [
  //     {
  //       path: "/places/integrate",
  //       label: "Integrar local",
  //       type: "route",
  //     },
  //   ],
  // },
];
