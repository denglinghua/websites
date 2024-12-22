const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "home", path: "", component: () => import("pages/HomePage.vue") },
      {
        name: "product",
        path: "products/:tags*",
        component: () => import("pages/ProductPage.vue"),
      },
      {
        name: "about",
        path: "about",
        component: () => import("pages/AboutUs.vue"),
      },
      {
        name: "contact",
        path: "contact",
        component: () => import("pages/ContactUs.vue"),
      },
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
