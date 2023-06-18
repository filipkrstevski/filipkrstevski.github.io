import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline; 
        box-sizing: border-box; 


    }
    :root{
      --uploadImageProgress:0%;
      --bannerAniStart:230px;
      --bannerAniEnd:0;
      --bannerBackgroundAniStart:26% 46%;
      --formatImageWidth:303px;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body{
      overflow-x: hidden;
    }
    .isUploaded{
      display:block !important;
    }
    .opened-menu {
      transform: translateX(-300px);
    }
    .no-scrolling{
      overflow-y:hidden;
    }
    .no-items{
      margin-top:-120px !important;
    }
    select {
              cursor: pointer;
              -webkit-appearance: button;
      -moz-appearance: button;
      -webkit-user-select: none;
      -moz-user-select: none;
      -webkit-padding-end: 20px;
      -moz-padding-end: 20px;
      -webkit-padding-start: 20px;
      -moz-padding-start: 20px;
      background-color: white;

      background-position: center right;
      background-repeat: no-repeat;
      border: 1px solid #d3d8e6;
      border-radius: 3px;
      color: #6f768a;
      margin: 0;
      overflow: hidden;
      padding-top: 20px;
      padding-bottom: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      ${(props) => props.theme.body_regular_16};
    }
    .slick-slide img{
      display:inline-block;
    }
`;

export default GlobalStyle;
