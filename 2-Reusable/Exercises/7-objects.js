'use strict';

const fn = () => {
  const user = { name: 'Ivan' };
  let person = { name: 'Ivan' };

  user.name = 'Ivan Ovodovskyi';
  person.name = 'Ivan Ovodovskyi';

  person = { name: 'Ivan Ovodovskyi IM-63' };
};

fn();
