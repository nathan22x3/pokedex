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

export const progressColorGen = (value) => {
  if (value < 40) return '#fc5849';
  else if (value >= 40 && value < 80) return '#f5a018';
  else if (value >= 80 && value < 120) return '#78c850';
  else if (value >= 120 && value < 160) return '#429bed';
  return '#7038f8';
};
