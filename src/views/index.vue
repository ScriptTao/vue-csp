<template>
  <el-container style="height: 100%">
    <el-header class="header_">
      <!--<p>马钢CSP加热炉</p>-->

      <el-col
        style="height: 100%;width: 180px ;background-color:#545c64" class="logobg">
        <img :src="logoUrl" alt="" style="display: block;width: 50%;  height: 110%; margin: 0 auto;">
      </el-col>
      <el-menu
        :default-active="activeIndexFs"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" style="margin-left: 180px;">
        <el-menu-item v-for="(first_nav,index) in menuData" @click="first(first_nav.child,index)" :index="index+''">
          <i v-bind:class="[first_nav.icon]"></i>
          <!--{{first_nav}}-->
          {{first_nav.name}}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container style="height: 100%">
      <el-aside style="width: 180px;height: 100%;background-color:#545c64">
        <el-row class="tac">
          <el-col>
            <el-menu
              :default-active="activeIndexSE"
              mode="vertical"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item v-for="(sItem,i) in menuSecond" :index="i+''" @click="goPage(sItem.path)">
                <i :class="[sItem.icon]"></i>
                <span slot="title">{{sItem.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        logoUrl: require('../assets/header_icon.png'),
        menuSecond:[],
        menuData: [
          {
            id: "0",
            name: "跟踪管理",
            icon: "el-icon-s-promotion",
            alias: "一级菜单",
            child: [
              {
                id: "00",
                name: "物料跟踪",
                icon: "el-icon-s-promotion",
                alias: "二级菜单",
                path:"animation"
              }
            ]
          },
          {
            id: 1,
            name: "模型管理",
            icon: "el-icon-document-copy",
            alias: "一级菜单",
            child: [
              {
                id: "10",
                name: "钢种物理模型",
                icon: "el-icon-document-copy",
                alias: "二级菜单",
                path:""
              },
              {
                id: "11",
                name: "化学元素模型",
                icon: "el-icon-document-copy",
                alias: "二级菜单",
                path:""
              }
            ]

          },
          {
            id: 2,
            name: "参数设定",
            icon: "el-icon-edit-outline",
            alias: "一级菜单",
            child: [
              {
                id: "21",
                name: "工厂参数设定",
                icon: "el-icon-edit-outline",
                alias: "二级菜单",
                path:""
              },
            ]

          },
          {
            id: 3,
            name: "报表管理",
            icon: "el-icon-document-delete",
            alias: "一级菜单",
            child: [
              {
                id: "30",
                name: "PDI数据管理",
                icon: "el-icon-s-fold",
                alias: "二级菜单",
                path:""
              },
              {
                id: "31",
                name: "PDO数据管理",
                icon: "el-icon-s-grid",
                alias: "二级菜单",
                path:""
              },
              {
                id: "32",
                name: "温度命中率管理",
                icon: "el-icon-s-data",
                alias: "二级菜单",
                path:""
              },
              {
                id: "33",
                name: "轧制计划查询",
                icon: "el-icon-s-marketing",
                alias: "二级菜单",
                path:""
              },{
                id: "34",
                name: "煤气用量查询",
                icon: "el-icon-tickets",
                alias: "二级菜单",
                path:""
              },{
                id: "35",
                name: "产品温度查询",
                icon: "el-icon-s-data",
                alias: "二级菜单",
                path:""
              },
            ]

          },
          {
            id: 4,
            name: "报警信息",
            icon: "el-icon-s-operation",
            alias: "一级菜单",
            child: [{
              id: "40",
              name: "报警信息查询",
              icon: "el-icon-s-operation",
              alias: "二级菜单",
              path:""
            },]
          },
        ],
        activeIndexFs: '0',
        activeIndexSE: '0',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      first: function (second,i) {
        this.menuSecond = second
      },
      goPage(name){
        this.$router.push({
          path:'/index/'+name
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .el-header {
    padding: 0px;
  }
  .el-menu{
    border-right: none;
  }
  .header_ {
    /*border: 1px solid red;*/

    span {
      color: green;
    }
  }
  .container .main aside .el-menu{
    height: 100%;
  }

</style>
