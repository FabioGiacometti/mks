import "./App.scss";
import { overview, overviewToday } from "./assets/mocks/data";
import Card from "./components/card/Card";
import CardSm from "./components/cardSm/CardSm";
import Header from "./components/header/Header";
import Modal from "./components/modal/modal";

let cardDeck = overview.map((card, index) => {
  return <Card data={card} key={index} />;
});

let smallCardDeck = overviewToday.map((smallCard, index) => (
  <CardSm data={smallCard} key={index} />
));

function App() {
  return (
    <div className="app__container">
      <Modal> </Modal>
      <Header />

      <div className="card-deck__container card-deck__container--lg">
        {cardDeck}
      </div>

      <h3 className="overview_title ">Overview - Today</h3>

      <div className="card-deck__container card-deck__container--sm">
        {smallCardDeck}
      </div>
    </div>
  );
}

export default App;
