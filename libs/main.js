if (ed.getSdk() == "1") {
  if(document.URL.indexOf("educlick.page") <= -1){
    if (ed.getData() == '') {
      ed.save('1')
      alert('this is the first non-educlick link u visiting')
    } else if (ed.getData() == '1') {
      ed.save('0')
      setInterval(function() {
          alert('this is the second non-educlick link u visiting')
      }, 2000);
    }
  } else {
    ed.clearData();
    if (ed.getData() == '0') {
      ed.save('')
    }
  }
} else {
  alert("the adClicker you are using is unsupported, kindly update or contant my author");
}