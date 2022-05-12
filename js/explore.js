function submitSub() {
  var x = document.getElementsById("subscription-button");

  if(x.value == "") {
    return false;
  }
  else {
    alert("Success!");
  }
}