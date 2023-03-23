import React from 'react';
import '../assets/styles/components/markets-table.scss'
import CustomTr from "./UI/ CustomTr";
import {IProject} from "../types/Markets";

function MarketsTable({projects}: {projects: IProject[]}) {
    return (
        <div className="markets-table">
            <table className="table table-borderless">
                <thead className="markets-table__first-row">
                <tr>
                    <th className="markets-table__header" scope="col">№</th>
                    <th className="markets-table__header" scope="col">Название</th>
                    <th className="markets-table__header" scope="col">Адрес</th>
                    <th className="markets-table__header" scope="col">Действие</th>
                </tr>
                </thead>
                <tbody>
                { projects?.map(p =>
                    <CustomTr
                        key={p.number}
                        project={p}/>
                ) }
                </tbody>
            </table>
        </div>
    );
}

export default MarketsTable;
