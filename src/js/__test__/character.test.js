import Character from '../character';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowerman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('koliberskiy', 'Bowerman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Player', 'Dead')).toThrowError(new Error('Такого класса нет'));
});

test('create Character name', () => {
  const character = new Character('Player', 'Bowerman');
  expect(character.name).toBe('Player');
});

test('create Character type', () => {
  const character = new Character('Player', 'Bowerman');
  expect(character.type).toBe('Bowerman');
});

test('create Character', () => {
  const character = new Character('Player', 'Bowerman');
  const result = {
    name: 'Player',
    type: 'Bowerman',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

test('create Character levelUp 0', () => {
  const character = new Character('Player', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('create Character levelUp ok', () => {
  const character = new Character('Player', 'Bowerman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(12);
  expect(character.level).toBe(2);
});

test('create Character damage', () => {
  const character = new Character('Player', 'Bowerman');
  character.defence = 10;
  character.damage(50);
  expect(character.health).toBe(55);
});

test('create Character damage high', () => {
  const character = new Character('Player', 'Bowerman');
  character.defence = 10;
  character.damage(500);
  expect(character.health).toBe(0);
});