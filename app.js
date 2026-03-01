const countryList = {
  AED:"AE", AFN:"AF", XCD:"AG", ALL:"AL", AMD:"AM",
  ANG:"AN", AOA:"AO", AQD:"AQ", ARS:"AR", AUD:"AU",
  AZN:"AZ", BAM:"BA", BBD:"BB", BDT:"BD", XOF:"BE",
  BGN:"BG", BHD:"BH", BIF:"BI", BMD:"BM", BND:"BN",
  BOB:"BO", BRL:"BR", BSD:"BS", NOK:"BV", BWP:"BW",
  BYR:"BY", BZD:"BZ", CAD:"CA", CDF:"CD", XAF:"CF",
  CHF:"CH", CLP:"CL", CNY:"CN", COP:"CO", CRC:"CR",
  CUP:"CU", CVE:"CV", CYP:"CY", CZK:"CZ", DJF:"DJ",
  DKK:"DK", DOP:"DO", DZD:"DZ", ECS:"EC", EEK:"EE",
  EGP:"EG", ETB:"ET", EUR:"FR", FJD:"FJ", FKP:"FK",
  GBP:"GB", GEL:"GE", GGP:"GG", GHS:"GH", GIP:"GI",
  GMD:"GM", GNF:"GN", GTQ:"GT", GYD:"GY", HKD:"HK",
  HNL:"HN", HRK:"HR", HTG:"HT", HUF:"HU", IDR:"ID",
  ILS:"IL", INR:"IN", IQD:"IQ", IRR:"IR", ISK:"IS",
  JMD:"JM", JOD:"JO", JPY:"JP", KES:"KE", KGS:"KG",
  KHR:"KH", KMF:"KM", KPW:"KP", KRW:"KR", KWD:"KW",
  KYD:"KY", KZT:"KZ", LAK:"LA", LBP:"LB", LKR:"LK",
  LRD:"LR", LSL:"LS", LTL:"LT", LVL:"LV", LYD:"LY",
  MAD:"MA", MDL:"MD", MGA:"MG", MKD:"MK", MMK:"MM",
  MNT:"MN", MOP:"MO", MRO:"MR", MTL:"MT", MUR:"MU",
  MVR:"MV", MWK:"MW", MXN:"MX", MYR:"MY", MZN:"MZ",
  NAD:"NA", XPF:"NC", NGN:"NG", NIO:"NI", NPR:"NP",
  NZD:"NZ", OMR:"OM", PAB:"PA", PEN:"PE", PGK:"PG",
  PHP:"PH", PKR:"PK", PLN:"PL", PYG:"PY", QAR:"QA",
  RON:"RO", RSD:"RS", RUB:"RU", RWF:"RW", SAR:"SA",
  SBD:"SB", SCR:"SC", SDG:"SD", SEK:"SE", SGD:"SG",
  SKK:"SK", SLL:"SL", SOS:"SO", SRD:"SR", STD:"ST",
  SVC:"SV", SYP:"SY", SZL:"SZ", THB:"TH", TJS:"TJ",
  TMT:"TM", TND:"TN", TOP:"TO", TRY:"TR", TTD:"TT",
  TWD:"TW", TZS:"TZ", UAH:"UA", UGX:"UG", USD:"US",
  UYU:"UY", UZS:"UZ", VEF:"VE", VND:"VN", VUV:"VU",
  YER:"YE", ZAR:"ZA", ZMK:"ZM", ZWD:"ZW",
};

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");
const btn = document.querySelector(".btn");
const amountInput = document.getElementById("amount");

// Populate dropdowns
for (let currency in countryList){
  let option1 = document.createElement("option");
  option1.value = currency;
  option1.innerText = currency;
  fromSelect.appendChild(option1);

  let option2 = document.createElement("option");
  option2.value = currency;
  option2.innerText = currency;
  toSelect.appendChild(option2);
}

// Default selection
fromSelect.value = "USD";
toSelect.value = "PKR";

// Update flags
function updateFlag(select, img){
  let code = countryList[select.value];
  img.src = `https://flagcdn.com/64x48/${code.toLowerCase()}.png`;
}

fromSelect.addEventListener("change", ()=>updateFlag(fromSelect, fromFlag));
toSelect.addEventListener("change", ()=>updateFlag(toSelect, toFlag));

updateFlag(fromSelect, fromFlag);
updateFlag(toSelect, toFlag);

// Swap button
document.getElementById("swap").addEventListener("click", ()=>{
  let temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  updateFlag(fromSelect, fromFlag);
  updateFlag(toSelect, toFlag);
});

// Currency conversion
const Base_URL = "https://open.er-api.com/v6/latest/";

btn.addEventListener("click", async ()=>{
  let amt = amountInput.value;
  if(!amt || amt<1) amt=1;

  const URL = `${Base_URL}${fromSelect.value}`;
  try{
    let res = await fetch(URL);
    if(!res.ok) throw new Error("API error");
    let data = await res.json();

    let rate = data.rates[toSelect.value];
    if(!rate) throw new Error("Invalid currency");

    let finalAmt = (amt * rate).toFixed(2);
    document.getElementById("result").innerText = 
      `${amt} ${fromSelect.value} = ${finalAmt} ${toSelect.value}`;
  }catch(err){
    document.getElementById("result").innerText = "Conversion failed!";
    console.log(err);
  }
});