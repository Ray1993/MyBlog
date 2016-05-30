function alertObj(obj){
  var output = "";
  for(var i in obj){  
    var property=obj[i];  
    output+=i+" = "+property+"\n"; 
  }  
  alert(output);
}
