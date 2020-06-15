var xionjson = require('./json/xion.pdf_1-280.json');

var x = xionjson
	.map(v=>{
		v.data.textContent.items.forEach(w=>{
			var fn = w.fontName;
			w.fontName = v.data.realFontNames[fn];
		})
		delete v.data.textContent.styles;
		delete v.data.realFontNames
		return v
	})
console.log(x.map(v=>v.data.textContent.items));
