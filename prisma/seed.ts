import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.config.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      heroTitle: "Compromiso parental:",
      heroSubtitle: "infancia sin pantallas",
      heroDescription: "Sumá tu compromiso para acompañar a niños, niñas y adolescentes en su relación con la tecnología.",
      heroBadge: "Compromiso ciudadano",
      counterLabel: "Ya somos",
      counterSuffix: "familias comprometidas",
      ctaText: "Me sumo",
      ctaSubtext: "Es gratis y solo lleva 2 minutos",
    },
  });

  const videosCount = await prisma.video.count();
  if (videosCount === 0) {
    await prisma.video.createMany({
      data: [
        { titulo: "El impacto de las pantallas en la infancia", especialista: "Dra. María González · Psicóloga infantil", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duracion: "12 min", orden: 1 },
        { titulo: "Cómo establecer límites saludables con la tecnología", especialista: "Lic. Carlos Martínez · Neuroeducador", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duracion: "18 min", orden: 2 },
        { titulo: "Juego, vínculo y desarrollo en la era digital", especialista: "Dra. Ana Rodríguez · Pediatra", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duracion: "15 min", orden: 3 },
      ],
    });
  }

  const noticiasCount = await prisma.noticia.count();
  if (noticiasCount === 0) {
    await prisma.noticia.createMany({
      data: [
        { titulo: "Una nueva iniciativa busca que las familias acompañen activamente el uso de pantallas", fuente: "Infobae", fecha: "12 abril 2026", descripcion: "La iniciativa ciudadana convoca a padres y madres a comprometerse activamente en el acompañamiento tecnológico de sus hijos.", tag: "Iniciativa", orden: 1 },
        { titulo: "La Ley Emma y su impacto en las escuelas bonaerenses", fuente: "La Nación", fecha: "8 abril 2026", descripcion: "A un año de su sanción, la ley que prohíbe el uso de celulares en escuelas muestra resultados alentadores.", tag: "Legislación", orden: 2 },
        { titulo: "San Patricio, el colegio que eligió desconectarse para conectar", fuente: "Clarín", fecha: "3 abril 2026", descripcion: "La institución implementó un acuerdo de convivencia sin pantallas que mejoró el clima áulico y el rendimiento académico.", tag: "Educación", orden: 3 },
        { titulo: "El compromiso parental como herramienta comunitaria", fuente: "Télam", fecha: "28 marzo 2026", descripcion: "Expertos destacan la importancia de que los adultos lideren el cambio en el uso responsable de la tecnología.", tag: "Comunidad", orden: 4 },
      ],
    });
  }

  const materialesCount = await prisma.material.count();
  if (materialesCount === 0) {
    await prisma.material.createMany({
      data: [
        { titulo: "Guía para acompañar a niños y adolescentes en su relación con la tecnología", descripcion: "Herramientas prácticas para establecer acuerdos en el hogar.", icon: "📖", bg: "#00b2ca", orden: 1 },
        { titulo: "Herramientas de control parental", descripcion: "Guía paso a paso para configurar los principales dispositivos.", icon: "🛡️", bg: "#1d4e89", orden: 2 },
        { titulo: "Ley provincial Emma", descripcion: "Texto completo de la ley que prohíbe el uso de celulares en escuelas.", icon: "⚖️", bg: "#2f2c79", orden: 3 },
        { titulo: "Modelos de normas de convivencia", descripcion: "Acuerdos institucionales listos para adaptar en tu escuela o familia.", icon: "📋", bg: "#7dcfb6", orden: 4 },
      ],
    });
  }

  console.log("Seed completado.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
