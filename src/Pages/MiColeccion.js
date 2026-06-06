import React, { useState } from "react";

const MiColeccion = ({ pool, pegadas, inventario, pegarFigurita }) => {
  const [busqueda, setBusqueda] = useState("");
  const [filtroSeleccion, setFiltroSeleccion] = useState("TODAS");

  const filtradas = pool.filter((fig) => {
    const coincideBusqueda = fig.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideFiltro =
      filtroSeleccion === "TODAS" || fig.seleccion === filtroSeleccion;
    return coincideBusqueda && coincideFiltro;
  });

  const contarEnInventario = (id) =>
    inventario.filter((f) => f.id === id).length;

  return (
    <div
      style={{
        backgroundColor: "#D4AF37",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h4
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        MI ALBUM VIRTUAL - 2026
      </h4>

      <div
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <div className="row g-2 mb-4">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className="form-control text-center"
              style={{ borderRadius: "8px" }}
              placeholder="BUSCAR EN EL ÁLBUM..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="col-12 col-sm-6 d-flex gap-2 justify-content-center">
            <button
              className="btn btn-sm fw-bold px-3"
              style={{
                borderRadius: "50px",
                backgroundColor:
                  filtroSeleccion === "TODAS" ? "#76FF03" : "#9E9E9E",
                border: "none",
              }}
              onClick={() => setFiltroSeleccion("TODAS")}
            >
              TODAS
            </button>
            <button
              className="btn btn-sm fw-bold px-3"
              style={{
                borderRadius: "50px",
                backgroundColor:
                  filtroSeleccion === "Argentina" ? "#76FF03" : "#9E9E9E",
                border: "none",
              }}
              onClick={() => setFiltroSeleccion("Argentina")}
            >
              ARGENTINA
            </button>
          </div>
        </div>

        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3 justify-content-center">
          {filtradas.map((fig) => {
            const estaPegada = pegadas.includes(fig.id);
            const cantidadDisponibles = contarEnInventario(fig.id);

            return (
              <div
                className="col d-flex flex-column align-items-center"
                key={fig.id}
              >
                {estaPegada ? (
                  <div
                    style={{
                      background: `linear-gradient(to bottom, ${fig.color}, #004D40)`,
                      borderRadius: "16px",
                      padding: "12px",
                      width: "100%",
                      maxWidth: "160px",
                      color: "white",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-start mb-2"
                      style={{ fontSize: "0.6rem", fontWeight: "bold" }}
                    >
                      <span
                        style={{
                          backgroundColor: "white",
                          padding: "1px 3px",
                          borderRadius: "2px",
                          color: "#004D40",
                        }}
                      >
                        FIFA
                      </span>
                      <span>{fig.seleccion.toUpperCase()}</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: fig.fondoPic,
                        height: "110px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={fig.imagen}
                        alt={fig.nombre}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {fig.nombre}
                    </div>
                    <div
                      className="text-center mt-2 p-1 rounded fw-bold"
                      style={{
                        backgroundColor: "#00796B",
                        fontSize: "0.65rem",
                      }}
                    >
                      ✓ PEGADA
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#9E9E9E",
                      border: "2px dashed #444",
                      borderRadius: "16px",
                      padding: "12px",
                      width: "100%",
                      maxWidth: "160px",
                      opacity: cantidadDisponibles > 0 ? 1 : 0.6,
                    }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-start mb-2"
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: "bold",
                        color: "#444",
                      }}
                    >
                      <span>⬜</span>
                      <span>{fig.seleccion.toUpperCase()}</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#424242",
                        height: "110px",
                        borderRadius: "4px",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span style={{ color: "#666", fontSize: "1.2rem" }}>
                        N°{fig.id}
                      </span>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "0.75rem",
                        fontWeight: "bold",
                        color: "#333",
                      }}
                    >
                      {fig.nombre}
                    </div>
                    <div
                      className="text-center mt-2 p-1 rounded bg-dark text-white fw-bold"
                      style={{ fontSize: "0.65rem" }}
                    >
                      ✕ FALTANTE
                    </div>
                  </div>
                )}

                <div
                  className="mt-2 w-100 text-center"
                  style={{ maxWidth: "160px" }}
                >
                  {cantidadDisponibles > 0 ? (
                    <button
                      onClick={() => pegarFigurita(fig.id)}
                      className="btn btn-xs btn-warning w-100 fw-bold animate-pulse"
                      style={{ fontSize: "0.65rem", borderRadius: "4px" }}
                    >
                      📌 ¡PEGAR ({cantidadDisponibles})!
                    </button>
                  ) : (
                    <span className="text-muted" style={{ fontSize: "0.6rem" }}>
                      No la tienes ({cantidadDisponibles})
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiColeccion;
