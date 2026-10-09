'use strict';

const phonebook = {
  'Ivan Ovodovskyi IM-63': '+380501112233',
  Marcus: '+380445554433',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
