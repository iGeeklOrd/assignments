const fs = require("fs");

async function writeToFile(fileName, content) {
    try {
        await fs.writeFile(fileName, content, "utf-8")
        console.log('File has been written successfully')
    } catch(error) {
        console.error('Error writing to file:', error);
    }
}

writeToFile("example.txt", "Namit")