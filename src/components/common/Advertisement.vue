<template>
  <div v-if="!is_adNever_in_cookie">
    <a :href="img_url">
      <v-img :src="img_src" alt="NotFound"></v-img>
    </a>
    <v-btn
      class="adNeverClose"
      @click="AdClose"
      absolute
      bottom
      right
      flat
      icon
    >
      <v-icon>close</v-icon>
    </v-btn>
    <span class="adNeverCloseCheckboxWrap">
      <input type="checkbox" v-model="adNever" id="adNeverCloseCheckbox">
      <label for="adNeverCloseCheckbox">오늘은 그만보기</label>
    </span>
  </div>
</template>

<style scoped lang="scss">
  .adNeverClose {
    top: 0;

    i {
      font-size: 20px;
    }
  }

  .adNeverCloseCheckboxWrap {
    position: absolute;
    bottom: 10px;
    right: 0;
  }

  #adNeverCloseCheckbox {
    font-size: 12px;

    + label[for] {
      font-size: 12px;
    }
  }
</style>

<script>
export default {
  data: () => ({
    img_url: 'http://www.happymoney.co.kr/svc/event/eventView.hm?eventInfoId=446&eventType=NORMAL&pageLink=event/m6001L.hm',
    img_src: 'http://image.happymoney.co.kr/extimage/banner/20180921130957.jpg',
    is_adNever_in_cookie: false,
    adNever: false
  }),
  methods: {
    AdClose: function() {
      this.setAdNeverFromCookie();
      this.is_adNever_in_cookie=true;
    },
    setAdNeverFromCookie: function() {
      this.$cookie.set('adNever', this.adNever);
    },
    getAdNeverFromCookie: function() {
      return this.$cookie.get('adNever');
    }
  },
  created() {
    var is_adNever_in_cookie = this.getAdNeverFromCookie()
    if (is_adNever_in_cookie !== null) {
      if (is_adNever_in_cookie == "false") {
        this.is_adNever_in_cookie = false;
      }else {
        this.is_adNever_in_cookie = true;
      }
    }
  }
}
</script>
