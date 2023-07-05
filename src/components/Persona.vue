<template>
  <div class="grid grid-cols-1 gap-4 p-8 bg-white shadow rounded-md mb-16">
    <div class="flex flex-col">

      <div class="flex flex-col md:flex-row">
        <img v-if="imageUrl" :src="imageUrl" :alt="imageAlt" class="peep" />
        <div class="flex flex-col flex-wrap items-start h-full">
        <div class="flex items-center mt-2 text-4xl font-bold">
          <slot name="name"></slot>
        </div>
        <div class="flex items-center mt-2 text-xl">
          <i class="fas fa-birthday-cake mr-2"></i>
          <slot name="age"></slot>
        </div>
        <div class="flex items-center mt-2 text-xl">
          <i class="fas fa-map-marker-alt mr-2"></i>
          <slot name="location"></slot>
        </div>
      </div>
      </div>

      <div class="mt-8">
        <h4 class="font-bold ">Bio</h4>
        <slot name="bio"></slot>
      </div>
    </div>
    <div class="space-y-8">

      <div class="mt-8">
        <h4 class="font-bold ">Personality</h4>
        <slot name="personality"></slot>
      </div>
      <div class="mt-8">
        <h4 class="font-bold ">Goals</h4>
        <slot name="goals"></slot>
      </div>
      <div class="mt-8">
        <h4 class="font-bold ">Challenges</h4>
        <slot name="challenges"></slot>
      </div>
      <div class="mt-8">
        <h4 class="font-bold ">Desires</h4>
        <slot name="desires"></slot>
      </div>
      <div class="mt-8">
        <h4 class="font-bold ">Tech</h4>
        <slot name="tech"></slot>
      </div>
      <div class="mt-8">
        <h4 class="font-bold ">Expectations</h4>
        <slot name="expectations"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  name: 'UserPersona',
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.peep{
  width:100%;
  height:auto;
  @media(min-width:420px){
    max-width: 250px;
  }
  margin-top: -32px;
  margin-bottom: -24px;
  margin-right:24px;
}
</style>
