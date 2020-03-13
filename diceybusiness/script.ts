// export { };

document.addEventListener('DOMContentLoaded', function () {
    //let diceCnt = 1;
    let diceArr:Array<any> = [];
    class Die {
        value: number;
        id: string;
        constructor(id: string) {
            this.id = id;
            this.roll();
        }

        diceValue() {
            return this.value;
        }

        getID() {
            return this.id;
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            return this.value;
        }
    }

    let btnGenerateDie = document.getElementById('btnGenerateDie');
    let btnRollDice = document.getElementById('btnRollDice');
    let btnSumDice = document.getElementById('btnSumDice');

    let groupDiv = document.createElement('div');
    groupDiv.className = 'group-div';
    document.body.appendChild(groupDiv);

    btnRollDice.addEventListener('click', (e) => {
        const dice = document.getElementsByClassName('dice');
        let i: number;
        for (i = 0; i < dice.length; i++) {
            let die = dice[i] as HTMLDivElement;
            diceArr[i].roll();
            die.innerText = diceArr[i].value;
        }
    });

    btnGenerateDie.addEventListener('click', (e) => {
        let dice = new Die((diceArr.length + 1).toString());
        diceArr.push(dice);
        let div = document.createElement('div');
        div.id = dice.id;
        div.className = 'dice';
        div.innerText = dice.value.toString();
        div.addEventListener('click', rollSingleDie);

        groupDiv.appendChild(div);
        div.addEventListener('dblclick', deleteSingleDie);
    });

    btnSumDice.addEventListener('click', (e) => {
        sumDice();
    });

    function rollSingleDie(e) {
        let i: number;
        for (i = 0; i < diceArr.length; i++) {
            let dice = diceArr[i];
            if (dice.id == e.target.id) {
                dice.roll();
                e.target.innerText = dice.value;
                break;
            }
        }
    }

    function deleteSingleDie(e) {
        let t: string = e.target.id;
        e.target.parentNode.removeChild(e.target);
        let i: number;
        for (i = 0; i < diceArr.length; i++) {
            if (diceArr[i].id == t) {
                diceArr.splice(i, 1);
                break;
            }
        }
    }

    function sumDice() {
        let t: number = 0;
        let i: number;
        for (i = 0; i < diceArr.length; i++) {
            t += diceArr[i].value;
        }
        alert(`Sum: ${t}`);
    }
});