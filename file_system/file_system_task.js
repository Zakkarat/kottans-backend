const fs = require('fs');
let content;
if (fs.existsSync('./counter.txt')) {
  content = Number(fs.readFileSync('./counter.txt'));
  if (!Number.isInteger(content)) {
    return 1;
  }
  fs.writeFileSync('counter.txt', content + 1);
} else {
  fs.writeFileSync('counter.txt', '1');
}
fs.closeSync(2);
return 0;