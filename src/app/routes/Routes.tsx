import AdminPages from "../../pages/admin/adminPages";
import IndexPages from "../../pages/index/indexPages";
import JobPages from "../../pages/job/jobPages";

export const Routes = [
  {
    path: "/",
    component: IndexPages,
  },
  {
    path: "/job/:id",
    component: JobPages,
  },
  {
    path: "/admin",
    component: AdminPages,
  },
];
