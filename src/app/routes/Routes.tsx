import IndexPages from "../../pages/index/indexPages";
import JobPages from "../../pages/job/jobPages";

export const Routes = [
  {
    path: "/",
    component: IndexPages,
    authRequired: false,
    isHome: true,
  },
  {
    path: "/job/:id",
    component: JobPages,
    authRequired: false,
  },
];
