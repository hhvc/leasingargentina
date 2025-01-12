import React from "react";

function Main() {
  return (
    <main className="main-content container">
      <h2>
        Motivos por los que tu empresa debe aprovechar sí o sí esta herramienta
        financiera
      </h2>
      <ul>
        <li>
          Permite adquirir bienes con el producido de los mismos: Financiación
          de largo plazo con entrega inicial mínima.
        </li>
        <li>
          Reducción del impuesto a las ganancias: Las cuotas mensuales (cánones)
          se imputan como gasto (pérdida).
        </li>
        {/* <li>
          El bien se incorpora al patrimonio de la empresa al finalizar el
          contrato y ya devaluado, disminuyendo el impacto en Activos.
        </li>
        <li>
          Facilita la incorporación o actualización de equipos, permitiendo que
          las empresas cuenten con tecnología de punta.
        </li> */}
        <li>
          Puedes asesorarte con profesionales registrándote en{" "}
          <a href="https://financiado.com.ar/">financiado.com.ar</a> y
          completando el{" "}
          <a href="https://financiado.com.ar/newcredit">formulario</a>.
        </li>
      </ul>
    </main>
  );
}

export default Main;
