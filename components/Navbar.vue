<template>
    <nav class="menu-bar" style="position: sticky; top: 0px; z-index: 1;">
        <div class="logo" style="flex :1;">
            <a href="http://localhost:3000/">
                <img src="http://intellisys.co.kr/images/common/logo-black.png" style="padding-left: 40px; margin-top: 10px;" alt="logo">
            </a>
        </div>
        <ul class="menu-items" style="flex :3;">
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item" style="margin:auto">
            <a :href="item.link" style="font-weight: 700; font-size: 22px;">{{ item.name }}</a>
     
          </li>
        </ul>
        <div class="msbar" style="flex :1; margin: auto;">
          <a href="mailto:contact@intellisys.co.kr" style="margin-left: auto;">
            <i style="width 35px; height:40px; w"></i>
          </a>
          <button class="sidebar-btn" style="height: 40px;">
            <div class="sidebar-group">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: 'Company', link: '/Company' },
          { name: 'restory.i', link: '/Product2' },
          { name: 'I.P.S.', link: '/Product'},
          { name: 'AI FSS', link: '/Product3'},
          {name: 'AI voucher', link: '/AIb' },
          {name: 'Contact', link: '/Contact'}
        ],

      };
    },

  };
  </script>
  
  <style scoped>
    .logo{
    margin-right: 20px;
    }

    .logo img{
        max-height: 50px; 
        max-width: 100%;
    }



  .menu-bar {
    background-color: white;
    color: #fff;
    padding: 10px;
    display: flex;
    
  }
  
  .menu-items {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  
  .menu-item {
    margin: 0 10px;
    cursor: pointer;
  }

li a:link{
color : pink;
}

li a:visited {
  color : black;
}

li a:hover {
  color : gold;
}

li a:active {
  color : green;
}

@media (max-width: 1920px){
.msbar {
    height: 100%;
}}
.msbar{
    display: flex;
    float: right;
}

@media (max-width: 1920px){
.msbar a, .msbar button {
    width: 80px;
    height: 100%;
}}
.masbar a {
    background-color: #fff;
}
.msbar a, .msbar button {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-1px);
}
a {
    text-decoration: none;
    color: inherit;
}

.msbar a i {
    width: 40px;
    height: 20px;
    background: url(https://cdn.iconscout.com/icon/free/png-256/free-mail-1437261-1216865.png) no-repeat center / cover;
}

@media (max-width: 1920px){
.msbar a, .msbar button {
    width: 80px;
    height: 100%;
}}
.msbar button {
    background-color: #1f1247;
}
button{
  cursor:pointer;
}

.msbar .sidebar-group{
    width: 20px;
    height: 17px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

navbar .sidebar-group span {
    transition: 0.3s ease;
    transform-origin: left center;
}
.msbar button span {
    width: 20px;
    height: 3px;
    background-color: #fff;
}


  </style>