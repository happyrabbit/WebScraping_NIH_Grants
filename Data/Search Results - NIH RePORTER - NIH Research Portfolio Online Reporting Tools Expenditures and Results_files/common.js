
	    
 
	    

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
//New Code added by SN on 17th Feb
	function cc()
	{
		var url = window.location.pathname
		var jsfilename = url.substring(url.lastIndexOf('/')+1);
		//alert(jsfilename);
	//alert(document.cookie)
	 /* check for a cookie */
	 if (jsfilename=="reporter.cfm")
	 	{
		  if (document.cookie == "") 
		  {
			/* if a cookie is not found - alert user -
			 change cookieexists field value to false */
			//	alert("COOKIES need to be enabled!");
			document.getElementById('cookDiv').style.display = 'block';
			 
		  } else {
			  //	alert("COOKIES enabled!");
		  document.getElementById('cookDiv').style.display = 'none';
		  }
		}
	}
	document.cookie = 'Exist' 

//Fn to check blank spaces
function cutSpaces(s)
{
	//alert(s)
	var s1, x;
	x = s1 = "";
	
	l = s.length;
	for(i = 0; i < l; i++)
		if((x = s.charAt(i)) != " ")
			s1+=x;
	return s1;
}

function cutats(s)
	{
		var s1, x;
		x = s1 = "";
		l = s.length;
		for(i = 0; i < l; i++)
			if((x = s.charAt(i)) != "@")
				s1+=x;
		return s1;
	}
// New function to check date is valid
function isDate(sDate)
	{
	   var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/
	   if (re.test(sDate)) {
		  var dArr = sDate.split("/");
		  var d = new Date(sDate);
		  return d.getMonth() + 1 == dArr[0] && d.getDate() == dArr[1] && d.getFullYear() == dArr[2];
	   }
	   else {
		  return false;
	   }
	}

function special_email(var1)
{
	if (var1.indexOf('`') >= 0 || var1.indexOf('~') >= 0 || var1.indexOf('!') >= 0 || var1.indexOf('#') >= 0 ||
			var1.indexOf('$') >= 0 || var1.indexOf('%') >= 0 || var1.indexOf('^') >= 0 || var1.indexOf('&') >= 0 ||
			var1.indexOf('*') >= 0 || var1.indexOf('(') >= 0 || var1.indexOf(')') >= 0 || var1.indexOf('+') >= 0 ||
			var1.indexOf('{') >= 0 || var1.indexOf('}') >= 0 || var1.indexOf('|') >= 0 || var1.indexOf('[') >= 0 ||
			var1.indexOf(']') >= 0 || var1.indexOf('\\') >= 0 || var1.indexOf(';') >= 0 || var1.indexOf(':') >= 0 ||
			var1.indexOf('>') >= 0 || var1.indexOf('<') >= 0 || var1.indexOf(',') >= 0 || var1.indexOf('?') >= 0 ||
			var1.indexOf('/') >= 0 || var1.indexOf('\'') >= 0 || var1.indexOf('"') >= 0 || var1.indexOf(' ') >= 0)
			{
				alert("Enter a valid email address");
				return false;
		     }
    return true;
}


