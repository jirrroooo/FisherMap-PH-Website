import React from "react";

export default function FormattedDate({ date }) {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = mm + "/" + dd + "/" + yyyy;

  return <p>{formattedToday}</p>;
}


export function FormattedDateTime({ date }) {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let hrs = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let am_pm = 'AM';

  if(hrs > 12){
    hrs = hrs - 12;
    am_pm = 'PM';
  }

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = mm + "/" + dd + "/" + yyyy + ", " + hrs + ":" + min + ":" + sec + ' ' + am_pm;

  return <p>{formattedToday}</p>;
}

