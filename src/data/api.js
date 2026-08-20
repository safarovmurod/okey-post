import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ToysIcon from "@mui/icons-material/Toys";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SpaIcon from "@mui/icons-material/Spa";
import SavingsIcon from "@mui/icons-material/Savings";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StorefrontIcon from "@mui/icons-material/Storefront";

import jeans from "../assets/jeans.png";
import parka from "../assets/parka.png";
import tshirt from "../assets/tshirt.png";
import jacketRed from "../assets/jacket-red.png";
import jacketLeather from "../assets/jacket-leather.png";

import gadgets from "../assets/gadgets.png";
import appliances from "../assets/appliances.png";
import washer from "../assets/washer.png";
import smartlock from "../assets/smartlock.png";
import components from "../assets/components.png";

import watch from "../assets/watch.png";
import belt from "../assets/belt.png";
import backpack from "../assets/backpack.png";
import ecobag from "../assets/ecobag.png";
import wallet from "../assets/wallet.png";

import toys from "../assets/toys.png";
import rattle from "../assets/rattle.png";
import balancebike from "../assets/balancebike.png";
import scooter from "../assets/scooter.png";
import teddy from "../assets/teddy.png";

import gymstation from "../assets/gymstation.png";
import balls from "../assets/balls.png";
import elliptical from "../assets/elliptical.png";
import homegym from "../assets/homegym.png";
import jumprope from "../assets/jumprope.png";

import makeupset from "../assets/makeupset.png";
import makeupart from "../assets/makeupart.png";
import luxeset from "../assets/luxeset.png";
import cosmetics from "../assets/cosmetics.png";
import creamjar from "../assets/creamjar.png";

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Inventory2Icon from "@mui/icons-material/Inventory2";

export const deliveryList = [
  {
    id: 1,
    name: "ПОЧТА РОССИИ",
    icon: LocalPostOfficeIcon,
    days: "10–14 дней",
    price: "от £27.00",
    total: "£41.99",
    text: "Стандартная наземная доставка до отделения. Отслеживание по номеру трека доступно на всём пути.",
  },
  {
    id: 2,
    name: "EMS ПОЧТА РОССИЯ",
    icon: FlightTakeoffIcon,
    days: "9–12 дней",
    price: "от £40.00",
    total: "£54.55",
    text: "Экспресс-доставка авиатранспортом с курьером до двери. Подходит для срочных и ценных отправлений.",
  },
  {
    id: 3,
    name: "ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ",
    icon: Inventory2Icon,
    days: "10–14 дней",
    price: "от £13.00",
    total: "£90.50",
    text: "Самый дешёвый тариф для лёгких посылок до 2 кг. Габариты ограничены, страховка не включена.",
  },
];

export const clothesList = [
  {
    id: 101,
    name: "Columbia Barlow Pass Parka",
    text: "Зимняя парка с капюшоном и мехом, утеплитель Turbodown",
    img: parka,
    priceRu: "18400,00₽",
    priceUk: "£129.00",
    delivery: "от £9.40",
    days: "11 дней",
    save: "$96.20",
  },
  {
    id: 102,
    name: "Levi's 501 Original Jeans",
    text: "Классические прямые джинсы из плотного денима",
    img: jeans,
    priceRu: "6420,00₽",
    priceUk: "£54.90",
    delivery: "от £6.50",
    days: "9 дней",
    save: "$74.20",
  },
  {
    id: 103,
    name: "Daisy Print Cotton T-Shirt",
    text: "Хлопковая футболка с принтом ромашки, унисекс",
    img: tshirt,
    priceRu: "2980,00₽",
    priceUk: "£18.75",
    delivery: "от £4.20",
    days: "8 дней",
    save: "$33.10",
  },
  {
    id: 104,
    name: "Regatta 3-in-1 Ski Jacket",
    text: "Красная горнолыжная куртка со съёмной подкладкой",
    img: jacketRed,
    priceRu: "12700,00₽",
    priceUk: "£89.99",
    delivery: "от £8.60",
    days: "10 дней",
    save: "$71.40",
  },
  {
    id: 105,
    name: "Schott Sheepskin Bomber",
    text: "Кожаная лётная куртка с овчинным воротником",
    img: jacketLeather,
    priceRu: "34150,00₽",
    priceUk: "£249.00",
    delivery: "от £11.20",
    days: "12 дней",
    save: "$182.80",
  },
];

