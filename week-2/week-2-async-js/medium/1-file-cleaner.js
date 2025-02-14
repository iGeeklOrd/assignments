const fs = require("fs").promises;

async function fileCleaner(filePath) {
    try {
        let fileContent = await fs.readFile(filePath, "utf-8");

        let cleanedContent = fileContent.replace(/\s+/g, " ");

        await fs.writeFile("cleanedTest.txt", cleanedContent, "utf-8");

        console.log("Operation successful");
    } catch (err) {
        console.error("Error", err);
    }
}

fileCleaner("test.txt");