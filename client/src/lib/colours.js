const numberMatch = /([0-9])+, ?([0-9])+, ?([0-9])+ ?/g

export const lighten = (rgbString, amount) => `rgb(${numberMatch
  .exec(rgbString)[0]
  .split(/, ?/)
  .map(colour => Math
    .round((
      parseInt(colour, 10) + amount) > 255
      ? 255
      : parseInt(colour, 10) + amount))
})`

export const darken = (rgbString, amount) => `rgb(${numberMatch
  .exec(rgbString)[0]
  .split(/, ?/)
  .map(colour => Math
    .round((
      parseInt(colour, 10) - amount) < 0
      ? 0
      : parseInt(colour, 10) - amount))
})`
