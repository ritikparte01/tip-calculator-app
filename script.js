jQuery(document).ready(function () {
  jQuery("#tipCal").change(function () {
    var bill = jQuery("#bill").val();
    var convPerc;

    // ------ TO CHECK WHICH RADIO BUTTON IS SELECTED -----

    var tipPercentage = jQuery("input[name='options-outlined']").each(
      function () {
        if (jQuery(this).is(":checked")) {
          var inputPerc = jQuery(this).val();
          convPerc = inputPerc / 100;
        }
      }
    );

    // --- TO CHECK WETHER CUSTOM RADIO SELECTED AND GET CUSTOM VALUE ---

    var customInput = $("#cust");
    if (customInput.is(":checked")) {
      jQuery(".customInp").css("display", "block");
      jQuery("input[name='options-outlined']").removeAttr("checked");
      let custom = jQuery("#custom").val();
      convPerc = custom / 100;
    } else {
      jQuery(".customInp").css("display", "none");
    }

    // ----- TO CALCULATE TOTAL AND TIP AMOUT PER PERSON ----

    var numPeople = jQuery("#numPep").val();
    var tipAmt = Math.round((convPerc * bill) / numPeople);
    jQuery("#tipAmt").text(tipAmt);
    var totalAmt = Math.round(tipAmt + bill / numPeople);
    jQuery("#totalAmt").text(totalAmt);

    if (numPeople == 0) {
      jQuery("#totalAmt").text("-");
    }
    if (numPeople == 0) {
      jQuery("#tipAmt").text("-");
    }
  });
});
