<template>
  <div>
    <title-page title="Item form"/>
    <form class="container" action="">
      <div class="row">
        <div class="col-xs-24 col-md-24 col-lg-24">
          <at-input
            size="large"
            v-model="item.title"
            placeholder="Title"
          />
        </div>
        <div class="col-xs-24 col-md-24 col-lg-24">
          <at-textarea
            v-model="item.description"
            placeholder="Description"
          />
        </div>
        <div class="col-xs-24 col-md-24 col-lg-24">
          <at-input
            size="large"
            v-model="item.picture"
            placeholder="Picture"
            icon="link"
          />
        </div>
        <div class="col-xs-24 col-md-24 col-lg-24 flex-between flex">
          <at-button
            @click="$router.back()"
            type="primary"
            icon="icon-arrow-left"
          >
            Back
          </at-button>
          <template v-if="isEditItem">
            <at-button
              type="success"
              icon="icon-save"
              @click="saveItem"
            >
              Save item
            </at-button>
          </template>
          <template v-else>
            <at-button
              type="success"
              icon="icon-plus"
              @click="addItem"
            >
              Add item
            </at-button>
          </template>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import TitlePage from '@/components/TitlePage.vue'

  export default {
    props: {
      items: Array
    },
    created () {
      if (this.isEditItem) {
        const editItem = this.items[this.$route.params.id]
        this.item.title = editItem.title
        this.item.description = editItem.description
        this.item.picture = editItem.picture
      }
    },
    components: { TitlePage },
    data () {
      return {
        item: {
          picture: 'http://via.placeholder.com/350x150'
        }
      }
    },
    methods: {
      addItem () {
        if (this.isFieldInFormNull) {
          this.$Notify.error({title: 'Field is null'})
          return
        }
        this.items.push(this.item)
        this.$Notify.success({title: 'This item added'})
        this.$router.back()
      },
      saveItem () {
        if (this.isFieldInFormNull) {
          this.$Notify.error({title: 'Field is null'})
          return
        }
        this.items[this.$route.params.id] = this.item
        this.$Notify.success({title: 'This item edited'})
        this.$router.back()
      }
    },
    computed: {
      isEditItem () {
        return !!this.$route.params.id
      },
      isFieldInFormNull () {
        if (
          !this.item.title ||
          !this.item.description ||
          !this.item.picture
        ) return true
        return false
      }
    }
  }
</script>

<style scoped>

</style>