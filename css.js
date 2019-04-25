function intro_show(){
  document.getElmentByClass(intro).display = inline;
  document.getElmentByClass(overview).display = none;
  document.getElmentByClass(detail).display = none;
  document.getElmentByClass(compare).display = none;

}


function overview_show(){
  document.getElmentByClass(intro).display = none;
  document.getElmentByClass(overview).display = inline;
  document.getElmentByClass(detail).display = none;
  document.getElmentByClass(compare).display = none;

}

function detail_show(){
  document.getElmentByClass(intro).display = none;
  document.getElmentByClass(overview).display = none;
  document.getElmentByClass(detail).display = inline;
  document.getElmentByClass(compare).display = none;

}

function compare_show(){
  document.getElmentByClass(intro).display = none;
  document.getElmentByClass(overview).display = none;
  document.getElmentByClass(detail).display = none;
  document.getElmentByClass(compare).display = inline;

}
