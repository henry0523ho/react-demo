import client from "./connectDB";
import ITodoData from "../datatype/ITodoData";
import { ObjectId } from "mongodb";

export async function getTodos() {
  try{
    const db=client.db("react_demo");
    const todos=await db.
    collection("todolist")
    .find({})
    .sort({createdAt:-1})
    .toArray();
    const result:ITodoData[]=JSON.parse(JSON.stringify(todos));
    return result;
  }catch(e){
    console.error(e);
    return [];
  }
}

export async function addTodo(content:string){
  try{
    const db=client.db("react_demo");
    const result=await db.collection("todolist").insertOne({
      content:content,
      completed:false,
      createdAt:Date.now(),
      isEditing:false
    });
    return result.insertedId!==null;
  }catch(e){
    console.error(e);
    return false;
  }
}

export async function deleteTodo(_id:string){
  try{
    const db=client.db("react_demo");
    const result=await db.collection("todolist").deleteOne({_id:new ObjectId(_id)});
    return result.deletedCount===1;
  }catch(e){
    console.error(e);
    return false;
  }
}

export async function updateTodoContent(_id:string,content:string,completed:boolean){
  try{
    const db=client.db("react_demo");
    const result=await db.collection("todolist").updateOne({_id:new ObjectId(_id)},{
      $set:{
        content:content,
        completed:completed
      }
    });
    return result.modifiedCount===1;
  }catch(e){
    console.error(e);
    return false;
  }

}