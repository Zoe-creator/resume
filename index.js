#! /usr/bin/env node
const fs=require("fs")

fs.readFile("info.json", "utf8", function (err,data){
if(err){
  throw(err)
}else{
  console.log(data)
  return data
}


})