
import app from './src/app.js';
import { connectDB } from './src/database/connection.js';




async function main() {

    await connectDB();
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });

}

main();