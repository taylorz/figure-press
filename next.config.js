module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    )
    return config
  }
}
