export const idFormatter = (id) => '#' + ('00' + id).slice(-3);

export const capitalize = (string) =>
  string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

export const speciesFormatter = (value) => value.replace(/\sPokémon/, '');

export const weightFormatter = (value) =>
  `${(value * 0.22046).toFixed(1)} lbs (${value / 10} kg)`;

export const heightFormatter = (value) =>
  `${(value * 0.32808).toFixed(1)} ft (${value / 10} m)`;

export const genderRateFormatter = (value, gender) => {
  if (value === -1) return '0%';

  return `${gender === 'male' ? (8 - value) * 12.5 : value * 12.5}%`;
};

const colors = {
  fairy: '#f85888',
  fire: '#fb6c6c',
  fighting: '#fc5849',
  dragon: '#f5a018',
  electric: '#f6c747',
  grass: '#78c850',
  normal: '#a8a878',
  bug: '#48d0b0',
  ice: '#7ac7ff',
  water: '#429bed',
  psychic: '#7c538c',
  poison: '#9f5bba',
  ghost: '#7038f8',
  ground: '#795548',
  rock: '#b1736c',
  steel: '#bababa',
  dark: '#303943',
};

export const themeColorGenerator = (color) => colors[color];
