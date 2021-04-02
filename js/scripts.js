function looperDooper(number) {
  for(let i=0; i<=number; i++) {
    if(i.toString().split("").includes("3")){
      console.log("Won't you be my neighbor?")
      } else if(console.log(i));{
      }
    if(i.toString().split("").includes("1")){
      console.log("BEEP!")
      } else if(console.log(i));{
    }
    if(i.toString().split("").includes("2")){
      console.log("BOOP!") 
      } else if(console.log(i));{
    }  
  } 
};


$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
    looperDooper($("#number").val())
  });
});
