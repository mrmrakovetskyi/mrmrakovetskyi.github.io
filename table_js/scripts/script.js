let table = document.querySelector('#matrix');

for (let i = 0; i < 20; i++) {
    let newTr = document.createElement('tr');
    table.append(newTr);
    for (let y = 1; y <= 20; y++) {
        let newTd = document.createElement('td');
        newTd.innerText = `${y + i}`;
        newTr.append(newTd);
    }
}

let allTr = document.querySelectorAll('tr');

for (let i = 0; i < allTr.length; i++) {
    allTr[i].children[i].style.background = 'blue';
}
