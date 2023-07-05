<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="flex justify-center items-center h-16 md:h-24 lg:h-32 rounded-full bg-3 text-center text-sm md:text-lg lg:text-xl"
      >
        {{ item }}
      </div>
    </div>
</template>

<script>
export default {
    name: 'WordGrid',
    data() {
        return {
            items: [
                "Resourceful",
                "Transparent",
                "Collaborative",
                "Friendly",
                "Inspirational",
                "Wholesome",
                "Straightforward",
                "Knowledgeable",
                "Committed - Driving change",
                "Dedicated",
                "Positive",
                "Adaptive",
                "Sincere",
                "Reassuring",
                "Inclusive",
                "Supportive",
                "Welcoming",
                "Empathetic",
                "Consistent",
                "Down to Earth",
                "Resilient",
            ],
        }
    },
};
</script>

<style scoped>
</style>
