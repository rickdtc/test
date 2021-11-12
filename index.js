const { Plugin } = require('powercord/entities');

module.exports = class CumcordLoader extends Plugin {
  async startPlugin() {
    const noStore = { cache: "no-store" };
    const response = await fetch(
      "https://raw.githubusercontent.com/Cumcord/Cumcord/stable/dist/build.js",
      noStore
    );
    const text = await response.text();
    eval(text);
  }

  pluginWillUnload() {
    cumcord.uninject();
  }
};