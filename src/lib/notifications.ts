import { sileo } from 'sileo'

/**
 * Custom notification hook for type-safe toast notifications
 * Provides consistent notification patterns across the app
 */
export const useNotifications = () => {
  return {
    // Product notifications
    productCreated: (productName: string) => {
      sileo.success({
        title: 'Product Created',
        description: `${productName} has been added to your catalog and is now available for purchase`,
        position: 'top-right',
      })
    },

    // Cart notifications
    addedToCart: (productName: string, quantity: number = 1) => {
      sileo.success({
        title: 'Added to Cart',
        description: `${quantity > 1 ? `${quantity}x ` : ''}${productName} ${quantity > 1 ? 'have' : 'has'} been added to your shopping cart`,
        position: 'top-right',
      })
    },

    removedFromCart: (productName: string) => {
      sileo.info({
        title: 'Item Removed',
        description: `${productName} has been removed from your cart`,
        position: 'top-right',
      })
    },

    cartCleared: () => {
      sileo.info({
        title: 'Cart Cleared',
        description: 'All items have been removed from your shopping cart',
        position: 'top-right',
      })
    },

    quantityUpdated: (productName: string, quantity: number) => {
      sileo.info({
        title: 'Quantity Updated',
        description: `${productName} quantity has been updated to ${quantity}`,
        position: 'top-right',
      })
    },

    // Error notifications
    error: (message: string, description?: string) => {
      sileo.error({
        title: message,
        description:
          description ||
          'Please try again or contact support if the problem persists',
        position: 'top-right',
      })
    },

    // Generic notifications
    success: (message: string, description?: string) => {
      sileo.success({
        title: message,
        description: description || 'Your action was completed successfully',
        position: 'top-right',
      })
    },

    info: (message: string, description?: string) => {
      sileo.info({
        title: message,
        description,
        position: 'top-right',
      })
    },

    warning: (message: string, description?: string) => {
      sileo.warning({
        title: message,
        description,
        position: 'top-right',
      })
    },
  }
}

// Export sileo for direct usage when needed
export { sileo }
