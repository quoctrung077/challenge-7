import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <Student name="Trung" age={24} isStudent={true} />
      <Student name="Quân" age={22} isStudent={true} />
      <Student name="Thảo" age={20} isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Trung" />
      <UserGreeting isLoggedIn={false} />
      <Footer />
    </>
  );
}

export default App;
