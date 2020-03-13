// export { };
document.addEventListener('DOMContentLoaded', function () {
    //let diceCnt = 1;
    var diceArr = [];
    var Die = /** @class */ (function () {
        function Die(id) {
            this.id = id;
            this.roll();
        }
        Die.prototype.diceValue = function () {
            return this.value;
        };
        Die.prototype.getID = function () {
            return this.id;
        };
        Die.prototype.roll = function () {
            this.value = Math.floor(Math.random() * 6) + 1;
            return this.value;
        };
        return Die;
    }());
    var btnGenerateDie = document.getElementById('btnGenerateDie');
    var btnRollDice = document.getElementById('btnRollDice');
    var btnSumDice = document.getElementById('btnSumDice');
    var groupDiv = document.createElement('div');
    groupDiv.className = 'group-div';
    document.body.appendChild(groupDiv);
    btnRollDice.addEventListener('click', function (e) {
        var dice = document.getElementsByClassName('dice');
        var i;
        for (i = 0; i < dice.length; i++) {
            var die = dice[i];
            diceArr[i].roll();
            die.innerText = diceArr[i].value;
        }
    });
    btnGenerateDie.addEventListener('click', function (e) {
        var dice = new Die((diceArr.length + 1).toString());
        diceArr.push(dice);
        var div = document.createElement('div');
        div.id = dice.id;
        div.className = 'dice';
        div.innerText = dice.value.toString();
        div.addEventListener('click', rollSingleDie);
        groupDiv.appendChild(div);
        div.addEventListener('dblclick', deleteSingleDie);
    });
    btnSumDice.addEventListener('click', function (e) {
        sumDice();
    });
    function rollSingleDie(e) {
        var i;
        for (i = 0; i < diceArr.length; i++) {
            var dice = diceArr[i];
            if (dice.id == e.target.id) {
                dice.roll();
                e.target.innerText = dice.value;
                break;
            }
        }
    }
    function deleteSingleDie(e) {
        var t = e.target.id;
        e.target.parentNode.removeChild(e.target);
        var i;
        for (i = 0; i < diceArr.length; i++) {
            if (diceArr[i].id == t) {
                diceArr.splice(i, 1);
                break;
            }
        }
    }
    function sumDice() {
        var t = 0;
        var i;
        for (i = 0; i < diceArr.length; i++) {
            t += diceArr[i].value;
        }
        alert("Sum: " + t);
    }
});
