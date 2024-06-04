import VueGtag from "vue-gtag";

export default ({ app, router }) => {
  if (process.env.DEV) return;
  app.use(
    VueGtag,
    {
      config: { id: "AW-16593452488" },
    },
    router
  );
};
