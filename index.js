import express from 'express';

const app = express();
app.use(express.json());
const PORT = 8020;

const TODO_ITEMS = ["Buy groceries", "Clean the house", "Finish homework"];

app.get('/', (req, res) => { 
    return res.json({message: 'Hello World!'}); 
});

app.get('/health', (req, res) => {
    const success = true;
    return res.json({message: 'Server is healthy!'});
});

app.get("/todos",(req,res)=>{
      return res.json({
        success:true,
        data: TODO_ITEMS,
        message:"TODO lists",
      });
    });

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});