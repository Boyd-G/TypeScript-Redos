let container = document.getElementById('container');
class Die {
  public value: number;
  public div: HTMLElement;
  public par: HTMLElement;
  public text: Text;

  public constructor() {
    this.value;
    this.roll();
    this.div = document.createElement('div');
    this.div.classList.add('die');
    this.par = document.createElement('p');
    this.text = document.createTextNode(this.value.toString());
    this.par.appendChild(this.text);
    this.div.appendChild(this.par);
    container.appendChild(this.div);
  }
  public roll(): void {
    if (this.value != 0) {
      //"protects" "deleted" die from being rolled
      this.value = Math.floor(Math.random() * 6) + 1;
    }
  }
}
let dieArray = [];
//counter to label die by id
let counter: number = 0;
function insertDie(): void {
  let di = new Die();
  document
    .getElementsByClassName('die')
    [counter].setAttribute('id', counter.toString());
  dieArray.push(di);
  counter++;
}
function rollDice(): void {
  dieArray.forEach((element, i: number) => {
    element.roll();
    document.getElementsByTagName('p')[i].textContent = element.value;
  });
}
function sum(): void {
  let sum: number = 0;
  dieArray.forEach((element) => {
    sum += element.value;
  });
  alert(`The sum of all dice is ${sum}`);
}
//event listener to roll die on click
document.addEventListener('click', function (e: MouseEvent) {
  const element = e.currentTarget as HTMLInputElement;
  if (element && element.className == 'die') {
    dieArray[element.id].roll();
    element.firstChild.textContent = dieArray[element.id].value;
  }
});

document.addEventListener('dblclick', function (e: MouseEvent) {
  const element = e.currentTarget as HTMLInputElement;
  if (e.target && element.className == 'die') {
    dieArray[element.id].value = 0;
    element.style.display = 'none';
  }
});
