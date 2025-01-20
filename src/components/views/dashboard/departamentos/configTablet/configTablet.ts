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
    field: "clasificacion",
    width: 150,
    filter: true,
  },
  {
    headerName: "Departamento",
    field: "departamento",
    width: 150,
    filter: true,
  },
  {
    headerName: "Dependencia",
    field: "dependencia",
    width: 150,
    filter: true,
  },
  {
    headerName: "Cantidad",
    field: "cantidad",
    width: 200,
    filter: true,
  },
  {
    headerName: "Costo Total",
    field: "cantidad",
    width: 200,
    filter: true,
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionCell(params); 
    },
  },
];

export default empleadoColumnDefs;
