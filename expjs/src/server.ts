import * as express from 'express';
import {Application,Request,Response} from 'express';
import {myRouter} from './router';
import * as bodyParser from 'body-parser';

const app: express.Application=express();

//app.use(bodyParser.json({limit:'50mb',type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({limit:'50m',extended:true}));

app.get('/',(req:Request,res:Response)=>{
    res.send("<html><body><ul><li><a href='./todos'>all todos( /todos ) "
    +" </a></li><li><a href='/todos/1'>/todos/1</a> or <a href='/todos/2'>/todos/2</a> and more generally /todos/:id </li>"
    +" </ul>"
    +"<form action='/todos/' method='post'><input name='title' value='' type='text'><input type='submit' value='add this title'/></form></body></html>");
});

app.use('/todos',myRouter);

app.listen(3000,()=>{
    console.log('server started on port  3000');
})