export const techList = [
  {
    id: 201,
    name: "Samsung Gadget Bundle",
    text: "Комплект техники: смартфон, планшет, ноутбук и ТВ",
    img: gadgets,
    priceRu: "94500,00₽",
    priceUk: "£649.00",
    delivery: "от £14.30",
    days: "12 дней",
    save: "$310.00",
  },
  {
    id: 202,
    name: "Home Appliances Set",
    text: "Крупная бытовая техника для дома одним заказом",
    img: appliances,
    priceRu: "156000,00₽",
    priceUk: "£1090.00",
    delivery: "от £42.00",
    days: "18 дней",
    save: "$520.00",
  },
  {
    id: 203,
    name: "Samsung EcoBubble Washer",
    text: "Стиральная машина 8 кг с инверторным мотором",
    img: washer,
    priceRu: "48900,00₽",
    priceUk: "£329.00",
    delivery: "от £38.50",
    days: "16 дней",
    save: "$187.00",
  },
  {
    id: 204,
    name: "Yale Smart Door Lock",
    text: "Умный замок с отпечатком пальца и кодом",
    img: smartlock,
    priceRu: "21400,00₽",
    priceUk: "£149.99",
    delivery: "от £7.80",
    days: "10 дней",
    save: "$88.30",
  },
  {
    id: 205,
    name: "Electrical Tools Kit",
    text: "Набор электрики: провода, автоматы, тестер",
    img: components,
    priceRu: "9600,00₽",
    priceUk: "£64.50",
    delivery: "от £9.10",
    days: "11 дней",
    save: "$41.70",
  },
];

export const accList = [
  {
    id: 301,
    name: "Skeleton Automatic Watch",
    text: "Часы со скелетоном, корпус розовое золото",
    img: watch,
    priceRu: "42800,00₽",
    priceUk: "£289.00",
    delivery: "от £5.40",
    days: "9 дней",
    save: "$164.20",
  },
  {
    id: 302,
    name: "Leather Belt Set",
    text: "Три кожаных ремня с автоматической пряжкой",
    img: belt,
    priceRu: "5800,00₽",
    priceUk: "£38.50",
    delivery: "от £4.20",
    days: "8 дней",
    save: "$24.90",
  },
  {
    id: 303,
    name: "Scott Trail Backpack 25L",
    text: "Трекинговый рюкзак с вентиляцией спины",
    img: backpack,
    priceRu: "11900,00₽",
    priceUk: "£79.99",
    delivery: "от £6.70",
    days: "10 дней",
    save: "$46.40",
  },
  {
    id: 304,
    name: "Bio Reusable Shopper",
    text: "Многоразовая эко-сумка из переработанного сырья",
    img: ecobag,
    priceRu: "890,00₽",
    priceUk: "£5.90",
    delivery: "от £3.80",
    days: "8 дней",
    save: "$6.10",
  },
  {
    id: 305,
    name: "Bifold Leather Wallet",
    text: "Портмоне из натуральной кожи, RFID-защита",
    img: wallet,
    priceRu: "7250,00₽",
    priceUk: "£48.00",
    delivery: "от £4.10",
    days: "9 дней",
    save: "$31.60",
  },
];

export const kidsList = [
  {
    id: 401,
    name: "Toy Starter Bundle",
    text: "Большой набор развивающих игрушек от 1 года",
    img: toys,
    priceRu: "8900,00₽",
    priceUk: "£59.99",
    delivery: "от £7.10",
    days: "12 дней",
    save: "$36.80",
  },
  {
    id: 402,
    name: "Wooden Baby Maracas",
    text: "Деревянные погремушки-маракасы, безопасная краска",
    img: rattle,
    priceRu: "1450,00₽",
    priceUk: "£9.50",
    delivery: "от £4.00",
    days: "9 дней",
    save: "$8.20",
  },
  {
    id: 403,
    name: "Chicco Balance Bike",
    text: "Беговел без педалей для детей 2–4 лет",
    img: balancebike,
    priceRu: "9700,00₽",
    priceUk: "£64.00",
    delivery: "от £9.80",
    days: "13 дней",
    save: "$44.50",
  },
  {
    id: 404,
    name: "Kids LED Scooter",
    text: "Трёхколёсный самокат со светящимися колёсами",
    img: scooter,
    priceRu: "6300,00₽",
    priceUk: "£41.99",
    delivery: "от £8.40",
    days: "12 дней",
    save: "$27.90",
  },
  {
    id: 405,
    name: "Teddy Bear Family Set",
    text: "Плюшевый мишка с медвежатами, гипоаллергенный",
    img: teddy,
    priceRu: "4800,00₽",
    priceUk: "£31.50",
    delivery: "от £6.90",
    days: "11 дней",
    save: "$21.30",
  },
];

