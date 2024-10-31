import VueGtag from "vue-gtag";

export default ({ app, router }) => {
  if (process.env.DEV) return;
  app.use(
    VueGtag,
    {
      config: { id: "G-TLES5QG2HS" },
    },
    router
  );
};
