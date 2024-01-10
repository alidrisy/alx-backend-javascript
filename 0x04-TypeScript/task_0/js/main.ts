interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};
const student1: Student = {
    firstName: 'Sam',
    lastName: 'Said',
    age: 22,
    location: 'Uk',
};
const student2: Student = {
    firstName: 'John',
    lastName: 'Makler',
    age: 24,
    location: 'USA',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tHead: HTMLTableRowElement = document.createElement('tr');
const hCell1: HTMLTableCellElement = document.createElement('th');
const hCell2: HTMLTableCellElement = document.createElement('th');

hCell1.textContent = 'First Name';
hCell2.textContent = 'Location';

tHead.style.border = '1px solid black';
hCell1.style.border = '1px solid black';
hCell2.style.border = '1px solid black';

tHead.appendChild(hCell1);
tHead.appendChild(hCell2);
table.appendChild(tHead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const cell1: HTMLTableCellElement = document.createElement('td');
  const cell2: HTMLTableCellElement = document.createElement('td');

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  row.style.border = '1px solid black';
  cell1.style.border = '1px solid black';
  cell2.style.border = '1px solid black';

  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
});
table.style.border = '1px solid black';
document.body.appendChild(table);
