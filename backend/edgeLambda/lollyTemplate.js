"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data, cfDistDomain) => `
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/css/styles.css">
    <style>
      @import url("https://fonts.googleapis.com/css?family=Yellowtail&display=swap");
      * {
        margin: 0;
        padding: 0;
      }
      ::-moz-selection {
        background-color: #fa73d9;
        color: #21212b;
      }
      ::selection {
        background-color: #fa73d9;
        color: #21212b;
      }
      body {
        text-align: center;
        background-color: #21212b;
        color: #dadadb;
        font-family: open-sans, Helvetica, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 1.8;
        min-height: 100vh;
        background: #21212b;
      }
      @media (min-width: 400px) {
        body {
          font-size: 18px;
        }
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
      }
      @media (min-width: 740px) {
        .container {
          width: 700px;
        }
      }
      @media (min-width: 1200px) {
        .container {
          width: 800px;
        }
      }
      h1,
      h2,
      h3 {
        color: #eee;
        font-weight: 600;
        margin-top: 3em;
      }
      h1,
      h2,
      h3 {
        margin-bottom: 0.2em;
        line-height: 1;
      }
      h1 {
        font-family: Yellowtail, cursive;
        font-size: 4em;
        margin-top: 1em;
      }
      @media (min-width: 740px) {
        h1 {
          font-size: 4.5em;
        }
      }
      @media (min-width: 1200px) {
        h1 {
          font-size: 5em;
        }
      }
      h1.title a {
        font-weight: 300;
        color: #fff;
        border-bottom-style: none;
        text-shadow: #fa73d9 0 0 8px;
      }
      h1.title a:focus,
      h1.title a:hover {
        text-shadow: #fa73d9 0 0 16px;
      }
      .subtitle {
        font-size: 1em;
        font-style: italic;
        color: #ddd;
        text-shadow: #fa73d9 1px 1px 4px;
        margin-top: 1.5em;
        margin-bottom: 3em;
        line-height: 1.2;
      }
      p {
        margin-top: 1em;
        margin-bottom: 1em;
      }
      a:link,
      a:visited {
        color: #eee;
        text-decoration: none;
        border-bottom: 1px solid #f88cdd;
      }
      a:focus,
      a:hover {
        color: #eee;
        border-bottom-color: #eee;
      }
      header {
        text-align: center;
      }
      footer {
        margin-top: 10em;
        margin-bottom: 5em;
        font-size: 0.7em;
        color: #f4b1e4;
      }
      footer a:link,
      footer a:visited {
        color: #efe2ec;
        border-bottom: #b95aa5;
      }
      footer a:focus,
      footer a:hover {
        color: #eee;
        border-bottom: 1px solid #eee;
      }
      .lolly {
        text-align: center;
        -webkit-filter: drop-shadow(0 0 10px #000);
        filter: drop-shadow(0 0 10px #000);
      }
      @media (min-width: 950px) {
        .lolly {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      }
      .giftLolly svg {
        margin-bottom: 0;
      }
      @media (min-width: 740px) {
        .info {
          margin-left: 4em;
        }
      }
      .details {
        padding: 1em 2em;
        margin-bottom: 1.5em;
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        text-align: left;
        font-style: italic;
        font-size: 1.1em;
      }
      .from,
      .recipient {
        font-family: Yellowtail, cursive;
        font-size: 1.6em;
        font-style: normal;
        text-shadow: #000 0 0 10px;
      }
      .from {
        padding-left: 2em;
      }
      .bytheway {
        font-size: 0.7em;
        color: hsla(0, 0%, 100%, 0.6);
      }
      @media (min-width: 740px) {
        .bytheway {
          font-size: 0.8em;
        }
      }
      pre {
        color: #fa73d9;
        margin-top: 0.5em;
        padding: 0.5em 1em;
        border: 1px solid #000;
        background-color: #000;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-color: #21212b;
        scrollbar-arrow-color: #fa73d9;
        scrollbar-track-color: #000;
        scrollbar-width: 5px;
      }
      .lollyTop {
        fill: ${data.topColor};
      }
      .lollyMiddle {
        fill: ${data.middleColor};
      }
      .lollyBottom {
        fill: ${data.bottomColor};
      }
    </style>
    <link rel="stylesheet" href="./global.css">
    <title>Frozen Lolly | Virtual Lolly App</title>
  </head>
  <body>
    <div class="container">
      <header>
        <h1 class="title">
          <a href="/">virtual lollipop</a>
        </h1>
        <p class="subtitle">because we all know someone<br>who deserves some sugar.</p>
      </header>
      <div class="lolly">
        <div class="giftLolly">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg class="lollipop" width="163px" height="431px" viewBox="0 0 163 431" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <path d="M50.5845697,1.80919445e-14 L112.757384,3.19744231e-14 C129.058949,2.89798741e-14 142.575449,12.6254516 143.685437,28.8891833 L162.453983,303.889183 C163.619754,320.970275 150.717838,335.762281 133.636746,336.928053 C132.934162,336.976004 132.230148,337 131.52593,337 L31,337 C13.8791728,337 -1.56668718e-14,323.120827 -1.77635684e-14,306 C-1.78535483e-14,305.265258 0.0261215736,304.530748 0.0783152276,303.797862 L19.662885,28.7978622 C20.8183904,12.5726406 34.3182545,1.0093501e-14 50.5845697,7.10542736e-15 Z" id="path-1"></path>
              <path d="M99,2.88483832e-14 L113,3.19744231e-14 C129.301566,2.89798741e-14 142.818065,12.6254516 143.928053,28.8891833 L162.696599,303.889183 C163.862371,320.970275 150.960455,335.762281 133.879363,336.928053 C133.176779,336.976004 132.472765,337 131.768546,337 L117.768546,337 C118.472765,337 119.176779,336.976004 119.879363,336.928053 C136.960455,335.762281 149.862371,320.970275 148.696599,303.889183 L129.928053,28.8891833 C128.818065,12.6254516 115.301566,2.89798741e-14 99,3.19744231e-14 Z" id="path-3"></path>
            </defs>
            <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Lolly">
                <g id="handle" transform="translate(65.000000, 137.000000)" fill-rule="nonzero">
                  <rect id="Rectangle" fill="#C06C50" x="0" y="2" width="32" height="292" rx="16"></rect>
                  <rect id="Rectangle" fill="#E3A28D" x="0" y="0" width="32" height="292" rx="16"></rect>
                  <polygon id="Rectangle-Copy-3" fill-opacity="0.181584013" fill="#8C0040" points="0 200 32 200 32 218 0 223.801515"></polygon>
                </g>
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1"></use>
                </mask>
                <use class="lollyBottom" fill="#deaa43" fill-rule="nonzero" xlink:href="#path-1"></use>
                <rect class="lollyTop" fill="#d52358" fill-rule="nonzero" mask="url(#mask-2)" x="-25" y="-9" width="224" height="134"></rect>
                <rect class="lollyMiddle" fill="#e95946" fill-rule="nonzero" mask="url(#mask-2)" x="-29" y="113" width="224" height="111"></rect>
                <path d="M79.7697726,3.19744231e-14 C63.468207,2.89798741e-14 49.9517074,12.6254516 48.8417198,28.8891833 L30.0731738,303.889183 C28.9074019,320.970275 41.8093181,335.762281 58.89041,336.928053 C59.5929941,336.976004 60.2970081,337 61.0012266,337 L17,337 C-0.120827245,337 -14,323.120827 -14,306 C-14,305.265258 -13.9738784,304.530748 -13.9216848,303.797862 L5.66288496,28.7978622 C6.81839036,12.5726406 20.3182545,1.0093501e-14 36.5845697,7.10542736e-15 L79.7697726,2.77347066e-14 Z" id="shade" fill="#67000D" fill-rule="nonzero" opacity="0.0961449033" mask="url(#mask-2)"></path>
                <mask id="mask-4" fill="white">
                  <use xlink:href="#path-3"></use>
                </mask>
                <use id="shine" fill="#FFFFFF" fill-rule="nonzero" opacity="0.113420759" xlink:href="#path-3"></use>
                <g id="glint" opacity="0.600144159" transform="translate(130.971719, 34.105410) rotate(-94.000000) translate(-130.971719, -34.105410) translate(118.971719, 32.105410)" fill="#FFFFFF" fill-rule="nonzero">
                  <rect id="Rectangle" x="20" y="4.26325641e-14" width="4" height="4" rx="2"></rect>
                  <rect id="Rectangle-Copy" x="0" y="0" width="18" height="4" rx="2"></rect>
                </g>
                <path d="M97,337 L65,337 L65,155 L65,153 C65,144.163444 72.163444,137 81,137 C89.836556,137 97,144.163444 97,153 L97,155 L97,337 Z" id="frozenhandle" fill="#A7563C" fill-rule="nonzero" opacity="0.0615234375"></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="info">
          <p class="share">Your lolly is freezing. Share it with this link: <pre>${cfDistDomain}/lolly/${data.id}</pre></p>
          <div class="details">
            <p id="recipient" class="recipient">${data.recipientName}</p>
            <div id="message" class="message">${data.message}</div>
            <p id="from" class="from">— ${data.sendersName}</p>
          </div>
          <p class="bytheway">${data.sendersName} made this virtual lollipop for you. You can <a href="/create-new">make your own</a> to send to a friend who deserves some sugary treat which won't rot their teeth...</p>
        </div>
      </div>
      <footer>
        <p>
          Hosted with <a href="https://aws.amazon.com/cloudfront/" target="_blank" rel="noopener noreferrer">AWS CloudFront</a> by <a href="https://github.com/SharjeelSafdar/" target="_blank" rel="noopener noreferrer">Mian Muhammad Sharjeel Safdar</a>
        </p>
        <p>
          © 2021, Built with <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>
        </p>
      </footer>
    </div>
  </body>
</html>`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9sbHlUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvbGx5VGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxDQUFDLElBQVcsRUFBRSxZQUFvQixFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFpTXRDLElBQUksQ0FBQyxRQUFROzs7Z0JBR2IsSUFBSSxDQUFDLFdBQVc7OztnQkFHaEIsSUFBSSxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21GQWtEbUQsWUFBWSxVQUFVLElBQUksQ0FBQyxFQUFFOztrREFFOUQsSUFBSSxDQUFDLGFBQWE7Z0RBQ3BCLElBQUksQ0FBQyxPQUFPOzBDQUNsQixJQUFJLENBQUMsV0FBVzs7Z0NBRTFCLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7O1FBYXhDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2xseSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZGF0YTogTG9sbHksIGNmRGlzdERvbWFpbjogc3RyaW5nKSA9PiBgXHJcbjwhZG9jdHlwZSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuICA8aGVhZD48bWV0YSBjaGFyc2V0PVwidXRmLThcIj48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9zdHlsZXMuY3NzXCI+XHJcbiAgICA8c3R5bGU+XHJcbiAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVllbGxvd3RhaWwmZGlzcGxheT1zd2FwXCIpO1xyXG4gICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG4gICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3M2Q5O1xyXG4gICAgICAgIGNvbG9yOiAjMjEyMTJiO1xyXG4gICAgICB9XHJcbiAgICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE3M2Q5O1xyXG4gICAgICAgIGNvbG9yOiAjMjEyMTJiO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTJiO1xyXG4gICAgICAgIGNvbG9yOiAjZGFkYWRiO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMTIxMmI7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgxLFxyXG4gICAgICBoMixcclxuICAgICAgaDMge1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgICB9XHJcbiAgICAgIGgxLFxyXG4gICAgICBoMixcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogWWVsbG93dGFpbCwgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBoMS50aXRsZSBhIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6ICNmYTczZDkgMCAwIDhweDtcclxuICAgICAgfVxyXG4gICAgICBoMS50aXRsZSBhOmZvY3VzLFxyXG4gICAgICBoMS50aXRsZSBhOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZhNzNkOSAwIDAgMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBjb2xvcjogI2RkZDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZhNzNkOSAxcHggMXB4IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIGE6bGluayxcclxuICAgICAgYTp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmODhjZGQ7XHJcbiAgICAgIH1cclxuICAgICAgYTpmb2N1cyxcclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZTtcclxuICAgICAgfVxyXG4gICAgICBoZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBmb290ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgY29sb3I6ICNmNGIxZTQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9vdGVyIGE6bGluayxcclxuICAgICAgZm9vdGVyIGE6dmlzaXRlZCB7XHJcbiAgICAgICAgY29sb3I6ICNlZmUyZWM7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogI2I5NWFhNTtcclxuICAgICAgfVxyXG4gICAgICBmb290ZXIgYTpmb2N1cyxcclxuICAgICAgZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2xseSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTBweCAjMDAwKTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4ICMwMDApO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgIC5sb2xseSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmdpZnRMb2xseSBzdmcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5mcm9tLFxyXG4gICAgICAucmVjaXBpZW50IHtcclxuICAgICAgICBmb250LWZhbWlseTogWWVsbG93dGFpbCwgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogIzAwMCAwIDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuZnJvbSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmJ5dGhld2F5IHtcclxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIGNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjYpO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgIC5ieXRoZXdheSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmE3M2Q5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMjEyMTJiO1xyXG4gICAgICAgIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogI2ZhNzNkOTtcclxuICAgICAgICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICMwMDA7XHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxvbGx5VG9wIHtcclxuICAgICAgICBmaWxsOiAke2RhdGEudG9wQ29sb3J9O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2xseU1pZGRsZSB7XHJcbiAgICAgICAgZmlsbDogJHtkYXRhLm1pZGRsZUNvbG9yfTtcclxuICAgICAgfVxyXG4gICAgICAubG9sbHlCb3R0b20ge1xyXG4gICAgICAgIGZpbGw6ICR7ZGF0YS5ib3R0b21Db2xvcn07XHJcbiAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4vZ2xvYmFsLmNzc1wiPlxyXG4gICAgPHRpdGxlPkZyb3plbiBMb2xseSB8IFZpcnR1YWwgTG9sbHkgQXBwPC90aXRsZT5cclxuICA8L2hlYWQ+XHJcbiAgPGJvZHk+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+dmlydHVhbCBsb2xsaXBvcDwvYT5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5iZWNhdXNlIHdlIGFsbCBrbm93IHNvbWVvbmU8YnI+d2hvIGRlc2VydmVzIHNvbWUgc3VnYXIuPC9wPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxvbGx5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdpZnRMb2xseVwiPlxyXG4gICAgICAgICAgPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIj8+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzPVwibG9sbGlwb3BcIiB3aWR0aD1cIjE2M3B4XCIgaGVpZ2h0PVwiNDMxcHhcIiB2aWV3Qm94PVwiMCAwIDE2MyA0MzFcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxyXG4gICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwLjU4NDU2OTcsMS44MDkxOTQ0NWUtMTQgTDExMi43NTczODQsMy4xOTc0NDIzMWUtMTQgQzEyOS4wNTg5NDksMi44OTc5ODc0MWUtMTQgMTQyLjU3NTQ0OSwxMi42MjU0NTE2IDE0My42ODU0MzcsMjguODg5MTgzMyBMMTYyLjQ1Mzk4MywzMDMuODg5MTgzIEMxNjMuNjE5NzU0LDMyMC45NzAyNzUgMTUwLjcxNzgzOCwzMzUuNzYyMjgxIDEzMy42MzY3NDYsMzM2LjkyODA1MyBDMTMyLjkzNDE2MiwzMzYuOTc2MDA0IDEzMi4yMzAxNDgsMzM3IDEzMS41MjU5MywzMzcgTDMxLDMzNyBDMTMuODc5MTcyOCwzMzcgLTEuNTY2Njg3MThlLTE0LDMyMy4xMjA4MjcgLTEuNzc2MzU2ODRlLTE0LDMwNiBDLTEuNzg1MzU0ODNlLTE0LDMwNS4yNjUyNTggMC4wMjYxMjE1NzM2LDMwNC41MzA3NDggMC4wNzgzMTUyMjc2LDMwMy43OTc4NjIgTDE5LjY2Mjg4NSwyOC43OTc4NjIyIEMyMC44MTgzOTA0LDEyLjU3MjY0MDYgMzQuMzE4MjU0NSwxLjAwOTM1MDFlLTE0IDUwLjU4NDU2OTcsNy4xMDU0MjczNmUtMTUgWlwiIGlkPVwicGF0aC0xXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTksMi44ODQ4MzgzMmUtMTQgTDExMywzLjE5NzQ0MjMxZS0xNCBDMTI5LjMwMTU2NiwyLjg5Nzk4NzQxZS0xNCAxNDIuODE4MDY1LDEyLjYyNTQ1MTYgMTQzLjkyODA1MywyOC44ODkxODMzIEwxNjIuNjk2NTk5LDMwMy44ODkxODMgQzE2My44NjIzNzEsMzIwLjk3MDI3NSAxNTAuOTYwNDU1LDMzNS43NjIyODEgMTMzLjg3OTM2MywzMzYuOTI4MDUzIEMxMzMuMTc2Nzc5LDMzNi45NzYwMDQgMTMyLjQ3Mjc2NSwzMzcgMTMxLjc2ODU0NiwzMzcgTDExNy43Njg1NDYsMzM3IEMxMTguNDcyNzY1LDMzNyAxMTkuMTc2Nzc5LDMzNi45NzYwMDQgMTE5Ljg3OTM2MywzMzYuOTI4MDUzIEMxMzYuOTYwNDU1LDMzNS43NjIyODEgMTQ5Ljg2MjM3MSwzMjAuOTcwMjc1IDE0OC42OTY1OTksMzAzLjg4OTE4MyBMMTI5LjkyODA1MywyOC44ODkxODMzIEMxMjguODE4MDY1LDEyLjYyNTQ1MTYgMTE1LjMwMTU2NiwyLjg5Nzk4NzQxZS0xNCA5OSwzLjE5NzQ0MjMxZS0xNCBaXCIgaWQ9XCJwYXRoLTNcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgaWQ9XCJQYWdlLTJcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgIDxnIGlkPVwiTG9sbHlcIj5cclxuICAgICAgICAgICAgICAgIDxnIGlkPVwiaGFuZGxlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDY1LjAwMDAwMCwgMTM3LjAwMDAwMClcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgZmlsbD1cIiNDMDZDNTBcIiB4PVwiMFwiIHk9XCIyXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjI5MlwiIHJ4PVwiMTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgZmlsbD1cIiNFM0EyOERcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjI5MlwiIHJ4PVwiMTZcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPVwiUmVjdGFuZ2xlLUNvcHktM1wiIGZpbGwtb3BhY2l0eT1cIjAuMTgxNTg0MDEzXCIgZmlsbD1cIiM4QzAwNDBcIiBwb2ludHM9XCIwIDIwMCAzMiAyMDAgMzIgMjE4IDAgMjIzLjgwMTUxNVwiPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzay0yXCIgZmlsbD1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvbWFzaz5cclxuICAgICAgICAgICAgICAgIDx1c2UgY2xhc3M9XCJsb2xseUJvdHRvbVwiIGZpbGw9XCIjZGVhYTQzXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIHhsaW5rOmhyZWY9XCIjcGF0aC0xXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImxvbGx5VG9wXCIgZmlsbD1cIiNkNTIzNThcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgbWFzaz1cInVybCgjbWFzay0yKVwiIHg9XCItMjVcIiB5PVwiLTlcIiB3aWR0aD1cIjIyNFwiIGhlaWdodD1cIjEzNFwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibG9sbHlNaWRkbGVcIiBmaWxsPVwiI2U5NTk0NlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBtYXNrPVwidXJsKCNtYXNrLTIpXCIgeD1cIi0yOVwiIHk9XCIxMTNcIiB3aWR0aD1cIjIyNFwiIGhlaWdodD1cIjExMVwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzkuNzY5NzcyNiwzLjE5NzQ0MjMxZS0xNCBDNjMuNDY4MjA3LDIuODk3OTg3NDFlLTE0IDQ5Ljk1MTcwNzQsMTIuNjI1NDUxNiA0OC44NDE3MTk4LDI4Ljg4OTE4MzMgTDMwLjA3MzE3MzgsMzAzLjg4OTE4MyBDMjguOTA3NDAxOSwzMjAuOTcwMjc1IDQxLjgwOTMxODEsMzM1Ljc2MjI4MSA1OC44OTA0MSwzMzYuOTI4MDUzIEM1OS41OTI5OTQxLDMzNi45NzYwMDQgNjAuMjk3MDA4MSwzMzcgNjEuMDAxMjI2NiwzMzcgTDE3LDMzNyBDLTAuMTIwODI3MjQ1LDMzNyAtMTQsMzIzLjEyMDgyNyAtMTQsMzA2IEMtMTQsMzA1LjI2NTI1OCAtMTMuOTczODc4NCwzMDQuNTMwNzQ4IC0xMy45MjE2ODQ4LDMwMy43OTc4NjIgTDUuNjYyODg0OTYsMjguNzk3ODYyMiBDNi44MTgzOTAzNiwxMi41NzI2NDA2IDIwLjMxODI1NDUsMS4wMDkzNTAxZS0xNCAzNi41ODQ1Njk3LDcuMTA1NDI3MzZlLTE1IEw3OS43Njk3NzI2LDIuNzczNDcwNjZlLTE0IFpcIiBpZD1cInNoYWRlXCIgZmlsbD1cIiM2NzAwMERcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgb3BhY2l0eT1cIjAuMDk2MTQ0OTAzM1wiIG1hc2s9XCJ1cmwoI21hc2stMilcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2stNFwiIGZpbGw9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjcGF0aC0zXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8L21hc2s+XHJcbiAgICAgICAgICAgICAgICA8dXNlIGlkPVwic2hpbmVcIiBmaWxsPVwiI0ZGRkZGRlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBvcGFjaXR5PVwiMC4xMTM0MjA3NTlcIiB4bGluazpocmVmPVwiI3BhdGgtM1wiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJnbGludFwiIG9wYWNpdHk9XCIwLjYwMDE0NDE1OVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzAuOTcxNzE5LCAzNC4xMDU0MTApIHJvdGF0ZSgtOTQuMDAwMDAwKSB0cmFuc2xhdGUoLTEzMC45NzE3MTksIC0zNC4xMDU0MTApIHRyYW5zbGF0ZSgxMTguOTcxNzE5LCAzMi4xMDU0MTApXCIgZmlsbD1cIiNGRkZGRkZcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgeD1cIjIwXCIgeT1cIjQuMjYzMjU2NDFlLTE0XCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGUtQ29weVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTcsMzM3IEw2NSwzMzcgTDY1LDE1NSBMNjUsMTUzIEM2NSwxNDQuMTYzNDQ0IDcyLjE2MzQ0NCwxMzcgODEsMTM3IEM4OS44MzY1NTYsMTM3IDk3LDE0NC4xNjM0NDQgOTcsMTUzIEw5NywxNTUgTDk3LDMzNyBaXCIgaWQ9XCJmcm96ZW5oYW5kbGVcIiBmaWxsPVwiI0E3NTYzQ1wiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBvcGFjaXR5PVwiMC4wNjE1MjM0Mzc1XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwic2hhcmVcIj5Zb3VyIGxvbGx5IGlzIGZyZWV6aW5nLiBTaGFyZSBpdCB3aXRoIHRoaXMgbGluazogPHByZT4ke2NmRGlzdERvbWFpbn0vbG9sbHkvJHtkYXRhLmlkfTwvcHJlPjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxwIGlkPVwicmVjaXBpZW50XCIgY2xhc3M9XCJyZWNpcGllbnRcIj4ke2RhdGEucmVjaXBpZW50TmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+JHtkYXRhLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGlkPVwiZnJvbVwiIGNsYXNzPVwiZnJvbVwiPuKAlCAke2RhdGEuc2VuZGVyc05hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImJ5dGhld2F5XCI+JHtkYXRhLnNlbmRlcnNOYW1lfSBtYWRlIHRoaXMgdmlydHVhbCBsb2xsaXBvcCBmb3IgeW91LiBZb3UgY2FuIDxhIGhyZWY9XCIvY3JlYXRlLW5ld1wiPm1ha2UgeW91ciBvd248L2E+IHRvIHNlbmQgdG8gYSBmcmllbmQgd2hvIGRlc2VydmVzIHNvbWUgc3VnYXJ5IHRyZWF0IHdoaWNoIHdvbid0IHJvdCB0aGVpciB0ZWV0aC4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBIb3N0ZWQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9jbG91ZGZyb250L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5BV1MgQ2xvdWRGcm9udDwvYT4gYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFyamVlbFNhZmRhci9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+TWlhbiBNdWhhbW1hZCBTaGFyamVlbCBTYWZkYXI8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgwqkgMjAyMSwgQnVpbHQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkdhdHNieTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9ib2R5PlxyXG48L2h0bWw+YDtcclxuIl19