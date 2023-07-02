/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
      ) => {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
              loader: 'file-loader',
            },
          });
          
        return config
    },
}

module.exports = nextConfig

