export const getDateString = (dateInput: string) => {
  const date = new Date(dateInput);
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ][date.getMonth()];

  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};
