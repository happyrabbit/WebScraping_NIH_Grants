ieseven = "false";
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent))
{ 
   var ieversion=new Number(RegExp.$1);
   if (ieversion<=7)
   {
      ieseven = "true";
   }
}

var ns4 = (navigator.appName.indexOf("Netscape")>=0 
          && parseFloat(navigator.appVersion) >= 4 
          && parseFloat(navigator.appVersion) < 5)? true : false;
var ns6 = (parseFloat(navigator.appVersion) >= 5 
          && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var ns = (document.layers)? true:false;
var ie = (document.all)? true:false;

function getElTop(el) {
	
    if (ns4) {return el.pageY;} 
    else {
        yPos = el.offsetTop;
        tempEl = el.offsetParent;
        while (tempEl != null) {
            yPos += tempEl.offsetTop;
              tempEl = tempEl.offsetParent;
        }
        return yPos;
    }
}

var tabs = document.getElementById('affix-tabs');
var criteria = document.getElementById('affix-criteria');
var showcriteria = document.getElementById('affix-show');
var note = document.getElementById('affix-note');
var tableheader = document.getElementById('affix-top');
var maintable = document.getElementById('main-table');

tabs.style.width = maintable.offsetWidth + 5 + 'px';
criteria.style.width = maintable.offsetWidth - 10 + 'px';
note.style.width = maintable.offsetWidth + 'px';
tableheader.style.width = maintable.offsetWidth + 'px';

var elementPosition = getElTop(tabs);

if (ieseven == "false") {
  window.onscroll = affix;
}

function affix() {

  var top = (document.documentElement.scrollTop || window.pageYOffset);
  
  //alert(top);
  
  if(top > elementPosition){
    
      if (tableheader.className != "affix") {
        tabs.className = "tabs affix";
        criteria.className = "search_criteria affix";
        note.className = "Note affix";
        tableheader.className = "proj_search_cont affix";
      }
      var pushdown = criteria.offsetHeight;
      var pushdown2 = note.offsetHeight;
      tableheader.style.top=pushdown+pushdown2+20+'px';
      note.style.top=pushdown+20+'px';
  } 
  else
  {
    tabs.className = "tabs";
    criteria.className = "search_criteria";
    note.className = "Note";
    tableheader.className = "proj_search_cont";
    tableheader.style.display = "";
  }
}

showcriteria.onclick = function () {
  if (ieseven == "false") {
    setTimeout(function(e){
      var pushdown = criteria.offsetHeight;
      var pushdown2 = note.offsetHeight;
        tableheader.style.top=pushdown+pushdown2+20+'px';
        note.style.top=pushdown+20+'px';
    },600);
  }
}