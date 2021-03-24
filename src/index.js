var mjAPI = require("mathjax-node");
var readline = require("readline")

function typeset(formula, fm) {
	mjAPI.typeset({
		math: formula,
		format: fm, // "TeX" or "inline-TeX", "MathML"
		svg:true, // mml:true or svg:true, or html:true
	}, function (data) {
		if (!data.errors) {
			console.log(data.svg);
			fs = require('fs');
			fs.writeFile('mathjax.svg', data.svg, function (err) {
				if (err) return console.log(err);
				console.log(data.svg, '> mathjax.svg');
			});
		}
	});
}

mjAPI.config({
	MathJax: {
		// traditional MathJax configuration
	}
});
mjAPI.start();

//var yourMath = String.raw`\mathcal{L} 678`;
//typeset(yourMath)

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})

rl.on('line', (line) => {
	if (/^\$(?!\$)/.test(line)) {
		fm = "inline-TeX"
	} else {
		fm = "TeX"
	}
	var math = line.replace(/^\$*/, '').replace(/\$*$/, '')
	typeset(math, fm)
})

process.stdout.write('Enter LaTeX Formula: ')