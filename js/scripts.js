function looperDooper(number) {
  for(let i=0; i<=number; i++) {
    console.log(i);
  }
};
$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
    looperDooper($("#number").val())
  });
});
