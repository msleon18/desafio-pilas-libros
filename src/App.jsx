// src/App.jsx
import React, { useState } from 'react';
import { Stack } from './models/Stack';
import './App.css';

const initialStack = new Stack();
initialStack.push({ name: 'Cien Años de Soledad', isbn: '978-0307474728', author: 'Gabriel García Márquez', editorial: 'Sudamericana' });
initialStack.push({ name: 'El Principito', isbn: '978-9875800067', author: 'Antoine de Saint-Exupéry', editorial: 'Reynal & Hitchcock' });

function App() {
  const [bookStack, setBookStack] = useState(initialStack);
  const [form, setForm] = useState({ name: '', isbn: '', author: '', editorial: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!form.name || !form.isbn || !form.author || !form.editorial) {
      alert('Por favor complete todos los campos');
      return;
    }
    const newStack = new Stack();
    newStack.items = [...bookStack.items, form];
    setBookStack(newStack);
    setForm({ name: '', isbn: '', author: '', editorial: '' });
  };

  const handlePopBook = () => {
    if (bookStack.isEmpty()) {
      alert('La pila está vacía');
      return;
    }
    const newStack = new Stack();
    newStack.items = [...bookStack.items];
    newStack.pop();
    setBookStack(newStack);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
      
      {/* Encabezado corregido para evitar solapamientos */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '26px', margin: '0 0 8px 0', color: '#222' }}>
          Desafío 04: Pila de Libros
        </h1>
        <span style={{ fontSize: '15px', color: '#fff', background: '#343a40', padding: '4px 12px', borderRadius: '12px', fontWeight: 'bold' }}>
          Stack - LIFO
        </span>
      </div>

      {/* Formulario */}
      <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #dee2e6' }}>
        <h3 style={{ marginTop: '0', color: '#495057', marginBottom: '15px' }}>Registrar Nuevo Libro</h3>
        <form onSubmit={handleAddBook} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" name="name" placeholder="Nombre del Libro" value={form.name} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" name="author" placeholder="Autor" value={form.author} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <input type="text" name="editorial" placeholder="Editorial" value={form.editorial} onChange={handleChange} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ background: '#007BFF', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Agregar a la Pila (Push)
          </button>
        </form>
      </div>

      {/* Acciones y Contador */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={handlePopBook} style={{ background: '#DC3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Atender/Remover Cima (Pop)
        </button>
        <span style={{ fontSize: '16px', color: '#333' }}><strong>Total de libros:</strong> {bookStack.size()}</span>
      </div>

      {/* Listado de la Pila */}
      <h3 style={{ color: '#333', borderBottom: '2px solid #dee2e6', paddingBottom: '8px' }}>Contenido de la Pila (Tope Arriba)</h3>
      {bookStack.isEmpty() ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>La pila está vacía.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {bookStack.getItems().map((book, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '12px', borderRadius: '6px', background: index === 0 ? '#e3f2fd' : '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              {index === 0 && <span style={{ color: '#0277bd', fontWeight: 'bold', fontSize: '12px', display: 'block', marginBottom: '6px' }}>[ TOPE DE LA PILA ]</span>}
              <div><strong>Nombre:</strong> {book.name}</div>
              <div><strong>ISBN:</strong> {book.isbn}</div>
              <div><strong>Autor:</strong> {book.author}</div>
              <div><strong>Editorial:</strong> {book.editorial}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;