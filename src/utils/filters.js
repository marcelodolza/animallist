import Vue from "vue";

Vue.filter("age", (value) => {
  return value ? `${value} years old` : "";
});

Vue.filter("distance", (value) => {
  return value ? `${value} km` : "";
});

Vue.filter("date", (value) => {
  if (!value) return;

  const date = new Date(value);
  if (!(date instanceof Date)) return;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${date.getDate()}th ${months[date.getMonth()]} ${date.getFullYear()}`;
});
