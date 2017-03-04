// ################## START: Infusion database #######################
infusiondb = [
  {
    "name": "dopamine",
    "units": "mcg/kg/min",
    "startdose": 5,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 80,
    "minconcmsg": "",
    "maxconcmsg": "Concentrations higher than 1.6 mg/ml are not recommended, unless infused centrally (BNFc 2015).",
    "mindose": 5,
    "maxdose": 20,
    "dosemsg": "Usual dose 5-20 mcg/kg/min, <b>via central line</b>."
  },
  {
    "name": "dobutamine",
    "units": "mcg/kg/min",
    "startdose": 5,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 500,
    "minconcmsg": "",
    "maxconcmsg": "Concentrations higher than 10mg/ml are not commonly used (Medusa 2015)",
    "mindose": 2,
    "maxdose": 20,
    "dosemsg": "Usual dose 2-20 mcg/kg/min, via central line"
  },  
  {
    "name": "adrenaline",
    "units": "ng/kg/min",
    "startdose": 100,
    "fluidtype": "5d0.9ns",
    "desiredrate": 0.1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 12,
    "minconcmsg": "",
    "maxconcmsg": "Infusions of >12mg in 50ml are not usually recommended (Medusa 2015).",
    "mindose": 50,
    "maxdose": 500,
    "dosemsg": "Usual dose 50-500 nanograms/kg/min, via central line"
  },
  {
    "name": "noradrenaline",
    "units": "ng/kg/min",
    "startdose": 100,
    "fluidtype": "5d0.9ns",
    "desiredrate": 0.1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 2,
    "minconcmsg": "",
    "maxconcmsg": "Higher than recommended concentration: max. 40 micrograms/mL (higher concentrations can be used if fluid restricted) - BNFc Jan 2015.",
    "mindose": 50,
    "maxdose": 500,
    "dosemsg": "Usual dose 50-500 nanograms/kg/min, via central line"
  },
  {
    "name": "dinoprostone",
    "units": "ng/kg/min",
    "startdose": 10,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 0.05,
    "minconcmsg": "",
    "maxconcmsg": "Higher than recommended concentration: BNFc recommends dilution to 1 microgram/mL.",
    "mindose": 1,
    "maxdose": 20,
    "dosemsg": "Usual dose 5-10 nanograms/kg/min"
  },
  {
    "name": "morphine",
    "units": "mcg/kg/hr",
    "startdose": 20,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 1500,
    "minconcmsg": "",
    "maxconcmsg": "Higher than recommended concentration.",
    "mindose": 0,
    "maxdose": 60,
    "dosemsg": "Usual dose 5-20 mcg/kg/hr, but higher doses may be used."
  },
  {
    "name": "vecuronium",
    "units": "mcg/kg/hr",
    "startdose": 100,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 4,
    "maxconc": 200,
    "minconcmsg": "Too dilute: Do not dilute to a concentration of less than 40micrograms in 1mL. (BNF for Children January 2015)",
    "maxconcmsg": "Higher than recommended concentration: Dilute to an ideal maximum concentration of 2mg in 1mL. (BNF for Children January 2015)",
    "mindose": 50,
    "maxdose": 200,
    "dosemsg": "Usual dose 50-200 mcg/kg/hr"
  },
  {
    "name": "clonazepam",
    "units": "mcg/kg/hr",
    "startdose": 10,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 0.6,
    "minconcmsg": "",
    "maxconcmsg": "Higher than recommended concentration: Dilute to a maximum concentration of 12micrograms in 1mL. (Medusa 2015)",
    "mindose": 10,
    "maxdose": 40,
    "dosemsg": "Usual dose 10-40 mcg/kg/hr"
  },
    {
    "name": "midazolam",
    "units": "mcg/kg/hr",
    "startdose": 30,
    "fluidtype": "5d0.9ns",
    "desiredrate": 0.1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 50,
    "minconcmsg": "",
    "maxconcmsg": "Higher than recommended concentration of 1mg / ml (Medusa 2015; BNF).",
    "mindose": 30,
    "maxdose": 300,
    "dosemsg": "Usual dose 10-60 mcg/kg/hr"
  },
  {
    "name": "generic",
    "units": "mcg/kg/hr",
    "startdose": 0,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 99999999,
    "minconcmsg": "",
    "maxconcmsg": "",
    "mindose": 0,
    "maxdose": 999999999,
    "dosemsg": "<br>Please check units <b>carefully</b>."
  },
  {
    "name": "daily",
    "units": "mg/kg/day",
    "startdose": 0,
    "fluidtype": "5d0.9ns",
    "desiredrate": 1,
    "syringe": 50,
    "minconc": 0,
    "maxconc": 99999999,
    "minconcmsg": "",
    "maxconcmsg": "",
    "mindose": 0,
    "maxdose": 999999999,
    "dosemsg": "<br>Please check units <b>carefully</b>."
  }

]
// ################## END: Infusion database #######################


// ################## START: App functions / setup #######################
var gramsnotification = '';
var weighthistory = '';
var appversion = '3.0.0';
var appdate = 'March 2017';
var devicemodel = '';

document.addEventListener("deviceready", onDeviceReady, false);

// Analytics
	function trackAppLoad() {
		console.log("Triggered app load");
	        trackPage("Start page");
	        console.log("Track app load");
	}

	function trackMenuOpen(menuname) {
		console.log("Triggered menu open");
	        console.log("Track menu open: " + menuname);
	        
	    if(typeof ga !== "undefined"){    
	        // window.ga.trackEvent('Category', 'Action', 'Label', Value)
	        window.ga.trackEvent(menuname+"-"+$("#babyweight").val(), 'Click');
	    }
	}

	function trackPage(pagename) {
		console.log("Triggered pageview - " + pagename);
		if(typeof ga !== "undefined"){    
			window.ga.trackView(pagename);
		}
	}

	// Function to handle external URLs - from http://stackoverflow.com/questions/17887348/phonegap-open-link-in-browser
	function handleExternalURLs() {
	    // Handle click events for all external URLs
	    if (device.platform.toUpperCase() === 'ANDROID') {
	        $(document).on('click', 'a[href^="http"]', function (e) {
	            var url = $(this).attr('href');
	            navigator.app.loadUrl(url, { openExternal: true });
	            e.preventDefault();
	        });
	    }
	    else if (device.platform.toUpperCase() === 'IOS') {
	        $(document).on('click', 'a[href^="http"]', function (e) {
	            var url = $(this).attr('href');
	            window.open(url, '_system');
	            e.preventDefault();
	        });
	    }
	    else {
	        // Leave standard behaviour
	    }
	}

	$(".backicon").click(function(){
		// history.go(0); //this is bad because it reloads the page...
		$.mobile.back();
	});

	$(".backtohomeicon").click(function(){
		$.mobile.changePage("#main");
		$.mobile.silentScroll(0);
	});

	$(".contactchris").click(function(){
		console.log("Contact link clicked");
		window.open("mailto:chris.kelly@doctors.org.uk", '_system');
	});

	function onDeviceReady() {
		console.log("Device on ready launched");
		// Fastclick initialisation
		FastClick.attach(document.body);
	   	// GAP Analytics set up (on ready)
	    console.log('initializeGAplugin');
	    window.ga.startTrackerWithId('UA-54184908-2', 5)

	  	trackAppLoad();

	  	// Handle External URLs (Mock device.platform property if not available)
	    if (!window.device) {
	        window.device = { platform: 'Browser' };
	    }
    	handleExternalURLs();

	  	// Rating for App Store
	  	AppRate.preferences.storeAppURL.ios = '944319462';
		AppRate.preferences.storeAppURL.android = 'market://details?id=com.incubateltd.neomate';
		AppRate.preferences.openStoreInApp = false;
		AppRate.preferences.displayAppName = 'NeoMate';
		AppRate.preferences.usesUntilPrompt = 1;
		AppRate.preferences.promptAgainForEachNewVersion = true;

		var customLocale = {};
		customLocale.title = "Rate NeoMate";
		customLocale.message = "If you find NeoMate helpful, would you mind taking a moment to rate it? Thank you for your support!";
		customLocale.cancelButtonLabel = "No, Thanks";
		customLocale.laterButtonLabel = "Remind Me Later";
		customLocale.rateButtonLabel = "Yes";
		AppRate.preferences.customLocale = customLocale;

		var countBabyLoad = localStorage.getItem("countBabyLoad");

		// Run unit tests before hiding splash screen
		// output ['pass/fail', # total tests, # failed tests, 'if fail, comments', timestamp]
		var unitresults = initialisetests();
		console.log(unitresults);

		if (unitresults[0]=='pass') {
			$("#teststatus").html("<b>Internal tests completed:</b><br>Last performed: " + unitresults[4] + "<br>Success on all unit tests during app launch. Drug dose calculation framework working as expected.<br><br>");
		} else if (unitresults[0]=='fail') {
			$("#teststatus").html("<b>Internal tests completed:</b><br>Last performed: " + unitresults[4] + "<br><b>FAILURE</b> on " + unitresults[2] + " of " + unitresults[1] + " unit tests during app launch.<br>Detailed test failure info: " + unitresults[3] + " <br><br>");
			navigator.splashscreen.hide();
			$("#detailedtestinfopanel").html("Time performed: " + unitresults[4] + "<br><b>FAILURE</b> on " + unitresults[2] + " of " + unitresults[1] + " unit tests during app launch.<br><br>Detailed test failure info: <br>" + unitresults[3] + "<br><br>App version: " + appversion + "<br><br>");
			$.mobile.changePage("#testfailure");
			window.ga.trackException(unitresults[2] + "/" + unitresults[1] + " failed. V" + appversion + ". " + unitresults[3], true);
		}

		if (navigator.userAgent.match(/Android/)) {
			setTimeout(function() {
    			navigator.splashscreen.hide();
			}, 0);
			window.scrollTo(0, 1);
			setTimeout(function() {
				$.mobile.resetActivePageHeight();
			}, 100);
		}
		else {
			setTimeout(function() {
	    		navigator.splashscreen.hide();
			}, 0);
			window.scrollTo(0, 1);
			setTimeout(function() {
				$.mobile.resetActivePageHeight();
			}, 100);
		}

	}

