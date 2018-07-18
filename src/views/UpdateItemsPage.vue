<template>
  <div>
    <div class="container flex flex-between header-page" v-if="isActiveItemForm">
      <title-page title="Update items"/>
      <router-link class="at-btn at-btn--info" tag="button" to="/update_items/new">
        <i class="at-btn__icon icon icon-plus"></i>
        <span class="at-btn__text">Add item</span>
      </router-link>
    </div>
    <router-view :items="items"/>
    <div class="container" v-if="isActiveItemForm">
      <div class="row flex flex-top">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="col-xs-24 col-md-12 col-lg-8"
        >
          <at-card :no-hover="true" :body-style="{ padding: 0 }" :bordered="false">
            <div
              class="at-card__img"
              :style="{ backgroundImage: `url(${item.picture})` }"
            ></div>
            <div class="at-card__body">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
            <div class="at-card__setting flex flex-between">
              <div class="at-card__body setting-buttons">
                <at-tooltip placement="bottom" content="Delete">
                  <at-button @click="removeItem(index)" type="error" icon="icon-trash-2" circle></at-button>
                </at-tooltip>
                <at-tooltip placement="bottom" content="Edit">
                  <router-link
                    class="at-btn at-btn--info at-btn--circle"
                    tag="button"
                    :to="`/update_items/edit/${index}`">
                    <i class="at-btn__icon icon icon-edit-2"></i>
                  </router-link>
                </at-tooltip>
              </div>
              <div class="at-card__body view-button">
                <at-button type="info" size="large">View</at-button>
              </div>
            </div>
          </at-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TitlePage from '@/components/TitlePage.vue'
  
  export default {
    components: { TitlePage },
    data () {
      return {
        items: [
          {
            title: 'Example title #1',
            description: 'Lorem description lorem',
            picture: 'http://via.placeholder.com/250x150'
          }
        ]
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
          this.$Notify.success({title: 'This item deleted'})
          this.items.splice(index, 1)
        }).catch(() => {})
      }
    },
    computed: {
      isActiveItemForm () {
        return this.$route.name === 'UpdateItemsPage'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-page {
    margin-bottom: 20px;
  }
</style>