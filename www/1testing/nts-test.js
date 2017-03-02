QUnit.config.autostart = false;

QUnit.module( "Full baby test 1kg" );
QUnit.test( "Intubation 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
	  
	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
	assert.equal( $("#ettsize").text(), "3.0", "ETT = 3.0" );
	assert.equal( $("#ettlength").text(), "6.5 cm", "ETT = Tube length = 6.5cm" );
	assert.equal( $("#fentanylbolus").text(), "5 micrograms by slow IV push(preferred drug for intubation)", "Fentanyl: 5 micrograms by slow IV push(preferred drug for intubation)" );
	assert.equal( $("#morphinebolus").text(), "100 micrograms by slow IV push(nb onset of action approx 5 mins; peak action at 15 - 30 mins)", "Morphine: 100 micrograms by slow IV push(effective only after 20-30 mins)" );
	assert.equal( $("#suxbolus").text(), "2 mg by slow IV push", "Suxamethonium 2 mg by slow IV push" );
	assert.equal( $("#atropinebolus").text(), "20 micrograms by slow IV push", "Atropine 20 micrograms by slow IV push" );
	assert.equal( $("#curosurf").text(), "First dose: 200 mg,Second dose: 100 mg (if indicated)Give via ET tube.Practical note: use whole vial closest to calculated dose.", "First dose: 200 mg,Second dose: 100 mg (if indicated)Give via ET tube.Practical note: use whole vial closest to calculated dose." );
});

QUnit.test( "Central lines 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#uvcdetails").text(), "Size: 3.5 FLength: 7 cm (plus stump length)L = (1.5 x birthweight [kg]) + 5.5", "UVC Size: 3.5 F, Length: 7 cm (plus stump length), L = (1.5 x birthweight [kg]) + 5.5" );
  	assert.equal( $("#uacdetails").text(), "Size: 3.5 FLength: 12 cm (plus stump length)L = (birthweight [kg] x 3) + 9", "UAC Size: 3.5 F, Length: 12 cm (plus stump length), L = (birthweight [kg] x 3) + 9" );
});

QUnit.test( "Cardiac 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#naclbolus").text(), "10 ml over 20-30 minutes, via IV/UVC", "Sodium chloride bolus 10 ml over 20-30 minutes" );
  	assert.equal( $("#dopamineinfusion").text(), "30 mg added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 10 micrograms/kg/min.", "Dopamine 30 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 10 micrograms/kg/min." );
  	assert.equal( $("#dobutamineinfusion").text(), "30 mg added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 10 micrograms/kg/min. ", "Dobutamine infusion 30 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 10 micrograms/kg/min. Max concentration 250mg in 50ml." );
  	assert.equal( $("#adrenalineinfusion").text(), "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min.", "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min." );
  	assert.equal( $("#noradrenalineinfusion").text(), "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 100 nanograms/kg/min.", "Noradrenaline infusion 3 mg added to 50 ml of 0.9% NaCl or 5% dextrose. 0.1 ml/hr will deliver 100 nanograms/kg/min." );
  	assert.equal( $("#protine2").text(), "15 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose.1 ml/hr will deliver 5 nanograms/kg/min.", "Dinoprostone infusion 15 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. 1 ml/hr will deliver 5 nanograms/kg/min." );
  	assert.equal( $("#uvcdetails2").text(), "Size: 3.5 FLength: 7 cm (plus stump length)L = (1.5 x birthweight [kg]) + 5.5", "UVC details: Size: 3.5, F Length: 7 cm (plus stump length), L = (1.5 x birthweight [kg]) + 5.5" );
  	assert.equal( $("#uacdetails2").text(), "Size: 3.5 FLength: 12 cm (plus stump length)L = (birthweight [kg] x 3) + 9", "UAC details: Size: 3.5, F Length: 12 cm (plus stump length), L = (birthweight [kg] x 3) + 9" );
});

QUnit.test( "Sedatives 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#fentanylbolus2").text(), "5 micrograms by slow IV push(preferred drug for intubation)", "Fentanyl bolus 5 micrograms by slow IV push (preferred drug for intubation)" );
  	assert.equal( $("#morphinebolus2").text(), "100 micrograms by slow IV push", "Morphine bolus 100 micrograms by slow IV push" );
  	assert.equal( $("#vecuroniumbolus").text(), "100 micrograms by slow IV push(for short duration of action)", "Vecuronium bolus 100 micrograms by slow IV push (for short duration of action)" );
  	assert.equal( $("#pancuroniumbolus").text(), "100 micrograms by slow IV push(for longer duration of action)", "Pancuronium bolus 100 micrograms by slow IV push (for longer duration of action)" );
  	assert.equal( $("#morphinesedativeinfusion").text(), "1 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 20 micrograms/kg/hr.", "1 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 20 micrograms/kg/hr." );
  	assert.equal( $("#vecuroniumsedativeinfusion").text(), "5 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 100 micrograms/kg/hr.", "5 mg added to 50 ml of 0.9% NaCl or 5% Dextrose. 1 ml/hr will deliver 100 micrograms/kg/hr." );
});

