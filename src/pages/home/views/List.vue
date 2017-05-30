<template>
    <mainLayout backgroundColor="#f2f2f2">
        <navbar title="Weex's App"/>
        <product-card/>
        <tabbar/>
    </mainLayout>
</template>
<script>
  import mainLayout from '../../../include/mainLayout.vue';
  import navbar from '../../../include/navbar.vue';
  import tabbar from '../../../include/tabbar.vue';
  import productCard from '../../../components/productCard.vue';
  import Client from '../../../backend/Client';

  export default {
    components: {
      mainLayout,
      navbar,
      tabbar,
      productCard,
    },
    beforeCreate() {
      Client.getProductList()
          .then((resp) => {
            console.log(resp);
          })
          .catch((e) => {
            console.log(e);
//          this.error = e;
//          errorHandler.handle(e);
          });
    },
  };
</script>
<style></style>