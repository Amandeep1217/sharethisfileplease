const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db');
connectDB();
async function fetchdata() {
    // 24 hours 
    const pastDate = new Date(Date.now() - 60 * 60 * 24 * 1000);
    const files = await File.find({ createdAt: { $lt: pastDate } });
    if (files.length) {
        for (const file of files) {
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`Succesfully deleted${file.filename}`);
            } catch (err) {
                console.log(`error while deleting file ${err}`)
            }
        }
        console.log('job done');
    }
}
fetchdata().then(process.exit);