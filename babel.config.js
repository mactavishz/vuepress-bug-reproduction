module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            ">0.2%",
            "last 2 versions",
            "not dead"
          ]
        }
      }
    ]
  ],
  plugins: [
    "transform-vue-jsx",
    "@babel/plugin-proposal-object-rest-spread"
  ]
}
