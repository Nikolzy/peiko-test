<template>
  <div id="app">
    <FetchButton :get-data="getData" title="Get data"/>
    <Loading v-if="isLoading"/>
    <div v-else>
      <Table v-if="tableData.length" :data="tableData"/>
      <div v-else>No data</div>
    </div>
  </div>
</template>

<script>
import { payload } from "@/mocData";
import simulateAsyncReq from "@/plugins/getDataFunc";
import { sortDataAsc } from "@/utils/helpers";
import Table from "@/components/Table";
import FetchButton from "@/components/FetchButton";

export default {
  name: 'App',
  components: { FetchButton, Table },
  data: () => ({
    tableData: [],
    isLoading: false,
    headers: {
      stocks: 'Stock',
      current: 'Current',
      change: 'Change'
    }
  }),
  methods: {
    async getData () {
      this.tableData = [];
      this.isLoading = true;
      try {
        this.refactorData(await simulateAsyncReq(payload));
      } catch (e) {
        console.error('Fetch failed...');
      } finally {
        this.isLoading = false;
      }
    },
    refactorData (response) {
      const length = response.stocks.length;
      const array = new Array(length).fill(null).map((el,i) => {
        const { stocks, start, current } = response;
        return ({ stocks: stocks[i], current: start[i], change: current[i] - start[i]})
      });
      this.tableData = sortDataAsc(array, 'stocks');
      this.tableData.unshift(this.headers);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
