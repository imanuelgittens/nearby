<template>
  <div id="root" class="wrapper">
    <div class="toolbar toolbar--material">
      <div class="toolbar__left toolbar--material__left">
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-menu"></i>
        </span>
      </div>
      <div class="toolbar__center toolbar--material__center">
        Title
      </div>
      <div class="toolbar__right toolbar--material__right">
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-search"></i>
        </span>
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-favorite"></i>
        </span>
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-more-vert"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .weex {
   font-size: 60px;
   text-align: center;
   color: #1B90F7;
  }
  .vue {
   font-size: 60px;
   text-align: center;
   margin-top: 30px;
   color: #41B883;
  }
</style>