var text="";var oncam=0;var index=-1;var indexphone=-1;var getphone="";var checkgoi=0,danggoi="",usergoi="",danhdaugoi;var chaypin,chaynhapso;var valuenumber="";var checkdelnumber=1;var d=new Date();var thu=d.getDay()+1;var ngay=d.getDate();var thang=d.getMonth()+1;var nam=d.getFullYear();var listchuong=["mp3/hettien.mp3","mp3/khonglienlacdc.mp3","mp3/sdtkhongdung.mp3"];var mp3chuong=document.getElementById("mp3chuong");var sdt=["Trường Jae","113","Trần Đức Po","18008198"];var nhatky=["113","Trường Jae","Trần Dần","Huấn Hoa Hồng"];var info=new Array();info[0]=["113","0345382198","0123456789","0808080808"];info[1]=["00:05:51","00:01:29","00:32:07","00:12:31"];info[2]=["08:11:16 - 15/09/2018","14:41:35 - 20/12/2020","20:16:06 - 06/04/2019","11:09:43 - 24/02/2021"];var manhinh=document.getElementsByClassName("mh")[0];var videoyt=["https://www.youtube.com/embed/viOPWvIj28A","https://www.youtube.com/embed/xypzmu5mMPY","https://www.youtube.com/embed/S2JAeuwjeN4","https://www.youtube.com/embed/UMOyunC3HGw","https://www.youtube.com/embed/32sYGCOYJUM","https://www.youtube.com/embed/_5cUW112Haw"];var listtitle=["Máy Tính","Camera","Danh Bạ","Nhật Ký Cuộc Gọi","Lịch","Trình Duyệt","Youtube","Bản Đồ","Thời Tiết","Nghe Nhạc","Facebook","Nhắn Tin","Trò Chơi","Giới Thiệu"];var listimg=["img/calculator.png","img/camera.png","img/phonebook.png","img/nhatky.png","img/calendar.png","img/web.png","img/youtube.png","img/gps.png","img/thoitiet.png","img/music.png","img/facebook.png","img/chat.png","img/game.png","img/info.png"];var diemran=0;var ransanmoi;var ve;var checkimlang=1;var checkhome=1;let btnthang=document.getElementById("btn11");let timerID;let counter=0;let pressHoldEvent=new CustomEvent("pressHold");let pressHoldDuration=50;function pressingDown(e){requestAnimationFrame(timer);e.preventDefault()}
function notPressingDown(e){cancelAnimationFrame(timerID);counter=0}
function timer(){if(counter<pressHoldDuration){timerID=requestAnimationFrame(timer);counter++}else{btnthang.dispatchEvent(pressHoldEvent)}}
function doSomething(e){document.getElementsByClassName("desktop")[0].style.display="none";if(checkhome==1){if(checkimlang==1){try{mp3chuong.src="mp3/mp3rung.mp3";mp3chuong.play()}catch{}
new imlang("Đã bật im lặng","img/no-sound.png","IM LẶNG").main();checkimlang=0}else{try{mp3chuong.src="mp3/nhanphim.mp3";mp3chuong.play()}catch{}
new imlang("Đã tắt im lặng","img/volume.png","VIETTEL").main();checkimlang=1}}}
async function getWebCam(){try{const videoSrc=await navigator.mediaDevices.getUserMedia({video:!0});var video=document.getElementById("cam");video.srcObject=videoSrc}catch(e){console.log(e)}}
function getweather(){fetch('https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=c8b2d8c76ed12eaee84a20b07ec7054c&lang=vi').then(response=>response.json()).then(data=>{var str="";var tempValue=data.main.temp;var nameValue=data.name;var descValue=data.weather[0].description;var cloudsValue=data.wind.speed;str+=nameValue+"\n";str+="Thời Tiết: "+descValue;str+="\nNhiệt Độ: "+(parseFloat(tempValue)-273.15).toFixed(2).toString()+"°C";str+="\nTốc Độ Gió: "+cloudsValue+" m/s";document.getElementById("imgcall").innerText=str}).catch(err=>function(){})}
function nextanh(){if(index==-1){index=0;var i=document.getElementById("anhmid");i.src=listimg[index];document.getElementById("titlelistitem").innerText=listtitle[index]}else{if(index<listimg.length-1){index++}else{index=0}
var i=document.getElementById("anhmid");i.src=listimg[index];document.getElementById("titlelistitem").innerText=listtitle[index]}}
var u=window.location.href;function prevanh(){if(index==-1){index=listimg.length-1;var i=document.getElementById("anhmid");i.src=listimg[index];document.getElementById("titlelistitem").innerText=listtitle[index]}else{if(index===0){index=listimg.length-1}else{index--}
var i=document.getElementById("anhmid");i.src=listimg[index];document.getElementById("titlelistitem").innerText=listtitle[index]}}
function nextphone(){if(indexphone==-1){indexphone=0;var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}else{if(indexphone<3){indexphone++}else{indexphone=0}
var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}
usergoi=sdt[indexphone]}
function prevphone(){if(indexphone==-1){indexphone=3;var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}else{if(indexphone===0){indexphone=3}else{indexphone--}
var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}
usergoi=sdt[indexphone]}
function nextcalllog(){if(indexphone==-1){indexphone=0;var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}else{if(indexphone<3){indexphone++}else{indexphone=0}
var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}
usergoi=nhatky[indexphone]}
function prevcalllog(){if(indexphone==-1){indexphone=3;var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}else{if(indexphone===0){indexphone=3}else{indexphone--}
var i=document.getElementById("phone"+indexphone.toString());i.style.backgroundColor="black";i.style.color="rgb(204, 204, 193)";for(var i=0;i<4;i++){if(i!=indexphone){document.getElementById("phone"+i.toString()).style.color="black";document.getElementById("phone"+i.toString()).style.backgroundColor="rgb(204, 204, 193)";document.getElementById("phone"+i.toString()).style.borderRight="5px solid black"}else{document.getElementById("phone"+i.toString()).style.borderRight="5px solid rgb(204, 204, 193)"}}}
usergoi=nhatky[indexphone]}
function time(){now=new Date();var time=document.getElementById("countdown");var str="";if(parseInt(now.getHours())<10){str+="0"+now.getHours()+":"}else{str+=now.getHours()+":"}
if(parseInt(now.getMinutes())<10){str+="0"+now.getMinutes()+":"}else{str+=now.getMinutes()+":"}
if(parseInt(now.getSeconds())<10){str+="0"+now.getSeconds()}else{str+=now.getSeconds()}
time.innerText=str}
function nutnguon(){checkhome=1;index=-1;document.getElementsByClassName("desktop")[0].style.display="block";document.getElementById("txtmenu").innerText="Menu";document.getElementById("txtdanhba").innerText="Danh Bạ";document.getElementById("desktop").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("desktop").style.color="black";var sao=document.getElementById("btn10");var thang=document.getElementById("btn11");try{for(var i=1;i<=12;i++){document.getElementById("span"+i.toString()).style.display="inline-block"}}catch{}
sao.innerText="*";thang.innerText="#"}
function createChucNang(tag,id,width,height){var ilm=document.createElement(tag);ilm.style.width=width;ilm.style.height=height;ilm.id=id;return ilm}
function getOS(){var userAgent=window.navigator.userAgent,platform=window.navigator.platform,macosPlatforms=['Macintosh','MacIntel','MacPPC','Mac68K'],windowsPlatforms=['Win32','Win64','Windows','WinCE'],iosPlatforms=['iPhone','iPad','iPod'],os=null;if(macosPlatforms.indexOf(platform)!==-1){os='Mac OS'}else if(iosPlatforms.indexOf(platform)!==-1){os='IOS'}else if(windowsPlatforms.indexOf(platform)!==-1){os='Windows'}else if(/Android/.test(userAgent)){os='Android'}else if(!os&&/Linux/.test(platform)){os='Linux'}
return os}
function kiemtrataikhoan(){if(valuenumber=="*101#"){try{document.getElementById("call").remove();var str="+84345678910. TKG: 999999 USD\n"+"dung den 0h ngay 31/12/2999.\n"+"Bam chon dang ky: \n"+"1. 15K=3GB/3ngay\n2. 30K=7GB/7ngay\nHoac bam goi *098#";new done(str).main()}catch{}}else if(valuenumber=="*102#"){try{document.getElementById("call").remove();var str="KM = 99999 USD.\n"+"De biet cac CT dac biet cua Quy khach,\nvui long bam goi *098#";new done(str).main()}catch{}}else if(valuenumber=="*098#"){try{document.getElementById("call").remove();var str="Moi +84345678910 chon:\n1.CT khuyen mai 5G\n2.Sieu uu dai Data"+"\n3.Viettel++\n00.Xem them";new done(str).main()}catch{}}else{try{document.getElementById("call").remove();new callingbynumber().main()}catch{}}}
function allbtnnumber(id){document.getElementById(id).onclick=function(){valuenumber=document.getElementById(id).value;document.getElementsByClassName("desktop")[0].style.display="none";try{mp3chuong.src="mp3/nhanphim.mp3";mp3chuong.play()}catch{}
new inputnumber().main()}}
function selectmenu(){var temp=index;try{document.getElementById("menu").remove()}catch{}
switch(temp){case 0:new maytinhbotui().maytinh();break;case 1:new maychupanh().chupanh();break;case 2:new danhba().main();break;case 3:new calllogs().main();break;case 4:if(thu==8)var date="Chủ Nhật"+"\nNgày "+ngay+" Tháng "+thang+" Năm "+nam;else var date="Thứ "+thu+"\nNgày "+ngay+" Tháng "+thang+" Năm "+nam;date+="\n --ĐẸP TROAI--";new showinfo(date).main();break;case 5:new multiframe("https://www.google.com/webhp?igu=1").main();break;case 6:var linkyt=videoyt[Math.floor(Math.random()*videoyt.length)]+"?autoplay=1";new multiframe(linkyt).main();break;case 7:var linkgps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59527.30506834402!2d106.04261641745268!3d21.174014395357066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350c5b3464ae51%3A0x1a3035b9749102f9!2zVHAuIELhuq9jIE5pbmgsIELhuq9jIE5pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1620356294763!5m2!1svi!2s";new multiframe(linkgps).main();break;case 8:new showinfo("").main();getweather();break;case 9:new nghenhacmp3().main();break;case 10:var linkfb="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fngucode%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=586886385283392";new multiframe(linkfb).main();break;case 11:new nhantin("").main();break;case 12:new gameran().main();break;case 13:var info="Tác Giả: Nguyễn Gia Trường"+"\nFB: https://fb.com/www.python.org"+"\nPhiên Bản: Nhô ki anroiOS v1"+"\nHệ điều hành mạnh nhất thế giới!";new showinfo(info).main();break;default:new home().main()}}
function chucnangnghenhac(){var nghenhac=document.getElementById("nghenhac");var songTitle=createChucNang("div","songTitle","100%","10%");var songSlider=createChucNang("input","songSlider","100%","1%");songSlider.type="range";songSlider.min="0";songSlider.step="1";songSlider.onchange=function(){seekSong()}
var songTime=createChucNang("div","songTime","100%","10%");var currentTime=createChucNang("div","currentTime","","10%");currentTime.textContent="00:00";var duration=createChucNang("div","duration","","10%");duration.textContent="00:00";songTime.appendChild(currentTime);songTime.appendChild(duration);var controllers=createChucNang("div","controllers","","");var ctrl=createChucNang("div","ctrl","","");var imgprevious=createChucNang("img","imgprevious","30px","");imgprevious.src="images/previous.png";imgprevious.onclick=function(){previous()}
ctrl.appendChild(imgprevious);var imgpause=createChucNang("img","imgpause","40px","");imgpause.onclick=function(){playOrPauseSong(this)}
imgpause.src="images/pause.png";ctrl.appendChild(imgpause);var imgnext=createChucNang("img","imgnext","30px","");imgnext.onclick=function(){next()}
imgnext.src="images/next.png";ctrl.appendChild(imgnext);controllers.appendChild(ctrl);var vol=createChucNang("div","vol","","");var imgimlang=createChucNang("img","imgimlang","15px","");imgimlang.src="images/volume-down.png";imgimlang.onclick=function(){nhacimlang()}
vol.appendChild(imgimlang);var volumeSlider=createChucNang("input","volumeSlider","60%","1%");volumeSlider.type="range";volumeSlider.min="0";volumeSlider.max="1";volumeSlider.step="0.01";volumeSlider.onchange=function(){adjustVolume()}
vol.appendChild(volumeSlider);var imgkoimlang=createChucNang("img","imgkoimlang","15px","");imgkoimlang.onclick=function(){nhackoimlang()}
imgkoimlang.src="images/volume-up.png";vol.appendChild(imgkoimlang);controllers.appendChild(vol);var nextSongTitle=createChucNang("div","nextSongTitle","100%","10%");nextSongTitle.innerHTML="<b>Tiếp theo: </b>";var trove=createChucNang("h2","trove","30%","10%");trove.innerText="Trở về";nghenhac.appendChild(songTitle);nghenhac.appendChild(songSlider);nghenhac.appendChild(songTime);nghenhac.appendChild(controllers);nghenhac.appendChild(nextSongTitle);nghenhac.appendChild(trove)}
var songs=["2phuthon.mp3","chanai.mp3","contraicung.mp3","homnayemlaqua.mp3","kecapgapbagia.mp3","lunglo.mp3","motculua.mp3","muonroimasaocon.mp3","shapeofyou.mp3"];var song=new Audio();var currentSong=0;var songTitle;var songSlider;var currentTime;var duration;var volumeSlider;var nextSongTitle;var chaymp3;function loadSong(){song.src="songs/"+songs[currentSong];var hienthi1;var hienthi2;if(songs[currentSong].length>15){hienthi1=songs[currentSong].slice(0,15)+"..."}else{hienthi1=songs[currentSong]}
songTitle.textContent=(currentSong+1)+". "+hienthi1;try{if(songs[currentSong+1%songs.length].length>10){hienthi2=songs[currentSong+1%songs.length].slice(0,10)+"..."}else{hienthi2=songs[currentSong+1%songs.length]}}catch{}
if(currentSong==songs.length-1){nextSongTitle.innerHTML="<b>Tiếp theo: </b>"+songs[0]}else{nextSongTitle.innerHTML="<b>Tiếp theo: </b>"+hienthi2}
song.playbackRate=1;song.volume=volumeSlider.value;song.play();setTimeout(showDuration,1000)}
function updateSongSlider(){var c=Math.round(song.currentTime);songSlider.value=c;currentTime.textContent=convertTime(c);if(song.ended){next()}}
function convertTime(secs){var min=Math.floor(secs/60);var sec=secs%60;min=(min<10)?"0"+min:min;sec=(sec<10)?"0"+sec:sec;return(min+":"+sec)}
function showDuration(){var d=Math.floor(song.duration);songSlider.setAttribute("max",d);duration.textContent=convertTime(d)}
function playOrPauseSong(img){song.playbackRate=1;if(song.paused){song.play();img.src="images/pause.png"}else{song.pause();img.src="images/play.png"}}
function next(){currentSong=currentSong+1%songs.length;if(currentSong==songs.length)currentSong=0;loadSong()}
function previous(){currentSong--;currentSong=(currentSong<0)?songs.length-1:currentSong;loadSong()}
function seekSong(){song.currentTime=songSlider.value;currentTime.textContent=convertTime(song.currentTime)}
function adjustVolume(){song.volume=volumeSlider.value}
function nhacimlang(){song.volume=0}
function nhackoimlang(){song.volume=volumeSlider.value}
document.onkeydown=function(e){if(event.keyCode==123)gogo();if(e.ctrlKey&&e.shiftKey&&(e.keyCode=='I'.charCodeAt(0)||e.keyCode=='i'.charCodeAt(0)))gogo();if(e.ctrlKey&&e.shiftKey&&(e.keyCode=='C'.charCodeAt(0)||e.keyCode=='c'.charCodeAt(0)))gogo();if(e.ctrlKey&&e.shiftKey&&(e.keyCode=='J'.charCodeAt(0)||e.keyCode=='j'.charCodeAt(0)))gogo();if(e.ctrlKey&&(e.keyCode=='U'.charCodeAt(0)||e.keyCode=='u'.charCodeAt(0)))gogo();if(e.ctrlKey&&(e.keyCode=='S'.charCodeAt(0)||e.keyCode=='s'.charCodeAt(0)))gogo()}
var timebtn;var txtnhantin="";var txtnguoinhan="";var arrbtn1=[".",",","1","@","!","&","(",")","=","%","#"];var arrbtn2=["a","b","c","2","á","à","ã","ạ","ả","ă","ắ","ằ","ặ","ẵ","ẳ","â","ấ","ầ","ậ","ẫ","ẩ"];var arrbtn3=["d","e","f","3","đ","é","è","ẹ","ẽ","ê","ế","ề","ệ","ễ","ể"];var arrbtn4=["g","h","i","4","í","ì","ị","ĩ","ỉ"];var arrbtn5=["j","k","l","5","í","ì","ĩ","ị","ỉ"];var arrbtn6=["m","n","o","6","ó","ò","ọ","õ","ỏ","ơ","ớ","ờ","ợ","ỡ","ở","ô","ố","ồ","ộ","ỗ","ổ"];var arrbtn7=["p","q","r","s","7"];var arrbtn8=["t","u","v","8","ú","ù","ụ","ủ","ũ","ư","ứ","ừ","ự","ữ","ử"];var arrbtn9=["w","x","y","z","ý","ỳ","ỵ","ỹ","ỷ"];var arrbtn0=[" ","0"];var arrbtn10=["*","/","+","-"];var arrbtn11=["#"];var xid1=1;var xid2=1;var xid3=1;var xid4=1;var xid5=1;var xid6=1;var xid7=1;var xid8=1;var xid9=1;var xid0=1;var xid10=1;var xid11=1;var indexbtn1=0;var indexbtn2=0;var indexbtn3=0;var indexbtn4=0;var indexbtn5=0;var indexbtn6=0;var indexbtn7=0;var indexbtn8=0;var indexbtn9=0;var indexbtn0=0;var indexbtn10=0;var indexbtn11=0;class maytinhbotui{constructor(){manhinh.appendChild(createChucNang("div","maytinh","100%","100%"));document.getElementById("maytinh").appendChild(createChucNang("input","nhappheptoan","99%","100%"));document.getElementById("nhappheptoan").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("nhappheptoan").style.outline="none";document.getElementById("nhappheptoan").style.fontSize="30px";document.getElementById("nhappheptoan").style.borderRadius="10px";document.getElementById("nhappheptoan").style.border="none";document.getElementById("nhappheptoan").placeholder="Nhập phép toán";document.getElementById("nhappheptoan").style.fontWeight="bold";var nhan=document.getElementById("centertop");var chia=document.getElementById("centerbot");var tru=document.getElementById("centerleft");var cong=document.getElementById("centerright");var bang=document.getElementById("centermid");var phay=document.getElementById("btn10");var xoall=document.getElementById("btn11");document.getElementById("lefttop").onclick=function(){}
phay.innerText=",";xoall.innerText="AC";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{document.getElementById("maytinh").remove();new home().main()}catch{}}
nhan.onclick=function(){text=document.getElementById("nhappheptoan").value;text=text+="×";document.getElementById("nhappheptoan").value=text}
chia.onclick=function(){text=document.getElementById("nhappheptoan").value;text=text+="÷";document.getElementById("nhappheptoan").value=text}
cong.onclick=function(){text=document.getElementById("nhappheptoan").value;text=text+="+";document.getElementById("nhappheptoan").value=text}
tru.onclick=function(){text=document.getElementById("nhappheptoan").value;text=text+="-";document.getElementById("nhappheptoan").value=text}
phay.onclick=function(){text=document.getElementById("nhappheptoan").value;text=text+=",";document.getElementById("nhappheptoan").value=text}
xoall.onclick=function(){text="";document.getElementById("nhappheptoan").value=text}
bang.onclick=function(){text=document.getElementById("nhappheptoan").value;try{var str=text.replace(/×/g,"*").replace(/÷/g,"/").replace(/,/g,".");text=eval(str);document.getElementById("nhappheptoan").value=text}catch{document.getElementById("nhappheptoan").value="Nhập ngu!"}}}
clickbtn(id){document.getElementById(id).onclick=function(){text=document.getElementById("nhappheptoan").value;var x=document.getElementById(id).value;text+=x;document.getElementById("nhappheptoan").value=text}}
deltxt(){document.getElementById("righttop").onclick=function(){text=document.getElementById("nhappheptoan").value;text=text.slice(0,text.length-1);document.getElementById("nhappheptoan").value=text}}
maytinh(){text="";try{for(var i=1;i<=12;i++){document.getElementById("span"+i.toString()).style.display="none"}}catch{}
for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.deltxt();document.getElementById("leftbot").onclick=function(){}}}
class maychupanh{constructor(){manhinh.appendChild(createChucNang("div","chupanh","100%","100%"));document.getElementById("chupanh").appendChild(createChucNang("video","cam","100%","100%"));document.getElementById("cam").style.border="none";document.getElementById("cam").autoplay="true";document.getElementById("cam").allow="geolocation; microphone; camera";getWebCam();var nhan=document.getElementById("centertop");var chia=document.getElementById("centerbot");var tru=document.getElementById("centerleft");var cong=document.getElementById("centerright");var bang=document.getElementById("centermid");var exit=document.getElementById("rightbot");var sao=document.getElementById("btn10");var thang=document.getElementById("btn11");cong.onclick=function(){}
tru.onclick=function(){}
nhan.onclick=function(){}
chia.onclick=function(){}
sao.onclick=function(){}
thang.onclick=function(){}
checkhome=0;exit.onclick=function(){try{document.getElementById("chupanh").remove();new home().main()}catch{}}
bang.onclick=function(){if(oncam==0){document.getElementById("cam").pause();oncam=1}else{oncam=0;document.getElementById("cam").play()}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){document.getElementById("chupanh").remove();new menu().main()}}
chupanh(){document.getElementById("lefttop").onclick=function(){}
for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.back()}}
class home{constructor(){var exit=document.getElementById("rightbot");nutnguon();exit.onclick=function(){nutnguon()}}
clickbtn(id){document.getElementById(id).onclick=function(){valuenumber=document.getElementById(id).value;document.getElementsByClassName("desktop")[0].style.display="none";try{mp3chuong.src="mp3/nhanphim.mp3";mp3chuong.play()}catch{}
new inputnumber().main()}}
back(){document.getElementById("righttop").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new danhba().main()}}
select(){document.getElementById("lefttop").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new menu().main()}
document.getElementById("centermid").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new menu().main()}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
call(){document.getElementById("leftbot").onclick=function(){try{document.getElementsByClassName("desktop")[0].style.display="none";new calllogs().main()}catch{}}}
loadpin(){setInterval(()=>{time()},1000);var checkpin=0;chaypin=setInterval(()=>{if(checkpin==0){document.getElementById("pin1").style.display="none";checkpin=1}else{document.getElementById("pin1").style.display="inline-block";checkpin=0}},700)}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
if(getOS()!="IOS"&&getOS()!="Android"){btnthang.addEventListener("mousedown",pressingDown,!1);btnthang.addEventListener("mouseup",notPressingDown,!1);btnthang.addEventListener("mouseleave",notPressingDown,!1);btnthang.addEventListener("touchstart",pressingDown,!1);btnthang.addEventListener("touchend",notPressingDown,!1);btnthang.addEventListener("pressHold",doSomething,!1)}
this.back();this.select();this.right();this.left();this.top();this.bot();clearInterval(chaypin);this.loadpin();this.call()}}
class menu{constructor(){manhinh.appendChild(createChucNang("div","menu","100%","100%"));document.getElementById("menu").appendChild(createChucNang("div","titlelistitem","100%","20%"));document.getElementById("menu").style.borderRadius="10px";document.getElementById("menu").appendChild(createChucNang("div","listitem","100%","60%"));document.getElementById("listitem").appendChild(createChucNang("div","leftitem","20%","100%"));document.getElementById("leftitem").appendChild(createChucNang("img","anhleft","50%","20%"));document.getElementById("anhleft").src="img/anhleft.png";document.getElementById("listitem").appendChild(createChucNang("div","miditem","60%","100%"));document.getElementById("miditem").appendChild(createChucNang("img","anhmid","60%","80%"));document.getElementById("anhmid").src=listimg[0];document.getElementById("listitem").appendChild(createChucNang("div","rightitem","20%","100%"));document.getElementById("rightitem").appendChild(createChucNang("img","anhright","50%","20%"));document.getElementById("anhright").src="img/anhright.png";document.getElementById("menu").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Chọn";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Trở về";nextanh();checkhome=0;var exit=document.getElementById("rightbot");var sao=document.getElementById("btn10");var thang=document.getElementById("btn11");sao.onclick=function(){try{document.getElementById("menu").remove()}catch{}
new homelock().main()}
thang.onclick=function(){}
exit.onclick=function(){try{document.getElementById("menu").remove();new home().main()}catch{}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){try{document.getElementById("menu").remove();new home().main()}catch{}}}
select(){document.getElementById("lefttop").onclick=function(){selectmenu()}
document.getElementById("centermid").onclick=function(){selectmenu()}}
left(){document.getElementById("centerleft").onclick=function(){prevanh()}}
right(){document.getElementById("centerright").onclick=function(){nextanh()}}
top(){document.getElementById("centertop").onclick=function(){nextanh()}}
bot(){document.getElementById("centerbot").onclick=function(){prevanh()}}
call(){document.getElementById("leftbot").onclick=function(){}}
main(){for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.back();this.select();this.right();this.left();this.top();this.bot();this.call()}}
class danhba{constructor(){manhinh.appendChild(createChucNang("div","phonebook","100%","100%"));document.getElementById("phonebook").appendChild(createChucNang("div","titlelistphone","100%","20%"));document.getElementById("phonebook").style.borderRadius="10px";document.getElementById("titlelistphone").innerText="Danh Sách";document.getElementById("phonebook").appendChild(createChucNang("div","listphone","100%","60%"));for(var i=0;i<4;i++){document.getElementById("listphone").appendChild(createChucNang("a","phone"+i.toString(),"100%","25%"))}
for(var i=0;i<4;i++){document.getElementById("phone"+i.toString()).innerText=sdt[i]}
document.getElementById("phonebook").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Gọi";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Hủy";var exit=document.getElementById("rightbot");nextphone();checkhome=0;exit.onclick=function(){try{document.getElementById("phonebook").remove();new home().main()}catch{}
indexphone=-1}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){try{document.getElementById("phonebook").remove();new home().main()}catch{}
indexphone=-1}}
left(){document.getElementById("centerleft").onclick=function(){prevphone()}}
right(){document.getElementById("centerright").onclick=function(){nextphone()}}
top(){document.getElementById("centertop").onclick=function(){prevphone()}}
bot(){document.getElementById("centerbot").onclick=function(){nextphone()}}
call(){document.getElementById("leftbot").onclick=function(){try{document.getElementById("phonebook").remove();new calling().main()}catch{}}
document.getElementById("centermid").onclick=function(){try{document.getElementById("phonebook").remove();new calling().main()}catch{}}
document.getElementById("lefttop").onclick=function(){try{document.getElementById("phonebook").remove();new calling().main()}catch{}}
danhdaugoi=0}
main(){for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.back();this.right();this.left();this.top();this.bot();this.call()}}
class calling{constructor(){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Đang Gọi";danggoi="Đang Gọi";checkhome=0;var timegoi=setInterval(()=>{danggoi+=".";document.getElementById("titlecall").innerText=danggoi;checkgoi++;if(checkgoi==3){danggoi="Đang Gọi";checkgoi=0}},300);document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("div","username","100%","20%"));document.getElementById("username").innerText=usergoi;document.getElementById("listphone").appendChild(createChucNang("img","imgcall","30%","60%"));setTimeout(function(){try{var linkchuong=listchuong[Math.floor(Math.random()*2)];mp3chuong.src=linkchuong;mp3chuong.play()}catch{}},2000);var checkimggoi=0;document.getElementById("imgcall").src="img/phone-call.png";var imggoi=setInterval(()=>{if(checkimggoi==0){document.getElementById("imgcall").src="img/phone-call.png";checkimggoi=1}else{document.getElementById("imgcall").src="img/telephone.png";checkimggoi=0}},1000);document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Rảnh Tay";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Kết Thúc";var exit=document.getElementById("rightbot");exit.onclick=function(){try{mp3chuong.src=""}catch{}
try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}
clearInterval(timegoi);clearInterval(imggoi)}
document.getElementById("righttop").onclick=function(){try{mp3chuong.src=""}catch{}
clearInterval(timegoi);clearInterval(imggoi);document.getElementById("call").remove();if(danhdaugoi==0){try{indexphone=-1;new danhba().main()}catch{}}else{try{indexphone=-1;new calllogs().main()}catch{}}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.back();this.select();this.right();this.left();this.top();this.bot()}}
class calllogs{constructor(){manhinh.appendChild(createChucNang("div","calllog","100%","100%"));document.getElementById("calllog").appendChild(createChucNang("div","titlelistphone","100%","20%"));document.getElementById("calllog").style.borderRadius="10px";document.getElementById("titlelistphone").innerText="Nhật Ký Cuộc Gọi";document.getElementById("calllog").appendChild(createChucNang("div","listphone","100%","60%"));for(var i=0;i<4;i++){document.getElementById("listphone").appendChild(createChucNang("a","phone"+i.toString(),"100%","25%"))}
for(var i=0;i<4;i++){var x=Math.floor(Math.random()*5+3);document.getElementById("phone"+i.toString()).innerText=nhatky[i]+" ("+x.toString()+")"}
checkhome=0;document.getElementById("calllog").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Xem";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Hủy";var exit=document.getElementById("rightbot");nextcalllog();exit.onclick=function(){try{document.getElementById("calllog").remove();new home().main()}catch{}
indexphone=-1}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){try{document.getElementById("calllog").remove();new home().main()}catch{}
indexphone=-1}}
left(){document.getElementById("centerleft").onclick=function(){prevcalllog()}}
right(){document.getElementById("centerright").onclick=function(){nextcalllog()}}
top(){document.getElementById("centertop").onclick=function(){prevcalllog()}}
bot(){document.getElementById("centerbot").onclick=function(){nextcalllog()}}
call(){document.getElementById("leftbot").onclick=function(){try{document.getElementById("calllog").remove();new calling().main()}catch{}}
document.getElementById("centermid").onclick=function(){try{document.getElementById("calllog").remove();new calling().main()}catch{}}
document.getElementById("lefttop").onclick=function(){try{document.getElementById("calllog").remove();new infouser().main()}catch{}}
danhdaugoi=1}
main(){for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.back();this.right();this.left();this.top();this.bot();this.call()}}
class infouser{constructor(){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Thông Tin";document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("div","username","100%","20%"));document.getElementById("username").innerText=usergoi;document.getElementById("username").style.textAlign="center";document.getElementById("listphone").appendChild(createChucNang("p","imgcall","100%","60%"));document.getElementById("imgcall").innerText="SDT: "+info[0][indexphone]+"\n"+"Thời lượng: "+info[1][indexphone]+"\n"+"Lúc: "+info[2][indexphone];document.getElementById("imgcall").style.textAlign="center";document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Trở về";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}}
document.getElementById("righttop").onclick=function(){document.getElementById("call").remove();try{indexphone=-1;new calllogs().main()}catch{}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<10;i++){this.clickbtn("btn"+i.toString())}
this.back();this.select();this.right();this.left();this.top();this.bot()}}
class callingbynumber{constructor(){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Đang Gọi";danggoi="Đang Gọi";checkhome=0;var timegoi=setInterval(()=>{danggoi+=".";document.getElementById("titlecall").innerText=danggoi;checkgoi++;if(checkgoi==3){danggoi="Đang Gọi";checkgoi=0}},300);document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("div","username","100%","20%"));document.getElementById("username").innerText=valuenumber;document.getElementById("listphone").appendChild(createChucNang("img","imgcall","30%","60%"));var checkimggoi=0;document.getElementById("imgcall").src="img/phone-call.png";var imggoi=setInterval(()=>{if(checkimggoi==0){document.getElementById("imgcall").src="img/phone-call.png";checkimggoi=1}else{document.getElementById("imgcall").src="img/telephone.png";checkimggoi=0}},1000);document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Rảnh Tay";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Kết Thúc";setTimeout(function(){try{var linkchuong=listchuong[Math.floor(Math.random()*2)];if((((valuenumber.length!=10)||((valuenumber.length==10)&&((valuenumber[0]!="0")||((valuenumber[1]!="9")&&(valuenumber[1]!="8")&&(valuenumber[1]!="3")))))&&((valuenumber.length!=8)||((valuenumber.length==8)&&((valuenumber[0]!="1")||(((valuenumber[1]!="9")&&(valuenumber[1]!="8"))||(valuenumber[2]!="0")||(valuenumber[3]!="0"))))))&&(valuenumber.length!=3)){mp3chuong.src=listchuong[2]}else{mp3chuong.src=linkchuong}
mp3chuong.play()}catch{}},2000);var exit=document.getElementById("rightbot");exit.onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}
clearInterval(timegoi);clearInterval(imggoi);try{mp3chuong.src=""}catch{}}
document.getElementById("righttop").onclick=function(){try{mp3chuong.src=""}catch{}
clearInterval(timegoi);clearInterval(imggoi);try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
if(u=="https://truongnokia.github.io"){document.getElementById("body").onclick=function(){try{document.getElementById("logomp3").play()}catch{}}
document.getElementById("logomp3").play();setTimeout(function(){document.getElementById("logomp3").remove();document.getElementById("logoimg").remove();new home().main()},4000)}
class showinfo{constructor(textinfo){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Thông Tin";document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("p","imgcall","100%","80%"));document.getElementById("imgcall").innerText=textinfo;document.getElementById("imgcall").style.textAlign="center";document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Trở về";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}}
document.getElementById("righttop").onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class inputnumber{constructor(){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Nhập Số:";document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("p","nhapvaoso","97%","70%"));document.getElementById("nhapvaoso").innerText=valuenumber;document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Gọi";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Xóa";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{document.getElementById("call").remove();new home().main()}catch{}}
document.getElementById("righttop").onclick=function(){if(valuenumber.length>0){valuenumber=valuenumber.slice(0,valuenumber.length-1);document.getElementById("nhapvaoso").innerText=valuenumber;checkdelnumber=1}
if(valuenumber.length==0){checkdelnumber--;document.getElementById("botitemright").innerText="Trở về"}
if(checkdelnumber==-1){try{document.getElementById("call").remove();new home().main()}catch{}}}}
clickbtn(id){document.getElementById(id).onclick=function(){try{mp3chuong.src="mp3/nhanphim.mp3";mp3chuong.play()}catch{}
if(valuenumber.length<25){valuenumber+=document.getElementById(id).value;document.getElementById("nhapvaoso").innerText=valuenumber}
if(valuenumber=="*#06#"){try{document.getElementById("call").remove();var info="Số seri: 36924837065451145\n05/05/2021\nRM-647\n(c) Nokia N1280 V 04.25\nLanguage: MR";new showinfo(info).main()}catch{}}
if(valuenumber=="*#0000#"){try{document.getElementById("call").remove();var info="Hệ điều hành: Nhô ki anroiOS\n"+"RAM: 128GB\nROM: 1000TB\n"+"CHIP: i9-10900K\n"+"CARD: NVIDIA-RTX-3090\n";new showinfo(info).main()}catch{}}}}
select(){document.getElementById("lefttop").onclick=function(){kiemtrataikhoan()}
document.getElementById("centermid").onclick=function(){kiemtrataikhoan()}
document.getElementById("leftbot").onclick=function(){kiemtrataikhoan()}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class multiframe{constructor(link){manhinh.appendChild(createChucNang("iframe","frame","100%","100%"));document.getElementById("frame").style.borderRadius="10px";document.getElementById("frame").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("frame").src=link;document.getElementById("frame").allow="autoplay";var exit=document.getElementById("rightbot");checkhome=0;exit.onclick=function(){try{indexphone=-1;document.getElementById("frame").remove();new home().main()}catch{}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("righttop").onclick=function(){try{window.history.back()}catch{}}
document.getElementById("lefttop").onclick=function(){try{window.history.go(1)}catch{}}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class done{constructor(textinfo){manhinh.appendChild(createChucNang("div","done","100%","100%"));document.getElementById("done").appendChild(createChucNang("div","titledone","100%","20%"));document.getElementById("done").style.borderRadius="10px";document.getElementById("done").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("done").appendChild(createChucNang("div","listdone","100%","60%"));document.getElementById("listdone").appendChild(createChucNang("img","imgdone","22%","50%"));document.getElementById("imgdone").src="img/loader.gif";setTimeout(function(){document.getElementById("titledone").innerText="Xong!";document.getElementById("imgdone").src="img/tick.png"},2000);setTimeout(function(){try{document.getElementById("done").remove();new showinfo(textinfo).main()}catch{}},4000);checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){}
document.getElementById("righttop").onclick=function(){}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class notelock{constructor(textinfo,img){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlenote","100%","30%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlenote").innerText=textinfo;document.getElementById("call").appendChild(createChucNang("div","listnote","100%","50%"));document.getElementById("listnote").appendChild(createChucNang("img","imgnote","35%","80%"));document.getElementById("imgnote").src=img;document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Trở về";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{document.getElementById("call").remove();new homelock().main()}catch{}}
document.getElementById("righttop").onclick=function(){try{document.getElementById("call").remove();new homelock().main()}catch{}}
setTimeout(function(){try{document.getElementById("call").remove();new homelock().main()}catch{}},1500)}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("btn10").onclick=function(){try{document.getElementById("call").remove()}catch{}
nutnguon();setTimeout(function(){try{document.getElementById("call").remove();new homelock().main()}catch{}},1500);var exit=document.getElementById("rightbot");exit.onclick=function(){nutnguon()}
for(var i=0;i<12;i++){allbtnnumber("btn"+i.toString())}
document.getElementById("righttop").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new danhba().main()}
document.getElementById("lefttop").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new menu().main()}
document.getElementById("centermid").onclick=function(){document.getElementsByClassName("desktop")[0].style.display="none";new menu().main()}
document.getElementById("centerleft").onclick=function(){}
document.getElementById("centerright").onclick=function(){}
document.getElementById("centertop").onclick=function(){}
document.getElementById("centerbot").onclick=function(){}
document.getElementById("leftbot").onclick=function(){try{document.getElementsByClassName("desktop")[0].style.display="none";new calllogs().main()}catch{}}}
document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class homelock{constructor(){nutnguon();document.getElementById("txtdanhba").innerText="";document.getElementById("txtmenu").innerText="M.Khóa";var exit=document.getElementById("rightbot");exit.onclick=function(){}
document.getElementById("desktop").style.backgroundColor="black";document.getElementById("desktop").style.color="rgb(204, 204, 193)"}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){try{document.getElementsByClassName("desktop")[0].style.display="none";new notelock("Nhấn phím * để mở khóa","img/notelock.png").main()}catch{}}
document.getElementById("centermid").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
call(){document.getElementById("leftbot").onclick=function(){}}
loadpin(){setInterval(()=>{time()},1000);var checkpin=0;chaypin=setInterval(()=>{if(checkpin==0){document.getElementById("pin1").style.display="none";checkpin=1}else{document.getElementById("pin1").style.display="inline-block";checkpin=0}},700)}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
checkhome=0;this.back();this.select();this.right();this.left();this.top();this.bot();clearInterval(chaypin);this.loadpin();this.call()}}
class imlang{constructor(textinfo,srcimg,txtnhamang){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText=textinfo;document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("img","imgcall","25%","50%"));document.getElementById("imgcall").src=srcimg;document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Trở về";checkhome=0;var exit=document.getElementById("rightbot");exit.onclick=function(){try{document.getElementById("call").remove();new home().main()}catch{}}
document.getElementById("righttop").onclick=function(){try{document.getElementById("call").remove();new home().main()}catch{}}
setTimeout(function(){try{document.getElementById("call").remove();new home().main()}catch{}
document.getElementById("txtnhamang").innerText=txtnhamang},2000)}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
class nghenhacmp3{constructor(){manhinh.appendChild(createChucNang("div","nghenhac","100%","100%"));var nhan=document.getElementById("centertop");var chia=document.getElementById("centerbot");var tru=document.getElementById("centerleft");var cong=document.getElementById("centerright");var bang=document.getElementById("centermid");var exit=document.getElementById("rightbot");var sao=document.getElementById("btn10");var thang=document.getElementById("btn11");cong.onclick=function(){next()}
tru.onclick=function(){previous()}
nhan.onclick=function(){document.getElementById("volumeSlider").value=parseFloat(document.getElementById("volumeSlider").value)+0.1}
chia.onclick=function(){document.getElementById("volumeSlider").value=parseFloat(document.getElementById("volumeSlider").value)-0.1}
sao.onclick=function(){}
thang.onclick=function(){}
checkhome=0;chucnangnghenhac();songTitle=document.getElementById('songTitle');songSlider=document.getElementById('songSlider');currentTime=document.getElementById('currentTime');duration=document.getElementById('duration');volumeSlider=document.getElementById('volumeSlider');nextSongTitle=document.getElementById('nextSongTitle');loadSong();chaymp3=setInterval(updateSongSlider,1000);exit.onclick=function(){try{document.getElementById("nghenhac").remove();clearInterval(chaymp3);song.pause()}catch{};new home().main()}
bang.onclick=function(){song.playbackRate=1;var imgpause=document.getElementById("imgpause");if(song.paused){song.play();imgpause.src="images/pause.png"}else{song.pause();imgpause.src="images/play.png"}}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
back(){document.getElementById("righttop").onclick=function(){try{document.getElementById("nghenhac").remove();clearInterval(chaymp3);song.pause()}catch{};new menu().main()}}
main(){document.getElementById("lefttop").onclick=function(){}
for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.back()}}
class nhantin{constructor(textinfo){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Soạn Tin Nhắn";document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("textarea","imgcall","98%","100%"));document.getElementById("imgcall").innerText=textinfo;document.getElementById("imgcall").placeholder="Soạn Tin Nhắn Mới";document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Gửi";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Xóa";checkhome=0;var vanbantinnhan=document.getElementById("imgcall");var btn1=document.getElementById("btn1");var btn2=document.getElementById("btn2");var btn3=document.getElementById("btn3");var btn4=document.getElementById("btn4");var btn5=document.getElementById("btn5");var btn6=document.getElementById("btn6");var btn7=document.getElementById("btn7");var btn8=document.getElementById("btn8");var btn9=document.getElementById("btn9");var btn10=document.getElementById("btn10");var btn0=document.getElementById("btn0");var btn11=document.getElementById("btn11");btn0.onclick=function(){if(indexbtn0==arrbtn0.length)indexbtn0=0;if(xid0==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn0[indexbtn0++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid0=0;indexbtn0=0},1000);xid0=1;indexbtn1=0
indexbtn2=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid2=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn1.onclick=function(){if(indexbtn1==arrbtn1.length)indexbtn1=0;if(xid1==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn1[indexbtn1++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid1=0;indexbtn1=0},1000);xid1=1;indexbtn0=0
indexbtn2=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid0=0;xid2=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn2.onclick=function(){if(indexbtn2==arrbtn2.length)indexbtn2=0;if(xid2==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn2[indexbtn2++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid2=0;indexbtn2=0},1000);xid2=1;indexbtn1=0
indexbtn0=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn3.onclick=function(){if(indexbtn3==arrbtn3.length)indexbtn3=0;if(xid3==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn3[indexbtn3++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid3=0;indexbtn3=0},1000);xid3=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn4.onclick=function(){if(indexbtn4==arrbtn4.length)indexbtn4=0;if(xid4==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn4[indexbtn4++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid4=0;indexbtn4=0},1000);xid4=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn3=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid3=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn5.onclick=function(){if(indexbtn5==arrbtn5.length)indexbtn5=0;if(xid5==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn5[indexbtn5++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid5=0;indexbtn5=0},1000);xid5=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn3=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid3=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn6.onclick=function(){if(indexbtn6==arrbtn6.length)indexbtn6=0;if(xid6==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn6[indexbtn6++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid6=0;indexbtn6=0},1000);xid6=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn3=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid3=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn7.onclick=function(){if(indexbtn7==arrbtn7.length)indexbtn7=0;if(xid7==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn7[indexbtn7++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid7=0;indexbtn7=0},1000);xid7=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn3=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid3=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn8.onclick=function(){if(indexbtn8==arrbtn8.length)indexbtn8=0;if(xid8==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn8[indexbtn8++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid8=0;indexbtn8=0},1000);xid8=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn3=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid3=0;xid9=0;xid10=0;xid11=0}
btn9.onclick=function(){if(indexbtn9==arrbtn9.length)indexbtn9=0;if(xid9==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn9[indexbtn9++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid9=0;indexbtn9=0},1000);xid9=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn3=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid3=0;xid10=0;xid11=0}
btn10.onclick=function(){if(indexbtn10==arrbtn10.length)indexbtn10=0;if(xid10==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn10[indexbtn10++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid10=0;indexbtn10=0},1000);xid10=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn3=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid3=0;xid11=0}
btn11.onclick=function(){if(indexbtn11==arrbtn11.length)indexbtn11=0;if(xid11==1){txtnhantin=txtnhantin.slice(0,txtnhantin.length-1)}
txtnhantin+=arrbtn11[indexbtn11++];vanbantinnhan.innerText=txtnhantin;clearInterval(timebtn);timebtn=setTimeout(()=>{xid11=0;indexbtn11=0},1000);xid11=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn3=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid3=0}
var exit=document.getElementById("rightbot");exit.onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}
txtnhantin="";txtnguoinhan=""}
var checktxtnhantin=1;document.getElementById("righttop").onclick=function(){if(txtnhantin==""){checktxtnhantin--}else{txtnhantin=txtnhantin.slice(0,txtnhantin.length-1);vanbantinnhan.innerText=txtnhantin;checktxtnhantin=1}
if(checktxtnhantin==0){document.getElementById("call").remove();new menu().main()}}}
select(){document.getElementById("lefttop").onclick=function(){try{document.getElementById("call").remove();new inputsdtnhantin().main()}catch{}}
document.getElementById("centermid").onclick=function(){try{document.getElementById("call").remove();new inputsdtnhantin().main()}catch{}}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){this.select();this.right();this.left();this.top();this.bot()}}
class inputsdtnhantin{constructor(){manhinh.appendChild(createChucNang("div","call","100%","100%"));document.getElementById("call").appendChild(createChucNang("div","titlecall","100%","20%"));document.getElementById("call").style.borderRadius="10px";document.getElementById("call").style.backgroundColor="rgb(204, 204, 193)";document.getElementById("titlecall").innerText="Gửi Tin Nhắn";document.getElementById("call").appendChild(createChucNang("div","listphone","100%","60%"));document.getElementById("listphone").appendChild(createChucNang("textarea","imgcall","98%","30%"));document.getElementById("imgcall").placeholder="Nhập Người Nhận";document.getElementById("call").appendChild(createChucNang("div","botitem","100%","20%"));document.getElementById("botitem").appendChild(createChucNang("div","botitemleft","30%","100%"));document.getElementById("botitemleft").innerText="Gửi";document.getElementById("botitem").appendChild(createChucNang("div","botitemright","30%","100%"));document.getElementById("botitemright").innerText="Xóa";checkhome=0;var vanbantinnhan=document.getElementById("imgcall");var btn1=document.getElementById("btn1");var btn2=document.getElementById("btn2");var btn3=document.getElementById("btn3");var btn4=document.getElementById("btn4");var btn5=document.getElementById("btn5");var btn6=document.getElementById("btn6");var btn7=document.getElementById("btn7");var btn8=document.getElementById("btn8");var btn9=document.getElementById("btn9");var btn10=document.getElementById("btn10");var btn0=document.getElementById("btn0");var btn11=document.getElementById("btn11");btn0.onclick=function(){if(indexbtn0==arrbtn0.length)indexbtn0=0;if(xid0==1){txtnguoinhan=txtnhantin.slice(0,txtnhantin.length-1)}
txtnguoinhan+=arrbtn0[indexbtn0++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid0=0;indexbtn0=0},1000);xid0=1;indexbtn1=0
indexbtn2=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid2=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn1.onclick=function(){if(indexbtn1==arrbtn1.length)indexbtn1=0;if(xid1==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn1[indexbtn1++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid1=0;indexbtn1=0},1000);xid1=1;indexbtn0=0
indexbtn2=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid0=0;xid2=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn2.onclick=function(){if(indexbtn2==arrbtn2.length)indexbtn2=0;if(xid2==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn2[indexbtn2++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid2=0;indexbtn2=0},1000);xid2=1;indexbtn1=0
indexbtn0=0;indexbtn3=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid3=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn3.onclick=function(){if(indexbtn3==arrbtn3.length)indexbtn3=0;if(xid3==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn3[indexbtn3++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid3=0;indexbtn3=0},1000);xid3=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn4.onclick=function(){if(indexbtn4==arrbtn4.length)indexbtn4=0;if(xid4==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn4[indexbtn4++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid4=0;indexbtn4=0},1000);xid4=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn3=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid3=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn5.onclick=function(){if(indexbtn5==arrbtn5.length)indexbtn5=0;if(xid5==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn5[indexbtn5++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid5=0;indexbtn5=0},1000);xid5=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn3=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid3=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn6.onclick=function(){if(indexbtn6==arrbtn6.length)indexbtn6=0;if(xid6==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn6[indexbtn6++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid6=0;indexbtn6=0},1000);xid6=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn3=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid3=0;xid7=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn7.onclick=function(){if(indexbtn7==arrbtn7.length)indexbtn7=0;if(xid7==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn7[indexbtn7++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid7=0;indexbtn7=0},1000);xid7=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn3=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid3=0;xid8=0;xid9=0;xid10=0;xid11=0}
btn8.onclick=function(){if(indexbtn8==arrbtn8.length)indexbtn8=0;if(xid8==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn8[indexbtn8++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid8=0;indexbtn8=0},1000);xid8=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn3=0;indexbtn9=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid3=0;xid9=0;xid10=0;xid11=0}
btn9.onclick=function(){if(indexbtn9==arrbtn9.length)indexbtn9=0;if(xid9==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn9[indexbtn9++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid9=0;indexbtn9=0},1000);xid9=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn3=0;indexbtn10=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid3=0;xid10=0;xid11=0}
btn10.onclick=function(){if(indexbtn10==arrbtn10.length)indexbtn10=0;if(xid10==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn10[indexbtn10++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid10=0;indexbtn10=0},1000);xid10=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn3=0;indexbtn11=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid3=0;xid11=0}
btn11.onclick=function(){if(indexbtn11==arrbtn11.length)indexbtn11=0;if(xid11==1){txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1)}
txtnguoinhan+=arrbtn11[indexbtn11++];vanbantinnhan.innerText=txtnguoinhan;clearInterval(timebtn);timebtn=setTimeout(()=>{xid11=0;indexbtn11=0},1000);xid11=1;indexbtn1=0
indexbtn0=0;indexbtn2=0;indexbtn4=0;indexbtn5=0;indexbtn6=0;indexbtn7=0;indexbtn8=0;indexbtn9=0;indexbtn10=0;indexbtn3=0;xid1=0;xid0=0;xid2=0;xid4=0;xid5=0;xid6=0;xid7=0;xid8=0;xid9=0;xid10=0;xid3=0}
var exit=document.getElementById("rightbot");exit.onclick=function(){try{indexphone=-1;document.getElementById("call").remove();new home().main()}catch{}
txtnguoinhan="";txtnhantin=""}
var checktxtnhantin=1;document.getElementById("righttop").onclick=function(){if(txtnguoinhan==""){checktxtnhantin--}else{txtnguoinhan=txtnguoinhan.slice(0,txtnguoinhan.length-1);vanbantinnhan.innerText=txtnguoinhan;checktxtnhantin=1}
if(checktxtnhantin==0){try{document.getElementById("call").remove();new nhantin(txtnhantin).main()}catch{}}}}
select(){document.getElementById("lefttop").onclick=function(){try{document.getElementById("call").remove();var str="Đã gửi: "+'"'+txtnhantin+'"'+" đến "+txtnguoinhan;new done(str).main();txtnhantin="";txtnguoinhan=""}catch{}}
document.getElementById("centermid").onclick=function(){try{document.getElementById("call").remove();var str="Đã gửi: "+'"'+txtnhantin+'"'+" đến "+txtnguoinhan;new done(str).main();txtnhantin="";txtnguoinhan=""}catch{}}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){this.select();this.right();this.left();this.top();this.bot()}}
class snake{constructor(game){this.game=game;this.x=0;this.y=0;this.grid=8;this.dx=this.grid;this.dy=0;this.cell=[];this.maxCells=2}
update(){if(this.endGame()){this.x+=this.dx;this.y+=this.dy}
if(this.x>=this.game.canvas.width){this.x=0}else if(this.x<0){this.x=this.game.canvas.width}
if(this.y>=this.game.canvas.height){this.y=0}else if(this.y<0){this.y=this.game.canvas.height}
this.cell.unshift({x:this.x,y:this.y});if(this.cell.length>this.maxCells){this.cell.pop()}
this.catchHandle()}
draw(){for(let i=0;i<this.cell.length;i++){this.game.context.fillStyle='black';this.game.context.fillRect(this.cell[i].x,this.cell[i].y,this.grid,this.grid)}
if(!this.endGame()){document.getElementById("game").remove();new menu().main()}}
catchHandle(){document.addEventListener('keydown',(e)=>{if(e.which==37&&this.dx==0){this.dx=-this.grid;this.dy=0}else if(e.which==38&&this.dy==0){this.dx=0;this.dy=-this.grid}else if(e.which==39&&this.dx==0){this.dx=this.grid;this.dy=0}else if(e.which==40&&this.dy==0){this.dx=0;this.dy=this.grid}})}
eat(x,y){if(this.x==x&&this.y==y){this.maxCells++;diemran++;document.getElementById("diemran").innerText="Điểm: "+diemran;return!0}
return!1}
endGame(){for(let i=1;i<this.cell.length;i++){if(this.x==this.cell[i].x&&this.y==this.cell[i].y){return!1}}
return!0}}
class food{constructor(game){this.game=game;this.x=0;this.y=0;this.grid=8;this.update()}
update(){this.x=(Math.floor(Math.random()*(15-0))+0)*this.grid;this.y=(Math.floor(Math.random()*(15-0))+0)*this.grid}
draw(){this.game.context.fillStyle='black';this.game.context.fillRect(this.x,this.y,this.grid,this.grid)}}
class game{constructor(){this.canvas=null;this.context=null;this.diem=null;this.init();this.loop()}
init(){this.canvas=document.createElement('canvas');this.diem=document.createElement("h1");this.canvas.id="ransanmoi";this.context=this.canvas.getContext('2d');this.diem.id="diemran";document.getElementById("game").appendChild(this.canvas);document.getElementById("game").appendChild(this.diem);this.snake=new snake(this);this.food=new food(this)}
loop(){this.update();this.draw();ve=setTimeout(()=>{try{this.loop()}catch{clearInterval(ve)}},120)}
update(){this.snake.update();if(this.snake.eat(this.food.x,this.food.y)){this.food.update()}}
draw(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);this.snake.draw();this.food.draw()}}
class gameran{constructor(){manhinh.appendChild(createChucNang("div","game","100%","100%"));document.getElementById("game").style.borderRadius="10px";document.getElementById("game").style.backgroundColor="rgb(204, 204, 193)";diemran=0;new game();var exit=document.getElementById("rightbot");checkhome=0;exit.onclick=function(){try{document.getElementById("game").remove()}catch{}
new home().main()}}
clickbtn(id){document.getElementById(id).onclick=function(){}}
select(){document.getElementById("righttop").onclick=function(){}
document.getElementById("lefttop").onclick=function(){}
document.getElementById("centermid").onclick=function(){}
document.getElementById("leftbot").onclick=function(){}}
left(){document.getElementById("centerleft").onclick=function(){}}
right(){document.getElementById("centerright").onclick=function(){}}
top(){document.getElementById("centertop").onclick=function(){}}
bot(){document.getElementById("centerbot").onclick=function(){}}
main(){for(var i=0;i<12;i++){this.clickbtn("btn"+i.toString())}
this.select();this.right();this.left();this.top();this.bot()}}
function gogo(){window.open("https://www.facebook.com/www.python.org/")}
