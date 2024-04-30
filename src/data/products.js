// Exportar variable en otro archivo en la carpeta /data
import webOptionsData from "./webOptionsData";

const products = [
  {
    title: 'Seo',
    description: "Programació d'una web responsive completa",
    price: 300,
    id: 1,
  },
  {
    title: 'Ads',
    description: "Programació d'una web responsive completa",
    price: 400,
    id: 2,
  },
  {
    title: 'Web',
    description: "Programació d'una web responsive completa",
    price: 500,
    id: 3,
    options: webOptionsData,
  },
];

export default products;