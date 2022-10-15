import Character from '../zombie';

test('create Character ok', () => {
  const character = new Character('Player', 'Zombie');
  const result = {
    name: 'Player',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