// messaging function
function showMessage(message, callback, title, buttonName) {

    title = title || "default title";
    buttonName = buttonName || 'OK';

    if(navigator.notification && navigator.notification.alert) {

        navigator.notification.alert(
            message,    // message
            callback,   // callback
            title,      // title
            buttonName  // buttonName
        );

    } else {
        if($.mobile.activePage.attr('id') == "qunit") {
        	throw message;
        }
        else {
			alert(message);
        }
        callback();
    }

}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function babyCounter() {
    var countBabyLoad = localStorage.getItem("countBabyLoad");
    if (countBabyLoad == null) {
			localStorage.setItem("countBabyLoad", 1);
			console.log("Baby counter: First baby");
	    }
	    else {
	    	countBabyLoad = Number(countBabyLoad) + 1;
	    	localStorage.setItem("countBabyLoad", countBabyLoad);
	    	console.log("Baby counter: baby number: " + countBabyLoad);
	    }

}

function neomateUUID() {
	// Create UUID for unique user counting
    var uuid = localStorage.getItem("neomateuuid");

    if (uuid == null || uuid.length>40) {
    	console.log("Creating new UUID...");
    	var newuuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		    return v.toString(16);
			});
    	localStorage.setItem("neomateuuid", newuuid);
    	console.log("New UUID created: " + newuuid);
	}
	else {
	    console.log("Existing UUID: " + uuid);
	}
}

function checkUUID() {
	// Check UUID
    var uuid = localStorage.getItem("neomateuuid");
    var v = null;
    if (uuid == null) {
    	console.log("Creating new UUID...");
    	localStorage.setItem("neomateuuid", 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    	var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    	return v.toString(16);
		}));
	}
	else {
	    return(uuid);
	}
}

	// Allow links to be clicked in checklists
	$('.checkbox-link').bind("tap click", function( event, data ){
	    event.stopPropagation();
	    event.preventDefault();
	    // $.mobile.changePage($(this).attr('href'));
	    var targetURL = $(this).find('a:first').attr('href');
	    $.mobile.changePage(targetURL);
	});


	// Allow external links to be clicked in checklists
	$('.checkbox-link-external').bind("tap click", function( event, data ){
	    event.stopPropagation();
	    event.preventDefault();
	    // $(this).find('a:first').preventDefault();
	    var targetURL = $(this).find('a:first').attr('href');
		window.open(targetURL, "_system");
	});


	// Stop green highlighting of tabs - persistent ui-btn-active
	// Also while we're here, let's ask the user to rate the app if >20 babies
	$("#checklists").on( "pageshow", function(event) {
		$("#checklists>div>ul>li.ui-btn-active").removeClass("ui-btn-active");
		
		// Let's show Rating if Checklists page is showed
		var countBabyLoad = localStorage.getItem("countBabyLoad");

		if (countBabyLoad > 20) {
			setTimeout(function() {   //calls click event after a certain time
   				AppRate.promptForRating(false);
			}, 2000);	
		}

	});

	// Stop green highlighting of tabs - persistent ui-btn-active
	$("#reference").on( "pageshow", function(event) {
		$("#reference>div>ul>li.ui-btn-active").removeClass("ui-btn-active");
	});

	// Remove active green bits
	$('div[id^="checklist"]').on("pageshow", function() {
		$(".backbtn").removeClass("ui-btn-active");
	});

	// Set up existing fields for survey if already entered
	$("#survey").on( "pageshow", function(event) {
		if (localStorage.getItem("surveyemail") != "unknown") {
			$("#surveyemail").val(localStorage.getItem("surveyemail"));
		}
		if (localStorage.getItem("surveyfeedback") != "unknown") {
			$("#surveyfeedback").val(localStorage.getItem("surveyfeedback"));
		}
		$("#surveycountry").val(localStorage.getItem("surveycountry")).selectmenu('refresh');
		$("#surveyrole").val(localStorage.getItem("surveyrole")).selectmenu('refresh');
		$("#surveyexperience").val(localStorage.getItem("surveyexperience")).selectmenu('refresh');
	});
	
	// pop ups
	$('div[id^="pop"]').on("pageshow", function() {
		$(".backbtn").removeClass("ui-btn-active");
	});

	$('#estimatelabel').click(function() {
		$.mobile.changePage( "#weightinfobox");
	});

	// estimate weight when select button clicked
	$('.estweightlink').click(function() {
		var estimatedweight = $(this).data('weight');
		$.mobile.changePage( "#main");
		$("#babyweight").val(estimatedweight);
		CalculateApp();
		$("#babyweight").trigger('change');
	});

	$("#diagnostics").click(function() {
		var countAppLoad = localStorage.getItem("countAppLoad");
		var countBabyLoad = localStorage.getItem("countBabyLoad");
		showMessage("Debug mode: Load: " + countAppLoad + ", Baby: " + countBabyLoad + ", Device version: " + device.version + ", User agent: " + navigator.userAgent, false, "Diagnostic Info", "Back");
	});

	$("#resetcookie").click(function() {
		localStorage.clear();
		console.log("Cleared localStorage");
		showMessage("Debug mode: localStorage cleared", false, "Diagnostic Info", "Back");
	});
	

	// OI Calculator - toggle units (MAP)
	$("#oimapunits").click(function(){
		if ($('input[name=oimapunits]:checked').val() == "cmH2O") {
			// We want to change to mmHg
			$("#oimapunits-b").prop("checked", true).checkboxradio("refresh");
			$("#oimapunits-a").prop("checked", false).checkboxradio("refresh");
			$("#oimapunits").html("mmHg <img src='images/penpaper.png' class='infobtn' />");
			OICalc();
		}
		else if ($('input[name=oimapunits]:checked').val() == "mmHg") {
			// We want to change to cmH20
			$("#oimapunits-a").prop("checked", true).checkboxradio("refresh");
			$("#oimapunits-b").prop("checked", false).checkboxradio("refresh");
			$("#oimapunits").html("cmH<sub>2</sub>O <img src='images/penpaper.png' class='infobtn' />");
			OICalc();
		}
	});

	// OI Calculator - toggle units (PaO2)
	$("#oippo2units").click(function(){
		if ($('input[name=oipao2units]:checked').val() == "kPa") {
			// We need to change to mmHg
			$("#oipao2units-a").prop("checked", false).checkboxradio("refresh");
			$("#oipao2units-b").prop("checked", true).checkboxradio("refresh");
			$("#oippo2units").html("mmHg <img src='images/penpaper.png' class='infobtn' />");
			OICalc();

		}
		else if ($('input[name=oipao2units]:checked').val() == "mmHg") {
			// We need to change to kPa
			$("#oipao2units-a").prop("checked", true).checkboxradio("refresh");
			$("#oipao2units-b").prop("checked", false).checkboxradio("refresh");
			$("#oippo2units").html("kPa <img src='images/penpaper.png' class='infobtn' />");
			OICalc();
		}
	});

// ERROR FUNCTION FOR HANDLE NO WEIGHT

function highlightWeight() {
	if ($("#babyweight").val()/1000 < 0.4 || $("#babyweight").val() == "")
	{
		// $.mobile.silentScroll($("#babyweight").position());
		scrollToAnchor('maintop');
		$("#babyweight").focus();
		// $("#babyweight").parent().css("cssText", "background-color: #FFFF99 !important;");
		// $("#babyweight").css("cssText", "background-color: #FFFF99 !important;");
		$("#babyweight").parent().addClass("flash");
		    
		    setTimeout( function(){
		        $("#babyweight").parent().removeClass("flash");
		        if($("#babyweight").val()<400) {
			        $("#babyweight").parent().addClass("texthighlight");
			    }
		    }, 5000);

	}
}

function nativePluginResultHandler() {
	console.log("Track success");
}

function nativePluginErrorHandler() {
	console.log("Track fail");
}

var unittestcount=0;
var unittestfailcount=0;
var unittestfailsummary='';
var unittestsummary='pass';

function unittest (actual, expected, comment) {
	unittestcount=unittestcount+1;
	if (actual == expected) {
		return true;
	} else {
		unittestfailcount=unittestfailcount+1;
		commentdetail = '<b>ERROR:</b> ' + comment + ' (<b>expected:</b> ' + expected  + ', <b>observed:</b> ' + actual + ')';
		if (unittestfailsummary == '') {
			unittestfailsummary=commentdetail;
		} else {
			unittestfailsummary=unittestfailsummary+', <br>'+commentdetail;
		}
		unittestsummary='fail';
		return false;
	}
}

