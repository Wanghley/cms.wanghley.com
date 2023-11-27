// @ts-nocheck
import favicon from "./extensions/favicon.ico";

const config = {
  locales: [
    'pt-BR',
    'en-US'
  ],
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
