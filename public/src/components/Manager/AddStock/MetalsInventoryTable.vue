<template>
  <v-data-table
    :loading="$firestore.collectionsPending.stock"
    :headers="headers"
    :items="$firestore.stock.filter(x => x.type === 'Metals')"
    hide-actions class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.weight }}</td>
      <td>{{ props.item.type }}</td>
      <td>{{ props.item.comments }}</td>
      <td class="text-xs-center">{{ $moment(props.item.timestamp).format('hh:mm A') }}</td>
      <td class="text-xs-center">
        <v-btn icon @click="$router.push({ name: 'Edit Stock Form', params: { id: props.item.id }})">
          <v-icon size="17px" color="primary">fa-edit</v-icon>
        </v-btn>
      </td>
    </template>
    <template slot="footer">
      <td colspan="100%">
        <strong>Metals Total Today: {{ this.totalMetals }}</strong>
      </td>
    </template>
  </v-data-table>
</template>

<script>

export default {

  data () {
    return {
      loading: false,
      headers: [
        { text: 'Weight (kg)', align: 'center', sortable: true, value: 'weight' },
        { text: 'Type', align: 'left', sortable: true, value: 'type' },
        { text: 'Comments', align: 'left', sortable: false, value: 'comments' },
        { text: 'Time', align: 'center', sortable: true, value: 'timestamp' }
      ]
    }
  },
  created () {
    let stockWeights = []
    this.$firestore.stock.filter(x => x.type === 'Metals').map(item => stockWeights.push(parseInt(item.weight)))
    this.totalMetals = stockWeights.reduce((a, b) => a + b, 0)
    return this.totalMetals
  }
}
</script>

<style>
  thead {
    background: #e5ece9;
  }
</style>
