
function popuphelp(url)
{
	var hWnd = window.open(url,"RePORTERHelp","width=650,height=400,resizable=no,scrollbars=yes");
	if (hWnd.focus != null) hWnd.focus();
}
 function PWindow(url) {
			if(url.search("ddparam=ORG") != -1)
			url = recreateORgURL(url);
	
	        mywin = window.open("", "", "width=1050,height=600,status=yes,menubar=yes,scrollbars=yes");
	        mywin.location.href = url;
	        mywin.focus();
	    }
	    
function pwindpi(mylink, windowname)
  { 
  	if (! window.focus) return true;
  	 var href; 
  	 if (typeof(mylink) == 'string') 
  	 href=mylink; 
  	 else 
  	 href=mylink.href;
  	 var ContextWindow=window.open(href, windowname, 'width=1050,height=600,status=yes,menubar=yes,scrollbars=yes'); 
  	 ContextWindow.focus();
  	 return; 
  	 } 

function newpwindpi(jpid)
  { 
  //	alert("in JS: reporter_pisummary.cfm?pi_id=#PI_Profile_Person_ID#&map=y" + jpid);
  	var mylink="reporter_pisummary.cfm?pi_id="+ jpid + "&map=y";
  	var jwin="win"+jpid+";"
  	if (! window.focus) return true;
  	 var href; 
  	 if (typeof(mylink) == 'string') 
  	 href=mylink; 
  	 else 
  	 href=mylink.href;
  	 var ContextWindow=window.open(href, jwin, 'width=1050,height=600,status=yes,menubar=yes,scrollbars=yes'); 
  	 ContextWindow.focus();
  	 return; 
  	 } 
 

var win=null;
function NewWindow(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes';
win=window.open(mypage,myname,settings);}

function stripAlphaNumericComma(strInput) 
{ 
	var strOutput = new String(strInput); 
	//strOutput = strOutput.replace(/[^0-9a-zA-Z, (),-]/g, ''); 	
	//strOutput=strOutput.replace(/(/g, "");
	//strOutput=strOutput.replace(/)/g, "");
	strOutput=strOutput.replace(/</g, "");
	strOutput=strOutput.replace(/>/g, "");
  	//strOutput=strOutput.replace(/&amp;/g, "&");
	//strOutput=strOutput.replace(/--/g, "");
	//strOutput=strOutput.replace(/*/g, "");
  	strOutput=strOutput.replace(/'/g, "");
	//strOutput=strOutput.replace(/"/g, "");
	strOutput=strOutput.replace(/%/g, "");
	strOutput=strOutput.replace(/#/g, "");
	//strOutput=strOutput.replace(/;/g, "");
	//strOutput=strOutput.replace(/./g, "");
	//strOutput=strOutput.replace(/alert/g, "");
	//strOutput=strOutput.replace(/.js/g, "");
	return strOutput; 
}