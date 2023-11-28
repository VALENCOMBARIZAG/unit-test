const div = require("./div");

test("20 / 10 should be 2", () => {
  
  const result = div(20, 10);
  
  expect(result).toBe(2);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = div("20", "10");
  expect(result).toBe(err);
});