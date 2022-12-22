jQuery(document).ready(function () {
  jQuery("#tipCal").change(function () {
    var bill = jQuery("#bill").val();
    console.log(bill);
    var convPerc;

    var tipPercentage = jQuery("input[name='options-outlined']").each(
      function () {
        if (jQuery(this).is(":checked")) {
          var inputPerc = jQuery(this).val();
          convPerc = inputPerc / 100;
        } else {
          let custom = jQuery("#custom").val();
          console.log(custom);
          convPerc = custom / 100;
        }
      }
    );

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
