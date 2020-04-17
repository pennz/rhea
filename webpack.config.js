var path = require('path');

module.exports = {
    mode: 'development',
    entry: 'rhea_hello',
    output: {
        path: path.join(__dirname, '..'),
        filename: 'bundle.js'
    },
    module: {
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js']
    },
    node: {
    }
};
