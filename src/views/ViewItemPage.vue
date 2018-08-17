<template>
  <div class="item-page">
    <div
      class="item-page__picture"
      :style="{ backgroundImage: `url(${item.picture})` }"
    ></div>
    <div class="flex flex-end item-page__buttons">
      <at-tooltip placement="bottom" content="Delete">
        <at-button @click="removeItem($route.params.id)" type="error" icon="icon-trash-2"></at-button>
      </at-tooltip>
      <at-tooltip placement="bottom" content="Edit">
        <router-link
          class="at-btn at-btn--info"
          tag="button"
          :to="`/update_items/edit/${$route.params.id}`"
        >
          <i class="at-btn__icon icon icon-edit-2"></i>
          Edit
        </router-link>
      </at-tooltip>
    </div>
    <title-page :title="item.title"/>
    <p class="item-page__description">{{ item.description }}</p>
  </div>
</template>

<script>
  import TitlePage from '@/components/TitlePage.vue'
  
  export default {
    components: { TitlePage },
    props: {
      items: Array
    },
    created () {
      this.item = this.items[this.$route.params.id]
    },
    data () {
      return {
        item: Object
      }
    },
    methods: {
      removeItem (index) {
        this.$Modal.confirm({
          title: 'Comfirm',
          content: 'Are you sure you want to delete?',
          okText: 'Delete',
          width: 250
        }).then(() => {
          this.$router.push('/update_items')
          this.$Notify.success({title: 'This item deleted'})
          this.items.splice(index, 1)
        }).catch(() => {})
      }
    }
  }
</script>
