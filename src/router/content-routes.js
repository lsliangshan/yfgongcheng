export default {
  path: '/',
  name: 'home',
  meta: {
    label: 'Home',
    title: 'YF'
  },
  components: {
    HomeRouter: () =>
      import('../components/Home.vue')
  }
}