export const sportList = [
  {
    id: 501,
    name: "Multi Gym Station",
    text: "Силовая станция с несколькими рабочими зонами",
    img: gymstation,
    priceRu: "189000,00₽",
    priceUk: "£1290.00",
    delivery: "от £64.00",
    days: "21 день",
    save: "$610.00",
  },
  {
    id: 502,
    name: "Team Ball Basket Set",
    text: "Мячи для баскетбола и регби с насосом в корзине",
    img: balls,
    priceRu: "7400,00₽",
    priceUk: "£49.00",
    delivery: "от £8.20",
    days: "11 дней",
    save: "$32.60",
  },
  {
    id: 503,
    name: "Life Fitness Elliptical",
    text: "Эллиптический тренажёр с сенсорным экраном",
    img: elliptical,
    priceRu: "214000,00₽",
    priceUk: "£1450.00",
    delivery: "от £72.00",
    days: "23 дня",
    save: "$680.00",
  },
  {
    id: 504,
    name: "Home Power Rack",
    text: "Домашний силовой комплекс со скамьёй и тягой",
    img: homegym,
    priceRu: "142000,00₽",
    priceUk: "£980.00",
    delivery: "от £58.00",
    days: "19 дней",
    save: "$455.00",
  },
  {
    id: 505,
    name: "Speed Jump Rope",
    text: "Скоростная скакалка с подшипниками, регулируемая",
    img: jumprope,
    priceRu: "1290,00₽",
    priceUk: "£8.40",
    delivery: "от £3.90",
    days: "8 дней",
    save: "$7.50",
  },
];

export const cosList = [
  {
    id: 601,
    name: "Pro Makeup Starter Kit",
    text: "Кисти, помады и тени в одном наборе",
    img: makeupset,
    priceRu: "12400,00₽",
    priceUk: "£82.00",
    delivery: "от £5.60",
    days: "10 дней",
    save: "$54.30",
  },
  {
    id: 602,
    name: "Watercolour Beauty Box",
    text: "Палетки теней, лаки и блески в подарочной коробке",
    img: makeupart,
    priceRu: "8900,00₽",
    priceUk: "£58.50",
    delivery: "от £5.10",
    days: "9 дней",
    save: "$38.40",
  },
  {
    id: 603,
    name: "Luxe Evening Set",
    text: "Тональный крем, помада и пудра премиум-линии",
    img: luxeset,
    priceRu: "16700,00₽",
    priceUk: "£112.00",
    delivery: "от £6.30",
    days: "10 дней",
    save: "$71.20",
  },
  {
    id: 604,
    name: "Daily Cosmetics Bundle",
    text: "Большой набор косметики на каждый день",
    img: cosmetics,
    priceRu: "6200,00₽",
    priceUk: "£39.90",
    delivery: "от £4.80",
    days: "9 дней",
    save: "$26.10",
  },
  {
    id: 605,
    name: "Elemis Collagen Cream",
    text: "Крем для лица с коллагеном, банка 100 мл",
    img: creamjar,
    priceRu: "6900,00₽",
    priceUk: "£46.00",
    delivery: "от £5.20",
    days: "10 дней",
    save: "$26.80",
  },
];

export const categoryList = [
  { id: 1, name: "Одежда", nameOf: "одежды", icon: CheckroomIcon, items: clothesList },
  { id: 2, name: "Электроника", nameOf: "электроники", icon: DevicesIcon, items: techList },
  { id: 3, name: "Аксессуары", nameOf: "аксессуаров", icon: ShoppingBagIcon, items: accList },
  { id: 4, name: "Для детей", nameOf: "детских товаров", icon: ToysIcon, items: kidsList },
  { id: 5, name: "Для спорта", nameOf: "спорттоваров", icon: FitnessCenterIcon, items: sportList },
  { id: 6, name: "Косметика", nameOf: "косметики", icon: SpaIcon, items: cosList },
];

