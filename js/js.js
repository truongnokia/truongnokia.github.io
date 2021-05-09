var text = "";
var oncam = 0;
var index = -1;
var indexphone = -1;
var getphone = "";
var checkgoi = 0,
    danggoi = "",
    usergoi = "",
    danhdaugoi;
var chaypin, chaynhapso;
var valuenumber = "";
var checkdelnumber = 1;

// ngay
var d = new Date();
var thu = d.getDay() + 1;
var ngay = d.getDate();
var thang = d.getMonth() + 1;
var nam = d.getFullYear();
//
var sdt = ["Trường Jae", "113", "Trần Đức Po", "18008198"];
var nhatky = ["113", "Trường Jae", "Trần Dần", "Huấn Hoa Hồng"];
var info = new Array();
info[0] = ["113", "0345382198", "0123456789", "0808080808"];
info[1] = ["00:05:51", "00:01:29", "00:32:07", "00:12:31"];
info[2] = ["08:11:16 - 15/09/2018", "14:41:35 - 20/12/2020", "20:16:06 - 06/04/2019", "11:09:43 - 24/02/2021"];
var manhinh = document.getElementsByClassName("mh")[0];
var videoyt = ["https://www.youtube.com/embed/viOPWvIj28A", "https://www.youtube.com/embed/xypzmu5mMPY",
    "https://www.youtube.com/embed/S2JAeuwjeN4", "https://www.youtube.com/embed/UMOyunC3HGw",
    "https://www.youtube.com/embed/32sYGCOYJUM", "https://www.youtube.com/embed/_5cUW112Haw"
];
var listtitle = [
    "Máy Tính", "Camera", "Danh Bạ",
    "Nhật Ký Cuộc Gọi", "Lịch", "Trình Duyệt",
    "Youtube"
];
var listimg = [
    "img/calculator.png", "img/camera.png", "img/phonebook.png",
    "img/nhatky.png", "img/calendar.png", "img/web.png", "img/youtube.png"
];

function nextanh() {
    if (index == -1) {
        index = 0;
        var i = document.getElementById("anhmid");
        i.src = listimg[index];
        document.getElementById("titlelistitem").innerText = listtitle[index];
    } else {
        if (index < listimg.length - 1) {
            index++;
        } else {
            index = 0;
        }
        var i = document.getElementById("anhmid");
        i.src = listimg[index];
        document.getElementById("titlelistitem").innerText = listtitle[index];
    }

}

function prevanh() {
    if (index == -1) {
        index = listimg.length - 1;
        var i = document.getElementById("anhmid");
        i.src = listimg[index];
        document.getElementById("titlelistitem").innerText = listtitle[index];
    } else {
        if (index === 0) {
            index = listimg.length - 1;
        } else {
            index--;
        }
        var i = document.getElementById("anhmid");
        i.src = listimg[index];
        document.getElementById("titlelistitem").innerText = listtitle[index];
    }
}

function nextphone() {
    if (indexphone == -1) {
        indexphone = 0;
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    } else {
        if (indexphone < 3) {
            indexphone++;
        } else {
            indexphone = 0;
        }
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    }
    usergoi = sdt[indexphone];

}

function prevphone() {
    if (indexphone == -1) {
        indexphone = 3;
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    } else {
        if (indexphone === 0) {
            indexphone = 3;
        } else {
            indexphone--;
        }
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    }
    usergoi = sdt[indexphone];
}

function nextcalllog() {
    if (indexphone == -1) {
        indexphone = 0;
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    } else {
        if (indexphone < 3) {
            indexphone++;
        } else {
            indexphone = 0;
        }
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    }
    usergoi = nhatky[indexphone];

}

function prevcalllog() {
    if (indexphone == -1) {
        indexphone = 3;
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    } else {
        if (indexphone === 0) {
            indexphone = 3;
        } else {
            indexphone--;
        }
        var i = document.getElementById("phone" + indexphone.toString());
        i.style.backgroundColor = "black";
        i.style.color = "rgb(204, 204, 193)";
        for (var i = 0; i < 4; i++) {
            if (i != indexphone) {
                document.getElementById("phone" + i.toString()).style.color = "black";
                document.getElementById("phone" + i.toString()).style.backgroundColor = "rgb(204, 204, 193)";
            }
        }
    }
    usergoi = nhatky[indexphone];
}

