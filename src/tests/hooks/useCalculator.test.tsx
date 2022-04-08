import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";
import index from "../../hooks/useCalculator"

test("show result", () => {
  const { result } = renderHook(() => useCalculator());
  const { addition, substraction, square, division, modulo } = result.current;

  expect(addition('2', '2')).toEqual("4");
  expect(substraction('2', '2')).toEqual("0");
  expect(square('2')).toEqual("4");
  expect(division('2', '2')).toEqual("1");
  expect(modulo('618', '54')).toEqual("24");
});
