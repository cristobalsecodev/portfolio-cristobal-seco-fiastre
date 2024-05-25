// Mediante una fecha YYYY-MM-DD Devolvemos el valor MM/YYYY
export const calculateMonthYear = (date: string | null) => {
  if(date) {
    const formattedDate = new Date(date)
    
    const year = formattedDate.getFullYear()
    const month = formattedDate.getMonth().toString().length === 1 
      ? `0${formattedDate.getMonth() + 1}` 
      : formattedDate.getMonth() + 1

    return `${month}/${year}`
  }
  return "Presente";
}