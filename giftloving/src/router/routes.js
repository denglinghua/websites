const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "home-decor", component: () => import("pages/ProductPage.vue") },
      {
        path: "dried-floral",
        component: () => import("pages/ProductPage.vue"),
      },
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
