const Buskers = [{
  photo: "http://maxpixel.freegreatpicture.com/static/photo/1x/Street-Music-Mu-Busker-Young-Instrument-Sound-785657.jpg",
  name: "Billy Bob Berkvist",
  handle: "@Billy-Bob",
  bio: "I like 3 things: banjos, my harmonica, and THE BIG CITY, BABY.",
  act: "one-man band",
  active: {latitude: 37.779947, longitude: -122.403006}, // false or an object
  following: [],
  history: [{from: 'Kansas A.', amount: 2}, {from: 'Anna B.', amount: 4}],
},
{
  photo: "https://i.ytimg.com/vi/2ju7OawL7VU/maxresdefault.jpg",
  name: "Laura Hale",
  handle: "@LHaleMusicBB<3",
  bio: "Classically trained violinist with indie flair and a hipster attitude. NOT LINDSAY STERLING.",
  act: "violinist",
  active: {latitude: 37.777441, longitude: -122.409919}, // false or an object
  following: [],
  history: [],
},
{
  photo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Clownforlaragiddings.jpg",
  name: "Giggles the Gregarious Glown!",
  handle: "@GiggityGiggles",
  bio: "Grumpy goobers gather galactic gallons of giggles at my grand street-side galas!",
  act: "clownin' around",
  active: {latitude: 37.783968, longitude: -122.41422}, // false or an object
  following: [],
  history: [],
},
{
  photo: "http://www.stoyanart.com/Miami%20caricaturist.jpg",
  name: "Vincent Dillario",
  handle: "@VincentD",
  bio: "My fine arts degree has served me fine, thank you.",
  act: "caricatures",
  active: {latitude: 37.767532, longitude: -122.419958},
  following: [],
  history: [{from: 'Sandy M.', amount: 15}, {from: 'Claire T.', amount: 10}, {from: 'Jeff', amount: 4}],
},
{
  photo: "http://www.crossfithighvoltage.com/wp-content/uploads/2015/08/FireBreather.jpg",
  name: "Eri Harland",
  handle: "@HarlandBreathesFire",
  bio: "Those two years shipwrecked on that remote Polynesian island were #Worth #It.",
  act: "firebreathing",
  active: false,
  following: [],
  history: []
},
{
  photo: "http://theplaidzebra.com/wp-content/uploads/2014/10/Life-of-a-Street-Magician_Plaid-Zebra.jpg",
  name: "'Magestic' Mike",
  handle: "@MagicMichael",
  bio: "My name is Michael and I do magic. Fuck me, right?",
  act: "sleight of hand",
  active: false,
  following: [],
  history: []
},
{
  photo: "http://s0.geograph.org.uk/geophotos/04/14/36/4143607_e4b58d3c.jpg",
  name: "The Silver Son",
  handle: "@SilverSon",
  bio: "Yo, listen up, here's a story. About a little guy that lived in a silver world...",
  act: "miming",
  active: {latitude: 37.771255, longitude: -122.420258},
  following: [],
  history: []
},
{
  photo: "https://i.ytimg.com/vi/VLdG2ZwZiQw/hqdefault.jpg",
  name: "Corey K.",
  handle: "@CK",
  bio: "Moved from a small town in Missouri with nothing but my sticks, found my soul in these paint cans.",
  act: "drumming",
  active: false,
  following: [],
  history: []
},
{
  photo: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
  name: "Thomas M.",
  handle: "@ThomasTheCalmest",
  bio: "Like Stannis the Mannis, but with more pacifism and less infanticide... probably.",
  act: "contortionist",
  active: false,
  following: [],
  history: []
},
{
  photo: "http://www.scarlettentertainment.com/sites/default/files/Male-Contortionist-live-performance.jpg",
  name: "500: Internal Server Error",
  handle: "@l33thaxx0r",
  bio: "Watch me hack your private accounts in just minutes. Will shock, amaze, and also definitely not sell your data on the black market.",
  act: "pc master race",
  active: {latitude: 37.776983, longitude: -122.416937},
  following: [],
  history: []
},
{
  photo: "http://ak1.picdn.net/shutterstock/videos/7469011/thumb/7.jpg",
  name: "Kelly",
  handle: "@KellyCries",
  bio: "I can cry on command, and apparently that's pretty special.",
  act: "crying",
  active: false,
  following: [],
  history: []
  }];

const UserProfiles = [
    {
      photo: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
      name: "Sandy M",
      handle: "@SandyM-532z5",
      location: "San Francisco",
      following: [Buskers[4], Buskers[2], Buskers[7], Buskers[6]]
    },
    {
      photo: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png",
      name: "Bianca M",
      handle: "@BiancaM-342il",
      location: "San Francisco",
      following: [Buskers[0], Buskers[1], Buskers[11]]
    },
];

module.exports = { Buskers, UserProfiles };
