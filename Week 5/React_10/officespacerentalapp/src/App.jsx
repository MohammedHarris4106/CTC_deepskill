import offices from "./data/officeData";

const App = () => {
  return (
    <div style={{ padding: "5px" }}>
      <h1>Office Space, at Affordable Range</h1>
      {offices.map((office) => (
        <div
          key={office.id}
          style={{
            marginBottom: "30px"
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            width="250"
          />

          <h2>Name: {office.name}</h2>
          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;