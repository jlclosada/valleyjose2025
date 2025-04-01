<template>
  <div class="relative w-full min-h-screen flex flex-col items-center text-center px-6 pt-24">
    <!-- Contenido principal -->
    <div class="relative z-10 mt-10 animate-fade-in w-full max-w-4xl backdrop-blur-lg p-10 rounded-3xl text-gray-700">
      <h1 class="text-5xl md:text-6xl font-extrabold font-custom drop-shadow-lg animate-fade-slide">
        Real Parroquia de Señora Santa Ana
      </h1>
    </div>
    <!-- Imagen de la Iglesia -->
    <div class="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg animate-fade-in">
      <img src="/assets/images/iglesia.jpg" alt="Iglesia Nuestra Señora del Amor"
        class="w-full rounded-3xl object-cover">
    </div>

    <!-- Detalles de la Ceremonia -->
    <div
      class="mt-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left mb-2">
      <h2 class="text-3xl font-bold mt-4">Detalles de la Ceremonia</h2>
      <p class="mt-3 text-lg">📍 <strong>Real Parroquia de Señora Santa Ana, Sevilla</strong></p>
      <p class="text-lg mt-3">📅 <strong>22 de Noviembre de 2025</strong></p>
      <p class="text-lg mt-3">⏰ <strong>11:30 AM</strong></p>
    </div>
    <a target="_blank"
      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Valle+%26+Jose+Luis&dates=20251122T103000Z/20251122T120000Z&details=Acompáñanos+en+nuestra+ceremonia+religiosa+en+la+Real+Parroquia+de+Señora+Santa+Ana&location=Real+Parroquia+de+Señora+Santa+Ana&sf=true&output=xml"
      class="mt-8 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
      📅 Añadir a Google Calendar
    </a>
  </div>

  <!-- Mapa Interactivo -->
  <div class="mt-12 w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl animate-fade-in">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2961934295986!2d-6.003118024036655!3d37.382827034640904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1435d75267%3A0xd8111f64acb927d7!2sReal%20Parroquia%20de%20Se%C3%B1ora%20Santa%20Ana!5e0!3m2!1ses!2ses!4v1742311209618!5m2!1ses!2ses"
      width="900" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <!-- Botones de Acción -->
  <div class="mt-6 flex flex-col md:flex-row justify-center gap-6 animate-fade-in">
    <a href="https://maps.app.goo.gl/Z84XY6usHn9onaBv8" target="_blank"
      class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl">
      📍 Abrir en Google Maps
    </a>
  </div>
  <!-- Información sobre la Parroquia -->
  <div
    class="mt-12 w-full max-w-4xl bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-300 animate-fade-in text-gray-700 text-left mb-2">
    <h2 class="text-3xl font-bold mt-4">La Real Parroquia de Santa Ana</h2>

    <div class="mt-6 flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/2">
        <img src="/assets/images/real-parroquia-santa-ana.jpg" alt="Real Parroquia de Santa Ana"
          class="w-full h-auto rounded-xl shadow-lg object-cover">
      </div>
      <div class="w-full md:w-1/2">
        <p class="text-lg flex justify-left word-wrap">
          La Real Parroquia de Santa Ana es uno de los templos más emblemáticos de Sevilla, conocida por su arquitectura
          de estilo gótico-mudéjar. Fue fundada por el rey Alfonso X el Sabio en agradecimiento a Santa Ana por un
          milagro que sanó su visión. Esta iglesia reemplazó a una pequeña capilla en el castillo de San Jorge después
          de la reconquista de la ciudad.
        </p>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="text-2xl font-semibold">Orígenes e Historia</h3>
      <p class="mt-3 text-lg">
        El castillo de San Jorge, situado junto al río Guadalquivir y el puente de barcas, fue el punto de control de
        las entradas occidentales a Sevilla durante la época musulmana. Este castillo fue la sede de una pequeña
        capilla, donde se celebraban los cultos antes de la reconquista cristiana. Sin embargo, con el crecimiento de la
        población cristiana, fue necesario construir una iglesia más grande.
      </p>
      <p class="mt-3 text-lg">
        La construcción de la parroquia comenzó en 1266 bajo la dirección de maestros canteros castellanos y alarifes
        musulmanes, quienes utilizaron ladrillo, material propio de la arquitectura almohade. Esta iglesia se convirtió
        en la primera de nueva planta en Sevilla después de la reconquista de 1248. El rey Fernando III transformó las
        mezquitas de la ciudad en iglesias, y la gran mezquita aljama pasó a ser la catedral de Sevilla.
      </p>
    </div>

    <div class="mt-6">
      <h3 class="text-2xl font-semibold">Arquitectura y Estilo</h3>
      <p class="mt-3 text-lg">
        La Real Parroquia de Santa Ana es un claro ejemplo de la fusión de estilos góticos y mudéjares, con detalles de
        ladrillo y azulejos característicos de la época. Su construcción fue influenciada tanto por las tradiciones
        cristianas como musulmanas, lo que la convierte en un testimonio de la convivencia de estas culturas durante la
        Edad Media en Sevilla.
      </p>
      <p class="mt-3 text-lg">
        La iglesia es famosa por su impresionante torre, que se erige sobre el barrio de Triana, proporcionando un hito
        visual desde diversos puntos de la ciudad. Durante los siglos posteriores, la parroquia experimentó un auge
        gracias al crecimiento económico de Sevilla, especialmente después del descubrimiento de América.
      </p>
      <div class="mt-6 flex flex-col md:flex-row gap-6">
        <div class="w-full md:w-1/2">
          <img src="/assets/images/torre-santa-ana.jpg" alt="Torre de Santa Ana"
            class="w-full h-auto rounded-xl shadow-lg object-cover">
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-lg">
            La torre de Santa Ana, construida en estilo mudéjar, se eleva majestuosa sobre el barrio de Triana. Esta
            torre ha sido un símbolo de la parroquia y de la identidad del barrio, con su estructura que combina la
            solidez de la tradición musulmana y la ornamentación gótica.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="text-2xl font-semibold">Restauración y Reconstrucción</h3>
      <p class="mt-3 text-lg">
        En 1755, un devastador terremoto causó graves daños a la parroquia. La restauración del edificio fue liderada
        por Pedro de Silva, quien le dio un estilo barroco al templo que aún permanece hoy en día. A mediados del siglo
        XX, entre 1970 y 1975, el arquitecto Rafael Manzano emprendió una nueva restauración para recuperar su aspecto
        medieval original, restaurando el ladrillo y la piedra en su interior.
      </p>
    </div>

    <div class="mt-6">
      <h3 class="text-2xl font-semibold">Festividades y Procesiones</h3>
      <p class="mt-3 text-lg">
        La parroquia de Santa Ana ha sido un centro importante para las festividades religiosas del barrio de Triana.
        Entre sus celebraciones más destacadas se encuentran el Corpus Christi, celebrado desde el siglo XVI, y la
        novena a Santa Ana, que se celebra del 18 al 26 de julio. Durante la Semana Santa, las hermandades del barrio
        procesionan hacia la iglesia para rendir homenaje a la Virgen de la O, la cual cruza el puente de barcas hacia
        la Catedral de Sevilla.
      </p>
    </div>

    <div class="mt-6">
      <h3 class="text-2xl font-semibold">Patrimonio Cultural</h3>
      <p class="mt-3 text-lg">
        La Real Parroquia de Santa Ana fue declarada monumento de interés cultural en 1931 y continúa siendo un
        referente de la arquitectura sevillana. Hoy en día, la iglesia no solo sirve como un lugar de culto, sino
        también como un centro cultural y turístico, donde los visitantes pueden admirar su impresionante arte,
        arquitectura y legado histórico.
      </p>
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
