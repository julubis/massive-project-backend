/* eslint-disable no-nested-ternary */
const BMI = ({ height, weight }) => {
  const value = weight / ((height / 100) ** 2);
  return value.toFixed(1);
};

const BMICategory = ({ height, weight }) => {
  const value = weight / ((height / 100) ** 2);
  return value < 18.5 ? 0
    : value < 24.9 ? 1
      : value < 29.9 ? 2
        : 3;
};

module.exports = { BMI, BMICategory };
