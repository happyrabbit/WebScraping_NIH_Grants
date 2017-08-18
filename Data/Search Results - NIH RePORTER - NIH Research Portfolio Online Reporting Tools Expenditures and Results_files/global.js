var dom = {};
dom.query = jQuery.noConflict(true);
dom.query(document).ready(function() {
	// main menu dropdown
	dom.query("ul#nav li.active ul").addClass("hold");
	dom.query("ul#nav li:not(ul#nav ul li)").hover(function()
	{
		if(!dom.query(this).parent().hasClass("hold"))
			dom.query(".hold").hide();
		
		dom.query(this).addClass("active2");
		dom.query("ul", dom.query(this)).show();
	}, function()
	{
		dom.query(this).removeClass("active2");
		dom.query("ul", dom.query(this)).hide();
		
		if(dom.query(this).parent().attr("id")=="nav")
			dom.query(".hold").show();
	});
	
	/*Added on june/12/2012*/
	// Reset Font Size
	var originalFontSize = dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content span,.proj_info_cont span,.proj_search_cont span').css('font-size');
	dom.query(".resetFont").click(function(){
	dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content,.proj_info_cont span,.proj_search_cont span').css('font-size', originalFontSize);
	});           
	// Increase Font Size
	dom.query(".increaseFont").click(function(){
	var currentFontSize = dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content,.proj_info_cont span,.proj_search_cont span').css('font-size');
   var currentFontSizeNum = parseFloat(currentFontSize, 10);
var newFontSize = currentFontSizeNum*1.2;
	if (newFontSize < 18) {
	dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content,.proj_info_cont span,.proj_search_cont span').css('font-size', newFontSize);
	}
	return false;
	});           
	// Decrease Font Size
	dom.query(".decreaseFont").click(function(){
	var currentFontSize = dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content,.proj_info_cont span,.proj_search_cont span').css('font-size');
	 var currentFontSizeNum = parseFloat(currentFontSize, 10);
	 var newFontSize = currentFontSizeNum*0.8;
	  if (newFontSize > 7) {
	 dom.query('.home_content_area p,.copy_area_left p,.copy_area p,.para_sec2 .list p,.proj_tab_content,.proj_info_cont span,.proj_search_cont span').css('font-size', newFontSize);
	  }
	return false;
	});
	//Over Effect
		//main menu
			//Looking For...
			dom.query(".looking_int_menu .sub_links").mouseover(function () {
				dom.query(this).addClass("sub_links_over");							
			});
			dom.query(".looking_int_menu .sub_links").mouseout(function () {
				dom.query(this).removeClass("sub_links_over");							
			});
		
		//NIH Data page
		dom.query(".sections").mouseover(function () {
			dom.query(this).addClass("sections2");							
		});
		dom.query(".sections").mouseout(function () {
			dom.query(this).removeClass("sections2");							
		});  
		
		//Success Rates page
		dom.query(".rates_off").mouseover(function () {
			dom.query(this).addClass("rates_on");							
		});
		dom.query(".rates_off").mouseout(function () {
			dom.query(this).removeClass("rates_on");							
		});
		
		//NIH Data Book page
		
		var qrStr = window.location.search; 
    	var spQrStr = qrStr.substring(1); 
		var arrQrStr = new Array(); 
    	var arr = spQrStr.split('&'); 
    	for (var i=0;i<arr.length;i++){ 
			var queryvalue = arr[i].split('='); 
			if(queryvalue[0]=='catid')
			{
				var ind=queryvalue[1]-1;
				dom.query('ul.data_list li').eq(ind).addClass('active');
				dom.query('ul.data_list li').eq(ind).children(".active_content").slideDown();
				if ( dom.query('ul.data_list li').eq(ind).children().hasClass("int") ) {
					//alert("");
						dom.query('ul.data_list li').eq(ind).children().addClass("int_active");
						dom.query('ul.data_list li').eq(ind).children().removeClass("int");
					}
				}
		}
		
		dom.query("ul.data_list li").mouseover(function () {
			dom.query(this).addClass("over");							
		});
		dom.query("ul.data_list li").mouseout(function () {
			dom.query(this).removeClass("over");						
		});	
		dom.query("ul.data_list li a.list_link").click(function () {			
			dom.query(".active_content").slideUp("slow");
			dom.query("ul.data_list li").removeClass("active");
		
			dom.query("ul.data_list li a.test").removeClass("int_active");
			dom.query("ul.data_list li a.test").addClass("int");
			if ( dom.query(this).parent().children(".active_content").is(":hidden") ) {
				dom.query(this).parent().children(".active_content").slideDown();
				dom.query(this).parent().addClass("active");
				//alert(dom.query(this).children("a .test").html());
				if ( dom.query(this).parent().children().hasClass("int") ) {
					//alert("");
						dom.query(this).parent().children().addClass("int_active");
						dom.query(this).parent().children().removeClass("int");
					}
				
			} else {
				dom.query(this).parent().children(".active_content").slideUp();
				dom.query(this).parent().removeClass("active");
				if ( dom.query(this).children().hasClass("int_active") ) {
					//alert("");
						dom.query(this).parent().children().removeClass("int_active");
						dom.query(this).parent().children().addClass("int");
					}
			}
			return false;						
		});
		//**************Added on 22 Aoril 13 for new design apirl
		//Report Form option deta		
		dom.query(".opt_deta").click(function () {		
			//dom.query(this).next('.option_deta').slideUp();			
			dom.query(this).find('img').attr('src','images_new/bt_select_new.gif');
			dom.query('.option_deta').slideUp();
			//Added on 4/18/13 to hide other close button
			dom.query('.close_hide').find('img').attr('src','images_new/bt_select_new.gif');
						
			if( dom.query(this).next('.option_deta').is(":hidden") ){
				dom.query(this).next('.option_deta').slideDown();				
				dom.query(this).find('img').attr('src','images_new/bt_close.gif');				
				//Added on 4/18/13 to hide other close button				
				dom.query(this).addClass('close_hide');			
				
				// if 1)NIH Spending category close popup Added on 5/17/2013
				dom.query("#imgDC").attr('src','images_new/bt_select_new.gif');
				dom.query("#divDispDC").slideUp();
				//2) Congresstion district  is open	close Added on 5/17/2013
				dom.query("#imgCD").attr('src','images_new/bt_select_new.gif');
				dom.query("#divDispCD").slideUp();
			}
			return false;
		});
		dom.query(".close_opt").click(function () {	
			dom.query(this).parent('.option_deta').slideUp();			
			dom.query('.opt_deta').find('img').attr('src','images_new/bt_select_new.gif');
			return false;
		});
		
		//for NIH spending  added on april 18 2013
		dom.query(".opt_deta_nsc").click(function () {	
				if(document.queryterms.p_dc_valid.value ==1)
				{
					//alert(" valid year");			
					dom.query(this).find('img').attr('src','images_new/bt_select_new.gif');
					dom.query('.option_deta_nsc').slideUp();
						
								
					if( dom.query(this).next('.option_deta_nsc').is(":hidden") ){
						dom.query(this).next('.option_deta_nsc').slideDown();	
						
						dom.query(this).find('img').attr('src','images_new/bt_close.gif');	
						
						//Rest of popup close down Added on 5/17/2013
						dom.query('.option_deta').slideUp();
						dom.query('.close_hide').find('img').attr('src','images_new/bt_select_new.gif');
						//2) Congresstion district  is open	close Added on 5/17/2013
						dom.query("#imgCD").attr('src','images_new/bt_select_new.gif');
						dom.query("#divDispCD").slideUp();

					}
					return false;
				}
				else
				{
					//alert("not valid year");	
				}
		});
		dom.query(".close_opt_nsc").click(function () {	
			dom.query(this).parent('.option_deta_nsc').slideUp();			
			dom.query('.opt_deta_nsc').find('img').attr('src','images_new/bt_select_new.gif');
			return false;
		});
		
		//for congationdistrict added on april 16 2013
		dom.query(".opt_deta_cd").click(function () {	
			if(document.getElementById('p_state_codes').value !="")
				{
					//alert("state selected show popup");	
					dom.query(this).find('img').attr('src','images_new/bt_select_new.gif');
					dom.query('.option_deta_cd').slideUp();
								
					if( dom.query(this).next('.option_deta_cd').is(":hidden") ){
						dom.query(this).next('.option_deta_cd').slideDown();				
						dom.query(this).find('img').attr('src','images_new/bt_close.gif');				
						
						//rest of popup close down Added on 5/17/2013
						dom.query('.option_deta').slideUp();
						dom.query('.close_hide').find('img').attr('src','images_new/bt_select_new.gif');	
						// if 1)NIH Spending category close popup Added on 5/17/2013
						dom.query("#imgDC").attr('src','images_new/bt_select_new.gif');
						dom.query("#divDispDC").slideUp();			
					}
					return false;
				}
				else
				{
					//alert("state not selected doesnt show popup");	
				}
		});
		dom.query(".close_opt_cd").click(function () {	
			dom.query(this).parent('.option_deta_cd').slideUp();			
			dom.query('.opt_deta_cd').find('img').attr('src','images_new/bt_select_new.gif');
			return false;
		});
		
		
		//**************Added for lookup orgaization on 3 march 2013
		dom.query(".opt_deta_org").click(function () {		
			//dom.query(this).next('.option_deta').slideUp();			
			dom.query(this).find('img').attr('src','images_new/lookup_bt_conc.gif');
			dom.query('.option_deta_org').slideUp();
						
			if( dom.query(this).next('.org_options').next('.option_deta_org').is(":hidden") ){
				dom.query(this).next('.org_options').next('.option_deta_org').slideDown();				
				dom.query(this).find('img').attr('src','images_new/bt_close.gif');				
			}
			return false;
		});
		dom.query(".close_opt_org").click(function () {	
			dom.query(this).parent('.option_deta_org').slideUp();			
			dom.query('.opt_deta_org').find('img').attr('src','images_new/lookup_bt_conc.gif');
			return false;
		});
		//**************Added for lookup orgaization on 3 march 2013
		
		//form concept		
		dom.query('a.hid_menu').toggle(
			function(){
				dom.query('.top_panel').slideUp()
				dom.query('.text_header').slideUp()
				dom.query(this).html("Back to Report");				
			},
			function(){				
				dom.query('.top_panel').slideDown()
				dom.query('.text_header').slideDown()
				dom.query(this).html("Hide Menu");
			}
		);
		//Links Page
		dom.query("ul.links_list li").mouseover(function () {
			dom.query(this).addClass("over");							
		});
		dom.query("ul.links_list li").mouseout(function () {
			dom.query(this).removeClass("over");						
		});
		dom.query("ul.links_list li a.list_link").click(function () {			
			dom.query(".active_content_links").slideUp("slow");
			dom.query("ul.links_list li").removeClass("active");
			
			if ( dom.query(this).parent().children(".active_content_links").is(":hidden") ) {
				dom.query(this).parent().children(".active_content_links").slideDown();
				dom.query(this).parent().addClass("active");
			} else {
				dom.query(this).parent().children(".active_content_links").slideUp();
				dom.query(this).parent().removeClass("active");
			}
			return false;
		});
		//FAQ Page
		dom.query("ul.faq_list li").mouseover(function () {
			dom.query(this).addClass("over");							
		});
		dom.query("ul.faq_list li").mouseout(function () {
			dom.query(this).removeClass("over");						
		});
		dom.query("ul.faq_list li a.list_link").click(function () {			
			dom.query(".active_content_faq").slideUp("slow");
			dom.query("ul.faq_list li").removeClass("active");
			if ( dom.query(this).parent().children(".active_content_faq").is(":hidden") ) {
				dom.query(this).parent().children(".active_content_faq").slideDown();
				dom.query(this).parent().addClass("active");
			} else {
				dom.query(this).parent().children(".active_content_faq").slideUp();
				dom.query(this).parent().removeClass("active");
			}
			return false;
		});
	
	//search result tab
	dom.query(document).ready(function() {
		//When page loads...
		dom.query(".tab_content").hide(); //Hide all content
		dom.query(".search_result ul li:first").addClass("active").show(); //Activate first tab
		dom.query(".tab_content:first").show(); //Show first tab content
	
		//On Click Event
		dom.query(".search_result ul li").click(function() {
	
			dom.query(".search_result ul li").removeClass("active"); //Remove any "active" class
			dom.query(this).addClass("active"); //Add "active" class to selected tab
			dom.query(".tab_content").hide(); //Hide all tab content
	
			var activeTab = dom.query(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			var newstring=activeTab.substring(1);
			dom.query("."+newstring).fadeIn(); //Fade in the active ID content
			//return false;
		});	
		// for post back
		var thehash = window.location.hash;
		if(thehash.length!=0)
		{
			dom.query(".search_result ul li").removeClass("active"); //Remove any "active" class
			dom.query(".search_result ul li a[href="+thehash+"]").parent('li').addClass("active"); 
			dom.query(".tab_content").hide(); //Hide all tab content
			var activeTab = dom.query(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			var newstring=thehash.substring(1);
			dom.query("."+newstring).fadeIn();
		}
	});
	
	//Strategic Plans page
	dom.query(document).ready(function() {
		//When page loads...
		dom.query(".plans_tab_content").hide(); //Hide all content
		dom.query(".plans_result ul li:first").addClass("active").show(); //Activate first tab
		dom.query(".plans_tab_content:first").show(); //Show first tab content
	
		//On Click Event
		dom.query(".plans_result ul li").click(function() {
	
			dom.query(".plans_result ul li").removeClass("active"); //Remove any "active" class
			dom.query(this).addClass("active"); //Add "active" class to selected tab
			dom.query(".plans_tab_content").hide(); //Hide all tab content
	
			var activeTab = dom.query(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			var newstring=activeTab.substring(1);
			dom.query("."+newstring).fadeIn();
			//return false;
		});	
		// for post back
		var thehash = window.location.hash;
		if(thehash.length!=0)
		{
			dom.query(".plans_result ul li").removeClass("active"); //Remove any "active" class
			dom.query(".plans_result ul li a[href="+thehash+"]").parent('li').addClass("active"); 
			dom.query(".plans_tab_content").hide(); //Hide all tab content
			var activeTab = dom.query(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			var newstring=thehash.substring(1);
			dom.query("."+newstring).fadeIn();
		}
	});
	//RePORTER	
	dom.query(document).ready(function() {
		//show hide criteria
		dom.query('.results_match a.criteria_show').toggle(
			function(){
				dom.query('.show_criteria_cont').slideDown()								
				dom.query(this).addClass("criteria_hide");
				dom.query(this).removeClass("criteria_show");
			},
			function(){
				dom.query('.show_criteria_cont').slideUp()
				dom.query(this).removeClass("criteria_hide");
				dom.query(this).addClass("criteria_show");
			}
		);
		
		//Added for similar projects on sumbit by SMM on june 18 12
		/*show hide criteria for similar projects condtional*/
		dom.query('.results_match a.criteria_hide').toggle(
		
			function(){
				dom.query('.show_criteria_cont_open').slideUp()
				
				dom.query(this).addClass("criteria_show");
				dom.query(this).removeClass("criteria_hide");
			},
			
			function(){
				dom.query('.show_criteria_cont_open').slideDown()								
				dom.query(this).removeClass("criteria_show");
				dom.query(this).addClass("criteria_hide");
			}
		);
		/*show hide criteria for similar projects condtional Ends here*/
		
		
		//show hide Categorical Spending by IC
		dom.query('.categ_spend a.categ_show').toggle(
			function(){
				dom.query('.categ_spend_cont').slideDown()								
				dom.query(this).addClass("categ_hide");
				dom.query(this).removeClass("categ_show");
			},
			function(){
				dom.query('.categ_spend_cont').slideUp()				
				dom.query(this).removeClass("categ_hide");
				dom.query(this).addClass("categ_show");
			}
		);
		//Publication Tab - About Reporter Results
		dom.query('.abt_repo_res a.sho_hide').toggle(
			function(){
				dom.query('.abt_repo_hide_cont').slideDown()												
			},
			function(){
				dom.query('.abt_repo_hide_cont').slideUp()	
			}
		);
		//news and more tab
		dom.query("ul.news_more li").mouseover(function () {
			dom.query(this).addClass("over");							
		});
		dom.query("ul.news_more li").mouseout(function () {
			dom.query(this).removeClass("over");						
		});
		dom.query("ul.news_more li a.list_link").click(function () {			
			dom.query(".active_content_news").slideUp("slow");
			dom.query("ul.news_more li").removeClass("active");
			if ( dom.query(this).parent().children(".active_content_news").is(":hidden") ) {
				dom.query(this).parent().children(".active_content_news").slideDown();
				dom.query(this).parent().addClass("active");
			} else {
				dom.query(this).parent().children(".active_content_news").slideUp();
				dom.query(this).parent().removeClass("active");
			}
			return false;
		});
	});
	
	//Funding Facts page
	dom.query(document).ready(function() {
		//When page loads...
		dom.query(".fund_tab_content").hide(); //Hide all content
		dom.query(".fund_result ul li:first").addClass("active").show(); //Activate first tab
		dom.query(".fund_tab_content:first").show(); //Show first tab content
	
		//On Click Event
		dom.query(".fund_result ul li").click(function() {
	
			dom.query(".fund_result ul li").removeClass("active"); //Remove any "active" class
			dom.query(this).addClass("active"); //Add "active" class to selected tab
			dom.query(".fund_tab_content").hide(); //Hide all tab content
	
			var activeTab = dom.query(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			dom.query(activeTab).fadeIn(); //Fade in the active ID content
			return false;
		});	
	});
	//REPORTER Form Page
	dom.query(document).ready(function() {
		//dom.query('input[type="text"]').addClass("gray_bg");
		dom.query('input[type="text"]').focus(function() {
			dom.query(this).removeClass("high_off").addClass("highlight_qf");			
			/*if (this.value == this.defaultValue){ 
				this.value = '';
			}
			if(this.value != this.defaultValue){
				this.select();
			}*/
		});
		dom.query('input[type="text"]').blur(function() {
			dom.query(this).removeClass("highlight_qf").addClass("high_off");
			/*if (dom.query.trim(this.value) == ''){
				this.value = (this.defaultValue ? this.defaultValue : '');
			}*/
		});
	});
	
	//Share Query function Added on 10/23/12
	dom.query(".bt_share_query").click(function () {
				
		dom.query("ul.botton_list li a.bt_share_query").removeClass("active");	
		
		if( dom.query(".share_query_copy").is(":hidden") ) {
			dom.query('.share_query_copy').slideDown()
			dom.query(this).addClass("active");
		}else{
			dom.query('.share_query_copy').slideUp()								
		}
		return false;
	});
	dom.query(".bt_close").click(function (){
		dom.query("ul.botton_list li a.bt_share_query").removeClass("active");	
		dom.query('.share_query_copy').slideUp("fast");
		return false;
	});
	
	// home page slide function
	// Cycle for new tabs	
	if (dom.query('.mslider').length !=0){
		dom.query('.mslider').cycle({
			//fx: 'scrollHorz',
			fx:'fade',
			speed: 1000,
			timeout: 8000,
			next:   '.rightarrow a.rgtarow', 
			prev:   '.lfetarrow a.lftarow', 
			pager: '.tumbbox',
			pagerEvent: 'mouseover',
			before:   onBefore,
			after:   onAfter,
			pagerAnchorBuilder: function(idx, slide) {
				var ptwdth = dom.query('.tumbbox div').width();
				var ptlgt = dom.query('.tumbbox div').length+1;
				var ttlwdt = ptwdth * ptlgt
				var title =  dom.query('.slidinnerdv:eq('+idx+')').attr('title');
				var alt =  dom.query('.slidinnerdv:eq('+idx+')').attr('alt');				
				return '<div class="'+dom.query('.slidinnerdv:eq('+idx+')').attr('tdbid')+'"><a href="'+dom.query('.slidinnerdv:eq('+idx+')').attr('hlnk')+'" class="'+dom.query('.slidinnerdv:eq('+idx+')').attr('aclas')+' lthumb thumb1active" title="'+dom.query('.slidinnerdv:eq('+idx+')').attr('atitl')+'"><img src="images/point.gif" width="100%" height="100" class="nav-thumb" alt="'+dom.query('.slidinnerdv:eq('+idx+')').attr('atitl')+'" />'+alt+'</a></div>';	
			}
		});
	}
	function onBefore() { 
		//image hover 
		dom.query('.tumbbox').children('.activeSlide').children('a').removeClass('tp')
		//dom.query('a.lthumb').removeClass('thumb'+(dom.query(this).index())+'active');
		dom.query('a.lthumb').removeClass('thumb1active');
		dom.query('a.lthumb').removeClass('thumb2active');
		dom.query('a.lthumb').removeClass('thumb3active');
		dom.query('a.lthumb').removeClass('thumb4active');
		dom.query('a.lthumb').removeClass('thumb5active');
		dom.query('a.lthumb').removeClass('thumb6active');
		dom.query('a.lthumb').removeClass('thumb7active');
		dom.query('a.lthumb').removeClass('thumb8active');
	}
	function onAfter() {
		if(!dom.query('.tumbbox').children('.activeSlide').children('a').hasClass('tp')){
			dom.query('.tumbbox').children('.activeSlide').children('a').addClass('thumb'+(dom.query(this).index()+1)+'active');
		}
	}	
	dom.query('a.lthumb').mouseover(function(){
		//alert('');
	});
	dom.query('.slidinnerdv').mouseover(function(){		
		dom.query(".mslider").cycle('pause');
	});
	dom.query('.slidinnerdv').mouseout(function(){
		dom.query(".mslider").cycle('resume');
	});
	dom.query('a.lthumb').mouseout(function(){
		//dom.query(".mslider").cycle('resume');
		//alert(dom.query('.tumbbox').children('.activeSlide').index()+1);
		//dom.query(this).addClass('thumb'+(dom.query('.tumbbox').children('.activeSlide').index()+1)+'active');
	});		
	dom.query('a.lthumb').click(function(){
		dom.query('.tumbbox').children('.activeSlide').children('a').removeClass('thumb'+(dom.query('.tumbbox').children('.activeSlide').index()+1)+'active');
	});
	
	//Font Rendering Issue
	dom.query("#navigation ul#nav li a").addClass("f_render");
			

	//Page dropdown hide
 	dom.query('#navigation ul#nav ul').hide();
});
 