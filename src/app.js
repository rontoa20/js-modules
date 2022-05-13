const App = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <React.Fragment>
      <button onClick={() => setCounter(counter + 10)}>Add button 2</button>
      <button onClick={() => setCounter(counter - 10)}>Subract button 2</button>
      <span>{counter}</span>
    </React.Fragment>
  );
};

export default App;
