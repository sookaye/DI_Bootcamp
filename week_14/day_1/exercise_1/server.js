let fs = require('fs');
fs.readFile('menu.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

console.log("-----Restaurant Menu---------", '\n',);