import { Link } from "../Link.jsx";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQr0jRJltN8qi1jMe88-hixKfjTBO8ljGdNo7TUKYzI1Us4oWaIwxMo5t1-Kd4RfhXxZ8&usqp=CAU"
          alt="dayan arango"
        />
        <p>¡Hola soy dayan! y estas en mi clon de react router</p>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
