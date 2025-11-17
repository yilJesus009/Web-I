const notas = [
  {
    "Nombre": "kellie Shaw",
    "Practicos": 60,
    "Parcial1": 20,
    "Parcial2": 45,
    "ProyectoFinal": 40,
    "ExamenFinal": 60
  },
  {
    "Nombre": "Gary Brock",
    "Practicos": 76,
    "Parcial1": 34,
    "Parcial2": 44,
    "ProyectoFinal": 67,
    "ExamenFinal": 27
    },
{
    "Nombre": "Brittany Krueger",
    "Practicos": 88	,
    "Parcial1": 24,
    "Parcial2": 77,
    "ProyectoFinal": 71,
    "ExamenFinal": 26
  },
  {
    "Nombre": "Denise Hicks",
    "Practicos": 38,
    "Parcial1": 93,
    "Parcial2": 15,
    "ProyectoFinal": 34,
    "ExamenFinal": 26
  },
  {
    "Nombre": "Shannon Schmitt",
    "Practicos": 93,
    "Parcial1": 54,
    "Parcial2": 44,
    "ProyectoFinal": 51,
    "ExamenFinal": 28
  },
  {
    "Nombre": "Cassandra Evans",
    "Practicos": 69,
    "Parcial1": 45,
    "Parcial2": 69,
    "ProyectoFinal": 54,
    "ExamenFinal": 24
  },
  {
    "Nombre": "Holly Padilla",
    "Practicos": 52,
    "Parcial1": 13,
    "Parcial2": 100,
    "ProyectoFinal": 69,
    "ExamenFinal": 76
  },
  {
    "Nombre": "Michele Davis",
    "Practicos": 100,
    "Parcial1": 11,
    "Parcial2": 34,
    "ProyectoFinal": 11,
    "ExamenFinal": 5
  },
  {
    "Nombre": "Raymond Farrell",
    "Practicos": 1,
    "Parcial1": 27,
    "Parcial2": 71,
    "ProyectoFinal": 26,
    "ExamenFinal": 40
  },
  {
    "Nombre": "Corey Wolf",
    "Practicos": 55,
    "Parcial1": 42,
    "Parcial2": 42,
    "ProyectoFinal": 21,
    "ExamenFinal": 2
  }
]

function calcularAprobados(notas) {
  const aprobados =[];

  for(let i = 0; i < notas.length; i++) {
    const estudiante = notas[i];

    const notaFinal =
      estudiante.Practicos * 0.10 +
      estudiante.Parcial1 * 0.10 +
      estudiante.Parcial2 * 0.15 +
      estudiante.ProyectoFinal * 0.40 +
      estudiante.ExamenFinal * 0.25;

     if (notaFinal >= 51) {
      aprobados.push({
        nombre: estudiante.Nombre,
        notaFinal: notaFinal
      });
    }
  }

  return aprobados;
}

const resultado = calcularAprobados(notas);
console.table(resultado);