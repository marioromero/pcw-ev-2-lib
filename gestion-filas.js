class MiniTable {
    static _alert(msg) { alert(`MiniTable: ${msg}`); }
    
    static _colCount($table) {
      const $head = $table.find('thead th');
      return $head.length || $table.find('tr:first td').length;
    }
  
    static _idIndex($table) {
      const $ths = $table.find('thead th');
      if ($ths.length) {
        const idx = $ths.toArray().findIndex(el => $(el).text().trim().toLowerCase() === 'id');
        return idx !== -1 ? idx : 0;
      }
      return 0;
    }
  
    static agregarFila(data, tablaId) {
      try {
        const $table = $('#' + tablaId);
        if (!$table.length) return this._alert(`No existe la tabla #${tablaId}`);
  
        const props = Object.keys(data);
        const cols  = this._colCount($table);
  
        const hayAcciones = $table.find('thead th').last().text().trim().toLowerCase() === 'acciones';
        const colsEsperadas = hayAcciones ? props.length + 1 : props.length;
  
        if (cols !== colsEsperadas)
          return this._alert(`Propiedades (${props.length}) no coinciden con columnas (${cols}${hayAcciones ? ' incluyendo acciones' : ''})`);
  
        const $tr = $('<tr>');
        props.forEach(k => $tr.append($('<td>').text(data[k])));
  
        if (hayAcciones) {
          const id = data.id;
          const $boton = $('<button>')
            .text('Eliminar')
            .click(() => this.eliminarFila(id, tablaId));
          $tr.append($('<td>').append($boton));
        }
  
        $table.find('tbody').append($tr);
      } catch (e) {
        this._alert(e.message);
      }
    }
  
    static eliminarFila(idValor, tablaId) {
      try {
        const $table = $('#' + tablaId);
        if (!$table.length) return this._alert(`No existe la tabla #${tablaId}`);
        const idx = this._idIndex($table);
        const $row = $table.find('tbody tr').filter((_, tr) => 
          $(tr).children().eq(idx).text() == idValor
        );
        if (!$row.length) return this._alert(`No se encontró fila con id = ${idValor}`);
        $row.remove();
      } catch (e) {
        this._alert(e.message);
      }
    }
  }
  