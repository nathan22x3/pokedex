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
