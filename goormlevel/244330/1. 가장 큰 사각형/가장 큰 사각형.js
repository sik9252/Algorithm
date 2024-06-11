// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let data = [];
	let maxArea = -1;
	
	for await (const line of rl) {
		data.push(line.split(' ').map(Number));
		rl.close();
	}
	
	for (let i=1; i<data.length; i++) {
		let w = data[i][0];
		let h = data[i][1];
		
		maxArea = Math.max(maxArea, w * h);
	}
	
	console.log(maxArea);
	
	process.exit();
})();
