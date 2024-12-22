import VueGtag from "vue-gtag";

export default ({ app, router }) => {
  if (process.env.DEV) return;
  app.use(
    VueGtag,
    {
      includes: [{ id: "AW-16593452488" }],
      config: { id: "G-HDBYWHYG03" },
    },
    router
  );
};
