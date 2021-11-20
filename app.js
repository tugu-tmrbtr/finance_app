var uiController = (function () {
  var x = 100;
  function add(y) {
    return x + y;
  }
  return {
    publicAdd: function (a) {
      b = add(a);
      console.log("Боловсруулсан утга: " + b);
    },
  };
})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  uiController.publicAdd(150);
})(uiController, financeController);
