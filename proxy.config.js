const proxy = [
    {
      context: "/api",
      target: "http://localhost:8585s",
      pathRewrite: { "^/api": "" },
    },
  ];
  module.exports = proxy;