function initialisetests() {
	// Shorter version of private full unit testing suite, intended to
	// ensure that the app's calculation system is intact.
	// i.e. JS engine changes in future upgrades of iOS/Android OS that
	// we cannot predict.
	// This should be run before the splash screen is cleared, so maximum
	// 300ms or so to run this.
	$("#babyweight").val(1000);
	CalculateApp();
	unittest( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
	unittest( $("#uvcdetails").text(), "Size: 3.5 FLength: 7 cm (plus stump length)L = (1.5 x birthweight [kg]) + 5.5", "UVC Size: 3.5 F, Length: 7 cm (plus stump length), L = (1.5 x birthweight [kg]) + 5.5" );
	unittest( $("#uacdetails").text(), "Size: 3.5 FLength: 12 cm (plus stump length)L = (birthweight [kg] x 3) + 9", "UAC Size: 3.5 F, Length: 12 cm (plus stump length), L = (birthweight [kg] x 3) + 9" );  
	unittest( $("#naclbolus").text(), "10 ml over 20-30 minutes, via IV/UVC", "Sodium chloride bolus 10 ml over 20-30 minutes" );
	unittest( $("#dopamineinfusion").text(), "30 mg added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 10 micrograms/kg/min.", "Dopamine 30 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 10 micrograms/kg/min." );
	unittest( $("#dobutamineinfusion").text(), "30 mg added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 10 micrograms/kg/min. ", "Dobutamine infusion 30 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 10 micrograms/kg/min. Max concentration 250mg in 50ml." );
	unittest( $("#adrenalineinfusion").text(), "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min.", "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min." );
	unittest( $("#noradrenalineinfusion").text(), "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min.", "Noradrenaline infusion 3 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 0.1 ml/hr will deliver 100 nanograms/kg/min." );
	unittest( $("#protine2").text(), "15 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 5 nanograms/kg/min.", "Dinoprostone infusion 15 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 5 nanograms/kg/min." );
	unittest( $("#uvcdetails2").text(), "Size: 3.5 FLength: 7 cm (plus stump length)L = (1.5 x birthweight [kg]) + 5.5", "UVC details: Size: 3.5, F Length: 7 cm (plus stump length), L = (1.5 x birthweight [kg]) + 5.5" );
	unittest( $("#uacdetails2").text(), "Size: 3.5 FLength: 12 cm (plus stump length)L = (birthweight [kg] x 3) + 9", "UAC details: Size: 3.5, F Length: 12 cm (plus stump length), L = (birthweight [kg] x 3) + 9" );
	unittest( $("#fentanylbolus2").text(), "5 micrograms by slow IV push(preferred drug for intubation)", "Fentanyl bolus 5 micrograms by slow IV push (preferred drug for intubation)" );
	unittest( $("#morphinebolus2").text(), "100 micrograms by slow IV push", "Morphine bolus 100 micrograms by slow IV push" );
	unittest( $("#vecuroniumbolus").text(), "100 micrograms by slow IV push(for short duration of action)", "Vecuronium bolus 100 micrograms by slow IV push (for short duration of action)" );
	unittest( $("#pancuroniumbolus").text(), "100 micrograms by slow IV push(for longer duration of action)", "Pancuronium bolus 100 micrograms by slow IV push (for longer duration of action)" );
	unittest( $("#morphinesedativeinfusion").text(), "1 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 20 micrograms/kg/hr.", "1 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 20 micrograms/kg/hr." );
	unittest( $("#vecuroniumsedativeinfusion").text(), "5 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 100 micrograms/kg/hr.", "5 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 100 micrograms/kg/hr." );
	unittest( $("#phenobarbitoneloading").text(), "20 mg given IV over 20 minutes", "Phenobarbitone loading dose 20 mg given IV over 20 minutes" );
	unittest( $("#phenytoinloading").text(), "18 mg given IV over 30 min(needs close ECG monitoring)", "Phenytoin loading dose 18 mg to be given over 30 min (needs close ECG monitoring)" );
	unittest( $("#diazepam").text(), "300 micrograms(given IV over 5 min)", "Diazepam bolus 300 micrograms (IV injection over 5 min)" );
	unittest( $("#midazolaminfusion").text(), "15 mg added to 50 ml 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 30 micrograms/kg/hour.", "Midazolam infusion 15 mg added to 50 ml 0.9% NaCl or 5% dextrose. 0.1 ml/hr will deliver 30 micrograms/kg/hour." );
	unittest( $("#adrenalineemergency").text(), "1st dose at 0.1 ml/kg= 0.1 ml IV stat.Flush with 0.9% sodium chloride.2nd dose at 0.3 ml/kg= 0.3 ml IV stat.Flush with 0.9% sodium chloride.", "Adrenaline stat dose 0.1/0.3 ml - correct" );
	unittest( $("#dextrosebolus").text(), "2.5 ml over 20-30 minutes, via UVC or IV.", "Dextrose 2.5 ml over 20-30 mins - correct" );
	unittest( $("#sodiumbicarb").text(), "2 ml (=1 mmol) of sodium bicarbonate 4.2% for use during emergency resuscitation, given via UVC", "Sodium bicarbonate emergency drug dose - correct" );
	unittest( $("#adenosine").text(), "150 micrograms IV stat into a large central vein and followed immediately by NaCl 0.9% push.", "Adenosine dose 50mg IV stat - correct" );
	unittest( $("#insulin").text(), "2 units added to 20 ml 5% dextrose.0.1 ml/hr will deliver 0.01 units/kg/hour, given IV as an infusion. Flush 5 ml through giving set before connecting.", "Insulin infusion details correct" );
	unittest( $("#benpen").text(), "50 mg IV (BD/TDS depending on age)", "Benzylpenicillin dose 25mg/kg or 50mg/kg" );
	unittest( $("#gentamicin").text(), "5 mg IV (frequency depending on post menstrual age)Check level before 2nd dose.", "5 mg 36 hourly IV.Check level before 2nd dose." );
	unittest( $("#fluids").text(), "60 ml daily over 24 hours= 2.5 ml/hour infusion", "10% dextrose: 60 ml daily over 24 hours = 2.5 ml/hour infusion" );
	unittest( $("#vitk").text(), "0.4 mg IM", "Vitamin K: 0.4 mg IM" );
	$("#fluidsvalue").val("");
	$("#dextrosefluid").val("10");
	$("#tisodium").val("0");
	$("#tipotassium").val("0");
	unittest( $("#naclbolus2").text(), "10 ml over 20-30 minutes", "Sodium chloride 0.9% bolus: 10 ml over 20-30 minutes" );
	unittest( $("#dextrosebolus2").text(), "2.5 ml over 20-30 minutes", "Dextrose 10% bolus: 2.5 ml over 20-30 minutes" );
	$("#fluidsvalue").val("");
	$("#dextrosefluid").val("10");
	$("#tisodium").val("0");
	$("#tipotassium").val("0");
	$("#fluidsvalue").val(60);
	CalculateApp();
	unittest( $("#fluidsvalue").val(), 60, "Fluid input set to 60 ml/kg/day" );
	unittest( $("#fluidoutput").text(), "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour.= 4.2 mg/kg/min glucose infusion rate PreparationTake a 500ml bag of 10% dextrose. ", "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour. Glucose infusion rate = 4.2 mg/kg/min. Preparation: Take a 500ml bag of 10% dextrose. " );
	$("#fluidsvalue").val(60);
	$("#tisodium").val(2);
	$("#tipotassium").val(2);
	CalculateApp();
	unittest( $("#fluidsvalue").val(), 60, "Fluid input set to 60 ml/kg/day. 2mmol of sodium and potassium" );
	unittest( $("#fluidoutput").text(), "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour.= 4.2 mg/kg/min glucose infusion rate PreparationTake a 500ml bag of 10% dextrose. Add:16.7 mmol sodium chloride(or add 1.3 mmol NaCl if using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium)16.7 mmol potassium chloride", "Fluids with 2mmol of sodium/potassium: Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour. Glucose infusion rate = 4.2 mg/kg/min. Take a 500ml bag of 10% dextrose. Add 16.7 mmol sodium chloride (or add 1.3 mmol NaCl if using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium), add 16.7 mmol potassium chloride." );
	$("#fluidsvalue").val(90);
	$("#dextrosefluid").val(15);
	$("#tisodium").val(0);
	$("#tipotassium").val(0);
	CalculateApp();
	unittest( $("#fluidsvalue").val(), 90, "Fluid input set to 90 ml/kg/day. Dextrose concentration set to 15%. No sodium or potassium." );
	unittest( $("#fluidoutput").text(), "Daily total fluid requirement= 90 ml/day, or 3.8 ml/hour.= 9.5 mg/kg/min glucose infusion rate Administration routeInfuse via central line (dextrose concentration > 12.5%).PreparationTake a 500ml bag of 10% dextrose, remove 62.5 ml and add 62.5 ml of 50% dextrose. ","Dextrose 15%: Daily total fluid requirement= 90 ml/day, or 3.8 ml/hour. Glucose infusion rate = 9.5 mg/kg/min. Administration route: Infuse via central line (dextrose concentration > 12.5%). PreparationTake a 500ml bag of 10% dextrose, remove 62.5 ml and add 62.5 ml of 50% dextrose." );
	// Check infusion calculator
	// Dopamine as example
	var inputdrugname="dopamine";
	var drug=infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
	var drugname=inputdrugname;
	var infusion = new Infusion(drug.name, 10, drug.units, drug.desiredrate, 1000, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);
	unittest(infusion.outputtext(),"30 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 10 micrograms/kg/min.","Dopamine infusion calc: outputtext()");
	unittest(infusion.maxconcmsg,"Concentrations higher than 1.6 mg/ml are not recommended, unless infused centrally (BNFc 2015).","Dopamine infusion calc: maxconcmsg true");

	// High concentration dopamine
	var infusion = new Infusion(drug.name, 10, drug.units, 0.1, 1000, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);
	unittest(infusion.advisorymsg,"Infusion concentration is 6 mg/ml. Concentrations higher than 1.6 mg/ml are not recommended, unless infused centrally (BNFc 2015).","Dopamine high concentration warning given.");

	// Adrenaline as another example
	var inputdrugname="adrenaline";
	var drug=infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
	var drugname=inputdrugname;
	var infusion = new Infusion(drug.name, 100, drug.units, drug.desiredrate, 1000, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);
	unittest(infusion.outputtext(),"3 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 100 nanograms/kg/min.","Adrenaline infusion calc: outputtext()");

	// Reset things back to initalised
	$("#babyweight").val('');
	CalculateApp();

	// Get current time stamp
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

	// Report back on the results
	// output ['pass/fail', # total tests, # failed tests, 'if fail, comments', timestamp]
	return [unittestsummary, unittestcount, unittestfailcount, unittestfailsummary, datetime];
}

// ################## END: App functions / setup #######################

// ################## START: App initialising #######################

if (navigator.userAgent.match(/Android/)) {
	$(document).ready(function () {

//	 $('#babyweight').clone().attr('type','number').insertAfter('#babyweight').prev().remove();
	 $('#fluidsvalue').clone().attr('type','number').insertAfter('#fluidsvalue').prev().remove();
	 $('#oimap').clone().attr('type','number').insertAfter('#oimap').prev().remove();
	 $('#oippo2').clone().attr('type','number').insertAfter('#oippo2').prev().remove();
});
	$("#decoy1").show();
	$("#decoy2").show();
	$("#oidecoy2").show();
}

if (1==1) { // this was originally if userAgent = iPhone

	// Initially iPhone! (but now all devices)
	// START SMOOTH ANIMATION
	$("#decoy1").hide();
	$("#decoy2").hide();
	$("#oidecoy3").hide();


	/*\
	Animate collapsible set;
	\*/
	$(document).one("pagebeforechange", function () {

	    // animation speed;
	    var animationSpeed = 300;

	    function animateCollapsibleSet(elm) {

	        // can attach events only one time, otherwise we create infinity loop;
	        elm.one("expand", function () {

	        	// Prep - extend end div to 800px to prevent flickering
	        	// $("#footernote").addClass("longfooternote");

	        	// force show toolbar if initialised
	        	if ($("#main").find(".ui-collapsible-collapsed").length > 0) {
	   		       	// check that toolbar is not already visible
			    	if ($("#main").find(".ui-footer-fixed").is(":visible") == false) {
			    		$("[data-position='fixed']").fixedtoolbar('show');
			    	}
	        	}

	            // 1. Collapse all collapsibles (animated)
	            $(this).parent().find(".ui-collapsible-content").slideUp(animationSpeed);
	            $(this).parent().parent().find(".maintitle-weight").text("");

	            // animate show on collapsible;
	            if ($("#babyweight").val() >= 400 && $("#babyweight").val() <= 7000)
	            {
 					$(this).find(".maintitle-weight").text("for " + $("#babyweight").val() + "g");
	            }
	            $(this).find(".ui-collapsible-content").slideDown(animationSpeed, function () {

	                // trigger original event and attach the animation again;
	                animateCollapsibleSet($(this).parent().trigger("expand"));

				// Scroll to top
					var expandableTop = $(this).parent().offset().top - 48;
					console.log("Expandabletop: " + expandableTop);
					$window = $(window);
					targetPos = expandableTop - $window.scrollTop() + $(this).parent().height();
					console.log("Targetpos: " + targetPos);
					if (expandableTop > 40 | targetPos > 500) {
						// $.mobile.silentScroll(expandableTop);
						console.log("Scrolling to menu icon");
						$('html,body').animate({scrollTop: expandableTop},'slow');
					}
				
				trackMenuOpen($(this).parent().find(".ui-btn-text").text().replace(" click to collapse contents",""));
	            });
	            // end animate show on collapsible

	            // we do our own call to the original event;
	            return false;
	        }).one("collapse", function () {

	        	// force show toolbar if initialised
	        	if ($("#main").find(".ui-collapsible-collapsed").length > 0) {
	   		       	// check that toolbar is not already visible
			    	if ($("#main").find(".ui-footer-fixed").is(":visible") == false) {
			    		$("[data-position='fixed']").fixedtoolbar('show');
			    	}
	        	}


	        	// Remove weight marking
	        	$(this).find(".maintitle-weight").text("");

	        	// if all collapsed, scroll back to top
				if($(this).parent().find(".ui-icon-back").length == 1) {
					// another panel opened --> please don't scroll to top
				            // animate hide on collapsible (with scroll to top);
				            $(this).find(".ui-collapsible-content").slideUp(animationSpeed, function () {

					            // trigger original event;
					            $(this).parent().trigger("collapse");
				         
				            });

				}
				else {
					// all panels shut - scroll to top
				            // animate hide on collapsible (with scroll to top);
				            $(this).find(".ui-collapsible-content").slideUp(animationSpeed, function () {
				            	if ($(window).scrollTop() > 1) {
				        			$('html,body').animate({scrollTop: 0},'slow');			            		
				            	}

					            // trigger original event;
					            $(this).parent().trigger("collapse");				         
				            });

				}

	            // we do our own call to the original event;
	            return false;
	        });

	        // $("#footernote").removeClass("longfooternote");

	    }

	    // init;
	    animateCollapsibleSet($("[data-role='collapsible-set'] > [data-role='collapsible']"));
	});

	// END SMOOTH ANIMATION


}  // end iPhone only


$(".drugtable tr:even").css("background-color", "#F7EAEA");
$(".alternatingcolor tr:even").css("background-color", "#F7EAEA");
$(".infusionheader").css("background-color", "#CE6563");

// Dialog behaviour
	$( "#popett h2" ).click(function() {
	  $( "#popett" ).dialog( "close" );
	});

	$( "#weightinfobox h2" ).click(function() {
	  $( "#weightinfobox" ).dialog( "close" );
	});

// ################## END: App initialising #######################

$(function(){

//    $("#footernote").css("height", $(window).height()-226);
//    console.log($(window).height());

    // SET APP LOAD COUNTER
    var countAppLoad = localStorage.getItem("countAppLoad");
    if (countAppLoad == null) {
			localStorage.setItem("countAppLoad", 1);
			console.log("Counter: First load");
	    }
	    else {
	    	countAppLoad = Number(countAppLoad) + 1;
	    	localStorage.setItem("countAppLoad", countAppLoad);
	    	console.log("Counter: Load number: " + countAppLoad);
	    }

    // SET APP BABY COUNTER
    babyCounter();

   	// SET UP UUID
   	neomateUUID(); 

   	// SUBMIT SURVEY DATA (if not already done)
	// if (localStorage.getItem("surveysync") == 2 || 1==1) {
	ProcessSurvey("delayed");
    
	// SHOW DISCLAIMER IF NOT SHOWN BEFORE

    var item = localStorage.getItem("neodisc21");
    if (item == null) {				
    	if (navigator.userAgent.match(/Android/)) {
			$.mobile.changePage( "#splashscreen", {} );	
			console.log("Android splash");
		}
		else {
			$.mobile.changePage( "#splashscreen", { transition: "none"} );
			console.log("Non-Android splash");
		}
		localStorage.setItem("neodisc21", "true");
	}
	else if (item.length === 0) {
	       //
	}

// Update version information
	$(".appversioninsert").text(appversion);
	$(".appdateinsert").text(appdate);

// Click links within checklist tiles
	$('ul.checklistulclick li').bind('click', function() {
    // location = $(this).find('a').attr('href');
	$.mobile.changePage( $(this).find('a').attr('href'), { transition: "none", reverse: false, changeHash: true });
	trackPage("checklists-" + $(this).find('a').attr('href'));
	});

	// TO OPEN TAGS CLASSSED AS EXTERNAL IN SAFARI
	/*
	$(document).on('click', ".external", function (e) {
		e.preventDefault();
		var targetURL = $(this).attr("href");
		window.open(targetURL, "_system");
	});
	*/ // Temporarily removed in favour of handleExternalURLs()

	$(function(){ $('[data-role=header],[data-role=footer]').fixedtoolbar({ tapToggle:false }); });

	$("#inputunits").children().click(function() {
			$("#babyweight").focus();	
	});

	$(".outputvalue").click(function() {
			highlightWeight();
	});

	$(".othertools").click(function() {
			highlightWeight();
	});

	$(".drugtable").click(function() {
			highlightWeight();
	});

	$("#ivfluidspanel").click(function() {
			highlightWeight();
	});

	// Event firing for weight
	$('#babyweight, #fluidsvalue, #dextrosefluid, #tisodium, #tipotassium').on('change keyup input', _.debounce(function() {
	    CalculateApp();
	}, 0));

	// Event firing for OI calculator
	$('#oifio2, #oimap, #oippo2').on('change keyup input', _.debounce(function() {
	    OICalc();
	}, 0));

	$("input[name='oimapunits']").on('change mousedown',function(event, ui) { 
        OICalc();
	}); 

	$("input[name='oipao2units']").on('change mousedown',function(event, ui) { 
        OICalc();
	}); 

/* OLD KEYDOWN METHOD
 	$("#babyweight").keyup(CalculateApp);
	$("#fluidsvalue").keyup(CalculateApp);
	// $("input:radio").change(CalculateApp);
	$("#dextrosefluid").change(CalculateApp);
	$("#tisodium").change(CalculateApp);
	$("#tipotassium").change(CalculateApp);

*/

	// Correct placeholder for number
	$("input[type='number']").each(function(i, el) {
	    el.type = "text";
	    el.onfocus = function(){this.type="number";};
	    el.onblur = function(){this.type="text";};
	});


// Reset button --> clear everything
$('.ui-content').on('click', '.ui-icon-delete', function(e){
		$("#fluidsvalue").val("");
		$("#dextrosefluid").val("10").slider("refresh");
		$("#tisodium").val("0").slider("refresh");
		$("#tipotassium").val("0").slider("refresh");
		// $('input:radio[name="tisodium"]').filter('[value="0"]').parent().find("label[for].ui-btn").click();
		// $('input:radio[name="tipotassium"]').filter('[value="0"]').parent().find("label[for].ui-btn").click();
		$("input[type='radio']").attr("checked",true).checkboxradio("refresh");
		$("input[type='radio']").attr("checked",false).checkboxradio("refresh");
		babyCounter(); //add one to the baby counter
		$("input[type='checkbox']").prop("checked",false).checkboxradio().checkboxradio("refresh"); // clear tick boxes
		$("#main").find(".maintitle-weight").text("");
		$(".ui-collapsible-content").trigger("collapse");
		$("#estimatelabel").show();
	});

$("#surveysubmitbtn").click(function(event) {

		$("#surveystatus").html("Sending - please wait... <img src=\"images/spinner20px.svg\">");

		// process the form
		ProcessSurvey("submit");
            
    });
});

var ProcessSurvey = function(requesttype) {

	if (typeof device.model !== 'undefined') {
		var devicemodel=device.model + "-" + device.platform + "-" + device.version + "-" + device.manufacturer + "-" + navigator.userAgent;
	} else {
		var devicemodel="unknown";
	}

	devicemodel="unknown";

	if (requesttype == 'submit') {
		// This form has just been submitted, so grab data from the live form

		if($("#surveyemail").val().length === 0) {
			surveyemail = "unknown";
		} else {
			surveyemail = $("#surveyemail").val();
		}

		if($("#surveyfeedback").val().length === 0) {
			surveyfeedback = "none";
		} else {
			surveyfeedback = $("#surveyfeedback").val();
		}

        // Save in local storage for now
        localStorage.setItem("surveyemail", surveyemail);
        localStorage.setItem("surveycountry", $("#surveycountry").val());
        localStorage.setItem("surveyrole", $("#surveyrole").val());
        localStorage.setItem("surveyexperience", $("#surveyexperience").val());
        localStorage.setItem("surveyfeedback", $("#surveyfeedback").val());


        var formData = {
	        'uuid': checkUUID(),
	        'surveyemail': surveyemail,
	        'surveycountry': $("#surveycountry").val(),
	        'surveyrole': $("#surveyrole").val(),
	        'surveyexperience': $("#surveyexperience").val(),
	        'surveyfeedback': surveyfeedback,
	        'surveydevice': devicemodel,
	        'surveyversion': appversion,
	        'surveyip': 'unknown',
	        'surveybabies': localStorage.getItem("countBabyLoad"),
	        'submittype': 'live'
        };
    }

    else if (requesttype == 'delayed') {
		// Try again to send data that failed last time

		if (localStorage.getItem("surveysync") == 2 || localStorage.getItem("surveysync") == 1) {
	        if(localStorage.getItem("surveyemail") == null || localStorage.getItem("surveyemail") == "") {
				surveyemail = "unknown";
			} else {
				surveyemail = localStorage.getItem("surveyemail");
			}

	        if(localStorage.getItem("surveyfeedback") == null || localStorage.getItem("surveyfeedback") == "") {
				surveyfeedback = "unknown";
			} else {
				surveyfeedback = localStorage.getItem("surveyfeedback");
			}

			var formData = {
		        'uuid': checkUUID(),
		        'surveyemail': surveyemail,
		        'surveycountry': localStorage.getItem("surveycountry"),
		        'surveyrole': localStorage.getItem("surveyrole"),
		        'surveyexperience': localStorage.getItem("surveyexperience"),
		        'surveyfeedback': surveyfeedback,
		        'surveydevice': devicemodel,
		        'surveyversion': appversion,
		        'surveyip': 'unknown',
		        'surveybabies': localStorage.getItem("countBabyLoad"),
		        'submittype': 'delayed'
	        };
		} else {
			var formData = {
		        'uuid': checkUUID(),
		        'surveyemail': "unknown",
		        'surveycountry': "unknown",
		        'surveyrole': "unknown",
		        'surveyexperience': "unknown",
		        'surveyfeedback': "unknown",
		        'surveydevice': devicemodel,
		        'surveyversion': appversion,
		        'surveyip': 'unknown',
		        'surveybabies': localStorage.getItem("countBabyLoad"),
		        'submittype': 'startup'
	        };

		}

    }

        $.ajax({
            type        : 'GET',
            url         : 'https://zj49kbd1s1.execute-api.eu-west-2.amazonaws.com/prod/NeoMateStore', // the url where we want to POST
            data        : formData,
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true,
            success     : function(msg){
        					console.log(msg); 
                			$("#surveystatus").html("<div class=\"ui-icon ui-icon-check\" style=\"float:left; margin-right: 10px\"></div>Your answers have been sent - thank you!");
                			$("#surveystatus").addClass("statussuccess");
                			$("#surveysubmitbtn").parent().hide();
                			localStorage.setItem("surveysync", 1);
                			setTimeout(function() {
    	            			$.mobile.changePage("#main", { transition: "none", reverse: false, changeHash: true });
    						}, 3000);
     						},
			error       : function(XMLHttpRequest, textStatus, errorThrown) {
     						$("#surveystatus").html("<div class=\"ui-icon ui-icon-check\" style=\"float:left; margin-right: 10px\"></div>Saved - thank you!");
                			$("#surveystatus").addClass("statussuccess");
                			$("#surveysubmitbtn").parent().hide();
                			localStorage.setItem("surveysync", 2);
                			setTimeout(function() {
    	            			
    						}, 3000);
 							}
			});

}

var OICalc = function() {
	// FiO2 = #oifio2 (%)
	// MAP = #oimap (cmH2O)
	// PaO2 = #oippo2 (kPa)

	// 1 kPa = 7.50061561303 mmHg
	// 1 cmH20 = 0.735559121015 mmHg

	var oiFiO2 = $("#oifio2").val();
	var oiMAP = $("#oimap").val();
	var oiPaO2 = $("#oippo2").val();


	// MAP UNITS
	if ($('input[name=oimapunits]:checked').val() == "cmH2O") {
		$("#oimapunits").html("cmH<sub>2</sub>O <img src='images/penpaper.png' class='infobtn' />");		
	}
	else if ($('input[name=oimapunits]:checked').val() == "mmHg") {
		// need to convert cmH2O to mmHg
		oiMAP = oiMAP / 0.735559121015;
		$("#oimapunits").html("mmHg <img src='images/penpaper.png' class='infobtn' />");
	}
	else {
		// for some reason missing
		$("#oimapunits").html("cmH<sub>2</sub>O <img src='images/penpaper.png' class='infobtn' />");
		$("#oimapunits-a").prop("checked", true).checkboxradio("refresh");
	}

	// PPO2 UNITS
	if ($('input[name=oipao2units]:checked').val() == "kPa") {
		// need to multiple by 7.5 to get to mmHg
		$("#oippo2units").html("kPa <img src='images/penpaper.png' class='infobtn' />");
		oiPaO2 = oiPaO2 * 7.5;
	}
	else if ($('input[name=oipao2units]:checked').val() == "mmHg") {
		$("#oippo2units").html("mmHg <img src='images/penpaper.png' class='infobtn' />");
	}
	else {
		// for some reason missing
		$("#oippo2units").html("kPa <img src='images/penpaper.png' class='infobtn' />");
		$("#oipao2units-a").prop("checked", true).checkboxradio("refresh");
	}

	// Do calculation!
	var OIresult = (oiFiO2 * oiMAP) / (oiPaO2);

	if (oiFiO2 != "" && oiPaO2 != "") {
		$("#oicontainer").show();
			$("#oioutput").html("<strong>Oxygenation index = " + Math.round(OIresult*10)/10 + "</strong>");
		if (OIresult < 25) {
			$("#oicontainer").css("background-color","#E5F3E5");	
		}
		else if (OIresult >= 25 && OIresult < 30) {
			$("#oicontainer").css("background-color","#FBE1B5");
		}
		else {
			$("#oicontainer").css("background-color","#FFBEBE");
			$("#oioutput").html("<strong>Oxygenation index = " + Math.round(OIresult) + "</strong><br><br><strong>Warning</strong>: Oxygenation index is &gt;30. Consider discussing this case with your local ECMO centre.");
		}
		
	}
	else {
		$("#oicontainer").hide();
	}

}

var CalculateApp = function() {
		var babyweight = $("#babyweight").val()/1000;
		if (Math.round($("#babyweight").val()) != $("#babyweight").val())
		{
			if (gramsnotification == '')
			{
				showMessage("Baby weight should be in grams!", highlightWeight, "Oops - please check entries", "Done");
				console.log("Baby weight should be in grams!");
				// $("#babyweight").focus();
				highlightWeight;
				gramsnotification = 1;
				babyweight = "";
			}
		}

	// Stop app from completing if 
		if (babyweight > 7) {
			if (babyweight != weighthistory) {
				showMessage("This app is only valid for babies on NICU. Please check your weight and try again.", highlightWeight, "Oops - please check weight", "Done");
			}
			console.log("Baby too large");
			throw "Baby too large";
			// $("#babyweight").focus();
			highlightWeight();
			weighthistory = babyweight;
			babyweight = "";
		}

		var lastExpanded;

	// Add weight to title if already expanded and weight added
		if ($("#babyweight").val() >= 400 && $("#babyweight").val() <= 7000) {
			$("#main").find(".ui-icon-back").parent().find(".maintitle-weight").text("for " + $("#babyweight").val() + "g");
			// Remove estimate button
				$("#estimatelabel").hide();
		} else {
			// if not entered, clear all header bars:
			$("#main").find(".maintitle-weight").text("");
			$("#estimatelabel").show();
		}

	// Clear tick boxes
		$("input[type='checkbox']").prop("checked",false).checkboxradio().checkboxradio("refresh"); // clear tick boxes

	// INTUBATION DRUGS
		$("#fentanylbolus").html((Math.round(babyweight*5)) + " micrograms by slow IV push<br>(preferred drug for intubation)") ;
		$("#morphinebolus").html((Math.round(babyweight*100)) + " micrograms by slow IV push<br>(nb onset of action approx 5 mins; peak action at 15 - 30 mins)") ;
		$("#suxbolus").text((Math.round((babyweight*2))) + " mg by slow IV push") ;
		$("#atropinebolus").text((Math.round((babyweight*20))) + " micrograms by slow IV push");
		$("#curosurf").html("<b>First dose: </b>" + (Math.round(babyweight*200)) + " mg,<br><b>Second dose: </b>" + (Math.round(babyweight*100)) + " mg (if indicated)<br>Give via ET tube.<br>Practical note: use whole vial closest to calculated dose.");
		if (babyweight < 1) { $("#ettsize").text("2.5");}
		if (babyweight >= 1 && babyweight < 2) { $("#ettsize").text("3.0");}
		if (babyweight >= 2 && babyweight < 3) { $("#ettsize").text("3.5");}
		if (babyweight >= 3) { $("#ettsize").text("3.5 - 4.0");}

	// ETT LENGTHS - http://www.resus.org.au/policy/guidelines/section_13/guideline-13-5dec10.pdf
		if (babyweight < 0.5) { $("#ettlength").text("5.5 cm");}
		if (babyweight >= 0.5 && babyweight < 0.7) { $("#ettlength").text("5.5 cm");}
		if (babyweight >= 0.7 && babyweight < 0.9) { $("#ettlength").text("6.0 cm");}
		if (babyweight >= 0.9 && babyweight < 1.1) { $("#ettlength").text("6.5 cm");}
		if (babyweight >= 1.1 && babyweight < 1.5) { $("#ettlength").text("7.0 cm");}
		if (babyweight >= 1.5 && babyweight < 1.9) { $("#ettlength").text("7.5 cm");}
		if (babyweight >= 1.9 && babyweight < 2.5) { $("#ettlength").text("8.0 cm");}
		if (babyweight >= 2.5 && babyweight < 3.2) { $("#ettlength").text("8.5 cm");}
		if (babyweight >= 3.2) { $("#ettlength").text("9.0 cm");}

/*
PREVIOUS SIZES
		if (babyweight < 0.7) { $("#ettlength").text("5.6 cm");}
		if (babyweight >= 0.7 && babyweight < 0.8) { $("#ettlength").text("5.8 cm");}
		if (babyweight >= 0.8 && babyweight < 0.9) { $("#ettlength").text("6.0 cm");}
		if (babyweight >= 0.9 && babyweight < 1) { $("#ettlength").text("6.2 cm");}
		if (babyweight >= 1 && babyweight < 1.2) { $("#ettlength").text("6.4 cm");}
		if (babyweight >= 1.2 && babyweight < 1.3) { $("#ettlength").text("6.5 cm");}
		if (babyweight >= 1.3 && babyweight < 1.5) { $("#ettlength").text("6.7 cm");}
		if (babyweight >= 1.5 && babyweight < 1.8) { $("#ettlength").text("6.9 cm");}
		if (babyweight >= 1.8 && babyweight < 2.2) { $("#ettlength").text("7.3 cm");}
		if (babyweight >= 2.2 && babyweight < 2.7) { $("#ettlength").text("7.6 cm");}
		if (babyweight >= 2.7 && babyweight < 3.5) { $("#ettlength").text("7.9 cm");}
		if (babyweight >= 3.5 && babyweight < 4) { $("#ettlength").text("8.6 cm");}
		if (babyweight >= 4) { $("#ettlength").text("9.0 cm");}
*/

	// CARDIAC DRUGS
		$("#naclbolus").text((Math.round((babyweight*10))) + " ml over 20-30 minutes, via IV/UVC") ;
		$("#dopamineinfusion").html((Math.round((babyweight*30)*10)/10) + " mg added to 50 ml of 0.9% NaCl or 5% dextrose.<br>1 ml/hr will deliver 10 micrograms/kg/min.") ;
		var dobutaminetemp = Math.round((babyweight*30)*10)/10;
		var dobutaminebolda = "";
		var dobutamineboldb = "";
		if (dobutaminetemp > 250)	{ dobutaminetemp = 250; dobutaminebolda = "<b>"; dobutamineboldb = "</b>";	}
		$("#dobutamineinfusion").html(dobutaminetemp + " mg added to 50 ml of 0.9% NaCl or 5% dextrose.<br>1 ml/hr will deliver 10 micrograms/kg/min. ") ;
		$("#adrenalineinfusion").html((Math.round((babyweight*3)*10)/10) + " mg added to 50 ml of 0.9% NaCl or 5% dextrose.<br>0.1 ml/hr will deliver 100 nanograms/kg/min.") ;
		$("#noradrenalineinfusion").html((Math.round((babyweight*3)*10)/10) + " mg added to 50 ml of 0.9% NaCl or 5% dextrose.<br>0.1 ml/hr will deliver 100 nanograms/kg/min.") ;
		$("#protine2").html((Math.round((babyweight*15)*10)/10) + " micrograms added to 50 ml of 0.9% NaCl or 5% dextrose.<br>1 ml/hr will deliver 5 nanograms/kg/min.") ;

	// LINES (in cardiac section)
		// UVC
		if (babyweight<1.5)	{
			$("#uvcdetails").html("<b>Size:</b> 3.5 F<br><b>Length:</b> " + Math.round(((babyweight*1.5) + 5.5)*10)/10 + " cm (plus stump length)<br>L = (1.5 x birthweight [kg]) + 5.5");
			$("#uvcdetails2").html("<b>Size:</b> 3.5 F<br><b>Length:</b> " + Math.round(((babyweight*1.5) + 5.5)*10)/10 + " cm (plus stump length)<br>L = (1.5 x birthweight [kg]) + 5.5");
		}
		else {
			$("#uvcdetails").html("<b>Size:</b> 5 F<br><b>Length:</b> " + Math.round(((babyweight*1.5) + 5.5)*10)/10 + " cm (plus stump length)<br>L = (1.5 x birthweight [kg]) + 5.5");
			$("#uvcdetails2").html("<b>Size:</b> 5 F<br><b>Length:</b> " + Math.round(((babyweight*1.5) + 5.5)*10)/10 + " cm (plus stump length)<br>L = (1.5 x birthweight [kg]) + 5.5");
		}

		//UAC
		if (babyweight<1.2)	{
			$("#uacdetails").html("<b>Size:</b> 3.5 F<br><b>Length:</b> " + Math.round(((babyweight * 3)+9)*10)/10 + " cm (plus stump length)<br>L = (birthweight [kg] x 3) + 9");
			$("#uacdetails2").html("<b>Size:</b> 3.5 F<br><b>Length:</b> " + Math.round(((babyweight * 3)+9)*10)/10 + " cm (plus stump length)<br>L = (birthweight [kg] x 3) + 9");
		}
		else {
			$("#uacdetails").html("<b>Size:</b> 5 F<br><b>Length:</b> " + Math.round(((babyweight * 3)+9)*10)/10 + " cm (plus stump length)<br>L = (3 x birthweight [kg]) + 9");
			$("#uacdetails2").html("<b>Size:</b> 5 F<br><b>Length:</b> " + Math.round(((babyweight * 3)+9)*10)/10 + " cm (plus stump length)<br>L = (3 x birthweight [kg]) + 9");
		}


	// SEDATIVE DRUGS
		$("#fentanylbolus2").html((Math.round(babyweight*5)) + " micrograms by slow IV push<br>(preferred drug for intubation)") ;
		$("#morphinebolus2").text((Math.round(babyweight*100)) + " micrograms by slow IV push") ;
		$("#vecuroniumbolus").html((Math.round(babyweight*100)) + " micrograms by slow IV push<br>(for short duration of action)") ;
		$("#pancuroniumbolus").html((Math.round(babyweight*100)) + " micrograms by slow IV push<br>(for longer duration of action)") ;
		$("#morphinesedativeinfusion").text((Math.round((babyweight*1)*100)/100) + " mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 20 micrograms/kg/hr.") ;
		$("#vecuroniumsedativeinfusion").text((Math.round((babyweight*5)*10)/10) + " mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 100 micrograms/kg/hr.") ;

	// NEUROLOGY
		$("#phenobarbitoneloading").text((Math.round((babyweight*20)*10)/10) + " mg given IV over 20 minutes") ;
		$("#phenytoinloading").html((Math.round((babyweight*18)*10)/10) + " mg given IV over 30 min<br>(needs close ECG monitoring)") ;
		// $("#clonazepam").text((Math.round(babyweight*50)) + " micrograms") ;
		if (Math.round(babyweight*300) < 999) {
			$("#diazepam").html((Math.round(babyweight*300)) + " micrograms<br>(given IV over 5 min)") ;
		} else {
			$("#diazepam").html((Math.round((babyweight*300/1000)*10)/10) + " mg<br>(given IV over 5 min)") ;
		}
		// $("#clonazepaminfusion").html((Math.round((babyweight*0.5)*100)/100) + " mg added to 50 ml 5% dextrose.<br>1 ml/hr will deliver 10 micrograms/kg/hour.<br>Change syringe 12 hourly.<br>Must be filtered with 0.2 micron filter.") ;
		
		if(babyweight < 3.3) {
			$("#midazolaminfusion").html((Math.round((babyweight*15)*10)/10) + " mg added to 50 ml 0.9% NaCl or 5% dextrose.<br>0.1 ml/hr will deliver 30 micrograms/kg/hour.") ;
		}else {
			$("#midazolaminfusion").html((Math.round((babyweight*15/5)*10)/10) + " mg added to 50 ml 0.9% NaCl or 5% dextrose.<br>0.5 ml/hr will deliver 30 micrograms/kg/hour.") ;
		}

		


	// EMERGENCY DRUGS
		var adrenalinedose1 = Math.round((babyweight*0.1)*10)/10;
		var adrenalinedose2 = Math.round((babyweight*0.3)*10)/10;
		var adrenalinemsg = "";
		var adrenalinemsg2 = "";
		if (adrenalinedose1<0.1) {
			adrenalinedose1 = 0.1;
			adrenalinemsg = "<br>(minimum 0.1 ml)";
		}
		if (adrenalinedose2<0.1) {
			adrenalinedose2 = 0.1;
			adrenalinemsg2 = "<br>(minimum 0.1 ml)";
		}
		if (babyweight > 1.5) {
			var fcorrection = 0.4;
		} else {
			var fcorrection = 0.5;
		}

		$("#adrenalineemergency").html("<b>1st dose</b> at 0.1 ml/kg<br>= " + adrenalinedose1 + " ml IV stat." + adrenalinemsg + "<br>Flush with 0.9% sodium chloride.<br><br><b>2nd dose</b> at 0.3 ml/kg<br>= " + adrenalinedose2 + " ml IV stat." + adrenalinemsg2 + "<br>Flush with 0.9% sodium chloride.");
		$("#sodiumbicarb").html((Math.round((babyweight*2)*10)/10) + " ml (=" + (Math.round((babyweight*2/2)*10)/10) + " mmol) of sodium bicarbonate <span class=\"highlightdrug\">4.2%</span> for use during emergency resuscitation, given via UVC");
		$("#sodiumbicarbhalfcorrection").html("<a href=\"#halfcorrection\" data-transition=\"none\" data-corners=\"false\" style=\"text-decoration: none; color: rgb(52, 73, 94)\">Base deficit (mmol/L) x " + fcorrection + " x [" + (Math.round((babyweight)*10)/10) +" kg (weight)]. Only <b>half</b> the base deficit should be corrected initially by slow IV infusion (dilute sodium bicarbonate 4.2% with equal parts water and give over 30 minutes).</a>");
		$("#dextrosebolus").text((Math.round((babyweight*2.5)*10)/10) + " ml over 20-30 minutes, via UVC or IV.") ;


		if (Math.round(babyweight*150) < 1000) {
			$("#adenosine").html((Math.round(babyweight*150)) + " micrograms IV stat into a large central vein and followed immediately by NaCl 0.9% push.");
		} else {
			$("#adenosine").html(Math.round((babyweight*150/1000)*100)/100 + " mg IV stat into a large central vein and followed immediately by NaCl 0.9% push.");
		}


		$("#insulin").html((Math.round((babyweight*2)*10)/10) + " units added to 20 ml 5% dextrose.<br>0.1 ml/hr will deliver 0.01 units/kg/hour, given IV as an infusion. Flush 5 ml through giving set before connecting.");
		
	// ADMISSION TO NICU

		// Antibiotics
		$("#benpen").html((Math.round((babyweight*50))) + " mg IV (BD/TDS depending on age)") ;
		$("#gentamicin").html((Math.round((babyweight*5)*10)/10) + " mg IV (frequency depending on post menstrual age)<br>Check level before 2nd dose.");
		$("#fluids").html((Math.round((babyweight*60)*10)/10) + " ml daily over 24 hours<br>= " + (Math.round((babyweight*60/24)*10)/10) + " ml/hour infusion");

		if (babyweight >= 2.5)
		{
			$("#vitk").html("1 mg IM");
		}
		else
		{
			$("#vitk").html((Math.round((babyweight*0.4)*10)/10) + " mg IM") ;
		}



/* START NEONATAL FLUIDS SECTION */

		$("#naclbolus2").text((Math.round((babyweight*10)*10)/10) + " ml over 20-30 minutes") ;
		$("#dextrosebolus2").text((Math.round((babyweight*2.5)*10)/10) + " ml over 20-30 minutes") ;

		var tifluid = $("#fluidsvalue").val();
		var tidextrose = $("#dextrosefluid").val();
		var tisodium = $("#tisodium").val();
		var tipotassium = $("#tipotassium").val();
		// var tisodium = $("input:radio[name=tisodium]:checked").val();
		// var tipotassium = $("input:radio[name=tipotassium]:checked").val();
		var ticalcium = ""; //$("#ticalcium").val();
		var fluidroute = "";

		if (tisodium == undefined)	{	var tisodium = ""; }
		if (tipotassium == undefined)	{	var tipotassium= ""; }

		// Point out about central access
		// 1. For high dextrose infusions
		if (tidextrose > 12.5) {
			$("#dextrosefluid-label").html("Dextrose: (%) <span style=\"color: #990000\">- NB Central Access Required</style>");
			fluidroute = "<b>Administration route</b><br>Infuse via <span style=\"color: #990000\">central line</span> <span class=\"greytext\">(dextrose concentration > 12.5%)</span>.<br><br>";
		}
		else {
			$("#dextrosefluid-label").html("Dextrose: (%)");
		}

		// 2. For high potassium infusions
		if (tipotassium > 4.8) { //Guys and St Thomas' guideline
			fluidroute = "<b>Administration route</b><br>Infuse via <span style=\"color: #990000\">central line</span> <span class=\"greytext\">(potassium infusion rate > 0.2 mmol/kg/hr; maximum rate 0.5 mmol/kg/hr centrally - Evelina Children's Hospital Formulary)</span>.<br><br>";
		}

		// 3. For high dextrose AND high potassium infusions
		if (tipotassium > 4.8 && tidextrose > 12.5) {
			fluidroute = "<b>Administration route</b><br>Infuse via <span style=\"color: #990000\">central line</span> <span class=\"greytext\">(Dextrose > 12.5% AND potassium infusion rate > 0.2 mmol/kg/hr; maximum potassium rate 0.5 mmol/kg/hr centrally - Evelina Children's Hospital Formulary)</span>.<br><br>";
		}


		if (tifluid == "")
		{
			$("#fluidcontainer").hide()
		}
		else
		{
			$("#fluidcontainer").show()
		}

		if (babyweight != "")
		{
			if (tifluid != "")
			{
				var dailytotalfluidreq = Number(tifluid) * (Number(babyweight));
				var hourlyfluidreq = dailytotalfluidreq / 24;
				dailytotalfluidreq = Math.round(dailytotalfluidreq*10)/10;
				hourlyfluidreq = Math.round(hourlyfluidreq*10)/10;

				var glucoseinfusion = (hourlyfluidreq * tidextrose * 1000) / (babyweight * 60 * 100);

				$("#fluidoutput").html("<b>Daily total fluid requirement</b><br>= " + dailytotalfluidreq + " ml/day, or " + hourlyfluidreq + " ml/hour.<br><span class=\"greytext\">= " + Math.round(glucoseinfusion*10)/10 + " mg/kg/min glucose infusion rate</span> <a href=\"#gir\" data-transition=\"none\" data-corners=\"false\"><img src=\"images/question50px.png\" class=\"infobtn\" /></a><br><br>" + fluidroute);
			} //tifluid.val != ""
		} // weightfield empty

		if (tidextrose != "")
		{
			if ((tidextrose < 5 && tidextrose > 2) || tidextrose > 30)
			{
				showMessage("Please use a dextrose % concentration between 5 - 30%.", alertCallback, "Dextrose error", "Done");
				console.log("Dextrose error");
			}
			else if (tifluid > 250) {
				// too much fluid for a baby
				console.log("Volume error");
				$("#fluidoutput").html($("#fluidsvalue").val() + " ml/kg/day is more than usually recommended in a newborn. Please check and try again.");
				showMessage("This amount of fluid is probably too much for normal neonatal care. Please check and try again.", alertCallback, "Fluid volume error", "Done");
				throw "Fluid volume too great for normal practice";
			}
			else
			{
				// Error checked - dextrose in the correct range

				if (tidextrose == 5 || tidextrose == 10)
				{
					if ($("#fluidoutput").html() == "Please enter your baby's details to the left to get started.") { $("#fluidoutput").html(""); }
					$("#fluidoutput").html($("#fluidoutput").html() + "<b>Preparation</b><br>Take a 500ml bag of " + tidextrose + "% dextrose. ");
				}else{
					// Non-normal bag of dextrose desired:
					if (tidextrose < 10)
					{
						// use 5% dextrose
						var proportiondex = (50 - tidextrose) / (50 - 5);
						$("#fluidoutput").html($("#fluidoutput").html() + "<b>Preparation</b><br>Take a 500ml bag of 5% dextrose, remove " + (Math.round(((1- proportiondex)*500)*10)/10) + " ml and add " + (Math.round(((1- proportiondex)*500)*10)/10) + " ml of 50% dextrose. ");
					}else{
						// use 10% dextrose
						var proportiondex = (50 - tidextrose) / (50 - 10);
						$("#fluidoutput").html($("#fluidoutput").html() + "<b>Preparation</b><br>Take a 500ml bag of 10% dextrose, remove " + (Math.round(((1- proportiondex)*500)*10)/10) + " ml and add " + (Math.round(((1- proportiondex)*500)*10)/10) + " ml of 50% dextrose. ");
					}
				}
			} // dextrose error checking
		} // tidextrose != ""

		// alert("tis:" + tisodium + ", tip:" + tipotassium + ", tic:" + ticalcium);

		if (tisodium > 0 || tipotassium > 0  || ticalcium > 0) {
			$("#fluidoutput").html($("#fluidoutput").html() + "Add:");
		}
		
		if (tisodium > 0 && tifluid != "")
		{
			var endul;
			var ifdexsaline = ((154/5)/2);
			ifdexsaline = (((tisodium / tifluid) * 500) - ifdexsaline);
			if (((Math.round((((tisodium / tifluid) * 500))*10)/10) > 14.5) && ((Math.round((((tisodium / tifluid) * 500))*10)/10) < 16))
			{
				varifdexsalinemsg = "<br><div style=\"font-size: 12px; line-height: 13px; padding-left: 1.2em;\">(or consider just using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium)</div>";
			}
			else if (ifdexsaline > 0)
			{
				varifdexsalinemsg = "<br><div style=\"font-size: 12px; line-height: 13px; padding-left: 1.2em;\">(or add " + ((Math.round(ifdexsaline * 10)/10)) + " mmol NaCl if using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium)</div>";
			}
			else
			{
				varifdexsalinemsg = "";
			}
			$("#fluidoutput").html($("#fluidoutput").html() + "<li>" + (Math.round((((tisodium / tifluid) * 500))*10)/10) + " mmol sodium chloride" + varifdexsalinemsg + "<a href=\"#popadditives\" data-transition=\"none\" data-corners=\"false\"><img src=\"images/question50px.png\" class=\"infobtn\" /></a></li>");
			endul = "</ul>";
		}

		if (tipotassium > 0 && tifluid != "")
		{
			$("#fluidoutput").html($("#fluidoutput").html() + "<li>" + (Math.round((((tipotassium / tifluid) * 500))*10)/10) + " mmol potassium chloride</li>");
			endul = "</ul>";
		}

		if (ticalcium > 0 && tifluid != "")
		{
			$("#fluidoutput").html($("#fluidoutput").html() + "<li>" + (Math.round((((ticalcium / tifluid) * 500))*4.44444*10)/10) + " ml calcium gluconate 10%</li>");
			endul = "</ul>";		
		}

		// Error check for potassium final
		// Maximum concentration of potassium via a central line is considered to be 0.5mmol/ml
		if (tipotassium > 1) {
			if ((tipotassium / dailytotalfluidreq) > 0.5) {
				$("#fluidoutput").html("<b>WARNING: </b> Potassium concentration in this fluid exceeds the maximum of 0.5 mmol/ml (Evelina Children's Hospital Formulary). <br><br>Please either reduce the amount of potassium or increase the daily fluid.");
			}
		}


/* END NEONATAL FLUIDS SECTION */

/* START SECTION: Error check inputs for fluids */
		if (babyweight < 0.4)
		{
			$(".outputvalue").each(function() {$(this).text("Enter weight");});
			$("#fluidoutput").html("Please enter a valid weight at the top to get started.");
		}
		else
		{
			// $("#babyweight").css("cssText", "background-color: #FFFFFF !important;");
			$("#babyweight").parent().removeClass("texthighlight");
			$("#babyweight").parent().removeClass("flash");
			$(".infobtn").show();
		}

/* END ERROR CHECKS SECTION */

$(document).on('pageshow', '#gir' ,function () {
	$("#gir-rate").text(hourlyfluidreq);
	$("#gir-dexconc").text(tidextrose);
	$("#gir-weight").text(babyweight);
	$("#gir-answer").text(Math.round(glucoseinfusion*10)/10);
});

$(document).on('pageshow', '#popadditives' ,function () {
	$("#popadditives-naamount").text(tisodium);
	$("#popadditives-fluidrate").text(tifluid);
	$("#popadditives-answer").text((Math.round((((tisodium / tifluid) * 500))*10)/10));
});


function alertCallback () {
	// Dummy function
}

	// infusion disable
	// $(".drugcalc").hide();


};

var Infusion = function(drugname, deliverydose, deliveryunits, desiredrate, weight, syringe, fluidtype, popup, drugdosemsg, minconc, maxconc, minconcmsg, maxconcmsg, mindose, maxdose, referenceunits) {
// Infusion calculator v1.0
// 25 November 2014

// INPUTS
// drugname ["Dopamine"]
// deliverydose [10] - desired drug delivery
// deliveryunits ["mcg/kg/min"] - rate of drug in deliverydose
// desiredrate [0.1] (ml/hr)
// weight [1000] g - baby
// syringe [50] ml - syringe size
// drugdosemsg = "Usual dose 5-10 mcg/kg/min." 

// OUTPUTS
// drugtotal [=30] - total amount of drug to put in syringe

// FUTURE ADDITIONS
// array of drug names, usual delivery units and max concentration in syringe

	this.drugname = drugname;
	this.deliverydose = deliverydose;
	this.deliveryunits = deliveryunits;
	this.deliveryunitsfull = deliveryunits.replace("mcg/","micrograms/").replace("ng/","nanograms/");
	this.desiredrate = desiredrate;
	this.weight = weight;
	this.syringe = syringe;
	this.fluidtype= fluidtype;
	this.drugdosemsg = drugdosemsg;
	this.minconc = minconc;
	this.maxconc = maxconc;
	this.minconcmsg = minconcmsg;
	this.maxconcmsg = maxconcmsg;
	this.mindose = mindose;
	this.maxdose = maxdose;
	this.referenceunits = referenceunits;

	// Just in case not specified
	if (this.referenceunits == "") {this.referenceunits = this.deliveryunits;}

	console.log("Desired rate: " + this.desiredrate);
	console.log("Minimum dose: " + this.mindose);

	this.error = 0;

	// critical errors
	if (this.weight == "" || this.weight == 0) {
		this.weight = $("#babyweight").val();
			if (this.weight == "" || this.weight == 0) {
				this.error = "No weight specified";
				console.log(this.error);
			}
	}

	this.fluidtypetext = function() {
		switch (this.fluidtype) {
			case "5d0.9ns":
				return "0.9% NaCl or 5% dextrose";
				break;
			case "10d0.9ns":
				return "0.9% NaCl or 5% dextrose";
				break;
		}
	}

	// Decipher delivery units (specifed in dialog)
	var deliveryunitsarray = this.deliveryunits.split('/');
	this.deliveryunitsarray = deliveryunitsarray;

	this.deliveryunitsdrug = function () {
		switch (deliveryunitsarray[0]) {
		case "g":
			return 1;
			break;
		case "mg":
			return 1/1000;
			break;
		case "milligrams":
			return 1/1000;
			break;
		case "mcg":
			return 1/1000000;
			break;
		case "micrograms":
			return 1/1000000;
			break;
		case "ng":
			return 1/1000000000;
			break;
		case "nanograms":
			return 1/1000000000;
			break;
		}			
	}

	this.deliveryunitsdrugtext = deliveryunitsarray[0];
	
	this.deliveryunitstime = function () {
		switch (deliveryunitsarray[2]) {
			case "min":
				return 60;
				break;
			case "hr":
				return 1;
				break;
			case "day":
				return 1/24;
				break;
		}
	}

	this.deliveryunitstimetext = deliveryunitsarray[2];


	// Decipher reference units (specifed in database)
	var referenceunitsarray = this.referenceunits.split('/');
	this.referenceunitsarray = referenceunitsarray;

	this.referenceunitsdrug = function () {
		switch (referenceunitsarray[0]) {
		case "g":
			return 1;
			break;
		case "mg":
			return 1/1000;
			break;
		case "milligrams":
			return 1/1000;
			break;
		case "mcg":
			return 1/1000000;
			break;
		case "micrograms":
			return 1/1000000;
			break;
		case "ng":
			return 1/1000000000;
			break;
		case "nanograms":
			return 1/1000000000;
			break;
		}			
	}
	
	this.referenceunitstime = function () {
		switch (referenceunitsarray[2]) {
			case "min":
				return 60;
				break;
			case "hr":
				return 1;
				break;
			case "day":
				return 1/24;
				break;
		}
	}

	//	Comparison factors between delivery dose and reference dose
	var deliveryunitsfactor = this.deliveryunitsdrug() * this.deliveryunitstime();
	var referenceunitsfactor = this.referenceunitsdrug() * this.referenceunitstime();

	this.desiredratefactor = function () {
		return this.deliveryunitsdrug ()* 1 * this.deliveryunitstime(); // the 1 is to represent kg, which shouldn't change
	} 

	this.drugtotalmg = function () {
		return 1000 * (this.deliverydose * (this.weight/1000) * this.desiredratefactor() * this.syringe) / this.desiredrate;
	}

	this.drugtotal = function () {
		if (this.drugtotalmg() >= 1000) {
			// this is a lot of drug - let's convert to g
			return Math.round((this.drugtotalmg()/1000)*100)/100 + " g";
		} else {
			if (this.drugtotalmg() < 0.5) {
				// this is a tiny amount of drug - let's convert to mcg
				return Math.round(1000*this.drugtotalmg()) + " micrograms";
			}
			else if (this.drugtotalmg() >= 0.5 && this.drugtotalmg() < 1) {
				// this is a small amount of drug 0.5-1 - let's keep in mg
				return Math.round(this.drugtotalmg()*100)/100 + " mg";
			}
			else if (this.drugtotalmg() >= 1 && this.drugtotalmg() < 100) {
				// this is a small amount of drug 10-99.9 - let's keep in mg
				return Math.round(this.drugtotalmg()*10)/10 + " mg";
			}
			else {
				// this is a drug between 100-1000
				return Math.round(this.drugtotalmg()*1)/1 + " mg";
			}
		}
	}


	// Advisory errors section
	this.advisoryerror = 0;
	this.advisoryoverride = 0;
	this.advisorymsg = "";

	console.log("Reference units: " + this.referenceunits + " ("+ referenceunitsfactor+"), current units: " + this.deliveryunits + " ("+ deliveryunitsfactor +")");

	// 1. Max dose exceeded
	if ((this.deliverydose*deliveryunitsfactor) > (this.maxdose*referenceunitsfactor)) {
		this.advisoryerror = 1;
		this.advisoryoverride = 1;
		this.advisorymsg = this.advisorymsg + "Maximum suggested dosage (" + this.maxdose + " " + this.referenceunits + ") exceeded. "; 
	}

	// 2. Less than min dose
	if ((Math.round(this.deliverydose*deliveryunitsfactor*10000000000)/10000000000) < (Math.round(this.mindose*referenceunitsfactor*10000000000)/10000000000)) {
		this.advisoryerror = 1;
		this.advisoryoverride = 1;
		this.advisorymsg = this.advisorymsg + "Dosage less than recommended minimum (" + this.mindose + " " + this.referenceunits + "). "; 
	}

	// 3. Syringe concentration too high
	if (this.drugtotalmg() > this.maxconc) {
		this.advisoryerror = 1;
		if (this.maxconcmsg == "") {this.maxconcmsg = "Infusion concentration is higher than recommended.";}
		if (Math.round(this.drugtotalmg()/this.syringe*10)/10 == 0) {
			this.advisorymsg = this.advisorymsg + "Infusion concentration is " + Math.round(1000*this.drugtotalmg()/this.syringe*10)/10 + " mcg/ml. " + this.maxconcmsg; 	
		}
		else {
			this.advisorymsg = this.advisorymsg + "Infusion concentration is " + Math.round(this.drugtotalmg()/this.syringe*10)/10 + " mg/ml. " + this.maxconcmsg; 	
		}
	}
	
	// 4. Syringe concentration too low
	if (this.drugtotalmg() < this.minconc) {
		this.advisoryerror = 1;
		if (this.minconcmsg == "") {this.minconcmsg = "Infusion concentration is lower than recommended.";}
		this.advisorymsg = this.advisorymsg + this.minconcmsg; 
	}



	this.outputtext = function () {
		var tempoutputtext = this.drugtotal() + " added to " + this.syringe + " ml of " + this.fluidtypetext() + ". <br>" + this.desiredrate + " ml/hr will deliver " + this.deliverydose + " " + this.deliveryunitsfull + ".";

		if(this.advisoryoverride == 1) {	
			tempoutputtext = "Please correct critical errors:";
		}

		if(this.advisoryerror == 1) {
			tempoutputtext = tempoutputtext + "<br><div id=\"advisorymsg\"><strong>WARNING: </strong>" + this.advisorymsg + "</div>";
		}

		if(this.error != 0) {
			return this.error
		}
		else {
			return tempoutputtext;
		}
		// return 
	}

console.log("Popup: " + popup);
	if (popup == 1) {

		// Remove any bound elements
		$("form :input").unbind();
		$("#fdeliverydose").unbind();

		$.mobile.changePage( "#infusion-detail", { role: "", transition: "none", corners: false } );
		$("#infusionheader").text(this.drugname);
		$("#infusionoutputtext").html(this.outputtext());
		console.log("Popup 1: " + this.outputtext());
		$("#fdeliverydose").val(this.deliverydose);
		$("#fdeliveryunitsdrug").val(this.deliveryunitsdrugtext).selectmenu('refresh');
		$("#fdeliveryunitstime").val(this.deliveryunitstimetext).selectmenu('refresh');
		$("#fdesiredrate").val(this.desiredrate).slider("refresh");
		$("#fsyringe").val(this.syringe).slider("refresh");
		$("#ffluidtype").val(this.fluidtype);
		$("#fusualdose").html(this.drugdosemsg);
		$("#infusion-detail").find(".maintitle-weight").text("(for a " + $("#babyweight").val()/1000 + " kg baby)");
	}

	if (popup == 2) {
		$("#infusionoutputtext").html(this.outputtext());
		console.log("Popup 2: " + this.outputtext());
	}

	return this.drugtotal();
}

	$(document).ready(function () {

// Second implementation of this routine
// Note this has been disabled:
// - .infusion-detail has been changed 3x to .infusion-detail-temp below
// - the css class has also been changed in drug infusion calculator in the main html

		$(".infusion-detail").parent().click(function(){
			var drugname = $(this).find(".infusion-detail").data('infusion-drugname');
			if (drugname != "generic") { $(this).find(".infusion-detail").trigger("click"); }
			event.stopPropagation();
		});

		$('.infusion-detail').click(function(event) {


			var Infusioninfo = function (inputdrugname) {
				return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
			}

			if ($("#babyweight").val() == "") {
				console.log("Navigator alert called");
				showMessage("Please enter the baby's weight first.", highlightWeight, "Missing Weight", "Done");
				event.stopPropagation();
				return false;
			}

			if ($("#babyweight").val() < 400 || $("#babyweight").val() > 7000) {
				console.log("Navigator alert called");
				showMessage("Please check your baby's weight - this app is only suitable for babies on NICU.", highlightWeight, "Incorrect weight", "Done");
				event.stopPropagation();
				return false;
			}

			var drugname = $(this).parent().data('infusion-drugname');
			if (drugname == undefined) { var drugname = $(this).data('infusion-drugname'); }

			var drug = new Infusioninfo(drugname);
			console.log("Drug selected " + drug.name);
			var infusion = new Infusion(drug.name, drug.startdose, drug.units, drug.desiredrate, 0, drug.syringe, drug.fluidtype, 1, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);
			console.log(infusion.outputtext());

			trackPage("infusion-" + drug.name);

			// Remove any bound elements
			$("form :input").unbind();
			$("#fdeliverydose").unbind();

			// NB Duplicate function here for both events ** need to change both if tweaks!
			$("form :input").change(function() {
				console.log("New calculation");
				var drug = new Infusioninfo(drugname);
				var infusion = new Infusion(drug.name, $("#fdeliverydose").val(), $("#fdeliveryunitsdrug").val()+"/kg/"+$("#fdeliveryunitstime").val(), $("#fdesiredrate").val(), 0, $("#fsyringe").val(), $("#ffluidtype").val(), 2, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units)
				$("#fdeliveryunitsdrug").selectmenu('refresh');
				$("#fdeliveryunitstime").selectmenu('refresh');
			});
			$("#fdeliverydose").keyup(function() {
				var drug = new Infusioninfo(drugname);
				var infusion = new Infusion(drug.name, $("#fdeliverydose").val(), $("#fdeliveryunitsdrug").val()+"/kg/"+$("#fdeliveryunitstime").val(), $("#fdesiredrate").val(), 0, $("#fsyringe").val(), $("#ffluidtype").val(), 2, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);
				console.log("New calculation");
			});
			return false;

		});


	}); //doc.ready