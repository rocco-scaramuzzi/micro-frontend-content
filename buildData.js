const fs = require('fs');

const contacts = [
  {
    id: '1',
    name: "Mirela Georgieva",
    description: 'Apartment 1, London, Mirela.Georgieva@email.uk',
  },
  {
    id: '2',
    name: 'Mehdi Kimakhe',
    description: "Apartment 2, London, Mehdi.Kimakhe@email.uk"
  },
  {
    id: '3',
    name: "Rocco Scaramuzzi",
    description: 'Apartment 3, London, rocco.scaramuzzi@email.uk'
  },
  {
    id: '4',
    name: 'Name4 Surname4',
    description: "Apartment 4, London, info@email.uk"
  },
  {
    id: '5',
    name: 'Name5 Surname5',
    description: 'Apartment 5, London, info@email.uk'
  },
  {
    id: '6',
    name: 'Name6 Surname6',
    description: 'Apartment 6, London, info@email.uk'
  },
  {
    id: '7',
    name: 'Name7 Surname7',
    description: 'Apartment 7, London, info@email.uk'
  },
  {
    id: '8',
    name: 'Name8 Surname8',
    description: "Apartment 8, London, info@email.uk"
  },
  {
    id: '9',
    name: "Name9 Surname9",
    description: 'Apartment 9, London, info@email.uk'
  },
  {
    id: '10',
    name: "Name10 Surname10",
    description: 'Apartment 10, London, info@email.uk'
  },
];

fs.writeFileSync('./content/contacts.json', JSON.stringify(contacts));
try {
  fs.mkdirSync('./content/contacts');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
contacts.forEach(contact => {
  fs.writeFileSync(
    `./content/contacts/${contact.id}.json`,
    JSON.stringify(contact),
  );
});
