module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: [
            { "@/components/*": ["components/*"] },
            { "@/lib/*": ["lib/*"] },
            { "@/assets/*": ["assets/*"] },
            { "@/hooks/*": ["hooks/*"] },
            { "@/screens/*": ["screens/*"] },
            { "@/src/*": ["src/*"] },
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
