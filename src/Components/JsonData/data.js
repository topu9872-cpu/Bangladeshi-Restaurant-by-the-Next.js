export const getScrollCardsData = async () => {
  try {
    const res = await fetch('http://localhost:3000/data.json', { 
      cache: 'no-store' 
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return an empty array or null as a fallback
  }
};