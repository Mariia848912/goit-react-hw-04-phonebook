export function checkForRepeatContact(name, number, contacts) {
  let checkName = contacts.some(
    item => item.name.toLowerCase() === name.toLowerCase()
  );
  let checkNumber = contacts.some(item => {
    let stateNumber = parseInt(item.number.replace(/[^\d]/g, ''));
    let newNumber = parseInt(number.replace(/[^\d]/g, ''));
    return stateNumber === newNumber;
  });

  if (checkName) return window.alert(`${name} is already in contacts`);
  if (checkNumber) return window.alert(`${number} is already in contacts`);
}