export const afzalList = [
  { id: 1, icon: SavingsIcon, title: "Экономия", text: "до 70%" },
  { id: 2, icon: VerifiedIcon, title: "Только подлинная", text: "продукция" },
  { id: 3, icon: LocalShippingIcon, title: "Оперативная", text: "доставка" },
  { id: 4, icon: StorefrontIcon, title: "Огромный", text: "выбор товаров" },
];
export const countryList = ["Россия", "Казахстан", "Беларусь", "Узбекистан", "Таджикистан"];
export const serviceList = [
  "Без услуг",
  "Проверка товара",
  "Усиленная упаковка",
  "Объединение посылок",
];

export const stepList = [
  {
    id: 1,
    img: step1,
    title: "ВЫ ВЫБИРАЕТЕ ТОВАР",
    text: "в английском магазине, оплачиваете и указываете",
    link: "адрес склада",
    textEnd: "OkeyPost",
  },
  {
    id: 2,
    img: step2,
    title: "ПОКУПКИ ПРИХОДЯТ НА СКЛАД",
    text: "и появляются в вашем личном кабинете на нашем сайте",
    link: "",
    textEnd: "",
  },
  {
    id: 3,
    img: step3,
    title: "ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ",
    text: "в надежной упаковке, по выгодной цене и очень быстро",
    link: "",
    textEnd: "",
  },
  {
    id: 4,
    img: step4,
    title: "ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ",
    text: "в пункте выдачи, на почте или с курьером",
    link: "",
    textEnd: "",
  },
];

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

export const bannerList = [
  {
    id: 1,
    img: banner1,
    title:
      "Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.",
    text: "Такой способ покупки также подойдёт, если магазин принимает только английские карты.",
    btnText: "Попробовать",
  },
  {
    id: 2,
    img: banner2,
    title: "Виртуальный тур по нашему складу в реальном времени",
    text: "Вы можете всегда посмотреть на нашу слаженую работу на складе",
    btnText: "Попробовать",
  },
  {
    id: 3,
    crumb: "Главная / Как покупать",
    title: "Научим покупать в Великобритании!",
    text: "и экономить до 70%",
    btnText: "Получить адрес в UK",
  },
];
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TimerIcon from "@mui/icons-material/Timer";
import SmsIcon from "@mui/icons-material/Sms";

export const clientList = [
  {
    id: 1,
    icon: CalendarMonthIcon,
    title: "Больше не значит дороже",
    text: "С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.",
  },
  {
    id: 2,
    icon: TimerIcon,
    title: "Быстрая обработка посылок",
    text: "Посылка обрабатывается не дольше 48 часов после поступления на склад.",
  },
  {
    id: 3,
    icon: SmsIcon,
    title: "SMS-уведомления",
    text: "Отслеживайте весь процесс с помощью sms-уведомлений.",
  },
];

import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";

export const reviewList = [
  {
    id: 1,
    img: review1,
    name: "NIKOLAY S",
    rating: 5,
    text: "Ваша доставка самая быстрая и дешёвая!!",
    date: "16 Ноября 2021",
    city: "Санкт-Петербург",
  },
  {
    id: 2,
    img: review2,
    name: "DMITRIY D",
    rating: 5,
    text: "Пуховик Levi's с eBay. Всё пришло быстро и целым.",
    date: "16 Ноября 2021",
    city: "Москва",
  },
  {
    id: 3,
    img: review3,
    name: "VLADIMIR E",
    rating: 5,
    text: "Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики от Apple пришли в простом бумажном пакете )",
    date: "16 Ноября 2021",
    city: "Санкт-Петербург",
  },
  {
    id: 4,
    img: review4,
    name: "Оксана",
    rating: 5,
    text: "Очень быстро, надёжно! Как всегда большое спасибо за работу!",
    date: "16 Ноября 2021",
    city: "Одинцово",
  },
];

export const pageBannerList = [
  {
    id: 1,
    crumb: "Главная / Как покупать",
    title: "Научим покупать в Великобритании!",
    text: "и экономить до 70%",
    btnText: "Получить адрес в UK",
  },
  {
    id: 2,
    crumb: "Главная / Распродажи",
    title: "Распродажи",
    text: "ранний доступ к распродажам в магазинах",
    btnText: "Получить адрес в UK",
  },
];
import how1 from "../assets/how1.png";
import how2 from "../assets/how2.png";
import how3 from "../assets/how3.png";
import how4 from "../assets/how4.png";
import how5 from "../assets/how5.png";

