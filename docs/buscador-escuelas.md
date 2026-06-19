# Buscador de escuelas (Compromiso Parental)

Reemplaza el campo de texto libre "Colegio" del formulario "Me sumo" por un
**combobox con buscador** sobre la base de escuelas de Avellaneda. Sienta la base
para un futuro **mapa de compromiso por escuela** (por eso la base incluye lat/lng).

## Componentes

| Archivo | Rol |
| --- | --- |
| `app/components/EscuelaCombobox.tsx` | Combobox: busca insensible a acentos/mayúsculas, muestra nombre + localidad, navegación con teclado, fallback "Mi escuela no está en la lista" (texto libre). |
| `app/components/FormModal.tsx` | Integra el combobox en el campo Colegio. El backend no cambió: sigue guardando `colegio` como string. |
| `app/data/escuelas.ts` | **Generado, no editar a mano.** 182 escuelas (Inicial/Primario/Secundario). Campos: `nombre, localidad, direccion, lat, lng, niveles[]`. |

## Pipeline de datos (`scripts/`)

1. `escuelas-raw.csv` — base cruda (273 filas). Venía con encoding roto
   (UTF-8 leído como Latin-1: `EducaciÃ³n`, `PIÃEYRO`, `NÂº`…).
2. `procesar-escuelas.mjs` — el procesador:
   - **Decodifica** con `Buffer.from(s, "latin1").toString("utf8")`.
   - Las **mayúsculas acentuadas** perdieron su 2º byte al exportarse y quedan
     como `�`; se reparan con el diccionario `CORRECCIONES`
     (ej. `ESPA�A`→`ESPAÑA`, `EDUCACI�N`→`EDUCACIÓN`).
   - **Deduplica** por nombre (cada escuela aparecía 1 vez por nivel) agregando
     los niveles en un array.
   - **Filtra** por modalidad: solo Común / Especial / Técnico Profesional con
     nivel Inicial/Primario/Secundario. Excluye adultos, terciarios
     (Nivel Superior), artística, física y psicología comunitaria.
   - Genera `app/data/escuelas.ts`.
3. `escuelas.json` — salida intermedia con las **245 escuelas completas**
   (incluye modalidad y todos los niveles). Se conserva para el mapa futuro.

### Regenerar

```bash
node scripts/procesar-escuelas.mjs
```

Si tras correrlo aparecen tokens nuevos con `�`, agregarlos al diccionario
`CORRECCIONES` y volver a correr. El script reporta `Tokens aún rotos (�)`.

## Próximo paso: mapa por escuela

- Coordenadas listas en `escuelas.ts` (`lat`, `lng`).
- Los compromisos se guardan con el **nombre exacto** de la escuela en `colegio`,
  así se pueden contar por escuela y ubicar en el mapa.
