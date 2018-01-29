const __VERSION__ = require('./package.json').version;
let __ENV__ = 'local';
try {
  console.log('bbbbbbb:'+process.env.NODE_ENV)
  const argv = process.argv[2] || '';
  const a = argv.split('=');
  if (a[1] === 'local') {
    __ENV__ = 'local';
  }
  if (a[1] === 'online') {
    __ENV__ = 'online';
  }
} catch (e) {
  console.log(e);
  __ENV__ = 'local';
}

export default {
  "entry": "src/index.js",
  "define": {
    "ENV": process.env.NODE_ENV,
    "__VERSION__": __VERSION__
  },
  "env": {
    "local": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    },
    "online": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": "css" }]
      ]
    }
  }
}
