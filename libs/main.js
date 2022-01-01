if (ed.getSdk() > 0) {
  if(document.URL.indexOf("educlick.page") <= -1){
     ed.goBackToEd();
  }
  ed.save("data save test");
  alert(ed.getData())
} 