function time() {
    now = new Date();
    var time = document.getElementById("countdown");
    var str = "";
    if (parseInt(now.getHours()) < 10) {
        str += "0" + now.getHours() + ":";
    } else {
        str += now.getHours() + ":";
    }
    if (parseInt(now.getMinutes()) < 10) {
        str += "0" + now.getMinutes() + ":";
    } else {
        str += now.getMinutes() + ":";
    }
    if (parseInt(now.getSeconds()) < 10) {
        str += "0" + now.getSeconds();
    } else {
        str += now.getSeconds();
    }
    time.innerText = str;
}

function nutnguon() {
    index = -1;
    document.getElementsByClassName("desktop")[0].style.display = "block";
    var sao = document.getElementById("btn10");
    var thang = document.getElementById("btn11");
    try {
        for (var i = 1; i <= 12; i++) {
            document.getElementById("span" + i.toString()).style.display = "inline-block";
        }
    } catch {}
    sao.innerText = "*";
    thang.innerText = "#";
}

function createChucNang(tag, id, width, height) {
    var ilm = document.createElement(tag);
    ilm.style.width = width;
    ilm.style.height = height;
    ilm.id = id;
    return ilm;
}

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'IOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
}

class maytinhbotui {
    constructor() {
        manhinh.appendChild(createChucNang("div", "maytinh", "100%", "100%"));
        document.getElementById("maytinh").appendChild(createChucNang("input", "nhappheptoan", "99%", "100%"));
        document.getElementById("nhappheptoan").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("nhappheptoan").style.outline = "none";
        document.getElementById("nhappheptoan").style.fontSize = "30px";
        document.getElementById("nhappheptoan").style.borderRadius = "10px";
        document.getElementById("nhappheptoan").style.border = "none";
        document.getElementById("nhappheptoan").placeholder = "Nhập phép toán";
        document.getElementById("nhappheptoan").style.fontWeight = "bold";
        var nhan = document.getElementById("centertop");
        var chia = document.getElementById("centerbot");
        var tru = document.getElementById("centerleft");
        var cong = document.getElementById("centerright");
        var bang = document.getElementById("centermid");
        var phay = document.getElementById("btn10");
        var xoall = document.getElementById("btn11");
        document.getElementById("lefttop").onclick = function() {}
        phay.innerText = ",";
        xoall.innerText = "AC";
        nhan.innerText = "×";
        chia.innerText = "÷";
        cong.innerText = "+";
        tru.innerText = "-";
        bang.innerText = "=";
        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                document.getElementById("maytinh").remove();
                new home().main();
            } catch {}
            nutnguon();
        }

        nhan.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text += "×";
            document.getElementById("nhappheptoan").value = text;
            xoall.onclick = function() {
                text = "";
                document.getElementById("nhappheptoan").value = text;
            }
        }
        chia.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text += "÷";
            document.getElementById("nhappheptoan").value = text;
        }
        cong.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text += "+";
            document.getElementById("nhappheptoan").value = text;
        }
        tru.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text += "-";
            document.getElementById("nhappheptoan").value = text;
        }
        phay.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text += ",";
            document.getElementById("nhappheptoan").value = text;
        }
        xoall.onclick = function() {
            text = "";
            document.getElementById("nhappheptoan").value = text;
        }
        bang.onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            try {
                var str = text.replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, ".");
                text = eval(str);
                document.getElementById("nhappheptoan").value = text;
            } catch {
                document.getElementById("nhappheptoan").value = "Nhập ngu!";
            }
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            var x = document.getElementById(id).value;
            text += x;
            document.getElementById("nhappheptoan").value = text;
        }
    }

    deltxt() {
        document.getElementById("righttop").onclick = function() {
            text = document.getElementById("nhappheptoan").value;
            text = text.slice(0, text.length - 1);
            document.getElementById("nhappheptoan").value = text;
        }
    }
    maytinh() {
        text = "";
        try {
            for (var i = 1; i <= 12; i++) {
                document.getElementById("span" + i.toString()).style.display = "none";
            }
        } catch {}
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.deltxt();
        document.getElementById("leftbot").onclick = function() {}
    }
}

