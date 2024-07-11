const currentDate = () => new Date().toLocaleDateString('en-US');
const randomBoolean = () => Math.random() >= 0.5;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);