<template>
    <div class="container">
        <div>
            <text>{{item.name}}</text>
            <text>{{item.company }}</text>
        </div>
    </div>
</template>
<script>

  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {
            name: {
              type: String,
              default: () => '',
            },
            company: {
              type: String,
              default: () => '',
            },
            image: {
              type: String,
              default: () => '',
            },
          };
        },
      },

    },
  };

</script>
<style scoped>
    .container {
       width:750px;
       background-color:#fff;
       height:160px;
       font-size:14px;
       display:flex;
       justify-content: center;
       margin-bottom: 24px;
       padding-left: 24px;
       padding-right: 24px;
    }
</style>