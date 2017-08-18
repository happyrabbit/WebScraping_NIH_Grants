// JavaScript Document

//updated function  below on 6/19/12 for drill-down export feature. added new parameters ddparam,ddvalue,ddsub
function selectoption(arra_flag,startrow,reccount,pagehit,orderby,order,width,qsval,isSelectedProjects,ddparam,ddvalue,ddsub)

	{
		//alert("ddFlg:"+ddFlg+"ddparam:"+ddparam+"ddvalue:"+ddvalue+"ddsub:"+ddsub);
		var expOPT;
		expOPT="";
		flgExport=true;
		//alert("in")
		expOPT=document.frmSearchResults.selRTE.options[document.frmSearchResults.selRTE.selectedIndex].value;
		//alert(expOPT)
			if (document.frmSearchResults.selRTE.options[document.frmSearchResults.selRTE.selectedIndex].value=="SL")
				{
					expOPT="SL";
						flgcheck=false;
						/*Commented on 1/8/2014 as issue on change page
						for (var i=0;i<document.frmSearchResults.elements.length;i++)
							{
						//	alert(window.document.frmSearchResults.elements[i].type)
							if (document.frmSearchResults.elements[i].type=="checkbox")
								{
									var objCheckBoxes = document.frmSearchResults.elements[i];
										if (objCheckBoxes.checked==true)
										{
											flgcheck=true;	
										}
								}
							}
							*/
						if(document.frmSearchResults.hdnSelProjects.value !="")
						{
							//alert(document.frmSearchResults.hdnSelProjects.value);
							flgcheck=true;	
							}
					
					if (flgcheck==false)
						{
							alert('Please select at least one project.');
							 flgExport=false;
							 return;	
						}
				 
				 }
			 
			if (document.frmSearchResults.selRTE.options[document.frmSearchResults.selRTE.selectedIndex].value=="CP")
			{
				expOPT="CP";
			}
			
				// existing functionality	
				//alert("sSelproj"+ isSelectedProjects)
			if (isSelectedProjects > 100)
				{
					alert('You have selected ' + isSelectedProjects + ' projects to export. Maximum allowed is 100 projects.')
					flgExport=false;
					// return false;	
				}
				
			if (flgExport)
				{
					//+"&ddparam="+stripAlphaNumericComma(jddparam)+"&ddvalue="+stripAlphaNumericComma(jddvalue)+ "&ddsub="+stripAlphaNumericComma(jddsub)+
					//updated on 6/19/12 for  drill-down  added ddparam,ddvalue,ddsub
		  	         var optWindow = window.open("reportSROptions_basic.cfm?exp_opt="+expOPT+"&arra_flag="+stripAlphaNumericComma(arra_flag)+"&startrow="+stripAlphaNumericComma(startrow)+"&reccount="+stripAlphaNumericComma(reccount)+"&pagehit="+stripAlphaNumericComma(pagehit)+"&orderby="+stripAlphaNumericComma(orderby)+"&order="+stripAlphaNumericComma(order)+"&icde="+ qsval+"&ddparam="+stripAlphaNumericComma(ddparam)+"&ddvalue="+stripAlphaNumericComma(ddvalue)+"&ddsub="+stripAlphaNumericComma(ddsub),"reportSROptions","width="+stripAlphaNumericComma(width)+",height=575,menubar=yes,resizable=yes,scrollbars=yes");
				optWindow.focus();
				}
		}
	
	

	function goToQueryForm()
	{
		document.location='reporter.cfm';
	}
	
	function changePage(startrow,pagenum,qsval)
	{
		document.frmSearchResults.action='reporter_SearchResults.cfm?icde='+ qsval;
		document.frmSearchResults.sr_startrow.value=stripAlphaNumericComma(startrow);
		document.frmSearchResults.sr_pagenum.value=stripAlphaNumericComma(pagenum);
		
		//Added on 10/15/12 for page to go
		if(document.frmSearchResults.sr_pagetogo)
			document.frmSearchResults.sr_pagetogo.value=stripAlphaNumericComma(pagenum);
		document.frmSearchResults.submit();	
	}
	// Function added on 10/3/12 for goto page release 5.0.0
	function changePageNum(pagehit,maxpagenum,qsval)
	{
	//	alert("hi")
		var intPageToGO= document.frmSearchResults.hdnPagingtxt.value;

		if(intPageToGO == "")
		{
			alert("Please enter page number");
		}
		else if(isNaN(intPageToGO))
		{
			alert("Please enter valid page number");
		}
		else if(intPageToGO < 1)
		{
			alert("Please enter valid page number");
		}
		else if(!isInteger(intPageToGO))
		{
			alert("Please enter valid page number");
		}
		else if(parseInt(intPageToGO) > parseInt(maxpagenum))
		{
			alert("Maximum page number is "+maxpagenum);
		}
		else
		{
			startrow=(((intPageToGO-1)*pagehit)+1);
			//alert(intPageToGO);
			//alert("startrow="+startrow);
			document.frmSearchResults.action='reporter_SearchResults.cfm?icde='+ qsval;
			document.frmSearchResults.sr_startrow.value=stripAlphaNumericComma(startrow);
			document.frmSearchResults.sr_pagenum.value=intPageToGO;
			document.frmSearchResults.submit();	
		}
	}
	
	function sortSearchResults(orderby,order,qsval)
	{
		document.frmSearchResults.action='reporter_SearchResults.cfm?icde='+ qsval;
		document.frmSearchResults.sr_orderby.value=stripAlphaNumericComma(orderby);
		document.frmSearchResults.sr_order.value=(order);
		document.frmSearchResults.submit();	
	}
	
	function goToProjectDetails(this_appl_id,qsval)
	{
		document.location='project_info_details.cfm?aid='+this_appl_id+'&icde='+ qsval;
	}
	
	function goToProjectSubprojects(this_appl_id,qsval)
	{
		document.location='project_info_subprojects.cfm?aid='+this_appl_id+'&icde='+ qsval;
	}
	
	function goToProjectDescription(this_appl_id,qsval)
	{
		document.location='project_info_description.cfm?aid='+this_appl_id+'&icde='+ qsval;
	}
	
	function goToPub(qsval)
	{
		document.frmSearchResults.action='reporter_PubResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();	
	}
	function goToPat(qsval)
	{
		document.frmSearchResults.action='reporter_PatResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();	
	}
	function goToChart(qsval)
	{
		//alert("in")	
		document.frmSearchResults.action='reporter_ChartResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();	
	}
	function goToMap(qsval)
	{
		//alert("in SR")	
		document.frmSearchResults.action='reporter_MapResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();	
	}
	function goToCT(qsval)
	{
		//alert("hi")	
		document.frmSearchResults.action='reporter_CTResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();		
	}
	function goToLinks(qsval)
	{
		//alert("hi")	
		document.frmSearchResults.action='reporter_LinkResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();		
	}
	function goToNews(qsval)
	{
		//alert("hi")	
		document.frmSearchResults.action='reporter_NewsResults.cfm?icde='+ qsval;
		document.frmSearchResults.submit();		
	}
	
	
	function showHideSC(obj)
	{
		var img = document.getElementById(obj);
	
		if (SearchCriteria.style.display=="none")
		{
			SearchCriteria.style.display = "inline";
			img.src = "images/minus.gif";
		}
		else
		{
			SearchCriteria.style.display = "none";
			img.src = "images/plus.gif";
		}
	}
	
	function showhide(obj_show,obj_hide)
	{
		var div_show = document.getElementById(obj_show);
		var div_hide = document.getElementById(obj_hide);

		if (div_show.style.display=="none")
		{
			div_show.style.display = "inline";
			div_hide.style.display = "none";
		}
		else
		{
			div_show.style.display = "none";
			div_hide.style.display = "inline";
		}
	}


	function goToSaveForm(qsval)
	{
		document.frmSearchResults.action='reporter_checkLogin.cfm?icde='+ qsval;
		document.frmSearchResults.submit();	
	}



// New function Added on 10/15/12 for page to go for enter key submssion
function IEKeyCapPageToGo(e)
{
	var flg= false;
	
	  if (navigator.appName != 'Netscape')// For IE
		  {if (window.event.keyCode == 13)
		  flg=true;
		  }
	  else if(e.which)// for FF & chrome
	  {
		  if (e.which == 13)
		  flg=true;
	  }
		  
	
	if(flg)
	{
		if (window.document.forms.length>0) 
		{
			
			 var pagehit= document.frmSearchResults.sr_pagehit.value;
			 var maxpagenum= document.frmSearchResults.sr_maxpagenum.value;
			 var qsval= document.frmSearchResults.sr_qsval.value;
			 changePageNum(pagehit,maxpagenum,qsval);
		}
	}
}
function isInteger(value) {
	
    if ((undefined == value) || (null == value)) {
        return false;
    }
	else if (isNaN(value)){

        return false;
    }
	else
	{
	    return value % 1 == 0;
	}
}
