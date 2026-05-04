export const getScrollCardsData = async () => {
  try {
    const res = await fetch('https://bangladeshi-restaurant-by-the-next.vercel.app/data.json', { 
     cache:'no-cache'
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return an empty array or null as a fallback
  }
};

