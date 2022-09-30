const first = () => {
  const hi = "haloooo";
  const second = () => {
    alert(hi);
  };
  return second;
};

const greet = first();
greet();
