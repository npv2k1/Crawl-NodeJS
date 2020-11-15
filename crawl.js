//file: index.js
const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
var dt;
    const URL = `https://phr.vn/thong-tin-co-dong.aspx`;
    const options = {
        uri: URL,
        transform: function (body) {
            //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
            return cheerio.load(body);
        },
    };
    (async function crawler() {
        try {
            // Lấy dữ liệu từ trang crawl đã được parseDOM
            var $ = await rp(options);
        } catch (error) {
            return error;
        }
        var x = $("#middle-content > div > div > div:nth-child(1) > a");
        console.log("data\n" + x.attr("href"))
        dt = "data\n" + x.attr("href");
    })();


console.log(dt)
//console.log(crawler())