class maychupanh {
    constructor() {
        manhinh.appendChild(createChucNang("div", "chupanh", "100%", "100%"));
        document.getElementById("chupanh").appendChild(createChucNang("video", "cam", "100%", "100%"));
        document.getElementById("cam").style.border = "none";
        document.getElementById("cam").autoplay = "true";
        document.getElementById("cam").allow = "geolocation; microphone; camera";
        const video = document.getElementById('cam');
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: {} }).then(stream => {
                video.srcObject = stream;
            })
        }
        var nhan = document.getElementById("centertop");
        var chia = document.getElementById("centerbot");
        var tru = document.getElementById("centerleft");
        var cong = document.getElementById("centerright");
        var bang = document.getElementById("centermid");
        var exit = document.getElementById("rightbot");
        var sao = document.getElementById("btn10");
        var thang = document.getElementById("btn11");
        sao.onclick = function() {}
        thang.onclick = function() {}
        exit.onclick = function() {
            try {
                document.getElementById("chupanh").remove();
                new home().main();
            } catch {}
            nutnguon();
        }
        nhan.innerText = "⇑";
        chia.innerText = "⇓";
        cong.innerText = "⇒";
        tru.innerText = "⇐";
        bang.innerText = "●";

        bang.onclick = function() {
            if (oncam == 0) {
                document.getElementById("cam").pause();
                oncam = 1;
            } else {
                oncam = 0;
                document.getElementById("cam").play();
            }
        }
    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    back() {
        document.getElementById("righttop").onclick = function() {
            document.getElementById("chupanh").remove();
            new menu().main();
        }
    }
    chupanh() {
        document.getElementById("lefttop").onclick = function() {}
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
    }
}

