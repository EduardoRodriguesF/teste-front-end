function numberToReais(val: number): string {
  const fixedVal = val / 100;

  return fixedVal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default numberToReais;