QUnit.test( "Neurology 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#phenobarbitoneloading").text(), "20 mg given IV over 20 minutes", "Phenobarbitone loading dose 20 mg given IV over 20 minutes" );
  	assert.equal( $("#phenytoinloading").text(), "18 mg given IV over 30 min(needs close ECG monitoring)", "Phenytoin loading dose 18 mg to be given over 30 min (needs close ECG monitoring)" );
  	assert.equal( $("#diazepam").text(), "300 micrograms(given IV over 5 min)", "Diazepam bolus 300 micrograms (IV injection over 5 min)" );
  	assert.equal( $("#midazolaminfusion").text(), "15 mg added to 50 ml 0.9% NaCl or 5% dextrose.0.1 ml/hr will deliver 30 micrograms/kg/hour.", "Midazolam infusion 15 mg added to 50 ml 0.9% NaCl or 5% dextrose. 0.1 ml/hr will deliver 30 micrograms/kg/hour." );
});

QUnit.test( "Emergency drugs 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#adrenalineemergency").text(), "1st dose at 0.1 ml/kg= 0.1 ml IV stat.Flush with 0.9% sodium chloride.2nd dose at 0.3 ml/kg= 0.3 ml IV stat.Flush with 0.9% sodium chloride.", "Adrenaline stat dose 0.1/0.3 ml - correct" );
  	assert.equal( $("#dextrosebolus").text(), "2.5 ml over 20-30 minutes, via UVC or IV.", "Dextrose 2.5 ml over 20-30 mins - correct" );
  	assert.equal( $("#sodiumbicarb").text(), "2 ml (=1 mmol) of sodium bicarbonate 4.2% for use during emergency resuscitation, given via UVC", "Sodium bicarbonate emergency drug dose - correct" );
  	assert.equal( $("#adenosine").text(), "150 micrograms IV stat into a large central vein and followed immediately by NaCl 0.9% push.", "Adenosine dose 50mg IV stat - correct" );
  	assert.equal( $("#insulin").text(), "2 units added to 20 ml 5% dextrose.0.1 ml/hr will deliver 0.01 units/kg/hour, given IV as an infusion. Flush 5 ml through giving set before connecting.", "Insulin infusion details correct" );
});

QUnit.test( "Admission to NICU 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#benpen").text(), "50 mg IV (BD/TDS depending on age)", "Benzylpenicillin dose 25mg/kg or 50mg/kg" );
  	assert.equal( $("#gentamicin").text(), "5 mg IV (frequency depending on post menstrual age)Check level before 2nd dose.", "5 mg 36 hourly IV.Check level before 2nd dose." );
  	assert.equal( $("#fluids").text(), "60 ml daily over 24 hours= 2.5 ml/hour infusion", "10% dextrose: 60 ml daily over 24 hours = 2.5 ml/hour infusion" );
  	assert.equal( $("#vitk").text(), "0.4 mg IM", "Vitamin K: 0.4 mg IM" );
});

