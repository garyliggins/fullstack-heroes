const mongoose = require("mongoose");
const db_name = 'super-heroes';

mongoose.connect(`mongodb://localhost/${db-name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`you are connected to the ${db_name}`))
.catch((err) => console.log("found a error connecting to the database"));

