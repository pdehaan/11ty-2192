const fs = require("node:fs");
const path = require("node:path");

module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("photoFolder", function (photoFolder, extensions = [".png", ".gif"]) {
    const html = fs.readdirSync(photoFolder, {withFileTypes: true})
      .filter(file => file.isFile() && extensions.includes(path.extname(file.name)))
      .map((file) => `<img src="${file.name}" />`);
    return html.join("\n");
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
