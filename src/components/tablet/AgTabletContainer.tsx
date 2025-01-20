import React from "react";
import { AgGridReact } from "ag-grid-react";
// import {  ModuleRegistry } from 'ag-grid-community'; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";





interface AgTabletContainerProps {
    rowData: any[];
    columnDefs: any[];
    quickFilterText: string;
    height?: string;
    width?: string;
}

const AgTabletContainer: React.FC<AgTabletContainerProps> = ({
    rowData,
    columnDefs,
    quickFilterText,
    height = "70vh",
    width = "100%",
}) => {
    const getRowStyle = (params: any) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#0091ea91' };
        }
        return undefined;
    };

    return (
        <div className="container-my-ag-grid">
            <div className="tablet ag-theme-balham" style={{ height: height, width: width }}>
                <AgGridReact
                    rowData={rowData.reverse()}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={30}
                    quickFilterText={quickFilterText}
                    getRowStyle={getRowStyle}
                    rowSelection="multiple"
                />
            </div>
        </div>
    );
};

export default AgTabletContainer;