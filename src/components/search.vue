<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    }
}
</script>
<template>
    <div class="input-group mb-5 w-50 mx-auto">
        <input type="text" class="form-control search " :value="modelValue" @input="updateModelValue" @keyup.enter="submit"
            placeholder="Tìm kiếm sản phẩm">
        <div class="input-group-append">
            <button class="btn btn-light border border-left-0 px-3" type="submit" @click="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</template>
<style scoped>
.search{
    border-radius: 5px;
}
</style>