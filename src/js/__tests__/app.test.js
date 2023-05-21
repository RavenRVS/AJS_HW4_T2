import sortByHealth from '../app';

test.each([
  ['list1', [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ], [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]],
  ['list2 with two identical values', [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'вор', health: 80 },
  ], [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'вор', health: 80 },
    { name: 'мечник', health: 10 },
  ]],
])(
  ('should sort the %s by the value of the "health" field'),
  (level, persList, expected) => {
    const result = sortByHealth(persList);

    expect(result).toEqual(expected);
  },
);
