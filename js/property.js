$("#price-slider").slider({
  min: 0,
  max: 100000,
  values: [300],
  step: 2,
  slide: function(event, ui) {
    var value = ui.values[0];
    $("[name=value]").val(value);
}
});

/* init input */
var value = $("#price-slider").slider("values", 0);
$("[name=value]").val(value);