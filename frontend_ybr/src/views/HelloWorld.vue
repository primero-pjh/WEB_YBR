<template>
  <div>
    <p>
      안녕 {{ $store.state.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
