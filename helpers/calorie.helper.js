/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
const { BMICategory } = require('./bmi.helper');

const calorie = ({
  weight, height, age, gender, activity_level,
}) => {
  const total = gender === 'male'
    ? 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age
    : 65.51 + 9.563 * weight + 1.85 * height - 4.676 * age;

  return activity_level === 1 ? total * 1.2
    : activity_level === 2 ? total * 1.375
      : activity_level === 3 ? total * 1.55
        : activity_level === 4 ? total * 1.725
          : total * 1.9;
};

const calorieToConsume = ({
  weight, height, age, gender, activity_level,
}) => {
  let total = calorie({
    weight, height, age, gender, activity_level,
  });

  const category = BMICategory({ weight, height });
  total = category === 0 ? total + total * 0.2
    : category === 1 ? total + total * 0.1
      : category === 2 ? total - total * 0.1
        : total - total * 0.2;

  return Math.round(total);
};

const calorieToBurn = ({
  weight, height, age, gender, activity_level,
}) => {
  let total = calorie({
    weight, height, age, gender, activity_level,
  });

  const category = BMICategory({ weight, height });
  total = category === 0 ? total - total * 0.2
    : category === 1 ? total - total * 0.1
      : category === 2 ? total + total * 0.1
        : total + total * 0.2;

  return Math.round(total);
};

const drinkTarget = ({ weight }) => {
  if (weight <= 50) return 2000;
  if (weight <= 55) return 2250;
  if (weight <= 60) return 2500;
  if (weight <= 65) return 2750;
  if (weight <= 70) return 3000;
  if (weight <= 75) return 3250;
  if (weight <= 80) return 3500;
  if (weight <= 85) return 3750;
  if (weight <= 90) return 4000;
  return 4250;
};

module.exports = { calorieToBurn, calorieToConsume, drinkTarget };
