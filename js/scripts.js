
function looperDooper(number) {
  let output="";
  for(let i=1; i<=number; i++) {
    if(i.toString().split("").includes("3")){
      output += "Won't you be my neighbor?"
     } else if (i.toString().split("").includes("1")){
      output += "BEEP!"
     } else if(i.toString().split("").includes("2")){
      output += "BOOP!"
    } else {
      output += i 
    }
  } 
  return output 

}; 

$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
    let result = looperDooper($("#number").val())
    console.log(result)
  $("#newnumber").text(result)
  });
});