export const howToBuyList = [
  {
    id: 1,
    num: "01",
    img: how1,
    title: "Получаем адрес для покупок в магазинах Великобритании",
    text: "Скупкой покупок приходится americanами и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.",
    text2: "",
    link: "",
  },
  {
    id: 2,
    num: "02",
    img: how2,
    title: "Идём за покупками в онлайн-магазины",
    text: "Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, а в качестве адреса доставки указываем адрес одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того,",
    text2: "",
    link: "что покупать нельзя",
  },
  {
    id: 3,
    num: "03",
    img: how3,
    title: "Следим за перемещением посылки до склада",
    text: "После оформления заказа магазин пришлёт трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5–7 дней покупки придут к нам, мы проверим их и отправим в специально хранилище, закреплённое за вашим аккаунтом.",
    text2: "",
    link: "",
  },
  {
    id: 4,
    num: "04",
    img: how4,
    title: "Оплачиваем доставку и покупки отправляются домой",
    text: "Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то ещё в других магазинах и отправить всё одной посылкой (так мы сэкономим). До 30 дней хранение будет абсолютно бесплатно.",
    text2:
      "Когда все товары поступили на склад, выбирайте способ доставки, мы надёжно всё упакуем и отправим вам, сообщив трек-номер.",
    link: "",
  },
  {
    id: 5,
    num: "05",
    img: how5,
    title: "Получаем посылку и спешим сделать новый заказ",
    text: "Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту.",
    text2: "Получаем покупки и радуемся :)",
    link: "",
  },
];

import shopPolo from "../assets/shop-polo.png";
import shopMk from "../assets/shop-mk.png";
import shopVictoria from "../assets/shop-victoria.png";
import shopUgg from "../assets/shop-ugg.png";
import shopHollister from "../assets/shop-hollister.png";
import shopSaks from "../assets/shop-saks.png";
import shopLevis from "../assets/shop-levis.png";
import shopNewbalance from "../assets/shop-newbalance.png";
import shopAbercrombie from "../assets/shop-abercrombie.png";
export const shopList = [
  {
    id: 1,
    img: shopAbercrombie,
    name: "Abercrombie & Fitch",
    textList: ["Скидка до 50% на всю коллекцию", "Промокод: BLACK50", "Бесплатная доставка от £60"],
    link: "Перейти в магазин",
  },
  {
    id: 2,
    img: shopHollister,
    name: "Hollister Co.",
    textList: ["Джинсы от £25", "Промокод: HOLLI25", "Скидка постоянным клиентам"],
    link: "Перейти в магазин",
  },
  {
    id: 3,
    img: shopPolo,
    name: "Polo Ralph Lauren",
    textList: ["Скидка до 30% на новинки", "Промокод: POLO30", "Возврат в течение 30 дней"],
    link: "Перейти в магазин",
  },
  {
    id: 4,
    img: shopMk,
    name: "Michael Kors",
    textList: ["Сумки со скидкой 35%", "Промокод: MK35", "Подарочная упаковка бесплатно"],
    link: "Перейти в магазин",
  },
  {
    id: 5,
    img: shopSaks,
    name: "Saks OFF 5TH",
    textList: ["Распродажа брендов до 60%", "Промокод: SAKS60", "Доставка по UK бесплатно"],
    link: "Перейти в магазин",
  },
  {
    id: 6,
    img: shopVictoria,
    name: "Victoria's Secret",
    textList: ["Скидка 40% на бельё", "Промокод: VS40", "Второй товар в подарок"],
    link: "Перейти в магазин",
  },
  {
    id: 7,
    img: shopLevis,
    name: "Levi's",
    textList: ["Модель 501 со скидкой 30%", "Промокод: LEVI30", "Бесплатная подшивка"],
    link: "Перейти в магазин",
  },
  {
    id: 8,
    img: shopNewbalance,
    name: "New Balance",
    textList: ["Кроссовки от £45", "Промокод: NB45", "Скидка на вторую пару 20%"],
    link: "Перейти в магазин",
  },
  {
    id: 9,
    img: shopUgg,
    name: "UGG Australia",
    textList: ["Классические модели -25%", "Промокод: UGG25", "Оригинальная овчина"],
    link: "Перейти в магазин",
  },
];
