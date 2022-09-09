export default function DateTime() {
    const showDate=new Date();
    const displayTodayDate=showDate.getDate()+" "+showDate.getMonth()+" "+showDate.getFullYear()+","
    const dt=showDate.toDateString()
  return (
    <span>{dt}</span>
  )
}
