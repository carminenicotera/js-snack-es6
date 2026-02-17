const bici = [
  { nome: 'Bici1', peso: 25},
  { nome: 'Bici2', peso: 5},
  { nome: 'Bici3', peso: 2},
  { nome: 'Bici4', peso: 88},
  { nome: 'Bici5', peso: 33},
]

let pesoMin = bici[0];

for (let i = 1; i < bici.length; i++) {
  const element = bici[i];
  if (element.peso < pesoMin.peso) {
    pesoMin = element;
  }
}

console.log('La bici con peso minore è:', pesoMin);


