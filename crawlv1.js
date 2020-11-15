const cheerio = require("cheerio");
const axios = require("axios").default;

const fethHtml = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(`ERROR: An error occurred while trying to fetch the URL: ${url}`);
  }
};
const getdata = async () => {
  const steamUrl =
    "https://phr.vn/thong-tin-co-dong.aspx";

  var html = await fethHtml(steamUrl);

  var selector = cheerio.load(html);

  var searchResults = selector("body").find(
    "#middle-content > div > div > div:nth-child(1) > a"
  );
  // const date = selector("body").find(
  //   "#middle-content > div > div > div:nth-child(1) > a > span"
  // ).text();
  const date=searchResults.find("a >span");
  const ma='phr';
  selector("body").find(
    "#middle-content > div > div > div:nth-child(1) > a > span"
  ).remove();
  //searchResults.remove("a >span");

  var thongbao = selector(
    "#middle-content > div > div > div:nth-child(1) > a"
  ).text();


  console.log(thongbao);
  var link = "https://phr.vn/" + searchResults.attr("href");




  const res = [date.text(), ma,thongbao ,link]; 
  return res ;
};
getdata().then((msg)=>{
  console.log(msg)
})
module.exports ={getdata};