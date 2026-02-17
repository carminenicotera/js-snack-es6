const squadre = [
  { nome: 'Inter', punti_fatti: 0, falli_subiti: 0},
  { nome: 'Milan', punti_fatti: 0, falli_subiti: 0},
  { nome: 'Napoli', punti_fatti: 0, falli_subiti: 0},
  { nome: 'Juve', punti_fatti: 0, falli_subiti: 0},
]

for (let i = 0; i < squadre.length; i++) {
  const squadra = squadre[i];
  squadra.punti_fatti = Math.floor(Math.random() * 50) + 1;
  squadra.falli_subiti = Math.floor(Math.random() * 50) + 1;
}

console.table(squadre);

const squadreFalli = [];
for (const element of squadre) {
  const temp = {
    nome: element.nome, falli_subiti: element.falli_subiti
  };
  squadreFalli.push(temp)
}

console.table(squadreFalli);