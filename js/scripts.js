// Business logic
function BankAct() {
  this.balance = 0;
}

BankAct.prototype.register = function(name, deposit) {
  this.name = name;
  this.balance = deposit;
};

BankAct.prototype.deposit = function(amount) {
  if (!isNaN(amount)) {
    this.balance += amount;
  }
};

BankAct.prototype.draw = function(amount) {
  if (!isNaN(amount)) {
    this.balance -= amount;
  }
};

// User Interface logic
let act = new BankAct();

$(document).ready(function() {

  $("#new").submit(function() {
    event.preventDefault();
    act.register($('#name').val(), parseInt($('#funds').val()));
    $('#balance').text(act.balance);
    $('#new').trigger('reset');
  });

  $("#dorw").submit(function() {
    event.preventDefault();
    act.deposit(parseInt($('#deposit').val()));
    act.draw(parseInt($('#draw').val()));
    $('#balance').text(act.balance);
    $('#dorw').trigger('reset');
  });


});
