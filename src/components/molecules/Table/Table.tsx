import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "../../../shared/MOCK_DATA.json";
import { COLUMNS } from "../../../shared/columns";
import "./Table.scss";

export const Table = () => {
  const columns: any = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <table className="table" {...getTableProps()}>
        <thead className="table__thead">
          {headerGroups.map((headerGroup) => (
            <tr
              className="table__thead-tr"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th className="table__thead-th" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table__tbody" {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="table__thead-tr" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="table__tbody-td" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
