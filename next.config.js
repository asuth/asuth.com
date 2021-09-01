module.exports = {
  reactStrictMode: true,
  future: {
    strictPostcssConfiguration: true,
  },
  // be accessibility friendly
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    imageSizes: [
      16, 32, 48, 64, 96, 128, 256, 384,
      // added sizes
      1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200,
      3400, 3600, 3800,
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot)$/,
      type: "asset/resource",
    });
    return config;
  },
};
