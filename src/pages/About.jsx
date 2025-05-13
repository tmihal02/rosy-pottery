import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1 >O RossyPottery</h1>

      <section className="about-section">
        <img src="../cave.jpg" alt="RossyPottery workshop" className="about-image" />
        <div>
          <p>
            RossyPottery je mala radionica posvećena stvaranju unikatnih keramičkih komada 
            izrađenih s ljubavlju i pažnjom. Svaki komad nosi priču, inspiriranu prirodom, 
            tradicijom i modernim dizajnom.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="../ee.jpg" alt="Handmade pottery process" className="about-image" />
        <div>
          <p>
            Naša misija je donijeti toplinu, eleganciju i funkcionalnost u vaš dom kroz ručno 
            rađenu keramiku koja traje generacijama. Svaki komad prolazi kroz pažljivo 
            oblikovanje, sušenje, pečenje i glaziranje kako bi postao pravo malo umjetničko djelo.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="../bigmug.jpg" alt="Pottery collection" className="about-image" />
        <div>
          <p>
            Vjerujemo da keramika može povezati ljude — bilo kao poklon dragoj osobi, detalj u vašem domu 
            ili komad koji ćete koristiti svakodnevno. Naša kolekcija uključuje šalice, tanjure, vaze i još mnogo toga.
          </p>
        </div>
      </section>

      <section className="about-section">
        <img src="../pottery-darker.jpg" alt="Visit our store" className="about-image" />
        <div>
          <p>
            Posjetite nas i otkrijte kako obični predmeti mogu postati izvanredni. 
            Veselimo se vašoj posjeti u našoj radionici gdje možete vidjeti kako 
            nastaje čarolija keramike i odabrati nešto posebno za sebe.
          </p>
        </div>
      </section>
    </div>
  );
}
