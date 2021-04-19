window.onload = function () {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    // スマホサイト
    window.location.href =
      "https://clubj.jr-odekake.net/shared/pc/sp_login2.do?JRSSID=0409&RTURL=https%3a%2f%2fwww.jr-odekake.net%2fsmt%2f&NTURL=https%3a%2f%2fe5489.jr-odekake.net%2fe5489%2fcssp%2fCBTopMenuSP";
  } else {
    // pcサイト
    window.location.href =
      "https://clubj.jr-odekake.net/shared/pc/login1.do?JRSSID=0409&NTURL=https%3A%2F%2Fe5489.jr-odekake.net%2Fe5489%2Fcspc%2FCBTopMenuPC%3FscreenId%3DCP6100%26businessType%3D10%26FMLOGIN%3D1&RTURL=https%3A%2F%2Fe5489.jr-odekake.net%2Fe5489%2Fcspc%2FCBTopMenuInitBackPC%3FscreenId%3DCP6100%26businessType%3D10";
  }
};
