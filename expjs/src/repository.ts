import{database} from "./database";
interface ITodo{
    id:number;
    title:string;
}
const collection= database.todos;
export const add=(todo:ITodo):ITodo[]=>{
    console.log(todo.title);
  collection.push(todo);
  return collection;
};
export const getAll=():ITodo[]=>{
    return collection;
}
export const getById=(id:number):ITodo[]=>{
    return collection.filter(todo=>todo.id===id);
}