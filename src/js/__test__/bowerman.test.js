import Character from '../bowerman';

test('create Character ok', () => {
  const character = new Character('Player', 'Bowerman');
  const result = {
    name: 'Player',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
