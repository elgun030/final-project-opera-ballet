import { create } from "zustand";

export const cartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [], // LocalStorage'dan sepeti al
  userId: null, // Kullanıcı ID'si

  // Kullanıcı ID'sini ayarlamak için fonksiyon
  setUserId: (userId) => set({ userId }),

  // Sepeti ayarlamak için fonksiyon
  setCart: (cart) => set({ cart }),

  // Sepete yeni ürün eklemek için fonksiyon
  addToCart: async (newItem) => {
    try {
      const response = await fetch("http://localhost:8000/baskets/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            "An error occurred while adding a product to the cart."
        );
      }

      const data = await response.json();

      set((state) => {
        const existingItem = state.cart.find(
          (item) =>
            item.productId ===
            data.data.items[data.data.items.length - 1].productId
        );

        let updatedCart;
        if (existingItem) {
          updatedCart = state.cart.map((item) =>
            item.productId === existingItem.productId
              ? {
                  ...item,
                  quantity:
                    item.quantity +
                    data.data.items[data.data.items.length - 1].quantity,
                }
              : item
          );
        } else {
          updatedCart = [
            ...state.cart,
            data.data.items[data.data.items.length - 1],
          ];
        }

        // Sepeti localStorage'a kaydet
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return { cart: updatedCart };
      });
    } catch (error) {
      console.error("Error while adding product to cart:", error.message);
    }
  },

  // Sepet öğesinin miktarını güncelleme fonksiyonu
  updateCartItem: async (productId, quantity) => {
    const userId = localStorage.getItem("userId");
    try {
      if (quantity <= 0) {
        await cartStore.getState().deleteCartItem(productId);
        return;
      }

      const response = await fetch("http://localhost:8000/baskets/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId, quantity }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error updating cart item");
      }

      const data = await response.json();

      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        );
        // Sepeti güncelle ve localStorage'a kaydet
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    } catch (error) {
      console.error("Error while updating cart item:", error.message);
    }
  },

  // Sepet öğesini silme fonksiyonu
  deleteCartItem: async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/baskets/${localStorage.getItem(
          "userId"
        )}/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error deleting cart item");
      }

      const data = await response.json();
      console.log("Cart item deleted:", data);

      set((state) => {
        const updatedCart = state.cart.filter(
          (item) => item.productId !== productId
        );
        // LocalStorage'dan da sepet öğesini sil
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    } catch (error) {
      console.error("Error while deleting cart item:", error.message);
    }
  },

  // Sepetteki öğelerin toplam miktarını hesaplayan fonksiyon
  getTotalItems: () => {
    const state = cartStore.getState();
    if (Array.isArray(state.cart)) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    }
    return 0;
  },

  // Kullanıcının sepetini fetch etme fonksiyonu
  cartFetch: async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/baskets/${userId}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error while getting cart data: ${errorText}`);
      }

      const data = await response.json();

      if (Array.isArray(data.data.items)) {
        set({ cart: data.data.items });
        // Yeni veriyi localStorage'a kaydet
        localStorage.setItem("cart", JSON.stringify(data.data.items));
      } else {
        set({ cart: [] });
        localStorage.setItem("cart", JSON.stringify([]));
      }
    } catch (error) {
      console.error("Error while getting cart data:", error.message);
    }
  },

  // Sepeti temizleme fonksiyonu
  clearCart: async () => {
    try {
      const userId = cartStore.getState().userId;
      if (userId) {
        const response = await fetch(
          `http://localhost:8000/baskets/clear/${userId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error clearing the cart");
        }

        console.log("Cart cleared successfully");
      }

      // State'i sıfırla ve localStorage'ı temizle
      set({ cart: [] });
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error while clearing the cart:", error.message);
    }
  },
}));
