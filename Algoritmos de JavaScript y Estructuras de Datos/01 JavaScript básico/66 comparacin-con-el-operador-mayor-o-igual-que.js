function testGreaterOrEqual(val) {
  if (val >= 20) {  // Cambia esta línea
    return "20 or Over";
  }

  if (val >= 10) {  // Cambia esta línea
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);