<template>
    <nav class="menu-bar">
        <div class="logo">
            <a href="http://localhost:3000/">
                <img src="http://intellisys.co.kr/images/common/logo-black.png" alt="logo">
            </a>
        </div>
      <ul class="menu-items">
        <li v-for="(item, index) in menuItems" :key="index" class="menu-item">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: 'Company', link: '/Company' },
          { name: 'Product', link: '/Product' },
          { name: 'AI 바우처', link: '/AIb' },
          { name: 'Blog', link: '/Blog' },
          {name: 'Contact', link: '/contact'  }
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
    background-color: #333;
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
  color : red;
}

li a:active {
  color : green;
}


  </style>