const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePixel.vue") },
      { path: "about", component: () => import("pages/AboutUs.vue") },
      { path: "services", component: () => import("pages/ServicePage.vue") },
      { path: "contact", component: () => import("pages/ContactUs.vue") },
      { path: "billing", component: () => import("pages/BillingInfo.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
