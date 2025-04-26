Métodos disponibles
1. MiniTable.agregarFila(data, tablaId)

Descripción:
Agrega una nueva fila a una tabla existente.

Parámetros:

*data (Objeto): Cada propiedad será el contenido de una celda (<td>).

*tablaId (String): ID de la tabla donde se agregará la fila (sin el símbolo #).

Importante:

El número de propiedades del objeto data debe coincidir con el número de columnas de la tabla.

Si la tabla tiene una columna extra para "Acciones" (por ejemplo, botones de eliminar), MiniTable la detecta automáticamente.

Si ocurre un error, muestra un alert() informativo.

Ejemplo de uso:

javascript
Copiar
Editar
const persona = {
  id: 101,
  nombre: "Ana Gómez",
  edad: 25,
  email: "ana@mail.com"
};

MiniTable.agregarFila(persona, 'miTabla');
2. MiniTable.eliminarFila(idValor, tablaId)
Descripción:
Elimina la fila de la tabla cuyo valor en la columna id coincida con el valor entregado.

Parámetros:

*idValor (String o Number): Valor de ID que identifica la fila que se desea eliminar.

*tablaId (String): ID de la tabla donde buscar (sin el símbolo #).

Funcionamiento:

Busca la fila comparando el valor en la columna llamada id (detectada automáticamente).

Si encuentra la fila, la elimina.

Si no la encuentra, muestra un alert() de error.

Ejemplo de uso:

javascript
Copiar
Editar
MiniTable.eliminarFila(101, 'miTabla');
Consideraciones Técnicas
Si la tabla no existe o los parámetros son incorrectos, el error se notifica mediante alert.

La columna id es detectada buscando el encabezado que diga "id" (insensible a mayúsculas).
Si no se encuentra, se asume que es la primera columna.
