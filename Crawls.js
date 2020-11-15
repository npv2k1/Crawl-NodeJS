//Sử dụng thư viện
const cheerio = require("cheerio");
const axios = require("axios").default;

// Lấy dữ liệu html
const fethHtml = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(
      `ERROR: An error occurred while trying to fetch the URL: ${url}`
    );
  }
};

// xử lý
const getPHR = async () => {

  // lấy dữ liệu html
  const steamUrl = "https://phr.vn/thong-tin-co-dong.aspx";
  var html = await fethHtml(steamUrl);
  // Truy vấn (có thể thay selector = $ cú pháp truy vấn giống jQuery)
  var selector = cheerio.load(html);
  var searchResults = selector("body").find(
    "#middle-content > div > div > div:nth-child(1) > a"
  );
  const date = searchResults.find("a >span");
  const ma = "PHR";
  selector("body")
    .find("#middle-content > div > div > div:nth-child(1) > a > span")
    .remove();
  var thongbao = selector(
    "#middle-content > div > div > div:nth-child(1) > a"
  ).text();
  var pdfLink = selector(
    "#middle-content > div > div > div:nth-child(1) > div > div > a").attr("href");
  console.log(thongbao);
  var link = "https://phr.vn/" + searchResults.attr("href");
  // Gom dữ liệu lại thành một mảng
  const res = [date.text(), ma, thongbao, link,pdfLink];
  return res;
};
const getFPT = async () => {

  
  const steamUrl = "https://www.fpt.com.vn/vi/nhadautu/cong-bo-thong-tin";
  var html = await fethHtml(steamUrl);
  
  var selector = cheerio.load(html);

 

  const date = selector(
    "#content > div.container-news > div.news_publish.ajax_publish.wr-page > div:nth-child(1) > div.form-accordion > div:nth-child(1) > div > div.col-ct.col1-tl > a"
  ).text();

  const ma = "FPT";

  var link="";

  var thongbao = selector(
    "#content > div.container-news > div.news_publish.ajax_publish.wr-page > div:nth-child(1) > div.form-accordion > div:nth-child(1) > div > div.col-ct.col1-tl > a"
  ).html();
  console.log(thongbao)
  var pdfLink = selector(
    "#content > div.container-news > div.news_publish.ajax_publish.wr-page > div:nth-child(1) > div.form-accordion > div:nth-child(1) > div > div.col-ct.col1-tl > a").attr("href");
  

  const res = [date, ma, thongbao, link,pdfLink];
  return res;
};
getFPT().then((msg)=>{
  console.log(msg)
})
//module.exports = { getPHR };
