interface EmpleadoTypes {
  id: number; // Identificador único del registro
  clasificacion: string; // Clasificación del bien o categoría
  departamento: string; // Departamento asociado al bien o registro
  dependencia: string; // Dependencia administrativa o unidad
  cantidad: number; // Cantidad de bienes o elementos
  costo_total: number; // Costo total asociado al bien o elemento
}

export default EmpleadoTypes;