const Button = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <React.Fragment>
      <button onClick={() => setCounter(counter + 1)}>Add Button</button>
      <button onClick={() => setCounter(counter - 1)}>Subract Button</button>
      <span>{counter}</span>
    </React.Fragment>
  );
};

export default Button;
