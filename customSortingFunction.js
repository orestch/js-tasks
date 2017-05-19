let events = [
  {
    id: 3,
    name: 'evaluation meeting',
    date: '25 May 2017'
  },
  {
    id: 1,
    name: 'new year',
    date: '01 Jan 2017'
  },
  {
    id: 2,
    name: 'workday launch',
    date: '22 May 2017'
  },
];

function compareById(a, b) {
  return a.id - b.id;
}

function compareByName(a, b) {
  let firstEventName = a.name.toLowerCase(), secondEventName = b.name.toLowerCase();

  if(firstEventName < secondEventName) return -1;
  if(firstEventName > secondEventName) return 1;

  return 0;
}

function compareByDate(a, b) {
  return new Date(a.date) - new Date(b.date);
}

console.log('Sort by id:\n', events.sort(compareById));
console.log('Sort by name:\n', events.sort(compareByName));
console.log('Sort by date:\n', events.sort(compareByDate));
