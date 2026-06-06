import React, { useState } from "react";

const Equipos = ({ pool, pegadas }) => {
  const [seleccionado, setSeleccionado] = useState("Argentina");

  let jugadoresFiltrados = [];
  let tengo = 0;

  for (let i = 0; i < pool.length; i++) {
    let jugadorActual = pool[i];

    if (jugadorActual.seleccion === seleccionado) {
      jugadoresFiltrados.push(jugadorActual);

      let jugadorCompletado = false;
      for (let j = 0; j < pegadas.length; j++) {
        if (pegadas[j] === jugadorActual.id) {
          jugadorCompletado = true;
        }
      }

      if (jugadorCompletado === true) {
        tengo++;
      }
    }
  }

  let total = jugadoresFiltrados.length;
  let faltar = total - tengo;

  let progreso = 0;
  if (total > 0) {
    progreso = Math.round((tengo * 100) / total);
  }

  return (
    <div
      style={{
        backgroundColor: "#D4AF37",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h5
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        🏁 PROGRESO POR SELECCIONES 🏁
      </h5>

      <div className="d-flex justify-content-center gap-2 mb-3">
        {["Argentina", "Brasil", "Francia"].map((pais) => (
          <button
            key={pais}
            className="btn btn-sm fw-bold px-3"
            style={{
              borderRadius: "50px",
              backgroundColor: seleccionado === pais ? "#76FF03" : "#9E9E9E",
              color: "black",
              border: "none",
            }}
            onClick={() => setSeleccionado(pais)}
          >
            📍 {pais.toUpperCase()}
          </button>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <div className="row g-4">
          <div className="col-12 col-md-6 text-center">
            <h4 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
              {seleccionado}
            </h4>
            <div
              className="progress mb-3"
              style={{
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50px",
              }}
            >
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${progreso}%` }}
              >
                {progreso}%
              </div>
            </div>

            <div className="bg-white rounded-3 p-2 border">
              <table
                className="table table-bordered mb-0 text-center"
                style={{ fontSize: "0.8rem" }}
              >
                <thead>
                  <tr className="text-muted">
                    <th>TOTAL</th>
                    <th>TENGO</th>
                    <th>FALTAR</th>
                  </tr>
                </thead>
                <tbody style={{ fontWeight: "bold", color: "#1565C0" }}>
                  <tr>
                    <td>{total}</td>
                    <td>{tengo}</td>
                    <td>{faltar}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <small
              style={{
                color: "#555",
                fontWeight: "bold",
                display: "block",
                marginBottom: "8px",
              }}
            >
              PLANTEL REGISTRADO EN ÁLBUM
            </small>
            <div
              style={{
                backgroundColor: "#EAEAEA",
                borderRadius: "10px",
                padding: "10px",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {jugadoresFiltrados.map((j) => {
                let estaCompletado = false;
                for (let k = 0; k < pegadas.length; k++) {
                  if (pegadas[k] === j.id) {
                    estaCompletado = true;
                  }
                }

                return (
                  <div
                    key={j.id}
                    className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded shadow-sm"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <span>📋 {j.nombre}</span>
                    <span
                      className={`badge ${
                        estaCompletado ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {estaCompletado ? "Pegada" : "Falta"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
