import { Router,Request,Response } from "express";
import * as repo from './repository';
import * as bodyParser from 'body-parser';
export const myRouter= Router();
myRouter.get('/',(req:Request,res:Response)=>{
    const data=repo.getAll();
    return res.json(data);
});
myRouter.post('/',(req:Request,res:Response)=>{
    console.log('req.body=>'+  bodyParser.json );
    //const {todo=null} = req.body;
    const data = repo.getAll();
    return res.json(data);
});
myRouter.get('/:id',(req:Request,res:Response)=>{
 const data=repo.getById(parseInt(req.params.id));
    return res.json(data);
});