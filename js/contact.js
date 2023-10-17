$(function () {
  $("#accordion").accordion({
    animate: 1000,
    heightStyle: "fill",
    collapsible: true,
  });

  $("#ham-accordion").accordion({
    animate: 1000,
    heightStyle: "fill",
    collapsible: true,
  });

  $(".hamburger").on("click", function () {
    $(".hamburger-menu").animate({
      left: 0,
    });
  });

  $(".hamburger-close-btn").on("click", function () {
    $(".hamburger-menu").animate({
      left: "-95%",
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".header-icon").hide();
    } else {
      $(".header-icon").show();
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  let select = document.querySelector("#branch-location");

  const cities = [
    "-Any-",
    "Ahmedabad",
    "Bangalore",
    "Bhubaneswar",
    "Chandigarh",
    "Chennai",
    "Cochin",
    "Coimbatore",
    "Ghaziabad",
    "Gurgoan",
    "Guwahati",
    "Hubli",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Kolkata",
    "Lucknow",
    "Mumbai",
    "Nagpur",
    "New Delhi",
    "Patna",
    "Pune",
    "Ranchi",
    "Vijayawada",
  ];

  let citylist = cities.map(function (city, index) {
    return `<option value="${city}">${city}</option>`;
  });

  select.innerHTML = citylist.join();
});

$(document).ready(function () {
  const country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malwai",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const city = [
    "Delhi",
    "Mumbai",
    "Kolkāta",
    "Bangalore",
    "Chennai",
    "Hyderābād",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Prayagraj",
    "Lucknow",
    "Jaipur",
    "Cawnpore",
    "Mirzapur",
    "Nagpur",
    "Ghaziabād",
    "Vadodara",
    "Vishakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Chinchvad",
    "Patna",
    "Bilaspur",
    "Ludhiana",
    "Agwar",
    "Agra",
    "Madurai",
    "Jamshedpur",
    "Nasik",
    "Faridabad",
    "Aurangābād",
    "Rajkot",
    "Meerut",
    "Jabalpur",
    "Kalamboli",
    "Vasai",
    "Najafgarh",
    "Varanasi",
    "Srinagar",
    "Dhanbād",
    "Amritsar",
    "Aligarh",
    "Guwahāti",
    "Haora",
    "Ranchi",
    "Gwalior",
    "Chandigarh",
    "Vijayavāda",
    "Jodhpur",
    "Raipur",
    "Kota",
    "Kalkaji Devi",
    "Bhayandar",
    "Ambattūr",
    "Salt Lake City",
    "Bhatpāra",
    "Kukatpalli",
    "Darbhanga",
    "Dasarhalli",
    "Muzaffarpur",
    "Oulgaret",
    "New Delhi",
    "Tiruvottiyur",
    "Puducherry",
    "Byatarayanpur",
    "Pallavaram",
    "Secunderabad",
    "Shimla",
    "Puri",
    "Shrirampur",
    "Hugli",
    "Chandannagar",
    "Sultanpur Mazra",
    "Krishnanagar",
    "Barakpur",
    "Bhalswa Jahangirpur",
    "Nangloi Jat",
    "Yelahanka",
    "Titagarh",
    "Dam Dam",
    "Bansbaria",
    "Madhavaram",
    "Baj Baj",
    "Nerkunram",
    "Kendrāparha",
    "Sijua",
    "Manali",
    "Chakapara",
    "Pappakurichchi",
    "Herohalli",
    "Madipakkam",
    "Sabalpur",
    "Salua",
    "Balasore",
    "Jālhalli",
    "Chinnasekkadu",
    "Jethuli",
    "Nagtala",
    "Bāgalūr",
    "Pakri",
    "Hunasamaranhalli",
    "Hesarghatta",
    "Bommayapālaiyam",
    "Gundūr",
    "Punādih",
    "Harilādih",
    "Alāwalpur",
    "Mādnāikanhalli",
    "Kādiganahalli",
    "Mahuli",
    "Zeyādah Kot",
    "Arshakunti",
    "Hīrāpur",
    "Mirchi",
    "Sonudih",
    "Sondekoppa",
    "Babura",
    "Mādavar",
    "Kadabgeri",
    "Nanmangalam",
    "Taliganja",
    "Tarchha",
    "Belgharia",
    "Kammanhalli",
    "Sonnappanhalli",
    "Kedihāti",
    "Doddajīvanhalli",
    "Simli Murārpur",
    "Sonāwān",
    "Devanandapur",
    "Tribeni",
    "Huttanhalli",
    "Nathupur",
    "Bāli",
    " Vājarhalli",
    "Saino",
    "Shekhpura",
    " Cāchohalli",
    "Nārāyanpur Kola",
    "Gyan Chak",
    "Kasgatpur",
    "Kitanelli",
    "Harchandi",
    "Santoshpur",
    "Bendravādi",
    "Kodagihalli",
    "Harna Buzurg",
    "Mailanhalli",
    "Sultanpur",
  ];

  let salesdata = localStorage.getItem("sales_data_list");
  let salesDataList = salesdata === null ? [] : JSON.parse(salesdata);

  $('input[type="radio"]').click(function () {
    let inputValue = $(this).attr("value");
    console.log(inputValue);
    if (inputValue == "salesForm") {
      $(".box").hide();
      $(".salesForm").show();
    }
    if (inputValue == "servicesForm") {
      $(".box").hide();
      $(".servicesForm").show();
    }
    if (inputValue == "channelPartnerForm") {
      $(".box").hide();
      $(".channelForm").show();
    }
    if (inputValue == "othersForm") {
      $(".box").hide();
      $(".othersForm").show();
    }
  });

  $(".country").autocomplete({
    source: country_list,
  });
  $(".state").autocomplete({
    source: state,
  });
  $(".city").autocomplete({
    source: city,
  });

  //   sales form validation

  $("#sales-form-elements").validate({
    rules: {
      query: {
        required: true,
      },
      Name: {
        required: true,
      },
      country: {
        required: true,
      },
      State: {
        required: true,
      },
      city: {
        required: true,
      },
      locality: {
        required: true,
      },
      pincode: {
        required: true,
      },
      Number: {
        required: true,
      },
      email: {
        required: true,
      },
    },

    messages: {
      query: {
        required: "Please enter your query",
      },
      Name: {
        required: "Please enter your name",
      },
      country: {
        required: "Please enter your name",
      },
      state: {
        required: "Please enter your state",
      },
      city: {
        required: "Please enter your city",
      },
      locality: {
        required: "Please enter your locality",
      },
      pincode: {
        required: "Please enter your pincode",
      },
      Number: {
        required: "Please enter your Number",
      },
      email: {
        required: "Please enter your Email",
      },
    },
  });

  $("#sales-form-elements").on("submit", function (event) {
    event.preventDefault();
    let isValid = $("#sales-form-elements").valid();
    if (isValid === false) {
      return false;
    }
    let salesData = $("#sales-form-elements").serializeArray();
    console.log(salesData);
    let salesObj = {};
    salesData.forEach((user) => {
      salesObj[user.name] = user.value;
    });
    salesDataList.push(salesObj)
    localStorage.setItem("sales_data_list", JSON.stringify(salesDataList))
    $("#sales-form-elements").trigger("reset")
    console.log(salesDataList);
  });

  //   service form validation

  $('input[type="radio"]').click(function () {
    let inputValue = $(this).attr("value");
    console.log(inputValue);
    if (inputValue == "salesForm") {
      $(".box").hide();
      $(".salesForm").show();
    }
    if (inputValue == "servicesForm") {
      $(".box").hide();
      $(".servicesForm").show();
    }
    if (inputValue == "channelPartnerForm") {
      $(".box").hide();
      $(".channelForm").show();
    }
    if (inputValue == "othersForm") {
      $(".box").hide();
      $(".othersForm").show();
    }
  });

  $(".country").autocomplete({
    source: country_list,
  });

  $(".state").autocomplete({
    source: state,
  });

  $(".city").autocomplete({
    source: city,
  });

  //   service-form validation

  let servicedata = localStorage.getItem("service_data_list");
  let serviceDataList = servicedata === null ? [] : JSON.parse(servicedata);
  $("#service-form-elements").validate({
    rules: {
      query: {
        required: true,
      },
      subQuery: {
        required: true,
      },
      Name: {
        required: true,
      },
      country: {
        required: true,
      },
      State: {
        required: true,
      },
      city: {
        required: true,
      },
      locality: {
        required: true,
      },
      pincode: {
        required: true,
      },
      Number: {
        required: true,
      },
      email: {
        required: true,
      },
      ReferenceNumber: {
        required: true,
      },
      serialNumber: {
        required: true,
      },
    },

    messages: {
      query: {
        required: "Please enter your query",
      },
      Name: {
        required: "Please enter your name",
      },
      country: {
        required: "Please enter your name",
      },
      state: {
        required: "Please enter your state",
      },
      city: {
        required: "Please enter your city",
      },
      locality: {
        required: "Please enter your locality",
      },
      pincode: {
        required: "Please enter your pincode",
      },
      Number: {
        required: "Please enter your Number",
      },
      email: {
        required: "Please enter your Email",
      },
      ReferenceNumber: {
        required: "Please enter your reference number",
      },
      serialNumber: {
        required: "Please enter your serial number",
      },
    },
  });

  $("#service-form-elements").on("submit", function (event) {
    event.preventDefault();
    let isValid = $("#service-form-elements").valid();
    if (isValid === false) {
      return false;
    }
    let serviceData = $("#service-form-elements").serializeArray();
    let serviceObj = {};
    serviceData.forEach((user) => {
      serviceObj[user.name] = user.value;
    });
    serviceDataList.push(serviceObj);
    localStorage.setItem("service_data_list", JSON.stringify(serviceDataList));
    $("#service-form-elements").trigger("reset");
  });

  //   channel form validation
  let channeldata = localStorage.getItem("channel_data_list");
  let channelDataList = channeldata === null ? [] : JSON.parse(channeldata);
  $("#channel-form-elements").validate({
    rules: {
      query: {
        required: true,
      },
      Name: {
        required: true,
      },
      country: {
        required: true,
      },
      State: {
        required: true,
      },
      city: {
        required: true,
      },
      locality: {
        required: true,
      },
      pincode: {
        required: true,
      },
      Number: {
        required: true,
      },
      email: {
        required: true,
      },
    },

    messages: {
      query: {
        required: "Please enter your query",
      },
      Name: {
        required: "Please enter your name",
      },
      country: {
        required: "Please enter your name",
      },
      state: {
        required: "Please enter your state",
      },
      city: {
        required: "Please enter your city",
      },
      locality: {
        required: "Please enter your locality",
      },
      pincode: {
        required: "Please enter your pincode",
      },
      Number: {
        required: "Please enter your Number",
      },
      email: {
        required: "Please enter your Email",
      },
    },
  });

  $("#channel-form-elements").on("submit", function (event) {
    event.preventDefault();
    let isValid = $("#others-form-elements").valid();
    if (isValid === false) {
      return false;
    }
    let channelData = $("#others-form-elements").serializeArray();
    let channelObj = {};
    channelData.forEach((user) => {
      channelObj[user.name] = user.value;
    });
    channelDataList.push(channelObj);
    localStorage.setItem("channel_data_list", JSON.stringify(channelDataList));
    $("#channel-form-elements").trigger("reset");
  });

  //   others form validation
  let othersdata = localStorage.getItem("others_data_list");
  let othersDataList = othersdata === null ? [] : JSON.parse(othersdata);
  $("#others-form-elements").validate({
    rules: {
      query: {
        required: true,
      },
      Name: {
        required: true,
      },
      country: {
        required: true,
      },
      State: {
        required: true,
      },
      city: {
        required: true,
      },
      locality: {
        required: true,
      },
      pincode: {
        required: true,
      },
      Number: {
        required: true,
      },
      email: {
        required: true,
      },
    },

    messages: {
      query: {
        required: "Please enter your query",
      },
      Name: {
        required: "Please enter your name",
      },
      country: {
        required: "Please enter your name",
      },
      state: {
        required: "Please enter your state",
      },
      city: {
        required: "Please enter your city",
      },
      locality: {
        required: "Please enter your locality",
      },
      pincode: {
        required: "Please enter your pincode",
      },
      Number: {
        required: "Please enter your Number",
      },
      email: {
        required: "Please enter your Email",
      },
    },
  });

  $("#others-form-elements").on("submit", function (event) {
    event.preventDefault();
    let isValid = $("#others-form-elements").valid();
    if (isValid === false) {
      return false;
    }
    let othersData = $("#others-form-elements").serializeArray();
    let othersObj = {};
    othersData.forEach((user) => {
      othersObj[user.name] = user.value;
    });
    othersDataList.push(othersObj);
    localStorage.setItem("others_data_list", JSON.stringify(othersDataList));
    $("#others-form-elements").trigger("reset");
    console.log(othersDataList);
  });
});
