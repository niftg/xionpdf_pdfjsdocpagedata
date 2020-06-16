var src = './json/xion.pdf_1-280.json';
var xionjson = require(src);

var x = xionjson
	.map(v=>{
		v.data.textContent.items.forEach(w=>{
			var fn = w.fontName;
			w.fontName = v.data.realFontNames[fn];
		})
		delete v.data.textContent.styles;
		delete v.data.realFontNames;
		return v;
	})
console.info('writing...');
var fs = require('fs');
fs.writeFileSync(`${src.split('/').pop()}.rfno.json`, JSON.stringify(x, null, 2));
console.log('finished');
