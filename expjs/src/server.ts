import * as express from 'express';
import {Application,Request,Response} from 'express';
import {myRouter} from './router';
import * as bodyParser from 'body-parser';

const app: express.Application=express();

app.use(bodyParser.json({limit:'50mb',type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({limit:'50m',extended:true}));

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello TS');
});

app.use('/todos',myRouter);

app.listen(3000,()=>{
    console.log('server started on port  3000');
})