var book1 = {
  title: "The Time Machine",
  author :"H. G. Wells",
  descr: "So begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era — and the story that launched H.G. Wells’s successful career and earned him his reputation as the father of science fiction. With a speculative leap that still fires the imagination, Wells sends his brave explorer to face a future burdened with our greatest hopes...and our darkest fears. Published in 1895, this masterpiece of invention captivated readers on the threshold of a new century.",
  image: '<img src="http://d.gr-assets.com/books/1327942880l/2493.jpg" height="346" width="246">',
  price: 9.99
}
var book2 = {
  title: "The Book That Proves Time Travel Happens",
  author :"Henry Clark",
  descr: "The year 1852 is a dangerous time for three non-white children, and they must work together to dodge slave-catchers and save ancestors from certain death - all while figuring out how to get back to the future. Fortunately, they have a guide in the helpful hints embedded in an ancient Chinese text called the I-Ching, which they interpret using Morse Code. But how can a three-thousand-year-old book be sending messages into the future through a code developed in the 1830s?",
  image: '<img src="http://ecx.images-amazon.com/images/I/51tJvUlqMGL._SY344_BO1,204,203,200_.jpg">',
  price: 6.99
}
var album1 = {
  title: "Bringing Down the Horse",
  author :"The Wallflowers",
  descr: "Not only a staggering commercial success, the disc is also a superb example of the folk-rock Jakob's daddy helped pioneer more than 30 years ago. The Wallflowers don't need family relations to command respect. Triple platium in 1992!!",
  image: '<img src="http://diffuser.fm/files/2013/05/wallflowersbringing.jpg" height="300" width="300">',
  price: 9.99
}
var album2 = {
  title: "17-11-70",
  author :"Elton John",
  descr: "The recording was taken from a live radio broadcast on 17 November 1970. The recording was originally popular among bootleggers which, according to Gus Dudgeon, eventually prompted the record label to release it as an album. His best work!",
  image: '<img src="https://upload.wikimedia.org/wikipedia/en/2/26/171170UK.jpg" height="300" width="300">',
  price: 9.99
}

$('#book1 .title').text(book1.title);
$('#book1 .image').append(book1.image);
$('#book1 .author').text(book1.author);
$('#book1 .price').text(book1.price);
$('#book1 .descr').text(book1.descr);

$('#book2 .title').text(book2.title);
$('#book2 .image').append(book2.image);
$('#book2 .author').text(book2.author);
$('#book2 .price').text(book2.price);
$('#book2 .descr').text(book2.descr);

$('#album1 .title').text(album1.title);
$('#album1 .image').append(album1.image);
$('#album1 .author').text(album1.author);
$('#album1 .price').text(album1.price);
$('#album1 .descr').text(album1.descr);

$('#album2 .title').text(album2.title);
$('#album2 .image').append(album2.image);
$('#album2 .author').text(album2.author);
$('#album2 .price').text(album2.price);
$('#album2 .descr').text(album2.descr);

var books = [book1, book2];
var music = [album1, album2];

var products = {books, music};
