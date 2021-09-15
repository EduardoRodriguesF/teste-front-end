function numberToReais(val: number): string {
  const fixedVal = val / 100;

  return fixedVal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    useGrouping: false,
  });
}

export default numberToReais;
