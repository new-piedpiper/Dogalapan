var a_no=1;
var ad;
function groVer()
{
  let dat= new Date();
  try {
  ad.pause();
  } catch (e) {}
  a_no=((dat.getSeconds())%6)+1;
  name="ag"+a_no+".mp3";
  ad= new Audio(name);
  ad.play();
}
