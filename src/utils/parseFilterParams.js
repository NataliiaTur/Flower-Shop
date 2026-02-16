const parseColors = (colors) => {
  if (Array.isArray(colors)) {
    return colors.filter((color) =>
      [
        'red',
        'rose',
        'yellow',
        'green',
        'white',
        'violet',
        'blue',
        'black',
        'brown',
        'orange',
      ].includes(color),
    );
  }
  if (typeof colors === 'string') {
    const validColors = [
      'red',
      'rose',
      'yellow',
      'green',
      'white',
      'violet',
      'blue',
      'black',
      'brown',
      'orange',
    ];
    if (validColors.includes(colors)) return [colors];
  }
  return undefined;
};

const parseNumber = (number) => {
  if (typeof number !== 'string') return;

  const parsedNumber = parseFloat(number);

  if (Number.isNaN(parsedNumber)) return;

  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { colors, minPrice, maxPrice, minRating, maxRating } = query;

  const parsedColors = parseColors(colors);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);
  const parsedMinRating = parseNumber(minRating);
  const parsedMaxRating = parseNumber(maxRating);

  return {
    colors: parsedColors,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
    minRating: parsedMinRating,
    maxRating: parsedMaxRating,
  };
};
