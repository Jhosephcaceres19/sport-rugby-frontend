import { useFormik } from 'formik';
import * as Yup from 'yup';

// eslint-disable-next-line react/prop-types
function ValidarFormulario({ onSubmit }) {
  const extenciones_validas = ['.jpg', '.pdf', '.uml'];

  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required('Se requiere un archivo')
      .test('fileFormat', 'El archivo debe ser una imagen o un archivo .pdf o .uml', (value) => {
        if (!value) return false;
        const extencion_archivo = value.name.split('.').pop();
        return extenciones_validas.includes(`.${extencion_archivo.toLowerCase()}`);
      }),
  });

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validationSchema, // Aplica el esquema de validación
    onSubmit: (values) => {
      onSubmit(values.file);
    },
  });

  const handleFileChange = (event) => {
    const selectFile = event.currentTarget.files[0];
    formik.setFieldValue('file', selectFile);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Input file oculto */}
      <input
        id="file"
        name="file"
        type="file"
        className="hidden" // Ocultamos el input
        onChange={handleFileChange}
      />

      {/* Botón personalizado para seleccionar archivo */}
      <label
        htmlFor="file"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Seleccionar archivo
      </label>

      {/* Mostrar el nombre del archivo seleccionado si hay */}
      {formik.values.file && (
        <p className="text-gray-700 text-sm">
          Archivo seleccionado: {formik.values.file.name}
        </p>
      )}

      {/* Mostrar mensaje de error si hay */}
      {formik.errors.file ? (
        <p className="text-red-500 text-sm">{formik.errors.file}</p>
      ) : null}

      {/* Botón de enviar */}
      <button
        type="submit"
        onClick={formik.handleSubmit}
        disabled={!formik.values.file}
        className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300 ${
          !formik.values.file ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ENVIAR
      </button>
    </div>
  );
}

export default ValidarFormulario;
