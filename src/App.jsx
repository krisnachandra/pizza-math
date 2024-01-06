import { useState } from "react";

import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function App() {
  const [selectedPizza, setSelectedPizza] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [result, setResult] = useState(0);
  const [toppingLobster, setToppingLobster] = useState(false);
  const [toppingOyster, setToppingOyster] = useState(false);
  const [toppingSalmon, setToppingSalmon] = useState(false);
  const [toppingBacon, setToppingBacon] = useState(false);
  const [toppingDuck, setToppingDuck] = useState(false);
  const [toppingSausage, setToppingSausage] = useState(false);
  const [toppingAvocado, setToppingAvocado] = useState(false);
  const [toppingTuna, setToppingTuna] = useState(false);
  const [toppingBroccoli, setToppingBroccoli] = useState(false);
  const [toppingOnions, setToppingOnions] = useState(false);
  const [toppingZucchini, setToppingZucchini] = useState(false);
  const [toppingHam, setToppingHam] = useState(false);
  const [selectTopping, setSelectTopping] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toppingPrices = {
    Avocado: 1,
    Broccoli: 1,
    Onions: 1,
    Zucchini: 1,
    Lobster: 2,
    Oyster: 2,
    Salmon: 2,
    Tuna: 2,
    Bacon: 3,
    Duck: 3,
    Ham: 3,
    Sausage: 3,
  };

  const handleSelectPizza = (event) => {
    const valuePizza = event.target.value;

    setSelectedPizza(valuePizza);

    setToppingLobster(false);
    setToppingOyster(false);
    setToppingSalmon(false);
    setToppingBacon(false);
    setToppingDuck(false);
    setToppingSausage(false);
    setToppingAvocado(false);
    setToppingTuna(false);
    setToppingBroccoli(false);
    setToppingOnions(false);
    setToppingZucchini(false);
    setToppingHam(false);

    if (valuePizza === "pizza1") {
      setPizzaPrice(8);
      setToppingLobster(true);
      setToppingOyster(true);
      setToppingSalmon(true);
      setToppingBacon(true);
      setToppingDuck(true);
      setToppingSausage(true);
    } else if (valuePizza === "pizza2") {
      setPizzaPrice(10);
      setToppingLobster(false);
      setToppingOyster(false);
      setToppingSalmon(false);
      setToppingBacon(false);
      setToppingDuck(true);
      setToppingSausage(true);
      setToppingAvocado(true);
      setToppingTuna(true);
    } else if (valuePizza === "pizza3") {
      setPizzaPrice(12);
      setToppingLobster(true);
      setToppingOyster(true);
      setToppingSalmon(true);
      setToppingBacon(false);
      setToppingDuck(false);
      setToppingSausage(false);
      setToppingAvocado(true);
    }
  };

  const handleSizePizza = (event) => {
    const eventValue = event.target.value;
    const selectedPizzaNumber = Number(pizzaPrice);

    if (eventValue === "small") {
      setResult(selectedPizzaNumber - 1);
    } else if (eventValue === "large") {
      setResult(selectedPizzaNumber + 2);
    }
  };

  const handleToppingSelection = (toppingName, event) => {
    const isChecked = event.target.checked;

    const toppingPrices = {
      Avocado: 1,
      Broccoli: 1,
      Onions: 1,
      Zucchini: 1,
      Lobster: 2,
      Oyster: 2,
      Salmon: 2,
      Tuna: 2,
      Bacon: 3,
      Duck: 3,
      Ham: 3,
      Sausage: 3,
    };

    setSelectedToppings((prevToppings) => {
      if (isChecked) {
        return [...prevToppings, toppingName];
      } else {
        return prevToppings.filter((topping) => topping !== toppingName);
      }
    });

    let totalToppingPrice = 0;

    for (const selectedTopping of selectedToppings) {
      totalToppingPrice += isChecked ? toppingPrices[selectedTopping] : 0;
    }

    setResult(pizzaPrice + totalToppingPrice);
  };

  return (
    <>
      <Box>
        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Pizza</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedPizza}
              onChange={handleSelectPizza}
              row
            >
              <FormControlLabel
                value={"pizza1"}
                control={<Radio />}
                label="Pizza 1 $8"
              />
              <FormControlLabel
                value={"pizza2"}
                control={<Radio />}
                label="Piazza 2 $10"
              />
              <FormControlLabel
                value={"pizza3"}
                control={<Radio />}
                label="Piazza 3 $12"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="medium"
              name="radio-buttons-group"
              onChange={handleSizePizza}
              row
            >
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Small"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="Large"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box>
          <FormGroup>
            <FormLabel id="demo-radio-buttons-group-label">Topping</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingAvocado}
                  onChange={(e) => handleToppingSelection("Avocado", e)}
                />
              }
              label="Avocado"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleToppingSelection("Broccoli", e)}
                />
              }
              label="Broccoli"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleToppingSelection("Onions", e)}
                />
              }
              label="Onions"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => handleToppingSelection("Zucchini", e)}
                />
              }
              label="Zucchini"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingLobster}
                  onChange={(e) => handleToppingSelection("Lobster", e)}
                />
              }
              label="Lobster"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingOyster}
                  onChange={(e) => handleToppingSelection("Oyster", e)}
                />
              }
              label="Oyster"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingSalmon}
                  onChange={(e) => handleToppingSelection("Salmon", e)}
                />
              }
              label="Salmon"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingTuna}
                  onChange={(e) => handleToppingSelection("Tuna", e)}
                />
              }
              label="Tuna"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingBacon}
                  onChange={(e) => handleToppingSelection("Bacon", e)}
                />
              }
              label="Bacon"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingDuck}
                  onChange={(e) => handleToppingSelection("Duck", e)}
                />
              }
              label="Duck"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => handleToppingSelection("Ham", e)} />
              }
              label="Ham"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={toppingSausage}
                  onChange={(e) => handleToppingSelection("Sausage", e)}
                />
              }
              label="Sausage"
            />
          </FormGroup>
        </Box>
        <Box>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>$
          {"  "}
          {result}
        </Box>
      </Box>
    </>
  );
}

export default App;
