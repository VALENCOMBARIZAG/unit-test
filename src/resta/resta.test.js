const res = require("./resta")

test ("20 - 10 shhould be 10", ()=>{
    const result = res(20, 10);

    expect(result).toBe(10);
});

test("si los datos no son enteros me debe retornar un error", () => {
    const err = "datos invalidos";
    const result = res("10", "20");
    expect(result).toBe(err);
  });