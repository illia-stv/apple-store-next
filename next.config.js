


module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://my-apple-store-server.herokuapp.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

