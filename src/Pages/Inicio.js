import React from "react";

const Inicio = ({ pool, pegadas, inventario, abrirSobre, ultimoSobre }) => {
  let total = pool.length;
  let obtenidas = pegadas.length;
  let faltantes = total - obtenidas;

  let porcentajeTotal = 0;
  if (total > 0) {
    porcentajeTotal = Math.round((obtenidas * 100) / total);
  }

  let listaSobreVisual = [];
  for (let i = 0; i < ultimoSobre.length; i++) {
    let jug = ultimoSobre[i];
    listaSobreVisual.push(
      <span
        key={i}
        className="badge p-2 text-dark m-1"
        style={{ backgroundColor: "#FFEB3B", border: "1px solid #FFC107" }}
      >
        ⚽ {jug.nombre} ({jug.seleccion.substring(0, 3).toUpperCase()})
      </span>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#D4AF37",
        padding: "20px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <h4 style={{ color: "white", fontWeight: "bold" }}>
        🏆 BIENVENIDOS AL ALBUM VIRTUAL 2026 🏆
      </h4>

      <div
        style={{
          backgroundColor: "#FFC2E2",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "3px solid #E05CA3",
        }}
      >
        <h5
          style={{ color: "#900052", fontWeight: "bold", marginBottom: "10px" }}
        >
          🛍️ ¡TIENDA DE SOBRES DISPONIBLE!
        </h5>
        <button
          onClick={abrirSobre}
          className="btn btn-lg fw-bold text-white shadow"
          style={{
            backgroundColor: "#E05CA3",
            borderRadius: "50px",
            padding: "10px 30px",
          }}
        >
          🎁 ABRIR SOBRE DE FIGURITAS
        </button>

        {ultimoSobre.length > 0 && (
          <div className="mt-3 p-2 bg-white rounded-3">
            <small className="fw-bold text-muted d-block mb-2">
              TE SALIERON EN EL ÚLTIMO SOBRE:
            </small>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              {listaSobreVisual}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          backgroundColor: "#D9D9D9",
          padding: "20px",
          borderRadius: "15px",
          textAlign: "left",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p style={{ color: "#444", fontWeight: "bold", margin: 0 }}>
            RESUMEN GENERAL
          </p>
          <span className="badge bg-dark">
            En Inventario: {inventario.length}
          </span>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 g-3 mb-4">
          <div className="col">
            <div
              style={{
                backgroundColor: "#E8F0FE",
                border: "1px solid #4285F4",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <small
                style={{
                  color: "#1A73E8",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                ✓ PEGADAS EN ÁLBUM
              </small>
              <h3 style={{ color: "#1A73E8", fontWeight: "bold", margin: 0 }}>
                {obtenidas}
              </h3>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                backgroundColor: "#FFF3E0",
                border: "1px solid #FF9800",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <small
                style={{
                  color: "#E65100",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                ✕ POR CONSEGUIR
              </small>
              <h3 style={{ color: "#E65100", fontWeight: "bold", margin: 0 }}>
                {faltantes}
              </h3>
            </div>
          </div>
          <div className="col">
            <div
              style={{
                backgroundColor: "#F3E5F5",
                border: "1px solid #9C27B0",
                padding: "15px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <small
                style={{
                  color: "#7B1FA2",
                  fontWeight: "bold",
                  display: "block",
                }}
              >
                ⚽ TOTAL JUGADORES
              </small>
              <h3 style={{ color: "#7B1FA2", fontWeight: "bold", margin: 0 }}>
                {total}
              </h3>
            </div>
          </div>
        </div>

        <div>
          <small
            style={{
              fontWeight: "bold",
              color: "#444",
              display: "block",
              marginBottom: "6px",
            }}
          >
            AVANCE DEL ÁLBUM:
          </small>
          <div
            className="progress"
            style={{
              height: "22px",
              backgroundColor: "white",
              borderRadius: "50px",
            }}
          >
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${porcentajeTotal}%`, fontWeight: "bold" }}
            >
              {porcentajeTotal}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
