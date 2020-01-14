const { render } = require("prettyjson");
const data = require("./lib/data");

const renderOpts = {
  keysColor: "rainbow",
  dashColor: "magenta",
  stringColor: "green"
};

module.exports = () => render(data, renderOpts);
