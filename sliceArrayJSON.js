var srcObj = require(process.argv[2]);
var sliceLength = process.argv[3]-0 || 10;

var fs = require('fs');

for (var i=0; i<srcObj.length; i+=sliceLength) {
	console.info(`writing... (${i+1}-${i+sliceLength})`);
	fs.writeFileSync(
		`${process.argv[2]}_${('000'+(i+1)).slice(-3)}-${('000'+(i+sliceLength)).slice(-3)}.json`,
		JSON.stringify(srcObj.slice(i,i+sliceLength),null,2)
	);
}
console.info('finished');