QUnit.test( "Intravenous fluids 1kg", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	$("#fluidsvalue").val("");
	$("#dextrosefluid").val("10");
	$("#tisodium").val("0");
	$("#tipotassium").val("0");

	// calculate app
	CalculateApp();
  
  	assert.equal( $("#babyweight").val(), 1000, "Weight input set to 1kg" );
  	assert.equal( $("#naclbolus2").text(), "10 ml over 20-30 minutes", "Sodium chloride 0.9% bolus: 10 ml over 20-30 minutes" );
  	assert.equal( $("#dextrosebolus2").text(), "2.5 ml over 20-30 minutes", "Dextrose 10% bolus: 2.5 ml over 20-30 minutes" );


	$("#fluidsvalue").val("");
	$("#dextrosefluid").val("10");
	$("#tisodium").val("0");
	$("#tipotassium").val("0");
  $("#fluidsvalue").val(60);
  CalculateApp();
  assert.equal( $("#fluidsvalue").val(), 60, "Fluid input set to 60 ml/kg/day" );
  assert.equal( $("#fluidoutput").text(), "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour.= 4.2 mg/kg/min glucose infusion rate PreparationTake a 500ml bag of 10% dextrose. ", "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour. Glucose infusion rate = 4.2 mg/kg/min. Preparation: Take a 500ml bag of 10% dextrose. " );

  $("#fluidsvalue").val(60);
  $("#tisodium").val(2);
  $("#tipotassium").val(2);
  CalculateApp();
  assert.equal( $("#fluidsvalue").val(), 60, "Fluid input set to 60 ml/kg/day. 2mmol of sodium and potassium" );
  assert.equal( $("#fluidoutput").text(), "Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour.= 4.2 mg/kg/min glucose infusion rate PreparationTake a 500ml bag of 10% dextrose. Add:16.7 mmol sodium chloride(or add 1.3 mmol NaCl if using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium)16.7 mmol potassium chloride", "Fluids with 2mmol of sodium/potassium: Daily total fluid requirement= 60 ml/day, or 2.5 ml/hour. Glucose infusion rate = 4.2 mg/kg/min. Take a 500ml bag of 10% dextrose. Add 16.7 mmol sodium chloride (or add 1.3 mmol NaCl if using 10% dextrose + 0.18% saline, as a bag already contains 15.4 mmol sodium), add 16.7 mmol potassium chloride." );

  $("#fluidsvalue").val(90);
  $("#dextrosefluid").val(15);
  $("#tisodium").val(0);
  $("#tipotassium").val(0);
  CalculateApp();
  assert.equal( $("#fluidsvalue").val(), 90, "Fluid input set to 90 ml/kg/day. Dextrose concentration set to 15%. No sodium or potassium." );
  assert.equal( $("#fluidoutput").text(), "Daily total fluid requirement= 90 ml/day, or 3.8 ml/hour.= 9.5 mg/kg/min glucose infusion rate Administration routeInfuse via central line (dextrose concentration > 12.5%).PreparationTake a 500ml bag of 10% dextrose, remove 62.5 ml and add 62.5 ml of 50% dextrose. ","Dextrose 15%: Daily total fluid requirement= 90 ml/day, or 3.8 ml/hour. Glucose infusion rate = 9.5 mg/kg/min. Administration route: Infuse via central line (dextrose concentration > 12.5%). PreparationTake a 500ml bag of 10% dextrose, remove 62.5 ml and add 62.5 ml of 50% dextrose." );
});

QUnit.module( "Error checking" );
QUnit.test( "Wrong weight (too small 5g)", function( assert ) {
	// set up weight
	$("#babyweight").val(5);
	// calculate app
	CalculateApp();
  
  assert.equal( $("#babyweight").val(), 5, "Weight input set to 5g (0.005kg!)" );
  $('.outputvalue').each(function(i, obj) {
    assert.equal( $(obj).text(), "Enter weight", "Output box " + i + " = Refuses to give output and asks for \"Enter weight\" correctly" );
  });
  
});

QUnit.test( "Wrong weight (too small 350g)", function( assert ) {
	// set up weight
	$("#babyweight").val(5);
	// calculate app
	CalculateApp();
  
  assert.equal( $("#babyweight").val(), 5, "Weight input set to 350g" );
  $('.outputvalue').each(function(i, obj) {
    assert.equal( $(obj).text(), "Enter weight", "Output box " + i + " = Refuses to give output and asks for \"Enter weight\" correctly" );
  });
  
});

QUnit.test( "Wrong weight (too large 7001g)", function( assert ) {

	assert.throws(
    function() {
	// set up weight
      $("#babyweight").val(7001);

   	// calculate app
	CalculateApp();

    },
    "Error raised for weight > 7000g"
  );
  
});

QUnit.test( "Fluid amount too large (260ml/kg/day)", function( assert ) {
	// set up weight
	$("#babyweight").val(3000);
	assert.throws(
    function() {
		$("#fluidsvalue").val(260);

		// calculate app
		CalculateApp();
    },
    "Error raised for fluid >250ml/kg/day"
  );
  
  assert.equal( $("#babyweight").val(), 3000, "Weight input set to 3000g" );
  assert.equal( $("#fluidsvalue").val(), 260, "Fluid input set to 260 ml/kg/day" );
  assert.equal( $("#fluidoutput").text(), $("#fluidsvalue").val() + " ml/kg/day is more than usually recommended in a newborn. Please check and try again.",  $("#fluidsvalue").val() + " ml/kg/day is more than usually recommended in a newborn. Please check and try again.");

  
  
});

