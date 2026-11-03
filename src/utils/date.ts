// Mediante una fecha YYYY-MM-DD Devolvemos el valor MM/YYYY
export const calculateMonthYear = (date: string | null) => {
  if(date) {
    const [year, month] = date.split("-")

    return `${month.padStart(2, "0")}/${year}`
  }
  return "Present";
}