class home {
    constructor() {
        var nhan = document.getElementById("centertop");
        var chia = document.getElementById("centerbot");
        var tru = document.getElementById("centerleft");
        var cong = document.getElementById("centerright");
        var bang = document.getElementById("centermid");
        var exit = document.getElementById("rightbot");
        nhan.innerText = "⇑";
        chia.innerText = "⇓";
        cong.innerText = "⇒";
        tru.innerText = "⇐";
        bang.innerText = "●";
        nutnguon();
        exit.onclick = function() {
            nutnguon();
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {
            valuenumber = document.getElementById(id).value;
            document.getElementsByClassName("desktop")[0].style.display = "none";
            new inputnumber().main();
        }
    }

    back() {
        document.getElementById("righttop").onclick = function() {
            document.getElementsByClassName("desktop")[0].style.display = "none";
            new danhba().main();
        }
    }
    select() {
        document.getElementById("lefttop").onclick = function() {
            document.getElementsByClassName("desktop")[0].style.display = "none";
            new menu().main();
        }
        document.getElementById("centermid").onclick = function() {
            document.getElementsByClassName("desktop")[0].style.display = "none";
            new menu().main();
        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    call() {
        document.getElementById("leftbot").onclick = function() {
            try {
                document.getElementsByClassName("desktop")[0].style.display = "none";
                new calllogs().main();
            } catch {}
        }
    }
    loadpin() {
        setInterval(() => {
            time();
        }, 1000);
        var checkpin = 0;

        chaypin = setInterval(() => {
            if (checkpin == 0) {
                document.getElementById("pin1").style.display = "none";
                checkpin = 1;
            } else {
                document.getElementById("pin1").style.display = "inline-block";
                checkpin = 0;
            }
        }, 700);
    }

    main() {
        for (var i = 0; i < 12; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
        clearInterval(chaypin);
        this.loadpin();
        this.call();

    }
}
class menu {
    constructor() {
        manhinh.appendChild(createChucNang("div", "menu", "100%", "100%"));
        document.getElementById("menu").appendChild(createChucNang("div", "titlelistitem", "100%", "20%"));
        document.getElementById("menu").style.borderRadius = "10px";

        //
        document.getElementById("menu").appendChild(createChucNang("div", "listitem", "100%", "60%"));
        document.getElementById("listitem").appendChild(createChucNang("div", "leftitem", "20%", "100%"));
        document.getElementById("leftitem").appendChild(createChucNang("img", "anhleft", "50%", "20%"));
        document.getElementById("anhleft").src = "img/anhleft.png";

        //
        document.getElementById("listitem").appendChild(createChucNang("div", "miditem", "60%", "100%"));
        document.getElementById("miditem").appendChild(createChucNang("img", "anhmid", "60%", "80%"));
        document.getElementById("anhmid").src = listimg[0];
        //
        document.getElementById("listitem").appendChild(createChucNang("div", "rightitem", "20%", "100%"));
        document.getElementById("rightitem").appendChild(createChucNang("img", "anhright", "50%", "20%"));
        document.getElementById("anhright").src = "img/anhright.png";
        //
        document.getElementById("menu").appendChild(createChucNang("div", "botitem", "100%", "20%"));

        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Chọn";


        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Trở về";

        nextanh();

        var nhan = document.getElementById("centertop");
        var chia = document.getElementById("centerbot");
        var tru = document.getElementById("centerleft");
        var cong = document.getElementById("centerright");
        var bang = document.getElementById("centermid");
        var exit = document.getElementById("rightbot");
        nhan.innerText = "⇑";
        chia.innerText = "⇓";
        cong.innerText = "⇒";
        tru.innerText = "⇐";
        bang.innerText = "●";
        exit.onclick = function() {
            try {
                document.getElementById("menu").remove();
                new home().main();
            } catch {}
            nutnguon();
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    back() {
        document.getElementById("righttop").onclick = function() {
            try {
                document.getElementById("menu").remove();
                new home().main();
            } catch {}
            nutnguon();
        }
    }

    select() {
        document.getElementById("lefttop").onclick = function() {
            var temp = index;
            try {
                document.getElementById("menu").remove();
            } catch {}
            switch (temp) {
                case 0:
                    new maytinhbotui().maytinh();
                    break;
                case 1:
                    if (getOS() != "IOS" && getOS() != "Android") {
                        new maychupanh().chupanh();
                    } else {
                        alert("Thiết bị không tương thích");
                        new menu().main();
                    }
                    break;
                case 2:
                    new danhba().main();
                    break;
                case 3:
                    new calllogs().main();
                    break;
                case 4:
                    if (thu == 8) var date = "Chủ Nhật" + "\nNgày " + ngay + " Tháng " + thang + " Năm " + nam;
                    else var date = "Thứ " + thu + "\nNgày " + ngay + " Tháng " + thang + " Năm " + nam;
                    date += "\n --ĐẸP TROAI--";
                    new showinfo(date).main();
                    break;
                case 5:
                    new multiframe("https://www.google.com/webhp?igu=1").main();
                    break;
                case 6:
                    var linkyt = videoyt[Math.floor(Math.random() * videoyt.length)] + "?autoplay=1";
                    new multiframe(linkyt).main();
                    break;
                default:
                    new home().main();
                    nutnguon();
            }
        }
        document.getElementById("centermid").onclick = function() {
            var temp = index;
            try {
                document.getElementById("menu").remove();
            } catch {}
            switch (temp) {
                case 0:
                    new maytinhbotui().maytinh();
                    break;
                case 1:
                    if (getOS() != "IOS" && getOS() != "Android") {
                        new maychupanh().chupanh();
                    } else {
                        alert("Thiết bị không tương thích");
                        new menu().main();
                    }
                    break;
                case 2:
                    new danhba().main();
                    break;
                case 3:
                    new calllogs().main();
                    break;
                case 4:
                    if (thu == 8) var date = "Chủ Nhật" + "\nNgày " + ngay + " Tháng " + thang + " Năm " + nam;
                    else var date = "Thứ " + thu + "\nNgày " + ngay + " Tháng " + thang + " Năm " + nam;
                    date += "\n --ĐẸP TROAI--";
                    new showinfo(date).main();
                    break;
                case 5:
                    new multiframe("https://www.google.com/webhp?igu=1").main();
                    break;
                case 6:
                    var linkyt = videoyt[Math.floor(Math.random() * videoyt.length)] + "?autoplay=1";
                    new multiframe(linkyt).main();
                    break;
                default:
                    new home().main();
                    nutnguon();
            }
        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {
            prevanh();
        }
    }
    right() {
        document.getElementById("centerright").onclick = function() {
            nextanh();
        }
    }
    top() {
        document.getElementById("centertop").onclick = function() {
            nextanh();

        }
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {
            prevanh();
        }
    }
    call() {
        document.getElementById("leftbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
        this.call();
    }
}
class danhba {
    constructor() {
        manhinh.appendChild(createChucNang("div", "phonebook", "100%", "100%"));
        document.getElementById("phonebook").appendChild(createChucNang("div", "titlelistphone", "100%", "20%"));
        document.getElementById("phonebook").style.borderRadius = "10px";
        document.getElementById("titlelistphone").innerText = "Danh Sách";
        document.getElementById("phonebook").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        for (var i = 0; i < 4; i++) {
            document.getElementById("listphone").appendChild(createChucNang("a", "phone" + i.toString(), "95%", "25%"));
        }
        for (var i = 0; i < 4; i++) {
            document.getElementById("phone" + i.toString()).innerText = sdt[i];
        }
        //
        document.getElementById("phonebook").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Gọi";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Hủy";
        var exit = document.getElementById("rightbot");
        nextphone();
        exit.onclick = function() {
            try {
                document.getElementById("phonebook").remove();
                new home().main();
            } catch {}
            nutnguon();
            indexphone = -1;
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    back() {
        document.getElementById("righttop").onclick = function() {
            try {
                document.getElementById("phonebook").remove();
                new home().main();
            } catch {}
            nutnguon();
            indexphone = -1;
        }
    }

    left() {
        document.getElementById("centerleft").onclick = function() {
            prevphone();
        }
    }
    right() {
        document.getElementById("centerright").onclick = function() {
            nextphone();
        }
    }
    top() {
        document.getElementById("centertop").onclick = function() {
            prevphone();
        }
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {
            nextphone();
        }
    }
    call() {
        document.getElementById("leftbot").onclick = function() {
            try {
                document.getElementById("phonebook").remove();
                new calling().main();
            } catch {}
        }
        document.getElementById("centermid").onclick = function() {
            try {
                document.getElementById("phonebook").remove();
                new calling().main();
            } catch {}
        }
        document.getElementById("lefttop").onclick = function() {
            try {
                document.getElementById("phonebook").remove();
                new calling().main();
            } catch {}
        }
        danhdaugoi = 0;
    }
    main() {
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.right();
        this.left();
        this.top();
        this.bot();
        this.call();
    }
}
class calling {
    constructor() {
        manhinh.appendChild(createChucNang("div", "call", "100%", "100%"));
        document.getElementById("call").appendChild(createChucNang("div", "titlecall", "100%", "20%"));
        document.getElementById("call").style.borderRadius = "10px";
        document.getElementById("call").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("titlecall").innerText = "Đang Gọi";
        danggoi = "Đang Gọi";
        var timegoi = setInterval(() => {
            danggoi += ".";
            document.getElementById("titlecall").innerText = danggoi;
            checkgoi++;
            if (checkgoi == 3) {
                danggoi = "Đang Gọi";
                checkgoi = 0;
            }
        }, 300);
        document.getElementById("call").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        document.getElementById("listphone").appendChild(createChucNang("div", "username", "100%", "20%"));
        document.getElementById("username").innerText = usergoi;
        document.getElementById("listphone").appendChild(createChucNang("img", "imgcall", "30%", "60%"));
        var checkimggoi = 0;
        document.getElementById("imgcall").src = "img/phone-call.png";
        var imggoi = setInterval(() => {
            if (checkimggoi == 0) {
                document.getElementById("imgcall").src = "img/phone-call.png";
                checkimggoi = 1;
            } else {
                document.getElementById("imgcall").src = "img/telephone.png";
                checkimggoi = 0;
            }
        }, 1000);
        //
        document.getElementById("call").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Rảnh Tay";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Kết Thúc";

        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();
            clearInterval(timegoi);
            clearInterval(imggoi);
        }
        document.getElementById("righttop").onclick = function() {
            clearInterval(timegoi);
            clearInterval(imggoi);
            document.getElementById("call").remove();
            if (danhdaugoi == 0) {
                try {
                    indexphone = -1;
                    new danhba().main();
                } catch {}
            } else {
                try {
                    indexphone = -1;
                    new calllogs().main();
                } catch {}
            }
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    select() {
        document.getElementById("lefttop").onclick = function() {

        }
        document.getElementById("centermid").onclick = function() {

        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}
class calllogs {
    constructor() {
        manhinh.appendChild(createChucNang("div", "calllog", "100%", "100%"));
        document.getElementById("calllog").appendChild(createChucNang("div", "titlelistphone", "100%", "20%"));
        document.getElementById("calllog").style.borderRadius = "10px";
        document.getElementById("titlelistphone").innerText = "Nhật Ký Cuộc Gọi";
        document.getElementById("calllog").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        for (var i = 0; i < 4; i++) {
            document.getElementById("listphone").appendChild(createChucNang("a", "phone" + i.toString(), "95%", "25%"));
        }
        for (var i = 0; i < 4; i++) {
            var x = Math.floor(Math.random() * 5 + 3);
            document.getElementById("phone" + i.toString()).innerText = nhatky[i] + " (" + x.toString() + ")";
        }
        //
        document.getElementById("calllog").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Xem";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Hủy";
        var exit = document.getElementById("rightbot");
        nextcalllog();
        exit.onclick = function() {
            try {
                document.getElementById("calllog").remove();
                new home().main();
            } catch {}
            nutnguon();
            indexphone = -1;
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    back() {
        document.getElementById("righttop").onclick = function() {
            try {
                document.getElementById("calllog").remove();
                new home().main();
            } catch {}
            nutnguon();
            indexphone = -1;
        }
    }

    left() {
        document.getElementById("centerleft").onclick = function() {
            prevcalllog();
        }
    }
    right() {
        document.getElementById("centerright").onclick = function() {
            nextcalllog();
        }
    }
    top() {
        document.getElementById("centertop").onclick = function() {
            prevcalllog();
        }
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {
            nextcalllog();
        }
    }
    call() {
        document.getElementById("leftbot").onclick = function() {
            try {
                document.getElementById("calllog").remove();
                new calling().main();
            } catch {}
        }
        document.getElementById("centermid").onclick = function() {
            try {
                document.getElementById("calllog").remove();
                new calling().main();
            } catch {}
        }
        document.getElementById("lefttop").onclick = function() {
            try {
                document.getElementById("calllog").remove();
                new infouser().main();
            } catch {}
        }
        danhdaugoi = 1;
    }
    main() {
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.right();
        this.left();
        this.top();
        this.bot();
        this.call();
    }
}
class infouser {
    constructor() {
        manhinh.appendChild(createChucNang("div", "call", "100%", "100%"));
        document.getElementById("call").appendChild(createChucNang("div", "titlecall", "100%", "20%"));
        document.getElementById("call").style.borderRadius = "10px";
        document.getElementById("call").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("titlecall").innerText = "Thông Tin";
        document.getElementById("call").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        document.getElementById("listphone").appendChild(createChucNang("div", "username", "100%", "20%"));
        document.getElementById("username").innerText = usergoi;
        document.getElementById("username").style.textAlign = "center";

        document.getElementById("listphone").appendChild(createChucNang("p", "imgcall", "100%", "60%"));
        document.getElementById("imgcall").innerText = "SDT: " + info[0][indexphone] + "\n" + "Thời lượng: " + info[1][indexphone] + "\n" + "Lúc: " + info[2][indexphone];
        document.getElementById("imgcall").style.textAlign = "center";
        //
        document.getElementById("call").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Trở về";

        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();

        }
        document.getElementById("righttop").onclick = function() {
            document.getElementById("call").remove();
            try {
                indexphone = -1;
                new calllogs().main();
            } catch {}

        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    select() {
        document.getElementById("lefttop").onclick = function() {

        }
        document.getElementById("centermid").onclick = function() {

        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 10; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}
class callingbynumber {
    constructor() {
        manhinh.appendChild(createChucNang("div", "call", "100%", "100%"));
        document.getElementById("call").appendChild(createChucNang("div", "titlecall", "100%", "20%"));
        document.getElementById("call").style.borderRadius = "10px";
        document.getElementById("call").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("titlecall").innerText = "Đang Gọi";
        danggoi = "Đang Gọi";
        var timegoi = setInterval(() => {
            danggoi += ".";
            document.getElementById("titlecall").innerText = danggoi;
            checkgoi++;
            if (checkgoi == 3) {
                danggoi = "Đang Gọi";
                checkgoi = 0;
            }
        }, 300);
        document.getElementById("call").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        document.getElementById("listphone").appendChild(createChucNang("div", "username", "100%", "20%"));
        document.getElementById("username").innerText = valuenumber;
        document.getElementById("listphone").appendChild(createChucNang("img", "imgcall", "30%", "60%"));
        var checkimggoi = 0;
        document.getElementById("imgcall").src = "img/phone-call.png";
        var imggoi = setInterval(() => {
            if (checkimggoi == 0) {
                document.getElementById("imgcall").src = "img/phone-call.png";
                checkimggoi = 1;
            } else {
                document.getElementById("imgcall").src = "img/telephone.png";
                checkimggoi = 0;
            }
        }, 1000);
        //
        document.getElementById("call").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Rảnh Tay";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Kết Thúc";

        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();
            clearInterval(timegoi);
            clearInterval(imggoi);
        }
        document.getElementById("righttop").onclick = function() {
            clearInterval(timegoi);
            clearInterval(imggoi);
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    select() {
        document.getElementById("lefttop").onclick = function() {

        }
        document.getElementById("centermid").onclick = function() {

        }
        document.getElementById("leftbot").onclick = function() {

        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 12; i++) {
            this.clickbtn("btn" + i.toString());
        }
        // this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}
class showinfo {
    constructor(textinfo) {
        manhinh.appendChild(createChucNang("div", "call", "100%", "100%"));
        document.getElementById("call").appendChild(createChucNang("div", "titlecall", "100%", "20%"));
        document.getElementById("call").style.borderRadius = "10px";
        document.getElementById("call").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("titlecall").innerText = "Thông Tin";
        document.getElementById("call").appendChild(createChucNang("div", "listphone", "100%", "60%"));
        document.getElementById("listphone").appendChild(createChucNang("p", "imgcall", "100%", "80%"));
        document.getElementById("imgcall").innerText = textinfo;
        document.getElementById("imgcall").style.textAlign = "center";
        //
        document.getElementById("call").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Trở về";

        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();

        }
        document.getElementById("righttop").onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();
        }

    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    select() {
        document.getElementById("lefttop").onclick = function() {

        }
        document.getElementById("centermid").onclick = function() {

        }
        document.getElementById("leftbot").onclick = function() {

        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 12; i++) {
            this.clickbtn("btn" + i.toString());
        }
        // this.back();
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}
class inputnumber {
    constructor() {
        manhinh.appendChild(createChucNang("div", "call", "100%", "100%"));
        document.getElementById("call").appendChild(createChucNang("div", "titlecall", "100%", "20%"));
        document.getElementById("call").style.borderRadius = "10px";
        document.getElementById("call").style.backgroundColor = "rgb(204, 204, 193)";
        document.getElementById("titlecall").innerText = "Nhập Số:";
        document.getElementById("call").appendChild(createChucNang("div", "listphone", "100%", "60%"));

        document.getElementById("listphone").appendChild(createChucNang("p", "nhapvaoso", "97%", "70%"));
        document.getElementById("nhapvaoso").innerText = valuenumber;
        //
        document.getElementById("call").appendChild(createChucNang("div", "botitem", "100%", "20%"));
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemleft", "30%", "100%"));
        document.getElementById("botitemleft").innerText = "Gọi";
        document.getElementById("botitem").appendChild(createChucNang("div", "botitemright", "30%", "100%"));
        document.getElementById("botitemright").innerText = "Xóa";

        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                document.getElementById("call").remove();
                new home().main();
            } catch {}
            nutnguon();

        }
        document.getElementById("righttop").onclick = function() {
            if (valuenumber.length > 0) {
                valuenumber = valuenumber.slice(0, valuenumber.length - 1);
                document.getElementById("nhapvaoso").innerText = valuenumber;
                checkdelnumber = 1;
            }
            if (valuenumber.length == 0) {
                checkdelnumber--;
                document.getElementById("botitemright").innerText = "Trở về";
            }
            if (checkdelnumber == -1) {
                try {
                    document.getElementById("call").remove();
                    new home().main();
                } catch {}
                nutnguon();
            }
        }

    }
    clickbtn(id) {

        document.getElementById(id).onclick = function() {
            if (valuenumber.length < 25) {
                valuenumber += document.getElementById(id).value;
                document.getElementById("nhapvaoso").innerText = valuenumber;
            }
            if (valuenumber == "*#06#") {
                try {
                    document.getElementById("call").remove();
                    var info = "Số seri: 36924837065451145\n05/05/2021\nRM-647\n(c) Nokia N1280 V 04.25\nLanguage: MR";
                    new showinfo(info).main();
                } catch {}
            }
            if (valuenumber == "*#0000#") {
                try {
                    document.getElementById("call").remove();
                    var info = "Hệ điều hành: Nokian Đờ RoiOS\n" +
                        "RAM: 128GB\nROM: 1000TB\n" + "CHIP: i9-10900K\n" +
                        "CARD: NVIDIA-RTX-3090\n";
                    new showinfo(info).main();
                } catch {}
            }
        }
    }


    select() {
        document.getElementById("lefttop").onclick = function() {
            try {
                document.getElementById("call").remove();
                new callingbynumber().main();
            } catch {}
        }
        document.getElementById("centermid").onclick = function() {
            try {
                document.getElementById("call").remove();
                new callingbynumber().main();
            } catch {}
        }
        document.getElementById("leftbot").onclick = function() {
            try {
                document.getElementById("call").remove();
                new callingbynumber().main();
            } catch {}
        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 12; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}
class multiframe {
    constructor(link) {
        manhinh.appendChild(createChucNang("iframe", "frame", "100%", "100%"));
        document.getElementById("frame").style.borderRadius = "10px";
        document.getElementById("frame").style.backgroundColor = "rgb(204, 204, 193)";
        //
        document.getElementById("frame").src = link;
        document.getElementById("frame").allow = "autoplay";
        var exit = document.getElementById("rightbot");
        exit.onclick = function() {
            try {
                indexphone = -1;
                document.getElementById("frame").remove();
                new home().main();
            } catch {}
            nutnguon();

        }


    }
    clickbtn(id) {
        document.getElementById(id).onclick = function() {}
    }

    select() {
        document.getElementById("righttop").onclick = function() {
            try {
                window.history.back();
            } catch {}
        }
        document.getElementById("lefttop").onclick = function() {
            try {
                window.history.go(1);
            } catch {}
        }
        document.getElementById("centermid").onclick = function() {

        }
        document.getElementById("leftbot").onclick = function() {

        }
    }
    left() {
        document.getElementById("centerleft").onclick = function() {}
    }
    right() {
        document.getElementById("centerright").onclick = function() {}
    }
    top() {
        document.getElementById("centertop").onclick = function() {}
    }
    bot() {
        document.getElementById("centerbot").onclick = function() {}
    }
    main() {
        for (var i = 0; i < 12; i++) {
            this.clickbtn("btn" + i.toString());
        }
        this.select();
        this.right();
        this.left();
        this.top();
        this.bot();
    }
}

document.getElementById("logomp3").play();
setTimeout(function() {
    document.getElementById("logomp3").remove();
    document.getElementById("logoimg").remove();
    new home().main();
}, 4000);