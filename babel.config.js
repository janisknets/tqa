const presets = [
  [
    "es2015", {
      "modules":false
    },
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

const plugins = [
  "transform-runtime", 
  {"polyfill": false}
]

module.exports = { presets, plugins };