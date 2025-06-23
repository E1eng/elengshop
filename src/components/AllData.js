import Img1 from "../img/products/1.jpg";
import Img2 from "../img/products/2.jpg";
import Img3 from "../img/products/3.png";
import Img4 from "../img/products/4.jpg";
import Img5 from "../img/products/5.jpg";
import Img6 from "../img/products/6.jpg";
import Img7 from "../img/products/7.jpg";
import Img8 from "../img/products/8.jpg";
import Img9 from "../img/products/9.png";
import Img10 from "../img/products/10.jpg";
import Img11 from "../img/products/11.jpg";
import Img12 from "../img/products/12.png";
import Img13 from "../img/products/13.jpg";
import Img14 from "../img/products/14.png";
import Img15 from "../img/products/15.jpg";
import Img16 from "../img/products/16.jpg";
import Img17 from "../img/products/17.png";
import Img18 from "../img/products/18.png";
import Img19 from "../img/products/19.jpg";
import Img20 from "../img/products/20r.jpg";
import OtherImgs1 from "../img/products/otherProducts/other1.jpg";
import OtherImgs2 from "../img/products/otherProducts/other2.jpg";
import Toster1 from "../img/products/otherProducts/toster1.jpg";
import Toster2 from "../img/products/otherProducts/toster2.jpg";
import LampBlue1 from "../img/products/otherProducts/lampblue1.webp";
import LampBlue2 from "../img/products/otherProducts/lampblue2.webp";
import PulpUnit1 from "../img/products/otherProducts/pulpunit1.jpg";
import PulpUnit2 from "../img/products/otherProducts/pulpunit2.jpg";
import ModernGold1 from "../img/products/otherProducts/moderngold1.webp";
import ModernGold2 from "../img/products/otherProducts/moderngold2.webp";
import CleaningOil1 from "../img/products/otherProducts/cleaningoil1.jpg";
import CleaningOil2 from "../img/products/otherProducts/cleaningoil2.jpg";
import BlackAndWhite1 from "../img/products/otherProducts/blackandwhite1.webp";
import BlackAndWhite2 from "../img/products/otherProducts/blackandwhite2.webp";
import BodyOil1 from "../img/products/otherProducts/bodyoil1.jpg";
import BodyOil2 from "../img/products/otherProducts/bodyoil2.jpg";
import Shelf1 from "../img/products/otherProducts/shelf1.webp";
import Shelf2 from "../img/products/otherProducts/shelf2.webp";
import Vase1 from "../img/products/otherProducts/vase1.webp";
import Vase2 from "../img/products/otherProducts/vase2.webp";
import ChairBoom1 from "../img/products/otherProducts/chairboom1.webp";
import ChairBoom2 from "../img/products/otherProducts/chairboom2.webp";
import BlackLamp1 from "../img/products/otherProducts/blacklamp1.webp";
import BlackLamp2 from "../img/products/otherProducts/blacklamp2.jpg";
import GoldenLamp1 from "../img/products/otherProducts/goldenlamp1.webp";
import GoldenLamp2 from "../img/products/otherProducts/goldenlamp2.webp";
import Cotton1 from "../img/products/otherProducts/cotton1.jpg";
import Cotton2 from "../img/products/otherProducts/cotton2.jpg";
import WoodChair1 from "../img/products/otherProducts/woodchair1.webp";
import WoodChair2 from "../img/products/otherProducts/woodchair2.webp";
import Copenhagen1 from "../img/products/otherProducts/copenhagen1.webp";
import Copenhagen2 from "../img/products/otherProducts/copenhagen2.webp";
import Cam1 from "../img/products/otherProducts/cam1.webp";
import Cam2 from "../img/products/otherProducts/cam2.jpg";
import TableLamp1 from "../img/products/otherProducts/tablelamp1.webp";
import TableLamp2 from "../img/products/otherProducts/tablelamp2.webp";
import MatLamp1 from "../img/products/otherProducts/mat1.webp";
import MatLamp2 from "../img/products/otherProducts/mat2.webp";
import Comfy1 from "../img/products/otherProducts/comfy1.webp";
import Comfy2 from "../img/products/otherProducts/comfy2.webp";

