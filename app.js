// Delgetstei ajillah controller
var uiController = (function () {})();

// Sanhuute ajillah controller
var financeController = (function () {})();

// App holbogc controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log("jhjh");
    // 1. Oruulah ugugdliig delgetsees olj avah.
    // 2. Olj avsan ugugdluude financeController luu damjuulj tend hadgalna.
    // 3. Olj avsan ugugdluude web deere gargaj haruulna.
    // 4. Tusuhiig tootsoolno.
    // 5. Etsiin uldegdel,  Tootsoog delgetsend haruulna.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
