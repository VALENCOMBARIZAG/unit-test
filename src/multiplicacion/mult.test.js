const mult = require("./mult");

test("10 * 20 should be 200", () => {
  
  const result = mult(10, 20);
  
  expect(result).toBe(200);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = mult("10", "20");
  expect(result).toBe(err);
});