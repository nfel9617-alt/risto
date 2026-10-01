// ضع هنا رابط Apps Script بعد النشر (Web app URL)
const API = "PUT_YOUR_APPS_SCRIPT_URL_HERE";
const WILAYAS = ["Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida","Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa","Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine","Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi","Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela","Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane"];
const CATS = ["Burgers","Sandwichs","Menu Enfant","Tacos","Salade","Bowl","Pizzas","Boissons"];
const api = {
  get: () => fetch(API).then(r => r.json()),
  post: d => fetch(API, {method:"POST", body: JSON.stringify(d)}).then(r => r.json())
};
