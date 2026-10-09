'use strict';

const phonebook = [
  { name: 'Ivan Ovodovskyi IM-63', phone: '+380501112233' },
  { name: 'Marcus', phone: '+380445554433' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
