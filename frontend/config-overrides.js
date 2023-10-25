const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve = {
        ...config.resolve,
        fallback: {
            ...config.resolve.fallback,
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util"),
        }
    };

    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        })
    );

    return config;
};
