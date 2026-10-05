// Product categories
export const categories = [
  { id: "tops", name: "Polos y blusas", description: "Prendas superiores para uso diario" },
  { id: "bottoms", name: "Pantalones", description: "Jeans, chinos y basicos" },
  { id: "outerwear", name: "Abrigos", description: "Casacas y capas ligeras" },
  { id: "formal", name: "Formal", description: "Blazers y camisas" }
];

// Centralized product data
export const products = [
  {
    id: 1,
    name: "Polo Blanco Clasico",
    price: 89,
    category: "tops",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Polo esencial de cuello redondo confeccionado en algodon suave. Tiene un calce comodo y una estructura resistente para acompanar el uso diario.\n\nPerfecto para combinar con jeans, faldas o pantalones de vestir segun la ocasion.\n\nUna prenda basica, fresca y facil de llevar en el clima peruano.",
    material: "100% algodon",
    care: "Lavar a maquina con agua fria, secar a baja temperatura",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L", "XL"],
    stock: 50,
    sku: "CWT-001"
  },
  {
    id: 2,
    name: "Jean Slim Fit",
    price: 159,
    category: "bottoms",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Jean moderno de corte slim con elasticidad justa para moverte con comodidad. Incluye el clasico diseno de cinco bolsillos y un acabado limpio.\n\nEquilibra estilo y confort para looks casuales o semi formales.\n\nConfeccionado en denim resistente que mantiene su forma durante el dia.",
    material: "98% algodon, 2% elastano",
    care: "Lavar con agua fria y al reves",
    sizes: ["28", "30", "32", "34", "36"],
    availableSizes: ["30", "32", "34"],
    stock: 35,
    sku: "SFJ-002"
  },
  {
    id: 3,
    name: "Blazer Casual",
    price: 249,
    category: "formal",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Blazer versatil ideal para oficina, reuniones o salidas de noche. Tiene un calce moderno y detalles sutiles que elevan cualquier conjunto.\n\nConfeccionado con una tela ligera que aporta comodidad sin perder elegancia.\n\nIncluye forro interior y bolsillos funcionales.",
    material: "65% poliester, 35% algodon",
    care: "Lavado en seco",
    sizes: ["36", "38", "40", "42", "44"],
    availableSizes: ["38", "40", "42"],
    stock: 20,
    sku: "CBL-003"
  },
  {
    id: 4,
    name: "Chompa Tejida",
    price: 139,
    category: "tops",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Chompa tejida de cuello redondo, suave y abrigadora. Es perfecta para crear capas en dias frescos.\n\nSu textura mantiene el calor sin sentirse pesada y los acabados acanalados dan mejor ajuste.\n\nUn diseno atemporal que combina con prendas casuales o mas elegantes.",
    material: "80% lana, 20% poliamida",
    care: "Lavar a mano con agua fria y secar en plano",
    sizes: ["XS", "S", "M", "L", "XL"],
    availableSizes: ["S", "M", "L"],
    stock: 25,
    sku: "KSW-004"
  },
  {
    id: 5,
    name: "Pantalon Chino",
    price: 149,
    category: "bottoms",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    ],
    description: "Pantalon chino clasico de pierna recta. Funciona para looks relajados y tambien para ocasiones casual elegantes.\n\nTiene tiro medio, frente limpio y tela twill resistente que conserva su forma.\n\nIncluye bolsillos laterales y posteriores para mayor funcionalidad.",
    material: "98% algodon, 2% elastano",
    care: "Lavar a maquina con agua fria, secar a baja temperatura",
    sizes: ["28", "30", "32", "34", "36"],
    availableSizes: ["30", "32", "34", "36"],
    stock: 40,
    sku: "CHP-005"
  },
  {
    id: 8,
    name: "Casaca de Lana Andina",
    price: 289,
    category: "outerwear",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
    ],
    description: "Casaca abrigadora y durable inspirada en textiles andinos, con un estilo moderno para la ciudad.",
    material: "90% lana, 10% poliester",
    care: "Lavado en seco",
    sizes: ["S", "M", "L", "XL"],
    availableSizes: ["M", "L", "XL"],
    stock: 10,
    sku: "HWJ-008"
  }
];

// Helper function to get featured products (for homepage)
export const getFeaturedProducts = (count = 3) => {
  // Return the last few products for the homepage
  return products.slice(-count);
};

// Helper function to get new arrivals
export const getNewArrivals = (count = 3) => {
  // For now, we're using the same products as featured
  return getFeaturedProducts(count);
};

// Helper function to get a product by ID
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get all categories
export const getAllCategories = () => {
  return categories;
};
