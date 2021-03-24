var mjAPI = require("mathjax-node");

mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = 'E = mc^2';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  svg:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {
    console.log(data.svg)}
    data.svg
    fs = require('fs');
    fs.writeFile('mathjax.svg', data.svg, function (err) {
      if (err) return console.log(err);
      console.log(data.svg, '> mathjax.svg');
  });
});
