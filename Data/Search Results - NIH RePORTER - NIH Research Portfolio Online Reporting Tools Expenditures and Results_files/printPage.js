//FUNCTION//USED FOR PRINTING THE PAGE


            function PrintThisPage()
            {
                var sPath = window.location.pathname;
                 
                var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
                var sOption = "toolbar=yes,location=no,directories=yes,menubar=yes,";
                sOption += "scrollbars=yes,align=LEFT,width=740px,height=800px";
                var sWinHTML = document.getElementById('print_page').innerHTML;
				//var sWinfooter = document.getElementById('footer').innerHTML;
	            var winprint=window.open("","",sOption);
                winprint.document.open();
                winprint.document.write('<html><head xmlns="http://www.w3.org/1999/xhtml">'); 
				winprint.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
				winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="css/all_print.css" media="screen" />');
				winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="css/menu_print.css" media="screen" />');
				//winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="style/reset.css" media="screen" />');
				//winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="style/style.css" media="screen" />');
				//winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="style/style_sub.css" media="screen" />');

				/*winprint.document.write('<script type="text/javascript" src="scripts/jquery.min.js" charset="utf-8"></script>');
				winprint.document.write('<script src="scripts/jquery.cycle.js" type="text/javascript"></script>');
				winprint.document.write('<script src="scripts/global.js" type="text/javascript"></script>');*/

				//winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="style/tab_function.css" /></head>');
				winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="style/tab_function_print.css" /></head>');
				winprint.document.write('<body style="font-family:Arial, Helvetica, sans-serif;color: #4a4b4f;font-size: 11px;font-weight: normal;line-height: 16px; vertical-align:top" onload="window.print();">');
				 winprint.document.write('<IMG  width="720px" height="111px" SRC="images/topband_print.gif" />');
               /* if (document.getElementById('header_img2') != null) {
                    winprint.document.write("<span  class='headertag'>" + document.getElementById('header_img2').innerHTML + "</span>" + "");                    
                }*/

                //winprint.document.write('<div id="topcontentdv" style="font-family:Arial, Helvetica, sans-serif; color: #4a4b4f;font-size: 12px;font-weight: normal;line-height: 16px; padding-left:30px; padding-right:30px;">');
                winprint.document.write(''+sWinHTML+ '\r\n');
				//winprint.document.write( sWinfooter +'\r\n');
               
				
				//winprint.document.write('<div class="input_but"><a href="javascript:void(0)" onClick="javascript:window.close();"><IMG  width="44px" height="18px" border="0" SRC="images/close_bt.gif" style="margin-left:90px" /></a></div></div>');
				
                winprint.document.write('</div></body></html>');
                winprint.document.close();
                winprint.focus();

            }

            function PrintThisPageCbp() {
                var sPath = window.location.pathname;

                var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);           
                var sOption = "toolbar=yes,location=no,directories=yes,menubar=yes,";
                sOption += "scrollbars=yes,align=centre,width=1000px,height=700px";
                var sWinHTML = document.getElementById('animdv').innerHTML; 
                var winprint = window.open("", "", sOption);
                winprint.document.open();
                
                winprint.document.write('<link rel="stylesheet" type="text/css" media="all" href="#" />');

                 winprint.document.write('<html style="margin:0; padding:0;><body leftmargin="0",  rightmargin="0" style="font-family:Arial, Helvetica, sans-serif;color: #4a4b4f;font-size:11px; font-weight: normal; vertical-align:top" onload="window.print();">');
     winprint.document.write('<IMG  width="720px" height="111px" SRC="images/print_header.jpg" />');
                if (document.getElementById('header_img2') != null) {
                    winprint.document.write("<span  class='headertag'>" + document.getElementById('header_img2').innerHTML + "</span>" + "<BR /><BR />");
                }
				
                winprint.document.write('<div id="topcontentdv" style="font-family:Arial, Helvetica, sans-serif; color: #4a4b4f;font-size: 16px;font-weight: normal;line-height: 16px; padding-left:30px; padding-right:30px;">');
				
                winprint.document.write('</br></br></br>' + sWinHTML + '\r\n');
   

                winprint.document.write('</body></html>');
                winprint.document.close();
                winprint.focus();

            } 
			
	function showPrintVersion(url)
	{		
		showLoading();
		document.location=url+'&print=yes';	
	}
	// Added from old print js
	function printVersion()
	 {
		//  if function is called hide the print divs
		var nonPrintable = document.getElementById("nonPrintable");
		//var footer = document.getElementById("noPrintFooter");
	
		if(nonPrintable)
		nonPrintable.style.display = "none";
		//footer.style.display = "none";
	}

			
			
			        
 