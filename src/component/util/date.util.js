export const getCurrentDate = timeAgo => {
  const currentDate = new Date();

  if (timeAgo === "last-year") {
    currentDate.setTime(currentDate.getTime() - 60 * 60 * 24 * 365 * 1000);
  }

  const fullYear = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1 + "";
  const day = currentDate.getDate() + "";

  return `${fullYear}-${month.length === 1 ? "0" + month : month}-${
    day.length === 1 ? "0" + day : day
  }`;
};
