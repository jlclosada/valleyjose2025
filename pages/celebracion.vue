<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center pt-24">
    <!-- Contenido principal -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        Cortijo El Esparragal
      </h1>
    </div>
    <!-- Imagen de la Iglesia -->
    <div class="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg animate-fade-in">
      <img src="/assets/images/cortijo.jpg" alt="Iglesia Nuestra Señora del Amor"
        class="w-full rounded-3xl object-cover">
    </div>

    <!-- Detalles de la Ceremonia -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left">
      <h2 class="text-3xl font-bold">Detalles de la celebración</h2>
      <p class="mt-3 text-lg">📍 <strong>Cortijo El Esparragal, Gerena, Sevilla</strong></p>
      <p class="text-lg mt-3">📅 <strong>22 de Noviembre de 2025</strong></p>
      <p class="text-lg mt-3">⏰ <strong>13:30</strong></p>
    </div>

    <!-- Mapa Interactivo -->
    <div class="mt-12 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl animate-fade-in">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4724.518036814649!2d-6.10781583190993!3d37.527140109831876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd123f06e04eb561%3A0x981a797489571205!2sHacienda%20Esparragal!5e0!3m2!1ses!2ses!4v1742312808054!5m2!1ses!2ses"
        width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- Botones de Acción -->
    <div class="mt-6 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
      <a href="https://maps.app.goo.gl/SHt8dZZCAFqFkz17A" target="_blank"
        class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
        📍 Abrir en Google Maps
      </a>
    </div>
    <!-- Sección sobre Cortijo El Esparragal -->
    <div
      class="mt-12 w-full max-w-4xl bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left mb-2">
      <h2 class="text-3xl font-bold mt-4">La Magia de un Cortijo Andaluz: Cortijo El Esparragal</h2>

      <div class="mt-6 flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/2">
          <img src="/assets/images/esparragal.jpg" alt="Cortijo El Esparragal"
            class="w-full h-auto rounded-xl shadow-lg object-cover">
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-m">
            Cortijo El Esparragal es un lugar lleno de historia y encanto, ubicado sobre antiguos terrenos que una vez
            fueron parte de un asentamiento romano. Esta finca ha sido testigo de la evolución de la región, desde su
            origen en tiempos tartésicos hasta convertirse en un referente para bodas y eventos.
          </p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-2xl font-semibold">Historia y Origen</h3>
        <p class="mt-3 text-m">
          El Cortijo El Esparragal se asienta sobre lo que fue un antiguo asentamiento romano, originado por un
          castrejón tartésico que controlaba estas tierras. Esta zona fue un importante punto de paso entre Itálica y
          Emérita Augusta, y también servía como una de las principales atalayas para las rutas comerciales que
          conectaban la zona minera de Riotinto (Huelva) con el valle del Guadalquivir.
        </p>
        <p class="mt-3 text-m">
          Como vestigios de esa presencia romana, se pueden apreciar fragmentos de una muralla que corona el cerro, así
          como algunas habitaciones de un edificio romano que incluyen restos de hornos de calefacción y muros
          recubiertos con cal hidráulica, indicativos de unas termas que se alimentaban de un manantial cercano.
        </p>
      </div>

      <div class="mt-6 flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/2">
          <img src="/assets/images/patio.jpg" alt="Restos romanos en Cortijo El Esparragal"
            class="w-full h-auto rounded-xl shadow-lg object-cover">
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-m">
            Los vestigios de la época romana se mantienen en este enclave histórico, proporcionando un ambiente único
            que mezcla la antigüedad con la modernidad. Las termas y otros restos son testimonio de la importancia
            histórica del lugar.
          </p>
        </div>
      </div>

      <div class="mt-6">
        <h3 class="text-2xl font-semibold">La Historia del Cortijo</h3>
        <p class="mt-3 text-m">
          Tras la Reconquista, el rey Juan II otorgó la jurisdicción del lugar a Don Fernando Medina. Con el tiempo, la
          finca fue adquirida por la Orden de los Jerónimos en el siglo XVII, quienes establecieron un convento y
          construyeron una capilla dedicada a la Virgen de Belén. Este convento fue el núcleo del actual cortijo.
        </p>
        <p class="mt-3 text-m">
          Tras la desamortización de Mendizábal, el cortijo pasó por diversos propietarios hasta que en 1851, la familia
          Vázquez lo adquirió y construyó el cortijo señorial. En 1967, la familia Oriol tomó posesión del cortijo,
          restaurando cuidadosamente el edificio mientras mantenían la capilla y los patios del convento.
        </p>
      </div>

      <div class="mt-6">
        <h3 class="text-2xl font-semibold">Una Finca Única</h3>
        <p class="mt-3 text-m">
          Cortijo El Esparragal abarca más de 2.700 hectáreas de terreno, dividido en tres grandes áreas: una zona de
          olivar y tierras de labranza, una extensión de bosque mediterráneo dedicada a la caza mayor, y una dehesa con
          encinas y alcornoques, hogar de la raza de vaca retinta, originaria de los toros salvajes andaluces.
        </p>
        <p class="mt-3 text-m">
          El cortijo también cuenta con un embalse, construido por el Marqués de Casa Oriol, que tiene una capacidad de
          dos millones de metros cúbicos de agua. Este embalse es crucial para el riego y contribuye a mantener el
          ecosistema de fauna silvestre en la finca.
        </p>
      </div>

      <div class="mt-6">
        <h3 class="text-2xl font-semibold">El Cortijo Hoy</h3>
        <p class="mt-3 text-m">
          Hoy en día, Cortijo El Esparragal es un lugar ideal para la celebración de bodas y eventos. Con sus amplias
          instalaciones y su entorno natural, ofrece diversos espacios exteriores e interiores para hacer de cualquier
          celebración un evento único e inolvidable.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const googleCalendarLink = ref(
  "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWcxNDAxdnU5NHRqbnBkNWhvY2l0NGVoNGEgamxjYWNsb3NhZGFAbQ&tmsrc=jlcaclosada%40gmail.com"
);
</script>

<style>
/* Animaciones */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-slide {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.font-custom {
  font-family: 'Great Vibes', cursive;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-slide {
  animation: fade-slide 1s ease-out;
}
</style>
