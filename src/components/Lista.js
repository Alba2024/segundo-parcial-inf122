import React, { useState } from 'react';
function Lista() {
    return (
        const agregarNota = () => {
            onEdit(nota.id, nuevoTexto);
            setEditando(false);
        }

        <div className='contenedor-principal'>
            <button className='boton' onClick={agregarNota}>Agregar</button>
                {notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                />
                ))}
        </div>
            
    );
}

export default Lista;