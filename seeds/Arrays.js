const Arrays = mongoose.model('Arrays', gallerySchema);

const hiking = new Arrays ({
  id: 1,
  title: 'Hiking',
  description: 'Hiking in the mountains',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_M1G6NWULHL.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Hiking',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(hiking);
hiking.save(function(err, hiking){
  if (err) return console.error(err);
  console.log(leaves)
  
  
const leaves = new Arrays ({
  id: 2,
  title: 'Leaves',
  description: 'A fallen leaf in snow',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_QFVTG5T37V.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Leaf',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(leaves);
leaves.save(function(err, leaves){
  if (err) return console.error(err);
  console.log(headphones)

  
const headphones = new Arrays ({
  id: 3,
  title: 'Headphones',
  description: 'Vibing with some headphones',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_DM8MFOGVFG.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Headphones',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(headphones);
headphones.save(function(err, headphones){
  if (err) return console.error(err);
  console.log(architecture)

const architecture = new Arrays ({
  id: 4,
  title: 'Architecture',
  description: 'A cityscape',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_5CXNO08OHT.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Architecture',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(architecture);
architecture.save(function(err, architecture){
  if (err) return console.error(err);
  console.log(taxi)


const taxi = new Arrays ({
  id: 5,
  title: 'Taxi',
  description: 'A water taxi in the ocean',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_T56JW384MI.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Water_taxi',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(taxi);
taxi.save(function(err, taxi){
  if (err) return console.error(err);
  console.log(observation)

const observation = new Arrays ({
  id: 6,
  title: 'Observation',
  description: 'Staring out at the distance',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_Q42LWDSRWX.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Observation_deck',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(observation);
observation.save(function(err, observation){
  if (err) return console.error(err);
  console.log(canada)


const canada = new Arrays ({
  id: 7,
  title: 'Canada',
  description: 'The symbol of Canada',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_WUTL5UK6KU.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Canada',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(canada);
canada.save(function(err, canada){
  if (err) return console.error(err);
  console.log(lake)  


const lake = new Arrays ({
  id: 8,
  title: 'Lake',
  description: 'A scenic lake view',
  width: 1920,
  height: 1080, 
  pathURL: './images/StockSnap_RGFJ3WZQI1.jpg',
  linkURL: 'https://en.wikipedia.org/wiki/Lake',
  credit: 'Leeroy',
  creditURL: 'https://stocksnap.io/author/374'
});
console.log(lake);
lake.save(function(err, lake){
  if (err) return console.error(err);
  console.log(satellite) 

  const satellite = new Arrays ({
    id: 9,
    title: 'Satellite',
    description: 'Satellite in the mist',
    width: 1920,
    height: 1080, 
    pathURL: './images/StockSnap_9O135EFRB2.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Satellite',
    credit: 'Leeroy',
    creditURL: 'https://stocksnap.io/author/374'
  });
  console.log(lake);
  lake.save(function(err, lake){
    if (err) return console.error(err);
    


module.exports= Arrays;