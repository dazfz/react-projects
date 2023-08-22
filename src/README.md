# Notas

## 1. useState

Administra estados en componentes funcionales. Usado para crear y actualizar variables de estado.

```jsx
const [variable, setVariable] = useState(valorInicial);
```

## 2. useEffect

Maneja efectos secundarios en componentes funcionales. Útil para llamadas al servidor y actualizaciones en el ciclo de vida.
Ejemplo:

```jsx
useEffect(() => {
  // Código de efecto
}, [dependencias]);
```

## 3. Router

Se puede usar children, que se define en el router. Si se quiere un segmento dinamico, se hace en el componente.

## 4. Context API

Comparte datos entre componentes sin pasar props. Creado con `createContext`, proveído por `ContextObject.Provider`, el componente lo usa con `useContext`.

## 5. useReducer

Alternativa a `useState` para estados más complejos o actualizaciones dependientes del estado anterior.

## 6. useRef

Mantiene valores sin provocar renderizaciones. Útil para valores persistentes o acceso al DOM.

## 7. useMemo

Caché de valores costosos. Ideal para operaciones computacionales intensas.

## 8. useCallback

Similar a useMemo pero para funciones. Tiene peor desempeño.
