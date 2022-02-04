import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./components/Product";

let counter;
let increaseButton;
let decreaseButton;
let addToBasketBtn;
let basket;

beforeEach(() => {
    render(<Product />);

    increaseButton = screen.getByTestId("incrementBtn");
    decreaseButton = screen.getByTestId("decrementBtn");
    counter = screen.getByTestId("counter");
    addToBasketBtn = screen.getByTestId("addToBasketBtn");
    basket = screen.getByTestId("basket");
});

test("should be able to increase and decrease product quantity", async () => {
    expect(counter).toHaveTextContent("1");
    userEvent.click(increaseButton);
    expect(counter).toHaveTextContent("2");
    userEvent.click(decreaseButton);
    expect(counter).toHaveTextContent("1");
});

test("should not be able to decrease product quantity below 1", async () => {
  expect(counter).toHaveTextContent("1");
  userEvent.click(decreaseButton);
  expect(counter).toHaveTextContent("1");

});

test("should be able to add items to the basket", async () => {
    expect(basket).toBeEmpty();
    userEvent.click(addToBasketBtn);
    expect(basket).not.toBeEmpty();

});
