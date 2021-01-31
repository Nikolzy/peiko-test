<template>
  <div class="table">
    <div v-for="(item,i) in data" :key="item.stocks" class="table__row">
      <div class="table__col" v-html="item.stocks"></div>
      <div class="table__col" v-html="calcTableCeil(item.current,i)"></div>
      <div class="table__col" v-html="calcTableCeil(item.change,i,'change')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: Array
  },
  methods: {
    calcTableCeil (value, index, isChange) {
      if (isChange) {
        const settings = this.createSettings(value,index);
        return this.createChangeCeil(value,index,settings);
      }
      return index ? value.toFixed(2) : value;
    },
    createChangeCeil (value,index,settings) {
      const { text, color, sign } = settings;
      return `<span style="color: ${color}">${sign}${text}</span>`
    },
    createSettings (value,index) {
      const text = index ? value.toFixed(2) : value;
      const color = index
          ? value >= 0
              ? 'green' : 'red'
          : 'black';
      const sign = value >= 0 ? '+' : '';
      return { text, color, sign };
    }
  }
}
</script>

<style scoped lang="scss">
.table {
  max-width: 300px;
  margin: 0 auto;
  &__row {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    border: 1px solid lightgray;
    border-bottom: none;

    &:first-child {
      background-color: #f1eeee;
      font-weight: bold;
    }

    &:last-child {
      border-bottom: 1px solid lightgray;
    }
  }
  &__col {
    display: flex;
    flex-basis: 30%;
    &:nth-child(2) {
      justify-content: center;
    }
    &:last-child {
      justify-content: flex-end;
    }
  }
}
</style>