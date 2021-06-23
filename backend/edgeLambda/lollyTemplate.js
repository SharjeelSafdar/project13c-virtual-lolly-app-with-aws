"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => `
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
          <p class="share">Your lolly is freezing. Share it with this link: <pre>https://d3jpcje5sd6l0u.cloudfront.net/lolly/${data.id}</pre></p>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9sbHlUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvbGx5VGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZSxDQUFDLElBQVcsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBaU1oQixJQUFJLENBQUMsUUFBUTs7O2dCQUdiLElBQUksQ0FBQyxXQUFXOzs7Z0JBR2hCLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrSEFrRCtGLElBQUksQ0FBQyxFQUFFOztrREFFcEYsSUFBSSxDQUFDLGFBQWE7Z0RBQ3BCLElBQUksQ0FBQyxPQUFPOzBDQUNsQixJQUFJLENBQUMsV0FBVzs7Z0NBRTFCLElBQUksQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7O1FBYXhDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2xseSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZGF0YTogTG9sbHkpID0+IGBcclxuPCFkb2N0eXBlIGh0bWw+XHJcbjxodG1sIGxhbmc9XCJlblwiPlxyXG4gIDxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCI+PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3N0eWxlcy5jc3NcIj5cclxuICAgIDxzdHlsZT5cclxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9WWVsbG93dGFpbCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICoge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTczZDk7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMmI7XHJcbiAgICAgIH1cclxuICAgICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYTczZDk7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMmI7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMmI7XHJcbiAgICAgICAgY29sb3I6ICNkYWRhZGI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tc2FucywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxMjEyYjtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICAgIH1cclxuICAgICAgaDEsXHJcbiAgICAgIGgyLFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBZZWxsb3d0YWlsLCBjdXJzaXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgxLnRpdGxlIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZhNzNkOSAwIDAgOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGgxLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgIGgxLnRpdGxlIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAjZmE3M2Q5IDAgMCAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAjZmE3M2Q5IDFweCAxcHggNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgIH1cclxuICAgICAgYTpsaW5rLFxyXG4gICAgICBhOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4OGNkZDtcclxuICAgICAgfVxyXG4gICAgICBhOmZvY3VzLFxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI2VlZTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWVlO1xyXG4gICAgICB9XHJcbiAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICBjb2xvcjogI2Y0YjFlNDtcclxuICAgICAgfVxyXG4gICAgICBmb290ZXIgYTpsaW5rLFxyXG4gICAgICBmb290ZXIgYTp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogI2VmZTJlYztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAjYjk1YWE1O1xyXG4gICAgICB9XHJcbiAgICAgIGZvb3RlciBhOmZvY3VzLFxyXG4gICAgICBmb290ZXIgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgIH1cclxuICAgICAgLmxvbGx5IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4ICMwMDApO1xyXG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEwcHggIzAwMCk7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgLmxvbGx5IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZ2lmdExvbGx5IHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgIH1cclxuICAgICAgLmZyb20sXHJcbiAgICAgIC5yZWNpcGllbnQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBZZWxsb3d0YWlsLCBjdXJzaXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAjMDAwIDAgMCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mcm9tIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICAgICAgfVxyXG4gICAgICAuYnl0aGV3YXkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgICAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNik7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgLmJ5dGhld2F5IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHByZSB7XHJcbiAgICAgICAgY29sb3I6ICNmYTczZDk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICMyMTIxMmI7XHJcbiAgICAgICAgc2Nyb2xsYmFyLWFycm93LWNvbG9yOiAjZmE3M2Q5O1xyXG4gICAgICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogIzAwMDtcclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAubG9sbHlUb3Age1xyXG4gICAgICAgIGZpbGw6ICR7ZGF0YS50b3BDb2xvcn07XHJcbiAgICAgIH1cclxuICAgICAgLmxvbGx5TWlkZGxlIHtcclxuICAgICAgICBmaWxsOiAke2RhdGEubWlkZGxlQ29sb3J9O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2xseUJvdHRvbSB7XHJcbiAgICAgICAgZmlsbDogJHtkYXRhLmJvdHRvbUNvbG9yfTtcclxuICAgICAgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi9nbG9iYWwuY3NzXCI+XHJcbiAgICA8dGl0bGU+RnJvemVuIExvbGx5IHwgVmlydHVhbCBMb2xseSBBcHA8L3RpdGxlPlxyXG4gIDwvaGVhZD5cclxuICA8Ym9keT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj52aXJ0dWFsIGxvbGxpcG9wPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzdWJ0aXRsZVwiPmJlY2F1c2Ugd2UgYWxsIGtub3cgc29tZW9uZTxicj53aG8gZGVzZXJ2ZXMgc29tZSBzdWdhci48L3A+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9sbHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lmdExvbGx5XCI+XHJcbiAgICAgICAgICA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cclxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJsb2xsaXBvcFwiIHdpZHRoPVwiMTYzcHhcIiBoZWlnaHQ9XCI0MzFweFwiIHZpZXdCb3g9XCIwIDAgMTYzIDQzMVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTAuNTg0NTY5NywxLjgwOTE5NDQ1ZS0xNCBMMTEyLjc1NzM4NCwzLjE5NzQ0MjMxZS0xNCBDMTI5LjA1ODk0OSwyLjg5Nzk4NzQxZS0xNCAxNDIuNTc1NDQ5LDEyLjYyNTQ1MTYgMTQzLjY4NTQzNywyOC44ODkxODMzIEwxNjIuNDUzOTgzLDMwMy44ODkxODMgQzE2My42MTk3NTQsMzIwLjk3MDI3NSAxNTAuNzE3ODM4LDMzNS43NjIyODEgMTMzLjYzNjc0NiwzMzYuOTI4MDUzIEMxMzIuOTM0MTYyLDMzNi45NzYwMDQgMTMyLjIzMDE0OCwzMzcgMTMxLjUyNTkzLDMzNyBMMzEsMzM3IEMxMy44NzkxNzI4LDMzNyAtMS41NjY2ODcxOGUtMTQsMzIzLjEyMDgyNyAtMS43NzYzNTY4NGUtMTQsMzA2IEMtMS43ODUzNTQ4M2UtMTQsMzA1LjI2NTI1OCAwLjAyNjEyMTU3MzYsMzA0LjUzMDc0OCAwLjA3ODMxNTIyNzYsMzAzLjc5Nzg2MiBMMTkuNjYyODg1LDI4Ljc5Nzg2MjIgQzIwLjgxODM5MDQsMTIuNTcyNjQwNiAzNC4zMTgyNTQ1LDEuMDA5MzUwMWUtMTQgNTAuNTg0NTY5Nyw3LjEwNTQyNzM2ZS0xNSBaXCIgaWQ9XCJwYXRoLTFcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk05OSwyLjg4NDgzODMyZS0xNCBMMTEzLDMuMTk3NDQyMzFlLTE0IEMxMjkuMzAxNTY2LDIuODk3OTg3NDFlLTE0IDE0Mi44MTgwNjUsMTIuNjI1NDUxNiAxNDMuOTI4MDUzLDI4Ljg4OTE4MzMgTDE2Mi42OTY1OTksMzAzLjg4OTE4MyBDMTYzLjg2MjM3MSwzMjAuOTcwMjc1IDE1MC45NjA0NTUsMzM1Ljc2MjI4MSAxMzMuODc5MzYzLDMzNi45MjgwNTMgQzEzMy4xNzY3NzksMzM2Ljk3NjAwNCAxMzIuNDcyNzY1LDMzNyAxMzEuNzY4NTQ2LDMzNyBMMTE3Ljc2ODU0NiwzMzcgQzExOC40NzI3NjUsMzM3IDExOS4xNzY3NzksMzM2Ljk3NjAwNCAxMTkuODc5MzYzLDMzNi45MjgwNTMgQzEzNi45NjA0NTUsMzM1Ljc2MjI4MSAxNDkuODYyMzcxLDMyMC45NzAyNzUgMTQ4LjY5NjU5OSwzMDMuODg5MTgzIEwxMjkuOTI4MDUzLDI4Ljg4OTE4MzMgQzEyOC44MTgwNjUsMTIuNjI1NDUxNiAxMTUuMzAxNTY2LDIuODk3OTg3NDFlLTE0IDk5LDMuMTk3NDQyMzFlLTE0IFpcIiBpZD1cInBhdGgtM1wiPjwvcGF0aD5cclxuICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICA8ZyBpZD1cIlBhZ2UtMlwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgPGcgaWQ9XCJMb2xseVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJoYW5kbGVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjUuMDAwMDAwLCAxMzcuMDAwMDAwKVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiBmaWxsPVwiI0MwNkM1MFwiIHg9XCIwXCIgeT1cIjJcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMjkyXCIgcng9XCIxNlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiBmaWxsPVwiI0UzQTI4RFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMjkyXCIgcng9XCIxNlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9XCJSZWN0YW5nbGUtQ29weS0zXCIgZmlsbC1vcGFjaXR5PVwiMC4xODE1ODQwMTNcIiBmaWxsPVwiIzhDMDA0MFwiIHBvaW50cz1cIjAgMjAwIDMyIDIwMCAzMiAyMTggMCAyMjMuODAxNTE1XCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPG1hc2sgaWQ9XCJtYXNrLTJcIiBmaWxsPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI3BhdGgtMVwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgPC9tYXNrPlxyXG4gICAgICAgICAgICAgICAgPHVzZSBjbGFzcz1cImxvbGx5Qm90dG9tXCIgZmlsbD1cIiNkZWFhNDNcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgeGxpbms6aHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibG9sbHlUb3BcIiBmaWxsPVwiI2Q1MjM1OFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBtYXNrPVwidXJsKCNtYXNrLTIpXCIgeD1cIi0yNVwiIHk9XCItOVwiIHdpZHRoPVwiMjI0XCIgaGVpZ2h0PVwiMTM0XCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJsb2xseU1pZGRsZVwiIGZpbGw9XCIjZTk1OTQ2XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIG1hc2s9XCJ1cmwoI21hc2stMilcIiB4PVwiLTI5XCIgeT1cIjExM1wiIHdpZHRoPVwiMjI0XCIgaGVpZ2h0PVwiMTExXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03OS43Njk3NzI2LDMuMTk3NDQyMzFlLTE0IEM2My40NjgyMDcsMi44OTc5ODc0MWUtMTQgNDkuOTUxNzA3NCwxMi42MjU0NTE2IDQ4Ljg0MTcxOTgsMjguODg5MTgzMyBMMzAuMDczMTczOCwzMDMuODg5MTgzIEMyOC45MDc0MDE5LDMyMC45NzAyNzUgNDEuODA5MzE4MSwzMzUuNzYyMjgxIDU4Ljg5MDQxLDMzNi45MjgwNTMgQzU5LjU5Mjk5NDEsMzM2Ljk3NjAwNCA2MC4yOTcwMDgxLDMzNyA2MS4wMDEyMjY2LDMzNyBMMTcsMzM3IEMtMC4xMjA4MjcyNDUsMzM3IC0xNCwzMjMuMTIwODI3IC0xNCwzMDYgQy0xNCwzMDUuMjY1MjU4IC0xMy45NzM4Nzg0LDMwNC41MzA3NDggLTEzLjkyMTY4NDgsMzAzLjc5Nzg2MiBMNS42NjI4ODQ5NiwyOC43OTc4NjIyIEM2LjgxODM5MDM2LDEyLjU3MjY0MDYgMjAuMzE4MjU0NSwxLjAwOTM1MDFlLTE0IDM2LjU4NDU2OTcsNy4xMDU0MjczNmUtMTUgTDc5Ljc2OTc3MjYsMi43NzM0NzA2NmUtMTQgWlwiIGlkPVwic2hhZGVcIiBmaWxsPVwiIzY3MDAwRFwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBvcGFjaXR5PVwiMC4wOTYxNDQ5MDMzXCIgbWFzaz1cInVybCgjbWFzay0yKVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzay00XCIgZmlsbD1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNwYXRoLTNcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgIDwvbWFzaz5cclxuICAgICAgICAgICAgICAgIDx1c2UgaWQ9XCJzaGluZVwiIGZpbGw9XCIjRkZGRkZGXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIG9wYWNpdHk9XCIwLjExMzQyMDc1OVwiIHhsaW5rOmhyZWY9XCIjcGF0aC0zXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICA8ZyBpZD1cImdsaW50XCIgb3BhY2l0eT1cIjAuNjAwMTQ0MTU5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMC45NzE3MTksIDM0LjEwNTQxMCkgcm90YXRlKC05NC4wMDAwMDApIHRyYW5zbGF0ZSgtMTMwLjk3MTcxOSwgLTM0LjEwNTQxMCkgdHJhbnNsYXRlKDExOC45NzE3MTksIDMyLjEwNTQxMClcIiBmaWxsPVwiI0ZGRkZGRlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cclxuICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJSZWN0YW5nbGVcIiB4PVwiMjBcIiB5PVwiNC4yNjMyNTY0MWUtMTRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZS1Db3B5XCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCI0XCIgcng9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk05NywzMzcgTDY1LDMzNyBMNjUsMTU1IEw2NSwxNTMgQzY1LDE0NC4xNjM0NDQgNzIuMTYzNDQ0LDEzNyA4MSwxMzcgQzg5LjgzNjU1NiwxMzcgOTcsMTQ0LjE2MzQ0NCA5NywxNTMgTDk3LDE1NSBMOTcsMzM3IFpcIiBpZD1cImZyb3plbmhhbmRsZVwiIGZpbGw9XCIjQTc1NjNDXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIG9wYWNpdHk9XCIwLjA2MTUyMzQzNzVcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzaGFyZVwiPllvdXIgbG9sbHkgaXMgZnJlZXppbmcuIFNoYXJlIGl0IHdpdGggdGhpcyBsaW5rOiA8cHJlPmh0dHBzOi8vZDNqcGNqZTVzZDZsMHUuY2xvdWRmcm9udC5uZXQvbG9sbHkvJHtkYXRhLmlkfTwvcHJlPjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxwIGlkPVwicmVjaXBpZW50XCIgY2xhc3M9XCJyZWNpcGllbnRcIj4ke2RhdGEucmVjaXBpZW50TmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+JHtkYXRhLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGlkPVwiZnJvbVwiIGNsYXNzPVwiZnJvbVwiPuKAlCAke2RhdGEuc2VuZGVyc05hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImJ5dGhld2F5XCI+JHtkYXRhLnNlbmRlcnNOYW1lfSBtYWRlIHRoaXMgdmlydHVhbCBsb2xsaXBvcCBmb3IgeW91LiBZb3UgY2FuIDxhIGhyZWY9XCIvY3JlYXRlLW5ld1wiPm1ha2UgeW91ciBvd248L2E+IHRvIHNlbmQgdG8gYSBmcmllbmQgd2hvIGRlc2VydmVzIHNvbWUgc3VnYXJ5IHRyZWF0IHdoaWNoIHdvbid0IHJvdCB0aGVpciB0ZWV0aC4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBIb3N0ZWQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9jbG91ZGZyb250L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5BV1MgQ2xvdWRGcm9udDwvYT4gYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFyamVlbFNhZmRhci9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+TWlhbiBNdWhhbW1hZCBTaGFyamVlbCBTYWZkYXI8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgwqkgMjAyMSwgQnVpbHQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2F0c2J5anMuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkdhdHNieTwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9ib2R5PlxyXG48L2h0bWw+YDtcclxuIl19