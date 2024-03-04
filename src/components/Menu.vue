<template>
  <div class="menu-page">
    <div class="menu-header">
      <h2>Most Popular Items</h2>
      <div class="menu-categories">
        <div class="category">Popular Breakfast</div>
        <div class="category">Special Launch</div>
        <div class="category">Lovely Dinner</div>
      </div>
    </div>
    <div class="menu-items">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
        <div class="item-description">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <div class="item-price">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        // Contoh data, anda bisa mengganti dengan data yang diambil dari server
        { id: 1, name: 'Chicken Burger', description: 'Lorem ipsum dolor sit amet', price: '$15' },
        // Tambahkan lebih banyak item menu di sini
      ]
    };
  }
}
</script>

<style>
.menu-page {
  padding: 2rem;
}

.menu-header h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.menu-categories {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.category {
  padding: 0.5rem 1rem;
  background-color: #ffdd57; /* Warna latar kategori */
  border-radius: 20px; /* Bikin ujungnya bulat */
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.menu-item {
  border: 1px solid #ddd; /* Batas item */
  border-radius: 10px; /* Ujung bulat */
  width: calc(50% - 1rem); /* Lebar item */
  padding: 1rem;
  display: flex;
  justify-content: space-between; /* Atur space antara deskripsi dan harga */
}

.item-description h3 {
  margin: 0;
  color: #333; /* Warna teks */
}

.item-price {
  font-weight: bold;
  align-self: center; /* Tengahin harga secara vertikal */
}
</style>
