import Character from '../undead';

test('create Character ok', () => {
  const character = new Character('Player', 'Undead');
  const result = {
    name: 'Player',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
