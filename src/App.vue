<template>
<q-layout>

      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">

              <q-item 
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              @click="this.$router.push({name:menuItem.link})"
              >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>

              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />

            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view></router-view>
        </q-page>
      </q-page-container>
</q-layout>
</template>

<script>
import { ref } from 'vue'

const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true,
    link:"Home"
  },
  {
    icon: 'info',
    label: 'Sobre',
    separator: false,
    link:"Sobre"
  },

]

export default {
  name:"App",
  setup () {
    return {
      drawer: ref(false),
      menuList
    }
  }
}
</script>