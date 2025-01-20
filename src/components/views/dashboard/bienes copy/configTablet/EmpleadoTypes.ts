interface EmpleadoTypes {
  id: number; // ID
  grupo: number; // Clasificación - Grupo
  subgrupo: number; // Clasificación - Subgrupo
  seccion: number; // Clasificación - Sección
  concepto_movimiento: string; // Concepto de movimiento (alta, baja, etc.)
  cantidad: number; // Cantidad de bienes
  numero_identificacion: string; // Número único de identificación del bien
  nombre: string; // Nombre del bien
  marca: string; // Marca del bien
  modelo: string; // Modelo del bien
  serial: string; // Serial del bien
  incorporaciones: number | null; // Monto de incorporación (en Bs.)
  desincorporaciones: number | null; // Monto de desincorporación (en Bs.)
  observaciones?: string; 
}

export default EmpleadoTypes;