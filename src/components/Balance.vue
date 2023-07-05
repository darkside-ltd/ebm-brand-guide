<template>
    <div>
        <div v-for="(slider, index) in sliders" :key="index" class="my-6 md:my-10 flex flex-col items-center"
            :aria-label="getAriaLabel(slider)">
            <div class="flex w-full justify-between mb-3">
                <div :class="slider.value < 50 ? 'text-indigo-600 text-lg' : 'text-gray-500'">{{ slider.labelStart }}</div>
                <div :class="slider.value > 50 ? 'text-indigo-600 text-lg' : 'text-gray-500'">{{ slider.labelEnd }}</div>
            </div>
            <div class="relative w-full h-1 bg-indigo-200 mx-6">
                <div class="absolute left-0 h-1 bg-indigo-200 rounded-full transition-all ease-in-out duration-200"
                    :style="`width: ${slider.value}%;`"></div>
                <div class="absolute h-4 w-4 bg-indigo-800 rounded-full -mt-1.5"
                    :style="`left: ${slider.value}%; transform: translateX(-50%);`"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BrandPersonalitySliders',
    data() {
        return {
            sliders: [
                { labelStart: 'Simple', labelEnd: 'Complex', value: 10 },
                { labelStart: 'Youthful', labelEnd: 'Established', value: 30 },
                { labelStart: 'Subtle', labelEnd: 'Bright', value: 80 },
                { labelStart: 'Classic', labelEnd: 'Contemporary', value: 78 },
                { labelStart: 'Friendly', labelEnd: 'Authoritative', value: 6 },
                { labelStart: 'Playful', labelEnd: 'Serious', value: 30 },
                { labelStart: 'Approachable', labelEnd: 'Elite', value: 1 },
                { labelStart: 'Casual', labelEnd: 'Elegant', value: 1 }
            ]
        }
    },
    methods: {
        getAriaLabel(slider) {
            const { labelStart, labelEnd, value } = slider;
            let text = '';
            if (value === 50) {
                text = `A balance of both ${labelStart} and ${labelEnd}.`;
            } else if (value === 0) {
                text = `100% ${labelStart}, not at all ${labelEnd}.`;
            } else if (value < 10) {
                text = `Significantly more ${labelStart} than ${labelEnd}.`;
            } else if (value < 30) {
                text = `A lot more ${labelStart} than ${labelEnd}.`;
            } else if (value < 40) {
                text = `More ${labelStart} than ${labelEnd}.`;
            } else if (value < 50) {
                text = `Slightly more ${labelStart} than ${labelEnd}.`;
            } else if (value < 60) {
                text = `Slightly more ${labelEnd} than ${labelStart}.`;
            } else if (value < 70) {
                text = `More ${labelEnd} than ${labelStart}.`;
            } else if (value < 90) {
                text = `A lot more ${labelEnd} than ${labelStart}.`;
            } else if (value < 100) {
                text = `Significantly more ${labelEnd} than ${labelStart}.`;
            } else {
                text = `100% ${labelEnd}, not at all ${labelStart}.`;
            }
            return text;
        },
    }

}
</script>

<style scoped></style>
  