QUnit.module( "Custom infusion calculator" );
QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

  $('.infusion-detail').each(function(i, obj) {
    
    var drugname = $(obj).parent().data('infusion-drugname');
			if (drugname == undefined) { var drugname = $(obj).data('infusion-drugname'); }

			var drug = new Infusioninfo(drugname);

			var infusion = new Infusion(drug.name, drug.startdose, drug.units, drug.desiredrate, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

			switch(drug.name) {
			    case "dopamine":
			        var expectedmsg = "15 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 5 micrograms/kg/min.";
			        break;
			    case "dobutamine":
			        var expectedmsg = "15 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 5 micrograms/kg/min.";
			        break;
			    case "adrenaline":
			        var expectedmsg = "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 100 nanograms/kg/min.";
			        break;
			    case "noradrenaline":
			        var expectedmsg = "3 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 100 nanograms/kg/min.<br><div id=\"advisorymsg\"><strong>WARNING: </strong>Infusion concentration is 0.1 mg/ml. Higher than recommended concentration: max. 40 micrograms/mL (higher concentrations can be used if fluid restricted) - BNFc Jan 2015.</div>";
			        break;
			    case "dinoprostone":
			        var expectedmsg = "30 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 10 nanograms/kg/min.";
			        break;
			    case "morphine":
			        var expectedmsg = "1 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 20 micrograms/kg/hr.";
			        break;
			    case "vecuronium":
			        var expectedmsg = "5 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 100 micrograms/kg/hr.";
			        break;
			    case "clonazepam":
			        var expectedmsg = "0.5 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 10 micrograms/kg/hr.";
			        break;
			    case "midazolam":
			        var expectedmsg = "15 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 30 micrograms/kg/hr.";
			        break;
			    case "daily":
			        var expectedmsg = "0 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 0 mg/kg/day.";
			        break;
			    default:
			        var expectedmsg = "0 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. <br>1 ml/hr will deliver 0 micrograms/kg/hr.";
			}

     assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- Default settings" );
    // console.log(infusion.outputtext());
  });
});


QUnit.module( "Custom infusions, tested vs GSTT formulary @ 2kg" );
QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

	// dopamine
    var drugname = "dopamine";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "60 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 5 micrograms/kg/min.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "60 mg", "Amount of drug in 50ml syringe" );
  });


QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "adrenaline";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.1, 0, 20, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "2.4 mg added to 20 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 100 nanograms/kg/min.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.1 ml/hr, 20ml syringe" );
	assert.equal( infusion.drugtotal(), "2.4 mg", "Amount of drug in 20ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "dinoprostone";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "120 micrograms added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 10 nanograms/kg/min.<br><div id=\"advisorymsg\"><strong>WARNING: </strong>Infusion concentration is 2.4 mcg/ml. Higher than recommended concentration: BNFc recommends dilution to 1 microgram/mL.</div>";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "120 micrograms", "Amount of drug in 50ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "dobutamine";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "60 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 5 micrograms/kg/min.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "60 mg", "Amount of drug in 50ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "adrenaline";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "1.2 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 100 nanograms/kg/min.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "1.2 mg", "Amount of drug in 50ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "midazolam";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "6 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 30 micrograms/kg/hr.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "6 mg", "Amount of drug in 50ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "morphine";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "4 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 20 micrograms/kg/hr.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "4 mg", "Amount of drug in 50ml syringe" );
  });

QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(2000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "noradrenaline";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.5, 0, drug.syringe, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "1.2 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.5 ml/hr will deliver 100 nanograms/kg/min.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.5 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "1.2 mg", "Amount of drug in 50ml syringe" );
  });


QUnit.test( "Test", function( assert ) {
	// set up weight
	$("#babyweight").val(1000);
	$("#fluidsvalue").val(60);
	// calculate app

		var Infusioninfo = function (inputdrugname) {
			return infusiondb.filter(function (search) { return search.name == inputdrugname })[0];
		}

    var drugname = "midazolam";
	var drug = new Infusioninfo(drugname);
	var infusion = new Infusion(drug.name, drug.startdose, drug.units, 0.1, 0, 50, drug.fluidtype, 0, drug.dosemsg, drug.minconc, drug.maxconc, drug.minconcmsg, drug.maxconcmsg, drug.mindose, drug.maxdose, drug.units);

	var expectedmsg = "15 mg added to 50 ml of 0.9% NaCl or 5% dextrose. <br>0.1 ml/hr will deliver 30 micrograms/kg/hr.";
	
    assert.equal( infusion.outputtext(), expectedmsg, drug.name + "- 0.1 ml/hr, 50ml syringe" );
	assert.equal( infusion.drugtotal(), "15 mg", "Amount of drug in 50ml syringe" );
  });