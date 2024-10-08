import { Link } from "react-router-dom";

export const Article = () => {
  return (
    <div>
      <section className=" ">
        <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leading-none lg:text-4xl xl:text-7xl">
              CODE DIAGRAMS
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              CodeDiagram convierte tus diagramas UML en código automáticamente,
              agilizando el desarrollo,
              <br className="hidden md:inline lg:hidden" />y transformando tus
              diseños en soluciones reales al instante.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 text-lg font-semibold border rounded bg-cyan-400 hover:bg-teal-400"
              >
                Iniciar
              </Link>
              <Link
                rel="noopener noreferrer"
                to="#"
                className="px-8 py-3 text-lg font-semibold border rounded bg-cyan-400 hover:bg-teal-400"
              >
                Subir archivo
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center content-center p-6  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="../../public/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[500px] xl:h-[550px] 2xl:h-[550px]"
            />
          </div>
        </div>
      </section>

      <section className="m-4 md:m-8 my-20 xl:my-52 ">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">¿Qué hace CodeDiagram?</h2>
          <p className="">information system team two</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Verificación de Archivos</h3>
            <div className="space-y-1 leading-tight">
              <p> Comprueba automáticamente si el archivo subido es un diagrama UML válido.</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Conversión Automática</h3>
            <div className="space-y-1 leading-tight">
              <p> Transforma diagramas UML en código de manera instantánea y precisa.</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Interfaz Intuitiva</h3>
            <div className="space-y-1 leading-tight">
              <p> Disfruta de una experiencia de usuario sencilla y amigable para subir y convertir archivos.</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Optimización del Desarrollo</h3>
            <div className="space-y-1 leading-tight">
              <p> Acelera el proceso de desarrollo al eliminar tareas manuales, permitiendo un enfoque más ágil en tus proyectos.</p>
              
            </div>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Código Limpio y Eficiente</h3>
            <div className="space-y-1 leading-tight">
              <p> Genera código bien estructurado y mantenible a partir de tus diagramas, listo para usar en tus aplicaciones.</p>
             
            </div>
          </div>
          <div className="flex flex-col items-center p-4 hover:bg-cyan-400 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 "
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-3xl font-semibold text-center">Feedback Instantáneo</h3>
            <div className="space-y-1 leading-tight">
              <p> Ofrece sugerencias y advertencias sobre posibles errores en el diagrama antes de la conversión.</p>
             
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 mt-10 mx-auto sm:p-10 md:p-16 ">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1727982180/461752157_377988012075132_9023246275303271490_n_yvn1bw.jpg"
            alt=""
            className=" h-60 sm:h-96 rounded-2xl"
          />
          <div className="p-6 pb-12 m-4 bg-teal-500/70 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl"
              >
                Equipo UMLCode: Transformando Diagramas UML en Código
              </a>
              <p className="text-xs ">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline"
                >
                  Teams UMSS
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              <p>
                Descubre UMLCode, la herramienta que transforma tus diagramas
                UML en código funcional con solo un clic. Olvídate de las
                complejidades del desarrollo: ahorra tiempo, reduce errores y
                acelera tu proceso de creación de software. ¡Únete a la
                revolución del desarrollo automatizado y lleva tus proyectos al
                siguiente nivel con UMLCode!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
