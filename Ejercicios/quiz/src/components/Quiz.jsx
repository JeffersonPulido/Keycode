import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Qué es un Hook en React?",
      options: [
        "Un tipo de componente",
        "Una función especial",
        "Una API del navegador",
        "Una herramienta de debugging",
      ],
      answer: "Una función especial",
    },
    {
      question: "¿Qué utilidad tiene Tailwind CSS?",
      options: [
        "Proporciona utilidades predefinidas para estilos",
        "Es una base de datos",
        "Proporciona componentes predefinidos",
        "Es un framework de backend",
      ],
      answer: "Proporciona utilidades predefinidas para estilos",
    },
    {
      question: "¿Cuál es el hook que se usa para manejar el estado en React?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      answer: "useState",
    },
    {
      question: "¿Qué es JSX en React?",
      options: [
        "Un lenguaje de estilo",
        "Una función especial",
        "Una extensión de JavaScript",
        "Una clase predefinida",
      ],
      answer: "Una extensión de JavaScript",
    },
    {
      question: "¿Cuál es la principal ventaja del hook `useEffect` en React?",
      options: [
        "Reemplaza `useState`",
        "Permite manejar efectos secundarios",
        "Crea componentes automáticamente",
        "Se usa para definir rutas",
      ],
      answer: "Permite manejar efectos secundarios",
    },
    {
      question:
        "¿Qué hook usarías para manejar el ciclo de vida de un componente en React?",
      options: ["useState", "useEffect", "useReducer", "useRef"],
      answer: "useEffect",
    },
    {
      question:
        "¿Cómo se puede pasar información de un componente padre a un componente hijo en React?",
      options: [
        "A través del hook `useState`",
        "Usando `props`",
        "Con un `return`",
        "Usando `useContext`",
      ],
      answer: "Usando `props`",
    },
    {
      question: "¿Qué hace la función `setState` cuando se usa en React?",
      options: [
        "Elimina un componente del DOM",
        "Actualiza el estado del componente",
        "Crea un nuevo componente",
        "Cambia el tipo de componente",
      ],
      answer: "Actualiza el estado del componente",
    },
    {
      question:
        "¿Cómo puedes acceder a un elemento del DOM directamente en React?",
      options: [
        "Usando `useEffect`",
        "Usando `useRef`",
        "Usando `useState`",
        "Usando `useReducer`",
      ],
      answer: "Usando `useRef`",
    },
    {
      question:
        "¿Cuál es la diferencia entre un componente de clase y un componente funcional en React?",
      options: [
        "Los componentes de clase no existen en React",
        "Los componentes de clase tienen un método `render`, los funcionales no",
        "Los componentes funcionales siempre deben tener un `constructor`",
        "No hay diferencia",
      ],
      answer:
        "Los componentes de clase tienen un método `render`, los funcionales no",
    },
    {
      question:
        "¿Qué hook se utiliza para optimizar el rendimiento de funciones costosas en React?",
      options: ["useEffect", "useMemo", "useState", "useCallback"],
      answer: "useMemo",
    },
    {
      question:
        "¿Cómo aplicas clases de Tailwind CSS a un componente en React?",
      options: [
        "Usando la propiedad `style`",
        "Usando `className`",
        "Usando `class`",
        "Usando `id`",
      ],
      answer: "Usando `className`",
    },
    {
      question:
        "¿Cuál es la forma correcta de crear rutas en una SPA usando React Router?",
      options: [
        "Usando el componente `<Route />`",
        "Usando el componente `<Link />`",
        "Usando el componente `<Switch />`",
        "Usando el componente `<Redirect />`",
      ],
      answer: "Usando el componente `<Route />`",
    },
    {
      question:
        "¿Cuál es el hook que te permite compartir datos en múltiples componentes sin prop drilling?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      answer: "useContext",
    },
    {
      question:
        "¿Cómo puedes hacer que un componente se renderice condicionalmente en React?",
      options: [
        "Usando un `if` o `ternary operator`",
        "Usando `useEffect`",
        "Usando un `switch`",
        "Usando un componente de clase",
      ],
      answer: "Usando un `if` o `ternary operator`",
    },
    {
      question: "¿Qué utilidad tiene el hook `useReducer` en React?",
      options: [
        "Es una alternativa más compleja a `useState`",
        "Se utiliza para manejar el ciclo de vida de componentes",
        "Permite gestionar el DOM directamente",
        "Es un hook obsoleto",
      ],
      answer: "Es una alternativa más compleja a `useState`",
    },
    {
      question: "¿Qué es el Virtual DOM en React?",
      options: [
        "Una copia exacta del DOM real",
        "Una representación en memoria del DOM real",
        "Un método para hacer componentes más rápidos",
        "Una función interna de los hooks",
      ],
      answer: "Una representación en memoria del DOM real",
    },
    {
      question:
        "¿Cuál es el hook que se usa para manejar formularios en React?",
      options: ["useEffect", "useState", "useReducer", "useForm"],
      answer: "useState",
    },
    {
      question:
        "¿Cómo se puede ejecutar una función solo una vez cuando se monta un componente en React?",
      options: [
        "Pasando un array vacío como segundo argumento de `useEffect`",
        "Usando el hook `useState`",
        "Usando el método `render`",
        "Ejecutando la función en `return` del componente",
      ],
      answer: "Pasando un array vacío como segundo argumento de `useEffect`",
    },
    {
      question:
        "¿Cuál es la forma correcta de definir una clase en Tailwind CSS para cambiar el color del texto a rojo?",
      options: ["text-color-red", "text-red-500", "color-text-red", "bg-red"],
      answer: "text-red-500",
    },
  ];

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {showScore ? (
        <div className="p-6 text-2xl font-bold bg-white rounded-md shadow-lg">
          ¡Puntuación final: {score} de {questions.length}!
        </div>
      ) : (
        <div className="w-full max-w-md p-6 bg-white rounded-md shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
