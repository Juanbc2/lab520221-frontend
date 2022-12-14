import React, { useState, useEffect } from "react";
import TemplateHeader from "../../template/templateHeader";
import "./searchPage.css";
import  API_URL  from "../../../endpoint";

const SearchPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/empleados/listAll`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); //testing
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <TemplateHeader />
      <h2>Lista de Empleados</h2>
      <table>
        <tbody>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo Electrónico</th>
            <th>Cargo</th>
            <th>Salario</th>
            <th>Dirección</th>
            <th>Oficina</th>
            <th>Dependencia</th>
            <th>Fecha de Ingreso</th>
          </tr>
          {employees.map((item, index) => {
            return (
              <tr key={`row${index}`}>
                <td key={`column0item${index}`}>{item.cedula}</td>
                <td key={`column1item${index}`}>
                  {item.nombre || item.firstName}
                </td>
                <td key={`column2item${index}`}>
                  {item.apellido || item.lastName}
                </td>
                <td key={`column3item${index}`}>{item.correo || item.email}</td>
                <td key={`column4item${index}`}>
                  {item.cargo || item.position}
                </td>
                <td key={`column5item${index}`}>
                  {item.salario || item.salary}
                </td>
                <td key={`column6item${index}`}>
                  {item.direccion || item.address}
                </td>
                <td key={`column7item${index}`}>
                  {item.oficina || item.office}
                </td>
                <td key={`column8item${index}`}>
                  {item.dependencia || item.dependency}
                </td>
                <td key={`column9item${index}`}>
                  {item.fechaIngreso || item.admissionDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
