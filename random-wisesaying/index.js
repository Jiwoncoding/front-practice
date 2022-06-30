const exp = require("constants")
const express=require("express")
// fs=file system
const fs=require("fs")

const data=JSON.parse(fs.readFileSync("data.json","utf-8"))
// console.log(data);

const app=express()

app.use(express.json())

app.get('/random',(req,res)=>{
  // res.send(data)
  const rand=Math.floor((Math.random()*data.length))
  res.json(data[rand])
})

app.post('/',(req,res)=>{
  // console.log(req.body);
  // post 검증 코드
  const {author,message}=req.body
  if(!(author&&author.length>0&&message&&message.length>0)){
    res.json({
      rs: false
    })
    return;
  }
  data.push({
    author: req.body.author,
    message: req.body.message
  })
  res.json({
    // rs=result
    rs:true
  })
  })

app.delete('/:id',(req,res)=>{
  const{id}=req.params
  // delete 검증 코드
  if(isNaN(id)){
    res.json({
      rs: false,
      msg: "id is not number!"
    })
    return;
  }
  const num=parseInt(id)
  if(num>data.length||num<0){
    res.json({
      rs: false,
      msg: "num is not vaild"
    })
    return;
  }
  data.splice(num,0)
  res.json({
    rs: true
  })
})

app.put('/:id',(req,res)=>{
  const{id}=req.params
  if(isNaN(id)){
    res.json({
      rs: false,
      msg: "id is not number!"
    })
    return;
  }
  const num=parseInt(id)
  if(num>data.length||num<0){
    res.json({
      rs: false,
      msg: "num is not vaild"
    })
    return;
  }
  const {author,message}=req.body
  if(!(author&&author.length>0&&message&&message.length>0)){
    res.json({
      rs: false,
      msg: "wrong data"
    })
    return;
  }
  data[num]={
    author:req.body.author,
    message:req.body.message
  }
  res.json({
    rs: true
  })
})

app.listen(3000,()=>{
  console.log("start server!")
})