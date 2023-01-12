import css from 'styled-jsx/css';

export default css.global`
body {
  font-size: 100%;
  font-weight: 400;
  margin: auto;
}
article,
aside,
figure,
footer,
header,
nav,
section {
  display: block;
}

article,
aside,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
nav,
ol,
p,
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #111;
}

a img {
  border: none;
}

.lkfleft {
  float: left;
}

.lkfright {
  float: right;
  display: inline !important;
}

.clearfix {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

.container {
  margin: auto;
  position: relative;
  max-width: 1244px;
}

.dflex {
  display: flex;
}

.justify-space-betwwen {
  justify-content: space-between;
}

.flex-wrap {
  flex-wrap: wrap;
}

.align-items-center {
  align-items: center;
}

* {
  box-sizing: border-box;
}

a:hover {
  color: #e1261d;
}

.vsp10 {
  padding-top: 10px;
}
.hmlft {
  width: 74.5%;
}
.fleft {
  float: left;
}
.hmrgt {
  width: 25.5%;
  position: relative;
  z-index: 1;
}
.fright {
  float: right;
}
.sponser-ad {
  padding: 0;
  margin: 0;
}
.budget_container {
  margin-bottom: 15px;
}
`;