export const items = [
  {
    id: 1,
    category: "kursi",
    img: Img1,
    description: "Kursi Kecil dari Kulit Domba",
    price: 980,
    otherImgs: [OtherImgs1, OtherImgs2],
    specs:
      "Kursi Berlengan Tradition Little Petra VB1 Kulit Domba Moonlight/ Walnut/ Kuningan Edisi Terbatas | Kami memberikan diskon khusus saat Anda memasukkan produk ini ke dalam keranjang.",
    texture: "Sheep Skin",
    weight: "15kg",
    size: "150cm x 70cm",
  },
  {
    id: 2,
    category: "dapur",
    img: Img2,
    description: "Pemanggang Roti",
    price: 450.000,
    otherImgs: [Toster1, Toster2],
    specs:
      " The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.Desain persegi bundar pemanggang roti ini membuatnya pas menempel di dinding atau di sudut. Sangat cocok untuk mencairkan es, dan dengan jarak roti ke pemanas yang pas untuk menghasilkan roti panggang renyah dengan bagian tengah yang lembut dan kenyal.",
    texture: "Plastic",
    weight: "3.5kg",
    size: "20xm x 10cm",
  },
  {
    id: 3,
    category: "lampu",
    img: Img3,
    description: "Lamp Cahaya Biru",
    price: 79.000,
    otherImgs: [LampBlue1, LampBlue2],
    specs:
      "Pot Bunga Verner Panton, dirancang pada tahun 1968, awalnya ditujukan untuk industri restoran dan pameran Verner Panton.",
    texture: "Plastic",
    weight: "2kg",
    size: "15cm x 15cm",
  },
  {
    id: 4,
    category: "furnitur",
    img: Img4,
    description: "Unit Pulp - 5 Kompartemen",
    price: 254.000,
    otherImgs: [PulpUnit1, PulpUnit2],
    specs:
      "Unit Pulp ringan dan tahan lama, serta dapat digunakan secara horizontal maupun vertikal. Dirancang dengan mempertimbangkan kertas A4, berkas sudut dan binder cincin MUJI dapat dengan mudah masuk ke dalamnya.",
    texture: "Wood",
    weight: "45kg",
    size: "250cm x 60cm",
  },
  {
    id: 5,
    category: "lampu",
    img: Img5,
    description: "Lampu Modern Emas",
    price: 189.000,
    otherImgs: [ModernGold1, ModernGold2],
    specs:
      "Tom Dixon dan FRONT telah menciptakan liontin yang sangat indah, dengan desain yang benar-benar unik. Lampu ini dibuat menggunakan teknologi metalisasi khusus yang membuat tampilannya benar-benar unik. Yang pertama dari jenisnya. Lampu ini transparan saat dinyalakan dan Anda dapat melihat permainan warna yang menarik.",
    texture: "Plastic",
    weight: "3kg",
    size: "20cm x 20cm",
  },
  {
    id: 6,
    category: "skin-care",
    img: Img6,
    description: "Body Oil 200ml",
    price: 67.000,
    otherImgs: [CleaningOil1, CleaningOil2],
    specs:
      "Terbuat dari 100% minyak nabati dengan minyak zaitun sebagai bahan utama, minyak pembersih ini lembut di kulit. Bebas dari pewangi, pewarna, dan minyak mineral, bebas paraben, bebas alkohol, telah teruji alergi (kami tidak dapat menjamin bahwa produk ini tidak akan menyebabkan alergi pada pengguna mana pun) * Cara penggunaan: Tuang sedikit di telapak tangan Anda, lalu pijat ke wajah untuk membersihkan riasan dan kotoran. Bilas dengan air dingin atau hangat.",
    texture: "Liquid",
    weight: "200ml",
    size: "10cm x 5cm",
  },
  {
    id: 7,
    category: "lampu",
    img: Img7,
    description: "Lampu Hitam dan Putih",
    price: 220.000,
    otherImgs: [BlackAndWhite1, BlackAndWhite2],
    specs:
      "Konsep: Dot terinspirasi oleh logam berlubang dan pola yang dihasilkan cahaya saat bersinar melalui lubang-lubang kecil. Kontras antara logam berlubang yang kasar dan kaca opal yang halus menjadikan Dot liontin yang sederhana dan bermakna. Dengan ekspresi elegannya, bersinar, baik saat lampu menyala maupun mati.",
    texture: "Plastic",
    weight: "6kg",
    size: "20cm x 20cm",
  },
  {
    id: 8,
    category: "furnitur",
    img: Img8,
    description: "Gejst Shelf A Abu Hitam/Hitam",
    price: 115.000,
    otherImgs: [Shelf1, Shelf2],
    specs:
      "Dirancang oleh Böttcher & Kayser, Nivo adalah rak dinding minimalis yang dirancang dengan mempertimbangkan fungsionalitas dan estetika. Tanpa detail yang tidak perlu dan garis-garis yang bersih, koleksi ini dapat digantung dengan mudah dan elegan di dinding, menciptakan ketenangan dan gambaran umum tentang barang-barang yang ingin Anda taruh di rak.",
    texture: "Wood",
    weight: "10kg",
    size: "60cm x 20cm",
  },
  {
    id: 9,
    category: "furnitur",
    img: Img9,
    description: "Vas Kubus Lolo Hitam",
    price: 161.000,
    otherImgs: [Vase1, Vase2],
    specs:
      "Kubus Vase Lolo awalnya dirancang oleh Søren Lassen pada tahun 2014, tetapi diluncurkan bertepatan dengan ulang tahun Lassen yang ke-10 pada tahun 2018. Vas ini merupakan kelanjutan alami dan diminati dari seri yang sudah mencakup tempat lilin Kubus dan mangkuk Kubus. Letakkan sendiri atau dalam lukisan benda mati, isi dengan bunga-bunga berwarna cerah untuk tampilan feminin atau biarkan saja dalam kesederhanaan dan ketepatannya.",
    texture: "Ceramics",
    weight: "12kg",
    size: "45cm x 15cm",
  },
  {
    id: 10,
    category: "kursi",
    img: Img10,
    description: "Kursi Berlengan Tradisional",
    price: 890.000,
    otherImgs: [ChairBoom1, ChairBoom2],
    specs:
      "Konsep: Kursi santai Boomerang dari &Tradition adalah desain klasik Denmark dengan ekspresi modern dan minimalis. Kursi ini dirancang oleh Hvidt & Mølgaard pada tahun 1956, dan dengan bantalannya yang bergaya dan rangka kayu yang dipoles dengan tangan, kursi ini merupakan desain Nordik yang ideal yang memberikan kesan pribadi pada rumah.",
    texture: "Wood",
    weight: "8kg",
    size: "60cm x 40cm",
  },
  {
    id: 11,
    category: "lampu",
    img: Img11,
    description: "Liontin Matahari Hitam",
    price: 160.000,
    otherImgs: [BlackLamp1, BlackLamp2],
    specs:
      "Lampu gantung Here Comes The Sun yang dirancang oleh Bertrand Balas adalah lampu berkualitas dengan tampilan yang unik dan ajaib. Seri Here Comes The Sun memiliki ekspresi yang fantastis dan terutama saat dinyalakan, lampu ini menciptakan suasana yang sangat istimewa di ruangan tempat lampu itu digantung. Lampu ini sangat cocok untuk diletakkan di atas meja makan, meja dapur, dan sebagai lampu ruang tamu.",
    texture: "Plastic",
    weight: "4kg",
    size: "20cm x 20cm",
  },
  {
    id: 12,
    category: "lampu",
    img: Img12,
    description: "Lampu Gold Sederhana",
    price: 220.000,
    otherImgs: [GoldenLamp1, GoldenLamp2],
    specs:
      "Pot Bunga Verner Panton, yang dirancang pada tahun 1968, awalnya ditujukan untuk industri perhotelan dan ruang pamer Verner Panton. Lampu ini kemudian menjadi populer di rumah-rumah pribadi, dan berkat desainnya yang bergaya dan banyaknya pilihan warna, lampu ini kembali populer dalam beberapa tahun terakhir.",
    texture: "Plastic",
    weight: "4kg",
    size: "15cm x 15cm",
  },
  {
    id: 13,
    category: "skin-care",
    img: Img13,
    description: "Cotton Pads 180",
    price: 33.000,
    otherImgs: [Cotton1, Cotton2],
    specs:
      "Bantalan kapas yang terbuat dari katun lembut yang tidak diputihkan. Bantalan ini dibuat di Jepang dan terbuat dari 100% katun.",
    texture: "Cotton",
    weight: "180g",
    size: "20cm x 10cm",
  },
  {
    id: 14,
    category: "kursi",
    img: Img14,
    description: "Kursi Oak Spanish",
    price: 520.000,
    otherImgs: [WoodChair1, WoodChair2],
    specs:
      "Ketika berbicara tentang Børge Mogensen, Kursi Spanyol mungkin merupakan salah satu desain pertama yang terlintas di benak Anda, yang masuk akal karena ini juga merupakan salah satu produknya yang paling dikenal di seluruh dunia.",
    texture: "Wood",
    weight: "15kg",
    size: "60cm x 30cm",
  },
  {
    id: 15,
    category: "kursi",
    img: Img15,
    description: "Kursi Copenhagen",
    price: 330.000,
    otherImgs: [Copenhagen1, Copenhagen2],
    specs:
      "Konsep: Seri Hyg karya Danish Normann Copenhagen adalah serangkaian kursi yang terinspirasi dari kata Hygge dalam bahasa Denmark. Desainer Simon Legald telah mencoba mewujudkan makna kata tersebut, yakni keamanan, kehangatan, dan kenyamanan, dalam serangkaian furnitur. Hal ini tercermin dalam bentuk organik yang indah dan lekukan yang kuat yang memberikan kenyamanan dan kesejahteraan yang tinggi saat duduk di kursi.",
    texture: "Wood",
    weight: "14kg",
    size: "65cm x 35cm",
  },
  {
    id: 16,
    category: "elektronik",
    img: Img16,
    description: "Cahaya Anti Gelap",
    price: 120.000,
    otherImgs: [Cam1, Cam2],
    specs:
      "Easy Mini W75 dari Antidark benar-benar sesuai dengan namanya. Desainnya sederhana, lampunya nyaman, mudah diatur. Easy Wall Light memudahkan pengguna untuk mengatur, yah, semuanya! Lampu Easy dapat berputar 360 derajat dan dapat dimiringkan. Lampu ideal yang dapat diletakkan berdampingan dengan lampu lain untuk mendapatkan cahaya di semua sudut ruangan. Selain itu, lampu ini dapat berfungsi sebagai lampu dinding atau lampu langit-langit.",
    texture: "Metal",
    weight: "2kg",
    size: "15cm x 10cm",
  },
  {
    id: 17,
    category: "lampu",
    img: Img17,
    description: "Lampu Meja",
    price: 75.000,
    otherImgs: [TableLamp1, TableLamp2],
    specs:
      "Lampu ini juga populer di rumah-rumah pribadi dan kembali populer dalam beberapa tahun terakhir. Hal ini tidak lain karena desainnya yang bergaya dan banyaknya pilihan warna yang membuatnya cocok untuk dipasang di mana saja.",
    texture: "Metal",
    weight: "5kg",
    size: "25cm x 15cm",
  },
  {
    id: 18,
    category: "lampu",
    img: Img18,
    description: "Mat Lampu Hitam",
    price: 175.000,
    otherImgs: [MatLamp1, MatLamp2],
    specs:
      "Penawaran unik Kami memberikan diskon khusus saat Anda memasukkan produk ini ke dalam keranjang. *Hanya berlaku untuk produk tertentu.",
    texture: "Metal",
    weight: "6kg",
    size: "20cm x 15cm",
  },
  {
    id: 19,
    category: "kursi",
    img: Img19,
    description: "Kursi Ternyaman",
    price: 230.000,
    otherImgs: [Comfy1, Comfy2],
    specs:
      "Sum adalah seri yang dirancang oleh desainer Denmark Simon Legald, yang merupakan lambang keanggunan modern. Elegan dan tegas seperti ujung sayap, sandaran lengannya terbentang mengundang, seolah ingin memeluk Anda di ruang kursi berlengan yang lembut dan nyaman.",
    texture: "Comfy Material",
    weight: "25kg",
    size: "60cm x 30cm",
  },
  {
    id: 20,
    category: "skin-care",
    img: Img20,
    description: "Body Oil 50ml",
    price: 45.000,
    otherImgs: [BodyOil1, BodyOil2],
    specs:
      "Terbuat dari 100% minyak nabati dengan minyak zaitun sebagai bahan utama, minyak pembersih ini lembut di kulit. Bebas dari pewangi, pewarna, dan minyak mineral, bebas paraben, bebas alkohol, telah teruji alergi (kami tidak dapat menjamin bahwa produk ini tidak akan menyebabkan alergi pada pengguna mana pun) * Cara penggunaan: Tuang sedikit di telapak tangan Anda, lalu pijat ke wajah untuk membersihkan riasan dan kotoran. Bilas dengan air dingin atau hangat.",
    texture: "Liquid",
    weight: "50ml",
    size: "10cm x 5cm",
  },
];
