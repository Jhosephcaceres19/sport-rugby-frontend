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
    <div>
      <input
        type="file"
        onChange={handleFileChange}
      />

      {formik.errors.file ? (
        <p style={{ color: 'red' }}>{formik.errors.file}</p>
      ) : null}

      <button
        type="submit"
        onClick={formik.handleSubmit}
        disabled={!formik.values.file}
      >
        ENVIAR
      </button>
    </div>
  );
}

export default ValidarFormulario;
