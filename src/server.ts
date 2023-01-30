import app from './app';
import { connect } from './modules/db/mongo';

const PORT = process.env.PORT || 5000;

const setup = async () => {
    
}
app.listen(PORT, async ()=>{
    console.log(`Skill-Judge Server is on ${PORT}`);
    const db = await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@skill-judge.old6dyc.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Application Setup Completed!");

})



