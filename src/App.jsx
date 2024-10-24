import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 51 },
    { id: 2, name: "banana", calories: 101 },
    { id: 3, name: "orange", calories: 151 },
    { id: 4, name: "grape", calories: 201 },
  ];

  const vegatables = [
    { id: 5, name: "potato", calories: 40 },
    { id: 6, name: "carot", calories: 99 },
    { id: 7, name: "corn", calories: 165 },
    { id: 8, name: "broccoli", calories: 200 },
  ];

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
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegatables.length > 0 && (
        <List items={vegatables} category="Vegatables" />
      )}
      <MyComponent />
      <Counter />
      <ColorPicker />
      <Footer />
    </>
  );
}

export default App;
