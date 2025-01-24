// /app/shared/lib/utils.ts

// A simple utility function
export function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
  
  // A utility function to generate a random ID
  export function generateRandomId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
  
  // A utility function to capitalize the first letter of a string
  export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  