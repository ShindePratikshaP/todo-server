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

app.post("/todos",(req,res)=>{
      const {todoitem} =req.body;
      TODO_ITEMS.push(todoitem);
      return res.json({
        success:true,
        data:todoitem,
        message:"ToDo Item add successfully"
      });

    });

app.delete("/todos",(req, res)=> {
      const {todoItem}=req.body;

      const itemIndex =TODO_ITEMS.indexOf(todoitem);

      if (itemIndex== -1){
        return res.json({
          success: false,
          message:"todoItem not found",
        });
      }
      else{
        TODO_ITEMS.splice(itemIndex,1);
        return res.json({
          success:true,
          data: todoItem,
        message:"ToDo item deleted successfully",      
        });
      }
    });

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
});