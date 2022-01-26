const fs = require("fs");

module.exports = (eleventyConfig) => {
eleventyConfig.addShortcode("photoFolder", function (photoFolder) {
  const html = fs.readdirSync(photoFolder)
    .map((file) => `<img src="${file}" />`);
  return html.join("\n");
});

// eleventyConfig.addShortcode("photoFolder", function (photoFolder) {
//   const photoList = [];
//   fs.readdir(photoFolder, (err, files) => {
//     if (err) throw err;
//     files.forEach((file) => {
//       photoList.push(`<img src="${photoFolder}/${file}" />`);
//     });
//   });
//   return photoList.join("\n");
// });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
