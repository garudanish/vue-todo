const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

plugins: [
  new webpack.DefinePlugin({
    VUE_APP_FONTAWESOME_KIT: JSON.stringify(env.VUE_APP_FONTAWESOME),
  }),
];
