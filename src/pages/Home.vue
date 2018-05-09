<template>
  <div>
    <announcement></announcement>
    <schedule></schedule>
  </div>
</template>

<script>
import Schedule from '../components/Schedule'
import Announcement from '../components/Announcement'

export default {
  components: {
    Schedule,
    Announcement
  }
}
</script>