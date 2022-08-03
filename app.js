// Screen controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValie: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValie).value,
      };
    },
    getDOMsrintg: function () {
      return DOMstrings;
    },
  };
})();

// Finance controller
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// App connector controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    console.log(uiController.getInput());
    // 1. Oruulah ugugdliig delgetsees olj avah.
    // 2. Olj avsan ugugdluude financeController luu damjuulj tend hadgalna.
    // 3. Olj avsan ugugdluude web deere gargaj haruulna.
    // 4. Tusuhiig tootsoolno.
    // 5. Etsiin uldegdel,  Tootsoog delgetsend haruulna.
  };
  var setupEventListeners = function () {
    var DOM = uiController.getDOMsrintg();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("App started...");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();
