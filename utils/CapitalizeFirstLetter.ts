export const capitalizeFirstLetter = (str: string | undefined): string => {
    // Handle case where str is undefined
    // To get rid of typescript error
    if (!str) return ''; 
  
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };