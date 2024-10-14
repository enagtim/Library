import stylename from "./BookCount.module.css";
function BookCount({ num }) {
  return <div className={stylename["count_book"]}>{num}</div>;
}

export default BookCount;
