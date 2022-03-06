var a_no=1;
var ad;
function groVer()
{
  try {
  ad.pause();
  } catch (e) {

  } finally {

  }
  a_no=Math.floor(Math.random()*6)+1;
  name="ag"+a_no+".mp3";
  ad= new Audio(name);
  ad.play();
}
