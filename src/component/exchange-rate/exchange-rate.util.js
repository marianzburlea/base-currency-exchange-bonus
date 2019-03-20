export const getCurrentDate = () => {
  const currentDate = new Date();

  const fullYear = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1 + "";
  const day = currentDate.getDate() + "";

  return `${fullYear}-${month.length === 1 ? "0" + month : month}-${
    day.length === 1 ? "0" + day : day
  }`;
};
