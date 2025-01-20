import { ColDef, ColGroupDef } from "ag-grid-community";
import Empleado from "./EmpleadoTypes";
import ActionCell from "./ActionCell";

const empleadoColumnDefs: (ColDef<Empleado> | ColGroupDef<Empleado>)[] = [
  {
    headerCheckboxSelection: true, // Casilla en el encabezado para seleccionar todas las filas
    checkboxSelection: true, // Casillas en cada fila
    headerName: "",
    width: 50,
    pinned: "left", // Fijar esta columna a la izquierda
  },
  {
    headerName: "Index",
    field: "id",
    width: 100,
    valueGetter: (params) => {
      if (
        params.node &&
        params.node.rowIndex !== null &&
        params.node.rowIndex !== undefined
      ) {
        return params.node.rowIndex + 1;
      }
      return null;
    },
  },
  {
    headerName: "Clasificación",
    children: [
      { headerName: "Grupo", field: "grupo", width: 100, filter: true },
      { headerName: "Subgrupo", field: "subgrupo", width: 100, filter: true },
      { headerName: "Sección", field: "seccion", width: 100, filter: true },
    ],
  },
  {
    headerName: "Concepto de Movimiento",
    field: "concepto_movimiento",
    width: 150,
    filter: true,
  },
  {
    headerName: "Cantidad",
    field: "cantidad",
    width: 100,
    filter: true,
  },
  {
    headerName: "Número de Identificación",
    field: "numero_identificacion",
    width: 200,
    filter: true,
  },
  {
    headerName: "Nombre y Descripción de los Bienes",
    children: [
      { headerName: "Nombre", field: "nombre", width: 200, filter: true },
      { headerName: "Marca", field: "marca", width: 150, filter: true },
      { headerName: "Modelo", field: "modelo", width: 150, filter: true },
      { headerName: "Serial", field: "serial", width: 150, filter: true },
    ],
  },
  {
    headerName: "Montos (Bs.)",
    children: [
      {
        headerName: "Incorporaciones",
        field: "incorporaciones",
        width: 150,
        filter: true,
      },
      {
        headerName: "Desincorporaciones",
        field: "desincorporaciones",
        width: 150,
        filter: true,
      },
    ],
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionCell(params); // Cambiado para usar un componente React
    },
  },
];

export default empleadoColumnDefs;
