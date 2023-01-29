import { useState } from 'react';

import Button from './Button';
import { buttons } from './buttons';

function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (symbol) => () => {
    const num = parseFloat(value);

    if (symbol === "C") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (symbol === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (symbol === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (symbol === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (symbol === "+" || symbol === "-" || symbol === "x" || symbol === "÷") {
      if (operator) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "x") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator(symbol);
      return;
    }

    if (symbol === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "x") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + symbol);
    } else {
      setValue(parseFloat(num + symbol).toString());
    }
  };

  return (
    <div className="bg-black inline-block rounded-lg p-2 w-[220px]">
      <p className="text-white text-right pt-5 pb-2 pr-2 text-3xl">{value}</p>
      <div className="flex flex-wrap">
        {buttons.map((button) => {
          const { type, value } = button;
          return (
            <Button
              onButtonClick={handleButtonPress}
              type={type}
              value={value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