function fnValidemail(js_elm)
	{
	//alert("in")
    //alert(js_elm)
	email = js_elm.value  
	//	alert(email)
	if (cutSpaces(email) == "")
		{
			alert("Please enter email address");
			js_elm.focus();
			return false;
		}

		if (cutSpaces(email) != "")
			{
				    flag=special_email(email);
					    if(flag==false)
						    {
						    js_elm.focus();
						    return false;
						    }
						var x;
						x = email.indexOf("@");
						if (email.indexOf("@") <= 0)
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
							  return false;
						}
					if (email.substr(email.indexOf("@") - 1, 1) == ".")
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
						return false;
						}
					if (email.indexOf(".") <= 0)
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
					   return false;
						}
					if (email.substr(email.length - 2, 1) == "." || email.substr(email.length - 1, 1) == ".")
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
						return false;
						}
					// < 3 chnged to 2
					if (email.indexOf(".", email.indexOf("@")) - email.indexOf("@") < 2)
						{
							alert("Invalid email address.");
							//js_elm.value = ""
							js_elm.focus();
						return false;
						}

					if (cutats(email).length < email.length - 1)
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
					   return false;
						}
					
					 var dom="";
					  dom=email.substring(email.lastIndexOf("."),email.length)
					 //alert(dom)
					  
					if (email.indexOf(dom)<5) 
						{
							alert("Invalid email address");
							js_elm.value = ""
							js_elm.focus();
						return false;
						}
			}
	
}
// Added on 6/3/2013 to check browser
function checkbrowser()
{
	var flgDispalyDiv = false;
	//alert("Nav"+window.navigator.userAgent);
	
	var vChromeMaxBrowserSupport=11;
	var vFirefoxMaxBrowserSupport=11;
	var vMSIEMaxBrowserSupport=8;
	var vSafariMaxBrowserSupport=5;

	
	var ver = 0;
	var ua = window.navigator.userAgent;
	   if ( ua.indexOf ("Chrome") > 0 )
	   {
		   //alert("Chrome");
		  
		   var c1=parseInt(ua.indexOf("Chrome"));
		   var c2=parseInt(ua.indexOf("Safari"));
		    var count=c2-c1;
		   var versionOfBrowser=cutSpaces(ua.substr(c1+7,count-7));
		    
		   var v1=parseInt(versionOfBrowser.indexOf("."));
		   var finalvarsion =versionOfBrowser.substr(0,v1);
		   
		   //alert("chromne"+finalvarsion);
		   // if(finalvarsion<11)
		   if(finalvarsion<vChromeMaxBrowserSupport)
		   {
			   flgDispalyDiv = true;
		   }
		   
		  
		   
		}
		else if ( ua.indexOf ("Firefox") > 0 )
	   {
		   //alert("Firefox");
		    var c1=parseInt(ua.indexOf("Firefox"))+8;
			var c2 =ua.length-c1;
			 var finalvarsion = ua.substr(c1,c2);
			 finalvarsion = (finalvarsion.split("."))[0];
			 
			 //alert("Firefox"+finalvarsion);
			//if(finalvarsion<11)
			if(finalvarsion<vFirefoxMaxBrowserSupport)
			{
				   flgDispalyDiv = true;
			}
		   
		}
		else if ( ua.indexOf ("MSIE") > 0 )
	   {
		   //alert("MSIE");
		  // var ver = getInternetExplorerVersion();
		    var c1=parseInt(ua.indexOf("MSIE"))+4;
		   var c2=parseInt(ua.indexOf("Windows"));
		    var count=c2-c1;
		   var versionOfBrowser=cutSpaces(ua.substr(c1,count));
		   
		    
		   var v1=parseInt(versionOfBrowser.indexOf(";"));
		   var finalvarsion =versionOfBrowser.substr(0,v1);
		    //alert("MSIE"+finalvarsion);
		   
		   
		  
		  //if(finalvarsion<=7)
		   if(finalvarsion<vMSIEMaxBrowserSupport)
		   {
			   
			   document.getElementById("checkBroswerIE").style.display ='block';	
			   //Updated on 8/21/2013	
			   //flgDispalyDiv = true;
		   }
		   /*if(ua.indexOf("compatible")>0)
		   {
			   alert("trueid212")
			    flgDispalyDiv = true;
			}*/
		   
		}
		else if ( ua.indexOf ("Safari") > 0 &&  ua.indexOf ("Macintosh") > 0) 
		{
			//alert("Nav"+window.navigator.userAgent);
			
			
			 var c1=parseInt(ua.indexOf("Version"))+7;
		   var c2=parseInt(ua.indexOf("Safari"));
		    var count=c2-c1;
		   var versionOfBrowser=cutSpaces(ua.substr(c1,count));
		   
		    
		   var v1=parseInt(versionOfBrowser.indexOf("."));
		   var finalvarsion =versionOfBrowser.substr(0,v1);
		    //alert("Safari"+finalvarsion);
		   
		   
		  //if(finalvarsion<5)
		   if(finalvarsion<vSafariMaxBrowserSupport)
		   {
			   
			   flgDispalyDiv = true;
		   }
		   
		   
		}
		else
		{
			//As not specified in task for other browser
			//flgDispalyDiv = true;
			
		}
		
		if(document.getElementById("checkBroswer"))
		{
			//alert("checkBroswer"+flgDispalyDiv);

			if(flgDispalyDiv)
			{
				document.getElementById("checkBroswer").style.display ='block';		
				
			}
			else
			{
			      		document.getElementById("checkBroswer").style.display ='none';

			}
		}
}
