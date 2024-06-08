import { createServer } from 'http';   //create an http server
import { readFile } from 'fs';       //create a file handler to read files
import { join } from 'path';   //create a path resolver

//server set to listen on port 5500
createServer.listen(5500, () => {
    console.log('Server is listening on http://localhost:5500');
});

createServer((req, res) => {
    let url = req.url;

    //switch to resolve common pagename to filename
    switch(url){
        case '/':
            url = '/index.html';
            break;
        case '/level0':
            url = 'level0.html';
            break;
        case '/level1':
            url = 'level1.html';
            break;
        case '/level2':
            url = 'level2.html';
            break;
        case '/level3':
            url = 'level3.html';
            break;
        case '/level4':
            url = 'level4.html';
            break;
        case '/level5':
            url = 'level5.html';
            break;
        case '/thelaw':
            url = 'thelaw.html';
            break;
        case '/opnav':
            url = 'opnav.html';
            break;
        default:
            url = 'error.html';
            break;
    }

    const filePath = join(__dirname, url);

    //error checking
    readFile(filePath, (err, data) => {
        if (err) {
            if(err.code === 'ENOENT') {
                readFile(__dirname + '/error.html', (_err, data) => {
                    res.end(data);
                });
            }
            else {
                res.statusCode = 500;
            res.end('Error loading file');
            }
        }
        else {
            res.end(data);
        }
    });
})

