import { readFile, writeFile } from 'node:fs/promises'; //using this would remove the use of the util
// import util from 'util';

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const firstFile = await readFile("./content/sub1/test.txt", "utf-8");
        const secondFile = await readFile("./content/sub2/sample.txt", "utf-8")
        await writeFile("./content/sub2/written-sample.txt", `
            NEW FILE: ${firstFile} ${secondFile}
        `)
        console.log(firstFile);
        console.log(secondFile);
    } catch (error) {
        console.log(error)
    }
};

start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         });
//     });
// };

// getText("./content/sub1/test.txt")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// const start = async () => {
//     try {
//         const firstFile = await getText("./content/sub1/test.txt");
//         const secondFile = await getText("./content/sub2/sample.txt")
//         console.log(firstFile);
//         console.log(secondFile);
//     } catch (error) {
//         console.log(error)
//     }
// };

// start();