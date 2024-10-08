import {useFormil} from 'formik';

function ValidarFormulario( {onSubmit} ) {

  const extenciones_validas = ['.jpg', '.pdf', '.uml'];

  const formik = useFormik({
    initialValues: {
      file: null,
    },
    validate: values =>{
      const errors = {};
      if(!values.file) {
        errors.file = 'Se requiere un archivo';
      }else {
        const extencion_archivo = values.file.name.split('.').pop();
        const extencion_valida = extenciones_validas.includes(`.${extencion_archivo.toLowerCase()}`);

        if(!extencion_valida){
          errors.file = 'el archivo debe ser una imagen o un archivo .pdf o .uml';
        }
      }
      return errors;
    },
    onSubmit: values =>{
      onSubmit(values.file);
    },
  });

  const handleFileChange = (event)=> {
    const selectFile = event.currentTarget.files[0];
    formik.setFielValue('file', selectFile);
  };

  return (
    <div>
      <input
        type = "file"
        onChange={handleFileChange}
      />

      {formik.errors.file ?( 
        <p style= {{color : 'red'}}> {formik.errors.file} </p>)
        : null
      }

      <button
        type="submit"
        onClick={formik.handleSubmit}
        disabled = {!formik.values.file}
      >
        ENVIAR
      </button>
    </div>
  );
};

export default ValidarFormulario