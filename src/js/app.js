function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

export default function sortByHealth(listPlayers) {
  listPlayers.sort(byField('health'));
  return listPlayers.reverse();
}
