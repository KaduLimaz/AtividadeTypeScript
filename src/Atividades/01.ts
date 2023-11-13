// 01
type mediaAluno = {
  media: number;
  aprovado: boolean;
};

export function media(n1: number, n2: number) {
  const media = n1 + n2 / 2;

  const aprovado = media >= 6;

  return { media, aprovado };
}

console.log(media(5, 5));


