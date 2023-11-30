import React, { useState } from "react";

const NavTabs = () => {
  // Crear nuestro estado
  const [activeSection, setActiveSection] = useState("section1");
  // ternarios condicion ? caso_positivo : caso_negativo
  return (
    <div className="my-5">
      <h4>Navtabs</h4>

      {/* Cuando le de click a este */}
      <button onClick={() => setActiveSection("section1")}>Seccion 1</button>

      <button onClick={() => setActiveSection("section2")}>Seccion 2</button>

      {/* If */}
      {activeSection === "section1" ? (
        <section>
          <h5>Seccion 1</h5>
          <p>Contenido seccion 1</p>
        </section>
      ) : (
        <section>
          {/* Else */}
          <h5>Seccion 2</h5>
          <p>Contenido seccion 2</p>
        </section>
      )}
    </div>
  );
};

export default NavTabs;
